import type { ZodSchema } from "zod";

export async function fetchJson<T>(url: string, schema: ZodSchema<T>): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    throw new Error("Response validation failed");
  }

  return parsed.data;
}
