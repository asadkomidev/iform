"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";
import { Label } from "@/components/ui/label";

type Props = {
  element: ElementInstance;
};

const Form = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { subHeading } = items.attributes;

  return (
    <div className="flex flex-col gap-2 w-full ">
      <Label className="text-xl font-semibold">
        {subHeading || "Add a sub title"}
      </Label>
    </div>
  );
};

export default Form;
