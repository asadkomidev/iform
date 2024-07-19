import { z } from "zod";

export const numberAnswerPropsSchema = z.object({
  question: z.string().min(2).max(50),
  instructions: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

export type NumberAnswerPropsSchemaType = z.infer<
  typeof numberAnswerPropsSchema
>;
