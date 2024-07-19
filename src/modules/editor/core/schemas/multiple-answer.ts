import { z } from "zod";

export const multipleAnswerPropsSchema = z.object({
  question: z.string().min(2).max(50),
  instructions: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
  options: z.array(z.string()).default([]),
});

export type MultipleAnswerPropsSchemaType = z.infer<
  typeof multipleAnswerPropsSchema
>;
