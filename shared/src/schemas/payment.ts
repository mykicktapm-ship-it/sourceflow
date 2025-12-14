import { z } from "zod";
import { identifierSchema, positiveNumberSchema, timestampSchema } from "./common";

export const paymentIntentSchema = z.object({
  intentId: identifierSchema,
  userId: identifierSchema,
  type: z.enum(["topup", "order", "tariff", "service"]),
  refId: identifierSchema.optional(),
  amountTon: positiveNumberSchema,
  payload: z.string(),
  status: z.enum(["created", "pending", "success", "failed", "expired"]),
  expiresAt: timestampSchema,
  createdAt: timestampSchema,
});

export type PaymentIntent = z.infer<typeof paymentIntentSchema>;
