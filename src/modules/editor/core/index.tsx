import { FormElementsType } from "@/types/elements/elements";
import { ShortAnswerElement } from "./elements/short-answer";
import { HeadingElement } from "./elements/heading";
import { SubHeadingElement } from "./elements/sub-heading";
import { ParagraphElement } from "./elements/paragraph";
import { LongAnswerElement } from "./elements/long-answer";
import { SeparatorElement } from "./elements/separator";
import { SpaceElement } from "./elements/space";
import { NumberAnswerElement } from "./elements/number-answer";
import { DateAnswerElement } from "./elements/date-answer";
import { SelectAnswerElement } from "./elements/select-answer";
import { CheckboxAnswerElement } from "./elements/checkbox-answer";
import { RadioAnswerElement } from "./elements/radio-answer";
import { MultipleAnswerElement } from "./elements/mulitple-answer";

export const Elements: FormElementsType = {
  ShortAnswer: ShortAnswerElement,
  Heading: HeadingElement,
  SubHeading: SubHeadingElement,
  Paragraph: ParagraphElement,
  LongAnswer: LongAnswerElement,
  Separator: SeparatorElement,
  Space: SpaceElement,
  NumberAnswer: NumberAnswerElement,
  DateAnswer: DateAnswerElement,
  SelectAnswer: SelectAnswerElement,
  CheckboxAnswer: CheckboxAnswerElement,
  RadioAnswer: RadioAnswerElement,
  MultipleAnswer: MultipleAnswerElement,
};
