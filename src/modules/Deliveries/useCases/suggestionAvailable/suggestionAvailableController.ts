import { Request, Response } from "express";

import { SuggestionAvailableUseCase } from "./suggestionAvailableUseCase";

export class SuggestionAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deliveryId = request.query;
    const suggestionAcceptUseCase = new SuggestionAvailableUseCase();

    const suggestions = await suggestionAcceptUseCase.execute(
      deliveryId as unknown as string
    );

    return response.json({ suggentions: suggestions });
  }
}
