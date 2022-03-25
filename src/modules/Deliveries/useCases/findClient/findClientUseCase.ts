import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../error/AppError";

export class FindClientUseCase {
  async execute(id_client: string) {
    const client = prisma.users.findFirst({
      where: {
        id: id_client,
      },
    });

    if (!client) {
      throw new AppError("Cliente não encontrado");
    }
    return client;
  }
}
