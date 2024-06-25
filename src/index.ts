import { OpenAPIHono } from "@hono/zod-openapi";
import { tagRoute } from "./routes/tag-route";

const app = new OpenAPIHono();

app.get("/", (c) => {
  return c.json({
    message: "Jogjalan API",
    places: "/tags",
  });
});

app.route("/", tagRoute);

// app.get("/", (c) => {
//   return c.json({
//     message: "Jogjalan API",
//     places: "/places",
//   });
// });

// app.get("/places", (c) => {
//   if (places.length <= 0) {
//     return c.json({
//       message: "There is no places data",
//     });
//   }
//   return c.json(places);
// });

// app.get("/tags", async (c) => {
//   const tags = await prisma.tag.findMany();
//   return c.json(tags);
// });

// app.get("/places/:id", (c) => {
//   const id = c.req.param("id");

//   if (!id) {
//     return c.json({ message: "There is no ID" });
//   }

//   const place = places.find((place) => place.id === id);

//   if (!place) {
//     return c.json({ message: "Place not found" });
//   }

//   return c.json(place);
// });

// app.delete("/places", (c) => {
//   places = [];

//   return c.json({
//     message: "All places data have been deleted",
//   });
// });

// app.delete("/places/:id", (c) => {
//   const id = c.req.param("id");

//   if (!id) {
//     return c.json({ message: "There is no place ID" });
//   }

//   const place = places.find((place) => place.id === id);

//   if (!place) {
//     return c.json({ message: "Place to be deleted not found" });
//   }

//   places = places.filter((place) => place.id !== id);

//   return c.json({
//     message: `Place with ID ${id} has been deleted`,
//     deletedPlace: place,
//   });
// });

// app.post("/places", async (c) => {
//   const body = await c.req.json();

//   const {
//     name,
//     description,
//     address,
//     latitude,
//     longitude,
//     phone,
//     instagram,
//     website,
//     tag,
//     categories,
//     openingHours,
//     imageUrl,
//   } = body;

//   const newPlace: Place = {
//     id: places[places.length - 1].id + 1,
//     name,
//     description,
//     address,
//     latitude,
//     longitude,
//     phone,
//     instagram,
//     website,
//     tag,
//     categories,
//     openingHours,
//     imageUrl,
//   };

//   const updatedPlaces = [...places, newPlace];

//   places = updatedPlaces;

//   return c.json({
//     message: "New place has been added",
//     newPlace,
//   });
// });

// app.post("/places/seed", async (c) => {
//   places = dataPlaces;

//   return c.json({
//     message: "Many places data has been seeded.",
//   });
// });

// app.put("/places/:id", async (c) => {
//   const id = c.req.param("id");

//   if (!id) {
//     return c.json({ message: "There is no place ID" });
//   }

//   const place = places.find((place) => place.id === id);

//   if (!place) {
//     return c.json({ message: "Place not found" });
//   }

//   const body = await c.req.json();
//   const { name, description } = body;

//   const newPlace: Place = {
//     ...place,
//     name,
//     description,
//   };

//   const updatedPlaces = places.map((place) => {
//     if (place.id === id) {
//       return newPlace;
//     } else {
//       return place;
//     }
//   });

//   places = updatedPlaces;

//   return c.json(newPlace);
// });

export default app;
