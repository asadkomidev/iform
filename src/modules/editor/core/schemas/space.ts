import { z } from "zod";

export const spacePropsSchema = z.object({
  height: z.number().min(5).max(200),
});

export type SpacePropsSchemaType = z.infer<typeof spacePropsSchema>;
