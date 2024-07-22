"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Separator } from "@/components/ui/separator";

import { CustomInstance } from "./common";
import { SeparatorHorizontal } from "lucide-react";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { paragraph } = items.attributes;
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex items-center gap-1">
        <SeparatorHorizontal className="size-3 text-muted-foreground" />
        <span className="text-[10px] text-muted-foreground">Separator</span>
      </div>
      <Separator />
    </div>
  );
};

export default Element;
