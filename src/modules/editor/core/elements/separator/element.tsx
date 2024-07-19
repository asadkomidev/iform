"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Separator } from "@/components/ui/separator";

import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { paragraph } = items.attributes;
  return (
    <div className="flex flex-col w-full">
      <span className="text-[10px] text-muted-foreground">Separator</span>
      <Separator />
    </div>
  );
};

export default Element;
