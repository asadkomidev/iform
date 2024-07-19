"use client";

import { CustomInstance } from "./common";
import { Label } from "@/components/ui/label";
import { ElementInstance } from "@/types/elements/instances";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { heading } = items.attributes;
  return (
    <div className="flex flex-col w-full">
      <span className="text-[10px] text-muted-foreground">Title</span>
      <Label className="pb-2 py-2 text-2xl">{heading}</Label>
    </div>
  );
};

export default Element;
