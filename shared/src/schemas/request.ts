import { z } from "zod";
import { identifierSchema, timestampSchema, optionalStringSchema } from "./common";

export const requestTicketSchema = z.object({
  requestId: identifierSchema,
  userId: identifierSchema,
  topic: z.string(),
  message: z.string(),
  link: optionalStringSchema,
  status: z.enum(["new", "in_review", "done"]),
  createdAt: timestampSchema,
});

export type RequestTicket = z.infer<typeof requestTicketSchema>;
