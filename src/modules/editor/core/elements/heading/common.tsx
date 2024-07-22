import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  heading: "",
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
