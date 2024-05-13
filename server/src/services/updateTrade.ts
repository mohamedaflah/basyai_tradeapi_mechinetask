import { prisma } from "../config/prisma.config";
import { getTradeByIdService } from "./getTradeById";

export const updateTradeByIdService = async (id: number, data: any) => {
  // console.log("🚀 ~ updateTradeByIdService ~ id:", id,' &&')
  // console.log("🚀 ~ updateTradeByIdService ~ data:", data,' ___')
  const tradeExist = await getTradeByIdService(id);
  if (!tradeExist) {
    return null;
  }
  return await prisma.trade.update({
    where: { id: Number(id) },
    data: { ...data },
  });
};
