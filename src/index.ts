import { Hono } from "hono";
import { dataPlaces } from "./data/places";

let places = dataPlaces;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Jogjalan API",
    places: "/places",
  });
});

app.get("/places", (c) => {
  if (places.length <= 0) {
    return c.json({
      message: "There is no places data",
    });
  }
  return c.json(places);
});

app.get("/places/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "There is no ID" });
  }

  const place = places.find((place) => place.id === id);

  if (!place) {
    return c.json({ message: "Place not found" });
  }

  return c.json(place);
});

app.delete("/places", (c) => {
  places = [];

  return c.json({
    message: "All places data have been deleted",
  });
});

app.delete("/places/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({ message: "There is no place ID" });
  }

  const place = places.find((place) => place.id === id);

  if (!place) {
    return c.json({ message: "Place to be deleted not found" });
  }

  places = places.filter((place) => place.id !== id);

  return c.json({
    message: `Place with ID ${id} has been deleted`,
    deletedPlace: place,
  });
});

export default app;
