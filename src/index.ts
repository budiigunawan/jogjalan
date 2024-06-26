import { OpenAPIHono } from "@hono/zod-openapi";
import { categoryRoute, placeRoute, tagRoute } from "./routes";

const app = new OpenAPIHono();

app.route("/places", placeRoute);
app.route("/categories", categoryRoute);
app.route("/tags", tagRoute);

app.get("/", (c) => {
  return c.json({
    message: "Jogjalan API",
    places: "/tags",
  });
});

export default app;
