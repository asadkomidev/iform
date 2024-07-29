"use client";

import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {};

const NavbarItems = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4">
      <Link
        href="/overview"
        className={cn(
          "hover:text-primary flex items-center gap-2",
          pathname === "/overview"
            ? "text-primary font-semibold"
            : "text-muted-foreground"
        )}>
        <Home className="size-4" />
      </Link>
      <Link
        href="/forms"
        className={cn(
          "hover:text-primary ",
          pathname === "/forms"
            ? "text-primary font-semibold"
            : "text-muted-foreground"
        )}>
        <span className="">Forms</span>{" "}
      </Link>
    </div>
  );
};

export default NavbarItems;
