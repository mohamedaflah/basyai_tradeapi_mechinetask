import { prisma } from "../config/prisma.config";

export const getTradeByIdService = async (id: number) => {
  // console.log("🚀 ~ getTradeByIdService ~ id:", id)
  const trade = await prisma.trade.findUnique({
    where: { id: Number(id) },
  });
  return trade ? trade : null;
};
