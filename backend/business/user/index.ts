import { UserType } from "../../database/types";
import { createUser, deleteUser, updateUser } from "../../persistence/user";

export const createUserLogic = async (values: Omit<UserType, "id">) => {
  try {
    const data = await createUser(values);
    if (!data) {
      throw new Error("Failed to create user");
    }

    return data;
  } catch (error) {
    console.log(`🔴 Failed to create user`);
  }
};

export const updateUserLogic = async (
  values: Partial<UserType>,
  id: string
) => {
  try {
    const data = await updateUser(values, id);
    if (!data) {
      throw new Error("Failed to update user");
    }

    return data;
  } catch (error) {
    console.log(`🔴 Failed to update user`);
  }
};

export const deleteUserLogic = async (id: string) => {
  try {
    const data = await deleteUser(id);
    if (!data) {
      throw new Error("Failed to delete user");
    }

    return data;
  } catch (error) {
    console.log(`🔴 Failed to delete user`);
  }
};
export const getUserLogic = async () => {};
export const getUsersLogic = async () => {};
