import { ElementType } from "./elements";

export type ElementInstance = {
  id: string;
  type: ElementType;
  attributes?: Record<string, any>;
};
