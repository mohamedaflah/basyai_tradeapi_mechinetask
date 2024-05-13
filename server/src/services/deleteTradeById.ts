import { prisma } from "../config/prisma.config";

export const deleteTradeById = async (id: string) => {
  return await prisma.trade.delete({
    where: { id: Number(id) },
  });
};
