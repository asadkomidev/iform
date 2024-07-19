import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  heading: "Heading",
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
