import { OpenAPIHono } from "@hono/zod-openapi";
import { tagService } from "../services";
import { TagIdSchema } from "../schemas/tag-schema";

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

tagRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    request: {
      params: TagIdSchema,
    },
    description: "Get detail tag by id",
    responses: {
      200: {
        description: "Tag details",
      },
      400: {
        description: "There is no ID",
      },
      404: {
        description: "Tag not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id");

    if (!id) {
      return c.json({ message: "There is no ID" }, 401);
    }

    const tag = await tagService.getDetailById(id);

    if (!tag) {
      return c.json({ message: "Tag not found" }, 404);
    }

    return c.json(tag);
  }
);
