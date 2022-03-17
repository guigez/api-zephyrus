import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../error/AppError";

export class SuggestionAcceptUseCase {
  async execute(suggestionId: string) {
    const suggestion = await prisma.suggestions.findFirst({
      where: {
        id: suggestionId,
      },
    });

    if (!suggestion) {
      throw new AppError("Sugestão não encontrada");
    }

    const delivery = await prisma.deliveries.update({
      where: {
        id: suggestion.id_delivery,
      },
      data: {
        id_deliveryman: suggestion.id_deliveryman,
        price: suggestion.price,
      },
    });

    return delivery;
  }
}
