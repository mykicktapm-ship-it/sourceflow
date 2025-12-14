import { z } from "zod";
import { identifierSchema, optionalStringSchema, positiveNumberSchema, urlSchema } from "./common";

export const serviceItemSchema = z.object({
  serviceId: identifierSchema,
  title: z.string(),
  description: optionalStringSchema,
  priceTon: positiveNumberSchema,
  imageUrl: urlSchema.optional(),
});

export const tariffItemSchema = z.object({
  tariffId: identifierSchema,
  title: z.string(),
  description: optionalStringSchema,
  priceTon: positiveNumberSchema,
  imageUrl: urlSchema.optional(),
});

export type ServiceItem = z.infer<typeof serviceItemSchema>;
export type TariffItem = z.infer<typeof tariffItemSchema>;
