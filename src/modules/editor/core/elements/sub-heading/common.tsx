import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  subHeading: "Sub Heading",
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
