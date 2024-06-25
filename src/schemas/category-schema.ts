import { z } from "zod";

export const CategoryIdSchema = z.object({
  id: z.coerce
    .string()
    .min(5)
    .openapi({ example: 'clxsclxli0000vs7d0wqe3y8k"' }),
});

export const CreateCategorySchema = z.object({
  name: z.string().min(3).openapi({ example: "indonesian" }),
});

export const UpdateCategorySchema = z.object({
  name: z.string().min(3).openapi({ example: "indonesian" }),
});
