import { relations, sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { on } from "events";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name"),
  email: text("email").notNull().unique(),
});

export const forms = pgTable("forms", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.userId, {
      onDelete: "cascade",
    }),
  title: text("title").notNull(),
  description: text("description"),
  content: text("content").default("[]"),
  visits: integer("visits").default(0),
  submissions: integer("submissions").default(0),
  url: text("url"),
  published: boolean("published").default(false),

  createdAt: timestamp("created_at").default(sql`now()`),
});

// export const formsRelations = relations(forms, ({ many }) => ({
//   formSubmissions: many(formSubmissions),
// }));

export const formSubmissions = pgTable("form_submissions", {
  id: serial("id").primaryKey(),
  formId: integer("form_id")
    .notNull()
    .references(() => forms.id, {
      onDelete: "cascade",
    }),
  content: text("content"),
  createdAt: timestamp("created_at").default(sql`now()`),
});
