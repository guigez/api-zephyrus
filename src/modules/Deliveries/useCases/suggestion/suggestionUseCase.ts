import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../error/AppError";

interface IRequest {
  id: string;
  deliveryId: string;
  priceSuggestion: string;
}

export class SuggestionUseCase {
  async execute({ id, deliveryId, priceSuggestion }: IRequest) {
    // verifica se o entregador é dono da encomenda
    if (id === deliveryId) {
      throw new AppError("Encomenda não pode ser entregue por você mesmo");
    }

    const delivery = prisma.deliveries.findFirst({
      where: {
        id: deliveryId,
      },
    });

    if (!delivery) {
      throw new AppError("Encomenda não encontrada");
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
