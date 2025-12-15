import { z } from "zod";

import type { HttpContract } from "./types";

// Health check endpoint
export const HealthRequestSchema = z.object({});

export const HealthResponseSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string().datetime(),
});

export type HealthRequest = z.infer<typeof HealthRequestSchema>;
export type HealthResponse = z.infer<typeof HealthResponseSchema>;

export const healthHttpContract: HttpContract<
  typeof HealthRequestSchema,
  typeof HealthResponseSchema
> = {
  method: "GET",
  path: "/health",
  request: HealthRequestSchema,
  response: HealthResponseSchema,
};
