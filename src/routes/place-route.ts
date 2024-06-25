import { OpenAPIHono } from "@hono/zod-openapi";
import { placeService } from "../services";

const apiTags = ["Place"];

export const placeRoute = new OpenAPIHono();

placeRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "Get all places",
    responses: {
      200: {
        description: "Successfully get all places",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const places = await placeService.getAll();

    if (places.length <= 0) {
      return c.json(
        {
          message: "There is no places data",
        },
        200
      );
    }

    return c.json(places, 200);
  }
);
