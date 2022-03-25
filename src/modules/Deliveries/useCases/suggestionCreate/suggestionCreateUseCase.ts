import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../error/AppError";

interface IRequest {
  id: string;
  deliveryId: string;
  priceSuggestion: string;
}

export class SuggestionCreateUseCase {
  async execute({ id, deliveryId, priceSuggestion }: IRequest) {
    const delivery = await prisma.deliveries.findFirst({
      where: {
        id: deliveryId,
      },
    });

    if (!delivery) {
      throw new AppError("Encomenda não encontrada");
    }

    if (id === delivery.id_client) {
      throw new AppError("Encomenda não pode ser entregue por você mesmo");
    }

    const suggestionExist = await prisma.suggestions.findFirst({
      where: {
        id_deliveryman: id,
      },
    });

    if (suggestionExist) {
      throw new AppError("Você já sugeriu um valor");
    }

    const suggestion = await prisma.suggestions.create({
      data: {
        id_deliveryman: id,
        id_delivery: deliveryId,
        price: priceSuggestion,
      },
    });

    return suggestion;
  }
}
