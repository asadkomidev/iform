"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";
import { SquareSplitVertical, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { height } = items.attributes;
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center gap-1">
        <SquareSplitVertical className="size-3 text-muted-foreground" />
        <span className="text-[10px] text-muted-foreground">Space</span>
      </div>
      <div className="flex items-center gap-1">
        <Terminal strokeWidth={1} className="size-4 text-muted-foreground" />
        <span className="text-sm italic text-muted-foreground">
          Click to adjust the height
        </span>
      </div>
    </div>
  );
};

export default Element;
