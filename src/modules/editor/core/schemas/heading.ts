import { z } from "zod";

export const headingPropsSchema = z.object({
  heading: z.string().min(2).max(50),
});

export type HeadingPropsSchemaType = z.infer<typeof headingPropsSchema>;
