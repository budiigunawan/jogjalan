import { OpenAPIHono, z } from "@hono/zod-openapi";
import { categoryService } from "../services";
import {
  CategoryIdSchema,
  CreateCategorySchema,
  UpdateCategorySchema,
} from "../schemas/category-schema";

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

categoryRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    request: {
      params: CategoryIdSchema,
    },
    description: "Get detail category by id",
    responses: {
      200: {
        description: "Category details",
      },
      404: {
        description: "Category not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id")!;

    const category = await categoryService.getDetailById(id);

    if (!category) {
      return c.json({ message: "Category not found" }, 404);
    }

    return c.json(category);
  }
);

categoryRoute.openapi(
  {
    method: "delete",
    path: "/",
    description: "Delete all categories",
    responses: {
      200: {
        description: "Successfully delete all categories",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const result = await categoryService.deleteAll();

    return c.json(
      {
        message: "All categories data have been deleted",
        result,
      },
      200
    );
  }
);

categoryRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    request: {
      params: CategoryIdSchema,
    },
    description: "Delete category by id",
    responses: {
      200: {
        description: "Successfully delete category",
      },
      404: {
        description: "Category not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id")!;

    const targetCategory = await categoryService.getDetailById(id);

    if (!targetCategory) {
      return c.json({ message: "Category not found" }, 404);
    }

    const deletedCategory = await categoryService.deleteById(id);

    return c.json(
      {
        message: `Category with ID ${deletedCategory.id} has been deleted`,
        deletedCategory,
      },
      200
    );
  }
);

categoryRoute.openapi(
  {
    method: "post",
    path: "/",
    description: "Create category",
    responses: {
      201: {
        description: "Successfully create new category",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const body: z.infer<typeof CreateCategorySchema> = await c.req.json();
    const newCategory = await categoryService.create(body);

    return c.json(
      {
        message: "New category has been added",
        newCategory,
      },
      201
    );
  }
);

categoryRoute.openapi(
  {
    method: "put",
    path: "/{id}",
    request: {
      params: CategoryIdSchema,
    },
    description: "Update category by id",
    responses: {
      200: {
        description: "Successfully update new category",
      },
      404: {
        description: "Category not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id")!;

    const targetTag = await categoryService.getDetailById(id);

    if (!targetTag) {
      return c.json({ message: "Category not found" }, 404);
    }

    const body: z.infer<typeof UpdateCategorySchema> = await c.req.json();
    const updatedCategory = await categoryService.update(id, body);

    return c.json(
      {
        message: "Category has been updated",
        updatedCategory,
      },
      200
    );
  }
);
