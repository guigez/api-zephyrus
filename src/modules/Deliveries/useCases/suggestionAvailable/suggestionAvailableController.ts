import { Request, Response } from "express";

import { SuggestionAvailableUseCase } from "./suggestionAvailableUseCase";

export class SuggestionAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { deliveryId } = request.params;

    const suggestionAvailableUseCase = new SuggestionAvailableUseCase();

    const suggestions = await suggestionAvailableUseCase.execute(deliveryId);

    return response.json({ suggestions });
  }
}
