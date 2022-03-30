import { prisma } from "../../../../database/prismaClient";

export class UpdateStatusUseCase {
  async execute(id_delivery: string, status: string) {
    const delivery = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        status,
      },
    });

    return delivery;
  }
}
