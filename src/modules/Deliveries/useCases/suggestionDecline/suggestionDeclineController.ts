import { Request, Response } from "express";

import { SuggestionDeclineUseCase } from "./suggestionDeclineUseCase";

export class SuggestionDeclineController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const suggestionDeclineUseCase = new SuggestionDeclineUseCase();

    const suggestion = await suggestionDeclineUseCase.execute(id);

    return response.json(suggestion);
  }
}
