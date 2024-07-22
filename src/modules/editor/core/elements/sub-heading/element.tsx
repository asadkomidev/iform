"use client";

import { Label } from "@/components/ui/label";
import { ElementInstance } from "@/types/elements/instances";

import { CustomInstance } from "./common";
import { Heading2, Terminal } from "lucide-react";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { subHeading } = items.attributes;
  return (
    <div className="flex flex-col  w-full">
      <div className="pb-4">
        <span className="text-[10px] text-muted-foreground/50 flex items-center gap-1">
          <Heading2 className="size-3 text-primary" /> SubTitle
        </span>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-1">
          <div className="">
            <Terminal
              strokeWidth={1}
              className="size-4 text-muted-foreground"
            />
          </div>
          <div className="">
            {subHeading ? (
              subHeading
            ) : (
              <span className="text-sm italic text-muted-foreground">
                Click to add a sub title here
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element;
