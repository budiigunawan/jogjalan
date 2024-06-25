import { OpenAPIHono } from "@hono/zod-openapi";

const apiTags = ["Category"];

export const categoryRoute = new OpenAPIHono();

categoryRoute.openapi(
  {
    method: "get",
    path: "/",
    description: "Get All categories",
    responses: {
      200: {
        description: "Successfully get all tags",
      },
    },
    tags: apiTags,
  },
  (c) => {
    return c.json(
      {
        message: "This is categories",
      },
      200
    );
  }
);
