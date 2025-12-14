import { z } from "zod";
import { identifierSchema, timestampSchema, nullableUrlSchema, optionalStringSchema } from "./common";

export const telegramUserSchema = z.object({
  telegramUserId: identifierSchema,
  username: optionalStringSchema,
  firstName: optionalStringSchema,
  avatarUrl: nullableUrlSchema,
});

export const sessionSchema = z.object({
  token: z.string(),
  expiresAt: timestampSchema,
});

export type TelegramUser = z.infer<typeof telegramUserSchema>;
export type Session = z.infer<typeof sessionSchema>;
