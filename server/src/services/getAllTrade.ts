import { prisma } from "../config/prisma.config";

export const getAllTradeService = async (query: any) => {
  let whereClause: any = {};

  if (query) {
    if (query) {
      Object.keys(query).forEach((key) => {
        if (["id", "price", "shares", "user_id"].includes(key)) {
          query[key] = Number(query[key]);
        }
      });
    }
    Object.keys(query).forEach((key) => {
      if (
        [
          "type",
          "user_id",
          "symbol",
          "shares",
          "price",
          "timestamp",
          "id",
        ].includes(key)
      ) {
  
        whereClause[key] = query[key];
      }
    });
  }


  return await prisma.trade.findMany({
    where: whereClause,
    orderBy: {
      id: "asc",
    },
  });
};
