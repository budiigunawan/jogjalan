import { z } from "zod";

export const PlaceIdSchema = z.object({
  id: z.coerce
    .string()
    .min(5)
    .openapi({ example: "clxsclxli0000vs7d0wqe3y8k" }),
});

export const CreatePlaceSchema = z.object({
  name: z.string().min(5).openapi({ example: "Gudeg Yu Djum" }),
  description: z.string().min(15).max(500).openapi({
    example: "A beautiful historic site perfect for a romantic stroll.",
  }),
  address: z
    .string()
    .min(15)
    .max(255)
    .openapi({ example: "Jalan Wijilan No.167, Yogyakarta" }),
  latitude: z.number().finite().openapi({ example: 40.5107736 }).optional(),
  longitude: z.number().finite().openapi({ example: -74.2482624 }).optional(),
  phone: z.string().min(10).openapi({ example: "+6281 2345 7890" }).optional(),
  instagram: z.string().openapi({ example: "@gudeg.yudjum" }).optional(),
  website: z
    .string()
    .url()
    .openapi({ example: "https://gudegyudjum.com" })
    .optional(),
  imgUrl: z
    .string()
    .url()
    .openapi({ example: "https://gudegyudjum.com" })
    .optional(),
  tagName: z.string().min(3).openapi({ example: "Food" }),
  openingHours: z.array(
    z.object({
      dayOfWeek: z.number().int().min(0).max(6),
      isOpen: z.boolean(),
      startTime: z.string().time().openapi({ example: "07:00:00" }),
      endTime: z.string().time().openapi({ example: "22:00:00" }),
    })
  ),
});
