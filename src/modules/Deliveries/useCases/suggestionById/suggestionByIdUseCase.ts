import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../error/AppError";

export class SuggestionByIdUseCase {
  async execute(id: string) {
    const suggestion = await prisma.suggestions.findFirst({
      where: {
        id,
      },
      include: {
        deliveryman: true,
      },
    });

    if (!suggestion) throw new AppError("Sugestão não encontrada!");

    return suggestion;
  }
}
