import { prisma } from "../../../../database/prismaClient";

export class SuggestionAvailableUseCase {
  async execute(deliveryId: string) {
    const suggestions = await prisma.suggestions.findMany({
      where: {
        id_delivery: deliveryId,
      },
      include: {
        deliveryman: true,
      },
    });

    return suggestions;
  }
}
