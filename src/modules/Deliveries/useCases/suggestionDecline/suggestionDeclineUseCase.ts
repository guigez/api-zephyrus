import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../error/AppError";

export class SuggestionDeclineUseCase {
  async execute(suggestionId: string) {
    try {
      const suggestion = await prisma.suggestions.delete({
        where: {
          id: suggestionId,
        },
        select: {
          id: true,
          price: true,
        },
      });

      return suggestion;
    } catch {
      throw new AppError("Sugestão já deletada");
    }
  }
}
