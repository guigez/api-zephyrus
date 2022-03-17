import { Request, Response } from "express";

import { SuggestionAcceptUseCase } from "./suggestionAcceptUseCase";

export class SuggestionAcceptController {
  async handle(request: Request, response: Response): Promise<Response> {
    const suggestionId = request.query;
    const suggestionAcceptUseCase = new SuggestionAcceptUseCase();

    const delivery = await suggestionAcceptUseCase.execute(
      suggestionId as unknown as string
    );

    return response.json(delivery);
  }
}
