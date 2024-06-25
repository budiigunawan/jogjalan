import { OpenAPIHono } from "@hono/zod-openapi";

const apiTags = ["Place"];

export const placeRoute = new OpenAPIHono().basePath("/places");

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
  (c) => {
    return c.json({
      message: "This is places",
    });
  }
);
