import { prisma } from "../lib/db";

export const getAll = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

export const getDetailById = async (id: string) => {
  const category = await prisma.category.findUnique({
    where: { id },
  });

  return category;
};

export const deleteAll = async () => {
  return await prisma.category.deleteMany();
};

export const deleteById = async (id: string) => {
  return await prisma.category.delete({ where: { id } });
};
