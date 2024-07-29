"use server";

import { db } from "@/backend/database";
import { formSubmissions, forms } from "@/backend/database/schema";
import { getAuthUser } from "@/backend/utilities/utils";
import { FORM_PER_PAGE } from "@/global/constants/constants";
import { calculatePercentageChange, fillMissingDays } from "@/lib/utils";
import { formSchema, formSchemaType } from "@/schemas/form-schema";
import { differenceInDays, parse, subDays } from "date-fns";
import { and, desc, eq, gte, ilike, lte, sql, sum } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { v4 as uuidv4 } from "uuid";

export const getKpisAction = async () => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [stats] = await db
    .select({
      totalForms: sql`count(*)`.mapWith(Number),
      totalVisits: sql`sum(visits)`.mapWith(Number),
      totalSubmissions: sql`sum(submissions)`.mapWith(Number),
    })
    .from(forms)
    .where(eq(forms.userId, user.id));

  const totalForms = stats.totalForms || 0;
  const totalVisits = stats.totalVisits || 0;
  const totalSubmissions = stats.totalSubmissions || 0;

  let submissionRate = 0;

  if (totalVisits > 0) {
    submissionRate = (totalSubmissions / totalVisits) * 100;
  }

  let bounceRate = 0;
  if (totalVisits > 0) {
    bounceRate = 100 - submissionRate;
  }

  return {
    totalForms,
    totalVisits,
    totalSubmissions,
    submissionRate,
    bounceRate,
  };
};

export const getOverviewStatsAction = async (from?: string, to?: string) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const defaultTo = new Date();
  const defaultFrom = subDays(defaultTo, 7);

  const startDate = from ? parse(from, "yyyy-MM-dd", new Date()) : defaultFrom;
  const endDate = to ? parse(to, "yyyy-MM-dd", new Date()) : defaultTo;

  const periodLength = differenceInDays(endDate, startDate) + 1;
  const lastPeriodStart = subDays(startDate, periodLength);
  const lastPeriodEnd = subDays(endDate, periodLength);

  async function fetchOverviewData(startDate: Date, endDate: Date) {
    if (!user) {
      throw new Error("User not found");
    }
    return await db
      .select({
        totalForm: sum(forms.id).mapWith(Number),
        totalVisits: sum(forms.visits).mapWith(Number),
        totalSubmissions: sum(forms.submissions).mapWith(Number),
      })
      .from(forms)
      .where(
        and(
          eq(forms.userId, user.id),
          gte(forms.createdAt, startDate),
          lte(forms.createdAt, endDate)
        )
      );
  }

  const [currentPeriodData] = await fetchOverviewData(startDate, endDate);
  const [lastPeriodData] = await fetchOverviewData(
    lastPeriodStart,
    lastPeriodEnd
  );

  const visitsChange = calculatePercentageChange(
    currentPeriodData.totalVisits || 0,
    lastPeriodData.totalVisits || 0
  );

  const submissionsChange = calculatePercentageChange(
    currentPeriodData.totalSubmissions || 0,
    lastPeriodData.totalSubmissions || 0
  );

  const topForms = await db
    .select({
      id: forms.id,
      title: forms.title,
      visits: forms.visits,
      submissions: forms.submissions,
    })
    .from(forms)
    .where(eq(forms.userId, user.id))
    .groupBy(forms.id, forms.title, forms.visits, forms.submissions)
    .orderBy(desc(forms.submissions));

  const mostFormWithSubmissions = topForms.slice(0, 4);
  const otherForms = topForms.slice(4);

  const otherSum = otherForms.reduce(
    (sum, current) => sum + current.submissions!,
    0
  );
  const finalForms = mostFormWithSubmissions;
  if (otherForms.length > 0) {
    finalForms.push({
      id: 0,
      title: "Others",
      visits: otherForms.reduce((sum, current) => sum + current.visits!, 0),
      submissions: otherSum,
    });
  }

  let submissionRate = 0;
  if (currentPeriodData.totalVisits > 0) {
    submissionRate =
      (currentPeriodData.totalSubmissions / currentPeriodData.totalVisits) *
      100;
  }

  let bounceRate = 0;
  if (currentPeriodData.totalVisits > 0) {
    bounceRate = 100 - submissionRate;
  }

  const activeDays = (await db
    .select({
      date: forms.createdAt,
      submissions: forms.submissions,
      visits: forms.visits,
    })
    .from(forms)
    .where(
      and(
        eq(forms.userId, user.id),
        gte(forms.createdAt, startDate),
        lte(forms.createdAt, endDate)
      )
    )
    .groupBy(forms.createdAt, forms.submissions, forms.visits)
    .orderBy(forms.createdAt)) as {
    date: Date;
    submissions: number;
    visits: number;
  }[];

  const days = fillMissingDays(activeDays, startDate, endDate);

  // Convert submissionRate and bounceRate to a chart data based on days
  const rate = days.map((day) => {
    let submissionRate = 0;
    if (day.visits > 0) {
      submissionRate = (day.submissions / day.visits) * 100;
    }
    let bounceRate = 0;
    if (day.visits > 0) {
      bounceRate = 100 - submissionRate;
    }

    return {
      date: day.date,
      submissions: day.submissions,
      visits: day.visits,
      submissionRate,
      bounceRate,
    };
  });

  return JSON.parse(
    JSON.stringify({
      visitsChange,
      visits: currentPeriodData.totalVisits,
      submissionsChange,
      submissions: currentPeriodData.totalSubmissions,
      topForms: finalForms,
      days,
      rate,
    })
  );
};
