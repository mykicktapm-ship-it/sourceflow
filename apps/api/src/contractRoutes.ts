import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import type { AnyHttpContract, InferContractRequest, InferContractResponse } from 'shared';

export type ContractRouteHandler<Contract extends AnyHttpContract> = (params: {
  request: FastifyRequest;
  reply: FastifyReply;
  validatedRequest: InferContractRequest<Contract>;
}) => Promise<InferContractResponse<Contract>> | InferContractResponse<Contract>;

export const registerHttpContractRoute = <Contract extends AnyHttpContract>({
  server,
  contract,
  handler,
}: {
  server: FastifyInstance;
  contract: Contract;
  handler: ContractRouteHandler<Contract>;
}) => {
  server.route({
    method: contract.method,
    url: contract.path,
    handler: async (request, reply) => {
      const requestValidation = contract.request.safeParse(request.body ?? {});

      if (!requestValidation.success) {
        request.log.error(
          { err: requestValidation.error },
          `${contract.path} request validation failed`,
        );

        return reply.status(400).send({ status: 'error', message: 'Invalid request' });
      }

      try {
        const businessPayload = await handler({
          request,
          reply,
          validatedRequest: requestValidation.data,
        });

        const responseValidation = contract.response.safeParse(businessPayload);

        if (!responseValidation.success) {
          request.log.error(
            { err: responseValidation.error },
            `${contract.path} response validation failed`,
          );

          return reply.status(500).send({ status: 'error', message: 'Invalid response payload' });
        }

        return reply.send(responseValidation.data);
      } catch (error) {
        request.log.error({ err: error }, `${contract.path} handler execution failed`);
        throw error;
      }
    },
  });
};
