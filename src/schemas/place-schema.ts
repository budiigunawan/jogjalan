import { z } from "zod";

export const PlaceIdSchema = z.object({
  id: z.coerce
    .string()
    .min(5)
    .openapi({ example: "clxsclxli0000vs7d0wqe3y8k" }),
});
