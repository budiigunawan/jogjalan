import { prisma } from "../lib/db";

export const getAll = async () => {
  const tags = await prisma.category.findMany();
  return tags;
};
