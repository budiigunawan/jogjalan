import { OpenAPIHono } from "@hono/zod-openapi";
import { categoryService } from "../services";

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
  async (c) => {
    const categories = await categoryService.getAll();

    if (categories.length <= 0) {
      return c.json(
        {
          message: "There is no categories data",
        },
        200
      );
    }

    return c.json(categories, 200);
  }
);
