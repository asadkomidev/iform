import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAuthUser = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();

  return { user, isAuth };
};
