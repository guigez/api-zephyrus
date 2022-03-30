import { Request, Response } from "express";

import { SuggestionCreateUseCase } from "./suggestionCreateUseCase";

export class SuggestionCreateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { deliveryId, priceSuggestion } = request.body;

    const suggestionCreateUseCase = new SuggestionCreateUseCase();

    const suggestion = await suggestionCreateUseCase.execute({
      id,
      deliveryId,
      priceSuggestion,
    });

    return response.json(suggestion);
  }
}
