"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SIDEBAR_LINKS } from "../constants/navigation";
import Logo from "./logo";

type Props = {
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

const Sidebar = ({ className, setIsOpen }: Props) => {
  const pathname = usePathname();
  const handleLinkClick = () => {
    setIsOpen && setIsOpen(false);
  };

  return (
    <div className="space-y-4 py-4 flex flex-col h-full">
      <div className="px-4 py-2 flex-1">
        <div className={cn("", className)}>
          <Logo className="pl-4" />
        </div>
        <div className="space-y-1">
          {SIDEBAR_LINKS.map((item) => (
            <Link
              onClick={handleLinkClick}
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center pl-4 w-full cursor-pointer py-2 hover:bg-white rounded-lg transition",
                item.href === pathname
                  ? "bg-white py-2 rounded-lg transition"
                  : ""
              )}>
              <item.icon className="w-4 h-4" />
              <span className="ml-2">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
