import { Hono } from "hono";
import { dataPlaces } from "./data/places";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Jogjalan API",
    places: "/places",
  });
});

app.get("/places", (c) => {
  return c.json(dataPlaces);
});

app.get("/places/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "There is no ID" });
  }

  const place = dataPlaces.find((place) => place.id === id);

  if (!place) {
    return c.json({ message: "Place not found" });
  }

  return c.json(place);
});

export default app;
