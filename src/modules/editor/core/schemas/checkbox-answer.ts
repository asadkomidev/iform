import { z } from "zod";

export const checkboxAnswerPropsSchema = z.object({
  question: z.string().min(2).max(50),
  instructions: z.string().max(200),
  required: z.boolean().default(false),
});

export type CheckboxAnswerPropsSchemaType = z.infer<
  typeof checkboxAnswerPropsSchema
>;
