import { OpenAPIHono } from "@hono/zod-openapi";
import { categoryRoute, placeRoute, tagRoute } from "./routes";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();
// API ROUTES
app.route("/places", placeRoute);
app.route("/categories", categoryRoute);
app.route("/tags", tagRoute);

// API DOCS
const description =
  "Jogjalan API for listing various tourism destinatios, restaurants, and todos in Yogyakarta.";

app.doc31("/docs", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Jogjalan API",
    description,
  },
});

app.get("/swagger", swaggerUI({ url: "/docs" }));

app.get("/", (c) => {
  return c.json({
    message: description,
    swagger: "/swagger",
  });
});

export default app;
