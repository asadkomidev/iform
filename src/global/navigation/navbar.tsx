import Container from "@/components/container";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Links from "./links";
import Logo from "./logo";
import UserMenu from "./user-menu";
import { getAuthUser } from "@/backend/utilities/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

type Props = {};

const Navbar = async (props: Props) => {
  const { user, isAuth } = await getAuthUser();
  return (
    <header className="bg-white/5 dark:bg-black/5 backdrop-blur-lg  fixed right-0 left-0 top-0 py-2 z-[40]">
      <Container className=" flex items-center justify-between ">
        <aside className="flex items-center gap-[2px]">
          <Logo />
        </aside>
        <nav className=" absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <Links />
        </nav>
        <aside className="flex items-center gap-4">
          {isAuth ? (
            <UserMenu />
          ) : (
            <LoginLink postLoginRedirectURL="/">
              <Button className="rounded-full h-10">Sign in</Button>
            </LoginLink>
          )}
        </aside>
      </Container>
    </header>
  );
};

export default Navbar;
