export type Place = {
  id: number;
  name: string;
  description: string;
  category: FoodCategory | PlaceCategory | TodoCategory;
  address: string;
  location: Location;
  rating: number;
  openingHours: OpeningHour[];
  imageUrl: string;
};

export type Location = {
  lat: number;
  lng: number;
};

export type FoodCategory = {
  name: string;
  foodCategories: string[];
  diet: string[];
};

export type PlaceCategory = {
  name: string;
  placeCategories: string[];
};

export type TodoCategory = {
  name: string;
  todoCategories: string[];
};

export type OpeningHour = {
  day: string;
  startHour?: Date;
  endHour?: Date;
  isOpen: boolean;
};

export const dataPlaces: Place[] = [
  {
    id: 1,
    name: "Gudeg Yu Djum",
    description: "Famous for its traditional Yogyakarta gudeg.",
    address: "Jalan Wijilan No.167, Yogyakarta",
    location: {
      lat: 40.5107736,
      lng: -74.2482624,
    },
    category: {
      name: "food",
      foodCategories: ["Indonesian"],
      diet: ["halal"],
    },
    rating: 4.7,
    openingHours: [
      {
        day: "Sunday",
        isOpen: true,
      },
      {
        day: "Monday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Tuesday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Wednesday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Thursday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Friday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Saturday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
    ],
    imageUrl: "https://example.com/images/gudeg_yu_djum.jpg",
  },
  {
    id: 2,
    name: "The House of Raminten",
    description:
      "A unique dining experience with a traditional Javanese ambiance.",
    address: "Jalan FM Noto No.7, Yogyakarta",
    location: {
      lat: 40.5107736,
      lng: -74.2482624,
    },
    category: {
      name: "Food",
      foodCategories: ["Indonesian"],
      diet: ["halal"],
    },
    rating: 4.5,
    openingHours: [
      {
        day: "Sunday",
        isOpen: true,
      },
      {
        day: "Monday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Tuesday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Wednesday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Thursday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Friday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Saturday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
    ],
    imageUrl: "https://example.com/images/house_of_raminten.jpg",
  },
  {
    id: 3,
    name: "Taman Sari Water Castle",
    description: "A beautiful historic site perfect for a romantic stroll.",
    address: "Jalan Taman, Yogyakarta",
    location: {
      lat: 40.5107736,
      lng: -74.2482624,
    },
    category: {
      name: "Place",
      placeCategories: ["Historical"],
    },
    rating: 4.7,
    openingHours: [
      {
        day: "Sunday",
        isOpen: true,
      },
      {
        day: "Monday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Tuesday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Wednesday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Thursday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Friday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        day: "Saturday",
        startHour: new Date("2024-06-06T07:00:00"),
        endHour: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
    ],
    imageUrl: "https://example.com/images/taman_sari.jpg",
  },
];
