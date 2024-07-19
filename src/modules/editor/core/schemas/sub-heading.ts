import { z } from "zod";

export const subHeadingPropsSchema = z.object({
  subHeading: z.string().min(2).max(50),
});

export type SubHeadingPropsSchemaType = z.infer<typeof subHeadingPropsSchema>;
