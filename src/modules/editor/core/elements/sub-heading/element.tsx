"use client";

import { Label } from "@/components/ui/label";
import { ElementInstance } from "@/types/elements/instances";

import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { subHeading } = items.attributes;
  return (
    <div className="flex flex-col w-full">
      <span className="text-[10px] text-muted-foreground">Sub Heading</span>
      <Label className="pb-2 py-2 text-base">{subHeading}</Label>
    </div>
  );
};

export default Element;
