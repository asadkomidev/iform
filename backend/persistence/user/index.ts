import { eq } from "drizzle-orm";
import { db } from "../../database";
import { users } from "../../database/schema";
import { UserType } from "../../database/types";

export const createUser = async (values: Omit<UserType, "id">) => {
  const [data] = await db
    .insert(users)
    .values(values)
    .returning({ userId: users.id });

  return data;
};

export const updateUser = async (values: Partial<UserType>, id: string) => {
  const [data] = await db
    .update(users)
    .set(values)
    .where(eq(users.userId, id))
    .returning({ userId: users.id });

  return data;
};

export const deleteUser = async (id: string) => {
  const [data] = await db
    .delete(users)
    .where(eq(users.userId, id))
    .returning({ userId: users.id });

  return data;
};

export const getUser = async () => {};

export const getUsers = async () => {};
