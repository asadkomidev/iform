import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import { getAuthUser } from "@/backend/utilities/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

type Props = {};

const UserMenu = async (props: Props) => {
  const { user, isAuth } = await getAuthUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex-shrink-0 w-9 h-9 bg-muted rounded-full flex items-center justify-center">
          <span className="text-lg font-bold">
            {user?.given_name?.charAt(0).toUpperCase() || "U"}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-none w-48 rounded-xl p-4 shadow-xl">
        <DropdownMenuItem asChild>
          <Link href="/overview" className="">
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="">
          <LogoutLink>Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
