import { prisma } from "../config/prisma.config";
import { getTradeByIdService } from "./getTradeById";

export const updateTradeByIdService = async (id: string, data: any) => {
  const tradeExist = await getTradeByIdService(id);
  if (!tradeExist) {
    return null;
  }
  return await prisma.trade.update({
    where: { id: Number(id) },
    data: { ...data },
  });
};
