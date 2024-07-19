"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { paragraph } = items.attributes;
  return (
    <div className="flex flex-col w-full">
      <span className="text-[10px] text-muted-foreground">Paragraph</span>
      <p className="pb-2 py-2 text-muted-foreground">{paragraph}</p>
    </div>
  );
};

export default Element;
