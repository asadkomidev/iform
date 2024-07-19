import { z } from "zod";

export const selectAnswerPropsSchema = z.object({
  question: z.string().min(2).max(50),
  instructions: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
  options: z.array(z.string()).default([]),
});

export type SelectAnswerPropsSchemaType = z.infer<
  typeof selectAnswerPropsSchema
>;
