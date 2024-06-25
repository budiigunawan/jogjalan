import { prisma } from "../lib/db";

export const getAll = async () => {
  const tags = await prisma.tag.findMany();
  return tags;
};
