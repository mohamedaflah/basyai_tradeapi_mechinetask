import { prisma } from "../config/prisma.config";

export const createTradeService = async (payload: any) => {
  return await prisma.trade.create({
    data: {
      ...payload,
      timestamp: new Date(),
    },
  });
};

