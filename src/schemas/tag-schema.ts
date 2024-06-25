import { z } from "zod";

export const TagIdSchema = z.object({
  id: z.coerce
    .string()
    .min(5)
    .openapi({ example: 'clxsclxli0000vs7d0wqe3y8k"' }),
});

export const CreateTagSchema = z.object({
  name: z.string().min(3).openapi({ example: "Food" }),
});

export const UpdateTagSchema = z.object({
  name: z.string().min(3).openapi({ example: "Food" }),
});
