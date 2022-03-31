import { prisma } from "../../../../database/prismaClient";

export class DeliveryUseCase {
  async execute(id_delivery: string) {
    const delivery = await prisma.deliveries.findFirst({
      where: {
        id: id_delivery,
      },
      include: {
        order: true,
        deliveryman: true,
      },
    });

    return delivery;
  }
}
