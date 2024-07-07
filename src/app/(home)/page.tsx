import { getAuthUser } from "@/backend/utilities/utils";
import { Button } from "@/components/ui/button";
import UserMenu from "@/global/navigation/user-menu";
import HomePage from "@/views/home";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { user, isAuth } = await getAuthUser();
  return <HomePage />;
}
