import { prisma } from "../config/prisma.config";

export const updatePostByIdService = async (id: string, data: any) => {
  return await prisma.trade.updat({
    where: { id: Number(id) },
    data: { ...data },
  });
};
