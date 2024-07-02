import { OpenAPIHono } from "@hono/zod-openapi";
import { placeService } from "../services";
import { PlaceIdSchema } from "../schemas/place-schema";

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
    const q = c.req.query("q");
    const places = await placeService.getAll(q);

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

placeRoute.openapi(
  {
    method: "get",
    path: "/{id}",
    request: {
      params: PlaceIdSchema,
    },
    description: "Get detail place by id",
    responses: {
      200: {
        description: "Place details",
      },
      404: {
        description: "Place not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id")!;

    const place = await placeService.getDetailById(id);

    if (!place) {
      return c.json({ message: "Place not found" }, 404);
    }

    return c.json(place);
  }
);

placeRoute.openapi(
  {
    method: "delete",
    path: "/",
    description: "Delete all places",
    responses: {
      200: {
        description: "Successfull delete all places",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const result = await placeService.deleteAll();

    return c.json(
      {
        message: "All places data have been deleted",
        result,
      },
      200
    );
  }
);

placeRoute.openapi(
  {
    method: "delete",
    path: "/{id}",
    request: {
      params: PlaceIdSchema,
    },
    description: "Delete place by id",
    responses: {
      200: {
        description: "Successfully delete place",
      },
      404: {
        description: "Place not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id")!;

    const targetPlace = await placeService.getDetailById(id);

    if (!targetPlace) {
      return c.json(
        {
          message: "Place not found",
        },
        404
      );
    }

    const deletedPlace = await placeService.deleteById(id);

    return c.json({
      message: `Place with ID ${deletedPlace.id} has been deleted`,
      deletedPlace,
    });
  }
);

placeRoute.openapi(
  {
    method: "post",
    path: "/",
    description: "Create place",
    responses: {
      201: {
        description: "Successfully create new place",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const body = await c.req.json();
    const newPlace = await placeService.create(body);

    return c.json(
      {
        message: "New place hase been added",
        newPlace,
      },
      201
    );
  }
);

placeRoute.openapi(
  {
    method: "put",
    path: "/{id}",
    request: {
      params: PlaceIdSchema,
    },
    description: "Update place by id",
    responses: {
      200: {
        description: "Successfully update new tag",
      },
      404: {
        description: "Tag not found",
      },
    },
    tags: apiTags,
  },
  async (c) => {
    const id = c.req.param("id")!;

    const targetPlace = await placeService.getDetailById(id);

    if (!targetPlace) {
      return c.json({ message: "Place not found" }, 404);
    }

    const body = await c.req.json();

    const updatedPlace = await placeService.update(id, body);

    return c.json({
      message: "Place has been updated",
      updatedPlace,
    });
  }
);
