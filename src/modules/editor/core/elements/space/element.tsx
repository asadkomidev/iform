"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { height } = items.attributes;
  return (
    <div className="flex flex-col w-full">
      <span className="text-[10px] text-muted-foreground">
        Space height is {height}px
      </span>
      {/* <SquareSplitVertical className="size-8" /> */}
    </div>
  );
};

export default Element;
