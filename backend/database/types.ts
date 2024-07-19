import { InferSelectModel } from "drizzle-orm";
import { users } from "./schema";

export type UserType = InferSelectModel<typeof users>;

export type FormType = {
  id: number;
  userId: string;
  title: string;
  description: string | null;
  content: string | null;
  visits: number | null;
  submissions: number | null;
  url: string | null;
  published: boolean | null;
  createdAt: Date | null;
};
