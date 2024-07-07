import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./backend/database/schema.ts",
  out: "./backend/database/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
