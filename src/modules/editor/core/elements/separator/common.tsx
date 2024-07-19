import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  paragraph: "Paragraph",
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
