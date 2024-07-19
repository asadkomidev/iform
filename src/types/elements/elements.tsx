import { SubmitFunction } from "./functions";
import { ElementInstance } from "./instances";

export type ElementType =
  | "Heading"
  | "SubHeading"
  | "Paragraph"
  | "Space"
  | "Separator"
  | "ShortAnswer"
  | "LongAnswer"
  | "NumberAnswer"
  | "DateAnswer"
  | "SelectAnswer"
  | "CheckboxAnswer"
  | "RadioAnswer"
  | "MultipleAnswer";

export type FormElementType = {
  construct: (id: string) => ElementInstance;
  type: ElementType;
  element: React.FC<{
    element: ElementInstance;
  }>;
  form: React.FC<{
    element: ElementInstance;
    submitFunction?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;

  props: React.FC<{
    element: ElementInstance;
  }>;

  elementButton: {
    icon: React.ElementType;
    label: string;
  };

  validate: (element: ElementInstance, currentValue: string) => boolean;
};

export type FormElementsType = {
  [key in ElementType]: FormElementType;
};
