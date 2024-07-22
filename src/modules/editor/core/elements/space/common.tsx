import { ElementInstance } from "@/types/elements/instances";

export const attributes = {
  height: 24,
};

export type CustomInstance = ElementInstance & {
  attributes: typeof attributes;
};
