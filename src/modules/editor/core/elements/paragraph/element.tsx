"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";
import { Terminal, Text, TextQuote } from "lucide-react";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { paragraph } = items.attributes;
  return (
    <div className="flex flex-col  w-full">
      <div className="pb-4">
        <span className="text-[10px] text-muted-foreground/50 flex items-center gap-1">
          <TextQuote className="size-3 text-primary" /> Paragraph
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
            {paragraph ? (
              paragraph
            ) : (
              <span className="text-sm italic text-muted-foreground">
                Click to add a paragraph here
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element;
