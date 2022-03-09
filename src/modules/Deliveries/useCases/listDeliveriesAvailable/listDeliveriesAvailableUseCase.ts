import { prisma } from "../../../../database/prismaClient";

export class ListDeliveriesAvailableUseCase {
  async execute(id: string) {
    const deliveriesAvailable = prisma.deliveries.findMany({
      where: {
        id_client: {
          not: id,
        },
      },
      include: {
        order: true,
      },
    });

    return deliveriesAvailable;
  }
}
