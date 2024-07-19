"use client";

import { ElementInstance } from "@/types/elements/instances";
import { CustomInstance } from "./common";

type Props = {
  element: ElementInstance;
};

const Form = ({ element }: Props) => {
  const items = element as CustomInstance;
  const { height } = items.attributes;

  return <div style={{ height, width: "100%" }}></div>;
};

export default Form;
