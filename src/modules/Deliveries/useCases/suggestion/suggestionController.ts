import { Request, Response } from "express";

import { SuggestionUseCase } from "./suggestionUseCase";

export class SuggestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { deliveryId, priceSuggestion } = request.body;

    const suggestionUseCase = new SuggestionUseCase();

    console.log(deliveryId, priceSuggestion);

    const suggestion = await suggestionUseCase.execute({
      id,
      deliveryId,
      priceSuggestion,
    });

    return response.json(suggestion);
  }
}
