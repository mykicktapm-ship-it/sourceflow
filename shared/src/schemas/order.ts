import { z } from "zod";
import { identifierSchema, positiveNumberSchema, timestampSchema } from "./common";

export const orderSchema = z.object({
  orderId: identifierSchema,
  userId: identifierSchema,
  status: z.enum(["draft", "pending_payment", "paid", "active", "completed", "canceled"]),
  budget: positiveNumberSchema,
  geo: z.string(),
  sources: z.array(z.string()),
  createdAt: timestampSchema,
  expiresAt: timestampSchema.optional(),
});

export type Order = z.infer<typeof orderSchema>;
