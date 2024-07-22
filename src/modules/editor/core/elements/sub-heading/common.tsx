import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  subHeading: "",
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
