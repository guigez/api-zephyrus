import { prisma } from "../../../../database/prismaClient";

export class ListDeliveriesDeliverymanUseCase {
  async execute(id: string) {
    const deliveries = prisma.deliveries.findMany({
      where: {
        id_deliveryman: id,
      },
      include: {
        order: true,
      },
    });

    return deliveries;
  }
}
