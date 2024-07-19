import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  height: 20,
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
