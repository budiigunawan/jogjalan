import { z } from "zod";
import { prisma } from "../lib/db";
import { CreateTagSchema } from "../schemas/tag-schema";

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

export const create = async (body: z.infer<typeof CreateTagSchema>) => {
  return await prisma.tag.create({
    data: {
      name: body.name,
    },
  });
};
