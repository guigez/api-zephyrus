import { prisma } from "../../../../database/prismaClient";

export class ListDeliveriesClientUseCase {
  async execute(id: string) {
    const deliveries = prisma.deliveries.findMany({
      where: {
        id_client: id,
      },
      include: {
        order: true,
      },
    });

    return deliveries;
  }
}
