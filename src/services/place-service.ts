import { z } from "zod";
import { prisma } from "../lib/db";
import { CreatePlaceSchema, UpdatePlaceSchema } from "../schemas/place-schema";

export const getAll = async () => {
  const tags = await prisma.place.findMany();
  return tags;
};

export const getDetailById = async (id: string) => {
  const place = await prisma.place.findUnique({
    where: { id },
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
        create: categories,
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
  } = body;

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
    },
  });
};
