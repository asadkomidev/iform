import React from "react";
import { NAVIGATION_LINKS } from "../constants/navigation";
import Link from "next/link";

type Props = {};

const Links = (props: Props) => {
  return (
    <ul className="flex items-center gap-4 list-none text-sm">
      {NAVIGATION_LINKS.map((item, i) => (
        <li key={i} className="hover:text-muted-foreground ">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
