import { z } from "zod";
import { identifierSchema } from "./common";

export const walletLinkSchema = z.object({
  walletAddress: identifierSchema,
  status: z.enum(["not_connected", "connected", "revoked"]),
});

export type WalletLink = z.infer<typeof walletLinkSchema>;
