export type Place = {
  id: string;
  name: string;
  description: string;
  tag: Tag;
  categories: Category[];
  address: string;
  latitude: number;
  longitude: number;
  phone?: string;
  instagram?: string;
  website?: string;
  openingHours: OpeningHour[];
  imageUrl: string;
};

export type Tag = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type OpeningHour = {
  dayOfWeek: number;
  startTime?: Date;
  endTime?: Date;
  isOpen: boolean;
};

export const dataPlaces: Place[] = [
  {
    id: "p1",
    name: "Gudeg Yu Djum",
    description: "Famous for its traditional Yogyakarta gudeg.",
    address: "Jalan Wijilan No.167, Yogyakarta",
    latitude: 40.5107736,
    longitude: -74.2482624,
    tag: {
      id: "t1",
      name: "food",
    },
    categories: [
      {
        id: "c1",
        name: "indonesian",
      },
    ],
    openingHours: [
      {
        dayOfWeek: 0,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 1,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 2,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 3,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 4,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 5,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 6,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
    ],
    imageUrl: "https://example.com/images/gudeg_yu_djum.jpg",
  },
  {
    id: "p2",
    name: "The House of Raminten",
    description:
      "A unique dining experience with a traditional Javanese ambiance.",
    address: "Jalan FM Noto No.7, Yogyakarta",
    latitude: 40.5107736,
    longitude: -74.2482624,
    tag: {
      id: "t1",
      name: "food",
    },
    categories: [
      {
        id: "c1",
        name: "indonesian",
      },
    ],
    openingHours: [
      {
        dayOfWeek: 0,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 1,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 2,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 3,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 4,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 5,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 6,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
    ],
    imageUrl: "https://example.com/images/house_of_raminten.jpg",
  },
  {
    id: "p3",
    name: "Taman Sari Water Castle",
    description: "A beautiful historic site perfect for a romantic stroll.",
    address: "Jalan Taman, Yogyakarta",
    latitude: 40.5107736,
    longitude: -74.2482624,
    tag: {
      id: "t2",
      name: "place",
    },
    categories: [
      {
        id: "c2",
        name: "historical",
      },
    ],
    openingHours: [
      {
        dayOfWeek: 0,
        isOpen: false,
      },
      {
        dayOfWeek: 1,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 2,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 3,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 4,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 5,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
      {
        dayOfWeek: 6,
        startTime: new Date("2024-06-06T07:00:00"),
        endTime: new Date("2024-06-06T21:00:00"),
        isOpen: true,
      },
    ],
    imageUrl: "https://example.com/images/taman_sari.jpg",
  },
];
