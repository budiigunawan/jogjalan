import { z } from "zod";
import { prisma } from "../lib/db";
import { CreatePlaceSchema, UpdatePlaceSchema } from "../schemas/place-schema";

export const getAll = async (
  page: string = "1",
  limit: string = "10",
  q?: string
) => {
  const skip = Number(limit) * (Number(page) - 1);
  const take = Number(limit);

  const [count, places] = await prisma.$transaction([
    prisma.place.count({
      where: {
        name: {
          mode: "insensitive",
          contains: q,
        },
      },
    }),
    prisma.place.findMany({
      skip,
      take,
      where: {
        name: {
          mode: "insensitive",
          contains: q,
        },
      },
      select: {
        id: true,
        name: true,
        description: true,
        address: true,
        latitude: true,
        longitude: true,
        phone: true,
        instagram: true,
        website: true,
        imgUrl: true,
        tag: {
          select: {
            id: true,
            name: true,
          },
        },
        openingHours: {
          select: {
            id: true,
            dayOfWeek: true,
            isOpen: true,
            startTime: true,
            endTime: true,
          },
        },
        categories: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    }),
  ]);

  return {
    totalData: count,
    totalPage: Math.ceil(count / take),
    data: places,
  };
};

export const getDetailById = async (id: string) => {
  const place = await prisma.place.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      address: true,
      latitude: true,
      longitude: true,
      phone: true,
      instagram: true,
      website: true,
      imgUrl: true,
      tag: {
        select: {
          id: true,
          name: true,
        },
      },
      openingHours: {
        select: {
          id: true,
          dayOfWeek: true,
          isOpen: true,
          startTime: true,
          endTime: true,
        },
      },
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return place;
};

export const deleteAll = async () => {
  return await prisma.place.deleteMany();
};

export const deleteById = async (id: string) => {
  return await prisma.place.delete({
    where: { id },
  });
};

export const create = async (body: z.infer<typeof CreatePlaceSchema>) => {
  const {
    name,
    description,
    address,
    latitude,
    longitude,
    phone,
    instagram,
    website,
    imgUrl,
    tagName,
    openingHours,
    categories,
  } = body;

  const openingHoursPayload = openingHours.map((openingHour) => {
    return {
      ...openingHour,
      startTime: new Date(openingHour.startTime),
      endTime: new Date(openingHour.endTime),
    };
  });

  return await prisma.place.create({
    data: {
      name: name,
      description: description,
      address: address,
      latitude: latitude,
      longitude: longitude,
      phone: phone ?? "",
      instagram: instagram ?? "",
      website: website ?? "",
      imgUrl: imgUrl ?? "",
      tag: { connect: { name: tagName } },
      openingHours: {
        create: openingHoursPayload,
      },
      categories: {
        connectOrCreate: categories.map((category) => {
          return {
            where: { name: category },
            create: { name: category },
          };
        }),
      },
    },
    include: {
      openingHours: true,
      categories: true,
    },
  });
};

export const update = async (
  id: string,
  body: z.infer<typeof UpdatePlaceSchema>
) => {
  const {
    name,
    description,
    address,
    latitude,
    longitude,
    phone,
    instagram,
    website,
    imgUrl,
    tagName,
    openingHours,
    categories,
  } = body;

  const openingHoursPayload = openingHours.map((openingHour) => {
    return {
      ...openingHour,
      startTime: new Date(openingHour.startTime),
      endTime: new Date(openingHour.endTime),
    };
  });

  return await prisma.place.update({
    where: { id },
    data: {
      name: name,
      description: description,
      address: address,
      latitude: latitude,
      longitude: longitude,
      phone: phone ?? "",
      instagram: instagram ?? "",
      website: website ?? "",
      imgUrl: imgUrl ?? "",
      tag: { connect: { name: tagName } },
      openingHours: {
        update: openingHoursPayload.map((openingHour) => {
          const { id: idOpeningHour, ...openingHourData } = openingHour;
          return {
            data: { ...openingHourData },
            where: {
              id: idOpeningHour,
            },
          };
        }),
      },
      categories: {
        connectOrCreate: categories.map((category) => {
          return {
            where: { name: category },
            create: { name: category },
          };
        }),
      },
    },
  });
};
