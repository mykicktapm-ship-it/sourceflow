import { z } from "zod";
import { identifierSchema, optionalStringSchema } from "./common";

export const metricsLockSchema = z.object({
  orderId: identifierSchema,
  unlocked: z.boolean(),
  reason: optionalStringSchema,
});

export type MetricsLock = z.infer<typeof metricsLockSchema>;
