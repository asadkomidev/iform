import { InferSelectModel } from "drizzle-orm";
import { users } from "./schema";

export type UserType = InferSelectModel<typeof users>;
