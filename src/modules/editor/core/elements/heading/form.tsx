"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Label } from "@/components/ui/label";

import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Form = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { heading } = items.attributes;

  return (
    <div className="flex flex-col gap-2 w-full ">
      <Label className="text-2xl font-bold">{heading || "Add a title"}</Label>
    </div>
  );
};

export default Form;
