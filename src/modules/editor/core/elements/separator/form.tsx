"use client";

import { ElementInstance } from "@/types/elements/instances";
import { Separator } from "@/components/ui/separator";

import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Form = ({ element }: Props) => {
  const items = element as CustomInstance;

  return (
    <div className="flex flex-col gap-2 w-full ">
      <Separator />
    </div>
  );
};

export default Form;
