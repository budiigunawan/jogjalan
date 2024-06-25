import { prisma } from "../lib/db";

export const getAll = async () => {
  const tags = await prisma.tag.findMany();
  return tags;
};

export const getDetailById = async (id: string) => {
  const tag = await prisma.tag.findUnique({
    where: { id },
  });

  return tag;
};

export const deleteAll = async () => {
  return await prisma.tag.deleteMany();
};

export const deleteById = async (id: string) => {
  return await prisma.tag.delete({ where: { id } });
};
