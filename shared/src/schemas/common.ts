import { z } from "zod";

export const identifierSchema = z.string();
export const timestampSchema = z.string();
export const urlSchema = z.string().url();
export const nullableUrlSchema = urlSchema.optional();
export const optionalStringSchema = z.string().optional();
export const positiveNumberSchema = z.number().nonnegative();

export type Identifier = z.infer<typeof identifierSchema>;
export type Timestamp = z.infer<typeof timestampSchema>;
export type Url = z.infer<typeof urlSchema>;
