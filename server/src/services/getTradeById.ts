import { prisma } from "../config/prisma.config";

export const getTradeByIdService = async (id: string) => {
  return await prisma.trade.findUnique({
    where: { id: Number(id) },
  });
};
