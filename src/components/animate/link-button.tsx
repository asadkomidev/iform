import { MoveUpRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

const LinkButton = ({ label, href }: Props) => {
  return (
    <Button variant="link" asChild className=" p-0">
      <Link
        href={href}
        className="text-md group flex items-center justify-center gap-1  hover:cursor-pointer ">
        <span className="text-muted-foreground group-hover:text-primary">
          {label}
        </span>
        <MoveUpRight className="size-3 opacity-75 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110  group-hover:opacity-100" />
      </Link>
    </Button>
  );
};

export default LinkButton;
