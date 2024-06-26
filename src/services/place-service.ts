import { prisma } from "../lib/db";

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
