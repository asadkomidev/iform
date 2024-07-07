"use server";

import {
  createUserLogic,
  deleteUserLogic,
  updateUserLogic,
} from "../../business/user";
import { UserType } from "../../database/types";

export const createUserAction = async (values: Omit<UserType, "id">) => {
  const data = await createUserLogic(values);

  return data;
};
export const updateUserAction = async (
  values: Partial<UserType>,
  id: string
) => {
  const data = await updateUserLogic(values, id);

  return data;
};
export const deleteUserAction = async (id: string) => {
  const data = await deleteUserLogic(id);

  return data;
};
export const getUserAction = async () => {};
export const getUsersAction = async () => {};
