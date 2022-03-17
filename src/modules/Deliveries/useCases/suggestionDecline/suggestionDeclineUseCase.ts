import { prisma } from "../../../../database/prismaClient";

export class SuggestionDeclineUseCase {
  async execute(suggestionId: string) {
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
  }
}
