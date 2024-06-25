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
      404: {
        description: "Tag not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id")!;

    const tag = await tagService.getDetailById(id);

    if (!tag) {
      return c.json({ message: "Tag not found" }, 404);
    }

    return c.json(tag);
  }
);

tagRoute.openapi(
  {
    method: "delete",
    path: "/",
    description: "Delete all tags",
    responses: {
      200: {
        description: "Successfully delete all tags",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const result = await tagService.deleteAll();

    return c.json(
      {
        message: "All tags data have been deleted",
        result,
      },
      200
    );
  }
);

tagRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    request: {
      params: TagIdSchema,
    },
    description: "Delete tag by id",
    responses: {
      200: {
        description: "Successfully delete tag",
      },
      404: {
        description: "Tag not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id")!;

    const targetTag = await tagService.getDetailById(id);

    if (!targetTag) {
      return c.json({ message: "Tag not found" }, 404);
    }

    const deletedTag = await tagService.deleteById(id);

    return c.json(
      {
        message: `Tag with ID ${deletedTag.id} has been deleted`,
        deletedTag,
      },
      200
    );
  }
);

tagRoute.openapi(
  {
    method: "post",
    path: "/",
    description: "Create tag",
    responses: {
      201: {
        description: "Successfully create new tag",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const body = await c.req.json();
    const newTag = await tagService.create(body);

    return c.json(
      {
        message: "New tag has been added",
        newTag,
      },
      201
    );
  }
);
