import { getAuthUser } from "@/backend/utilities/utils";
import HomePage from "@/modules/home";

export default async function Home() {
  const { user, isAuth } = await getAuthUser();
  return <HomePage />;
}
