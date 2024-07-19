"use server";

import { db } from "@/backend/database";
import { formSubmissions, forms } from "@/backend/database/schema";
import { FormType } from "@/backend/database/types";
import { getAuthUser } from "@/backend/utilities/utils";
import { FORM_PER_PAGE } from "@/global/constants/constants";
import { generateRandomID } from "@/lib/utils";
import { formSchema, formSchemaType } from "@/modules/common/schema";
import { and, desc, eq, ilike, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { v4 as uuidv4 } from "uuid";

export const getStatsAction = async () => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [stats] = await db
    .select({
      visits: sql`sum(visits)`.mapWith(Number),
      submissions: sql`sum(submissions)`.mapWith(Number),
    })
    .from(forms)
    .where(eq(forms.userId, user.id));

  const visits = stats.visits || 0;
  const submissions = stats.submissions || 0;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  let bounceRate = 0;
  if (visits > 0) {
    bounceRate = 100 - submissionRate;
  }

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
};

export const getFormStatsAction = async (id: string) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [stats] = await db
    .select({
      visits: sql`sum(visits)`.mapWith(Number),
      submissions: sql`sum(submissions)`.mapWith(Number),
    })
    .from(forms)
    .where(and(eq(forms.userId, user.id), eq(forms.id, Number(id))));

  const visits = stats.visits || 0;
  const submissions = stats.submissions || 0;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  let bounceRate = 0;
  if (visits > 0) {
    bounceRate = 100 - submissionRate;
  }

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
};

export const updateTitleAction = async (id: number, title: string) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [response] = await db
    .update(forms)
    .set({ title })
    .where(and(eq(forms.id, id), eq(forms.userId, user.id)))
    .returning();

  revalidatePath(`/forms/[${id}]`, "page");
  return response;
};

export const updateDescriptionAction = async (
  id: number,
  description: string
) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [response] = await db
    .update(forms)
    .set({ description })
    .where(and(eq(forms.id, id), eq(forms.userId, user.id)))
    .returning();

  revalidatePath(`/forms/[${id}]`, "page");
  return response;
};

export const createFormAction = async (data: formSchemaType) => {
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error("Invalid form data");
  }

  const { user } = await getAuthUser();
  if (!user) {
    throw new Error("User not found");
  }

  const [form] = await db
    .insert(forms)
    .values({
      userId: user.id,
      title: data.title,
      description: data.description,
      url: uuidv4(),
    })
    .returning();

  revalidatePath("/forms");

  return form;
};

export const getFormsAction = async (search: string, page: number) => {
  const { user } = await getAuthUser();
  if (!user) {
    throw new Error("User not found");
  }

  const condition = search
    ? and(eq(forms.userId, user.id), ilike(forms.title, `%${search}%`))
    : eq(forms.userId, user.id);

  const formList = await db
    .select()
    .from(forms)
    .where(condition)
    .limit(FORM_PER_PAGE)
    .offset((page - 1) * FORM_PER_PAGE)
    .orderBy(desc(forms.createdAt));

  const [total] = await db
    .select({
      count: sql`count(*)`.mapWith(Number).as("count"),
    })
    .from(forms)
    .where(condition);

  return { formList, total: total.count, perPage: FORM_PER_PAGE };
};

export const getFormAction = async (id: string) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [form] = await db
    .select()
    .from(forms)
    .where(and(eq(forms.userId, user.id), eq(forms.id, Number(id))));

  return form;
};

export const updateFormAction = async (id: number, data: string) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [response] = await db
    .update(forms)
    .set({ content: data })
    .where(and(eq(forms.id, id), eq(forms.userId, user.id)))
    .returning();

  return response;
};

export const publishFormAction = async (id: number) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [response] = await db
    .update(forms)
    .set({ published: true })
    .where(and(eq(forms.id, id), eq(forms.userId, user.id)))
    .returning();

  return response;
};

export const getFormByURLAction = async (url: string) => {
  await db
    .update(forms)
    .set({ visits: sql`${forms.visits} + 1` })
    .where(eq(forms.url, url));

  const [form] = await db.select().from(forms).where(eq(forms.url, url));

  revalidatePath(`/forms/[${form.id}]`, "page");
  return form;
};

export const submitFormAction = async (url: string, content: string) => {
  const [form] = await db
    .select()
    .from(forms)
    .where(and(eq(forms.url, url), eq(forms.published, true)));

  if (!form) {
    throw new Error("Form not found");
  }

  await db
    .insert(formSubmissions)
    .values({ formId: form.id, content })
    .returning();

  await db
    .update(forms)
    .set({ submissions: sql`${forms.submissions} + 1` })
    .where(eq(forms.id, form.id))
    .returning();

  return form;
};

export const getFormWithSubmissionsAction = async (id: number) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  const [form] = await db
    .select()
    .from(forms)
    .where(and(eq(forms.userId, user.id), eq(forms.id, id)));

  if (!form) {
    throw new Error("Form not found");
  }

  const submissions = await db
    .select()
    .from(formSubmissions)
    .where(eq(formSubmissions.formId, form.id));

  return { form, submissions };
};

export const deleteFormAction = async (id: number) => {
  const { user } = await getAuthUser();

  if (!user) {
    throw new Error("User not found");
  }

  await db
    .delete(forms)
    .where(and(eq(forms.id, id), eq(forms.userId, user.id)));

  revalidatePath("/forms");
  return true;
};
