import { z } from "zod";

// Health check endpoint
export const HealthRequestSchema = z.object({});

export const HealthResponseSchema = z.object({
  status: z.literal("ok"),
  timestamp: z.string().datetime(),
});

export type HealthRequest = z.infer<typeof HealthRequestSchema>;
export type HealthResponse = z.infer<typeof HealthResponseSchema>;
