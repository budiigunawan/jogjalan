import { OpenAPIHono } from "@hono/zod-openapi";

const apiTags = ["Tag"];

export const tagRoute = new OpenAPIHono();

tagRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "Get all tags",
    responses: {
      200: {
        description: "Successfully get all tags",
      },
    },
    tags: apiTags,
  },
  (c) => {
    return c.json({
      message: "This is tags",
    });
  }
);
