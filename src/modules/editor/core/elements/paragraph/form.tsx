"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Form = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { paragraph } = items.attributes;

  return (
    <div className="flex flex-col gap-2 w-full ">
      <p className=" text-muted-foreground">{paragraph}</p>
    </div>
  );
};

export default Form;
