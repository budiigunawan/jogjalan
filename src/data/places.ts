export type Place = {
  id: number;
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  type: string;
  cuisine?: string;
  diet?: string[];
  placeCategory?: string;
  rating: number;
  opening_hours: string;
  image_url: string;
};

export const dataPlaces: Place[] = [
  {
    id: 1,
    name: "Gudeg Yu Djum",
    description: "Famous for its traditional Yogyakarta gudeg.",
    address: "Jalan Wijilan No.167, Yogyakarta",
    latitude: -7.7925,
    longitude: 110.3657,
    type: "Food",
    cuisine: "Indonesian",
    diet: ["halal"],
    rating: 4.7,
    opening_hours: "06:00 - 22:00",
    image_url: "https://example.com/images/gudeg_yu_djum.jpg",
  },
  {
    id: 2,
    name: "The House of Raminten",
    description:
      "A unique dining experience with a traditional Javanese ambiance.",
    address: "Jalan FM Noto No.7, Yogyakarta",
    latitude: -7.7925,
    longitude: 110.3657,
    type: "Food",
    cuisine: "Indonesian",
    diet: ["halal"],
    rating: 4.5,
    opening_hours: "24 Hours",
    image_url: "https://example.com/images/house_of_raminten.jpg",
  },
  {
    id: 3,
    name: "Taman Sari Water Castle",
    description: "A beautiful historic site perfect for a romantic stroll.",
    address: "Jalan Taman, Yogyakarta",
    latitude: -7.7925,
    longitude: 110.3657,
    type: "Place",
    placeCategory: "Historical",
    rating: 4.7,
    opening_hours: "08:00 - 17:00",
    image_url: "https://example.com/images/taman_sari.jpg",
  },
];
