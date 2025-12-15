import type { HttpContract, InferContractResponse } from "shared";
import type { z } from "zod";

type AnyHttpContract = HttpContract<z.ZodTypeAny, z.ZodTypeAny>;

export async function fetchContract<Contract extends AnyHttpContract>(
  baseUrl: string,
  contract: Contract,
  requestData?: z.input<Contract["request"]>,
): Promise<InferContractResponse<Contract>> {
  const validatedRequest = contract.request.parse(requestData ?? {});

  const response = await fetch(`${baseUrl}${contract.path}`, {
    method: contract.method,
    ...(contract.method !== "GET"
      ? {
          body: JSON.stringify(validatedRequest),
          headers: { "Content-Type": "application/json" },
        }
      : {}),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const parsed = contract.response.safeParse(payload);

  if (!parsed.success) {
    throw new Error("Response validation failed");
  }

  return parsed.data;
}
