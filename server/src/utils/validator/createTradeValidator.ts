import { z } from "zod";

export const createTradeSchema = z.object({
  type: z.string().nonempty(),
  user_id: z.number(),
  symbol: z.string().nonempty(),
  shares: z.number(),
  price: z.number(),
});
