import { prisma } from "../../../../database/prismaClient";

export class SuggestionAvailableUseCase {
  async execute(deliveryId: string) {
    const suggestions = await prisma.suggestions.findMany({
      where: {
        id_delivery: deliveryId,
      },
    });

    return suggestions;
  }
}
