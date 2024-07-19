import { z } from "zod";

export const paragraphPropsSchema = z.object({
  paragraph: z.string().min(2).max(50),
});

export type ParagraphPropsSchemaType = z.infer<typeof paragraphPropsSchema>;
