"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronRight, ListTodo, Terminal } from "lucide-react";

type Props = {
  question: string;
  instructions: string;
  required: boolean;
  children?: React.ReactNode;
  isForm?: boolean;
};

const ElementContentWrapper = ({
  question,
  instructions,
  required,
  children,
  isForm,
}: Props) => {
  return (
    <div className="flex flex-col w-full py-4">
      {isForm ? (
        <Label className="text-base">
          {question || "Add a question"}
          {required && "*"}
        </Label>
      ) : (
        <div className="flex items-center gap-1">
          <div className="">
            <Terminal
              strokeWidth={1}
              className="size-4 text-muted-foreground"
            />
          </div>
          <div className="">
            {question ? (
              question
            ) : (
              <span className="text-sm italic text-muted-foreground">
                Click to add a question here
              </span>
            )}
          </div>
        </div>
      )}

      <div className="py-3 w-full">{children}</div>
      {instructions && (
        <p
          className={cn(
            " text-muted-foreground/50 text-[0.8rem]",
            !isForm && "pl-5"
          )}>
          {instructions}
        </p>
      )}
    </div>
  );
};

export default ElementContentWrapper;
