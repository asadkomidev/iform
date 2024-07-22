"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";

import { CustomInstance } from "./common";
import ElementContentWrapper from "../../components/element-content-wrapper";
import { Textarea } from "@/components/ui/textarea";
import { Text } from "lucide-react";

type Props = {
  element: ElementInstance;
};

const Element = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { question, required, instructions } = items.attributes;
  return (
    <div className="flex flex-col  w-full">
      <div className="">
        <span className="text-[10px] text-muted-foreground/50 flex items-center gap-1">
          <Text className="size-3" /> Long Answer
        </span>
      </div>
      <ElementContentWrapper
        question={question}
        instructions={instructions}
        required={required}>
        <div className="pl-5">
          <Textarea
            disabled
            placeholder="Long Answer"
            className="w-full shadow-none"
          />
        </div>
      </ElementContentWrapper>
    </div>
  );
};

export default Element;
