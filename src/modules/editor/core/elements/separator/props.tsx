"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CircleHelp } from "lucide-react";

type Prop = {
  element: ElementInstance;
};

const Props = ({ element }: Prop) => {
  return (
    <div className="border rounded-lg p-4">
      <span className="flex items-center gap-2 pb-2 text-sm">
        <CircleHelp className="size-4 text-primary" />
        <span className="">Note</span>
      </span>
      <p className="text-muted-foreground text-sm leading-6">
        The separator element is used to separate different sections of the
        content. It is a simple horizontal line that can be used to visually
        separate different sections of the content.
      </p>
    </div>
  );
};

export default Props;
