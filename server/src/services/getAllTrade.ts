import { prisma } from "../config/prisma.config";

export const getAllTradeService = async (query: any) => {
    let whereClause:any = {};

    
    if (query) {
      // Iterate over each key in the query object
      Object.keys(query).forEach((key) => {
        // Check if the key is valid for filtering trades
        if (['type', 'user_id','symbol','shares','price','timestamp'].includes(key)) {
          // Add condition to the where clause
          whereClause[key] = query[key];
        }
      });
    }
  
    // Fetch trades based on the constructed where clause
    return await prisma.trade.findMany({
      where: whereClause,
      orderBy: {
        id: 'asc'
      }
    });
};
