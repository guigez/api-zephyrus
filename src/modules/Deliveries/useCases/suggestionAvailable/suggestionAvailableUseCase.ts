import { prisma } from "../../../../database/prismaClient";

export class SuggestionAvailableUseCase {
  async execute(id: string) {
    const suggestions = await prisma.suggestions.findMany({
      where: {
        id_delivery: id,
      },
      include: {
        deliveryman: true,
      },
    });
    return suggestions;
  }
}
