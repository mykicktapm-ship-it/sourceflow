import type { z } from "zod";

export type HttpContract<
  RequestSchema extends z.ZodTypeAny,
  ResponseSchema extends z.ZodTypeAny,
> = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  request: RequestSchema;
  response: ResponseSchema;
};

export type InferContractRequest<Contract extends HttpContract<z.ZodTypeAny, z.ZodTypeAny>> = z.infer<
  Contract["request"]
>;

export type InferContractResponse<Contract extends HttpContract<z.ZodTypeAny, z.ZodTypeAny>> = z.infer<
  Contract["response"]
>;

export type AnyHttpContract = HttpContract<z.ZodTypeAny, z.ZodTypeAny>;
