import { OpenAPIHono } from "@hono/zod-openapi";
import { tagService } from "../services";

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
  async (c) => {
    const tags = await tagService.getAll();

    if (tags.length <= 0) {
      return c.json(
        {
          message: "There is no tags data",
        },
        200
      );
    }

    return c.json(tags, 200);
  }
);
