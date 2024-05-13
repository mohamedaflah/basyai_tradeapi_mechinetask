import { prisma } from "../config/prisma.config";
import { getTradeByIdService } from "./getTradeById";

export const deleteTradeById = async (id: string) => {
  const tradeExist = await getTradeByIdService(Number(id));
  if (!tradeExist) {
    return null;
  }
  const deletedTrade = await prisma.trade.delete({
    where: { id: Number(id) },
  });
  return deletedTrade;
};
