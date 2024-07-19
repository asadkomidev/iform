import { z } from "zod";

export const dateAnswerPropsSchema = z.object({
  question: z.string().min(2).max(50),
  instructions: z.string().max(200),
  required: z.boolean().default(false),
});

export type DateAnswerPropsSchemaType = z.infer<typeof dateAnswerPropsSchema>;
