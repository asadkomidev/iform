import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  paragraph: "",
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
