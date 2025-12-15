import { z } from "zod";

export const ApiHealthCheckedEventSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string().datetime(),
});

export type ApiHealthCheckedEvent = z.infer<typeof ApiHealthCheckedEventSchema>;
