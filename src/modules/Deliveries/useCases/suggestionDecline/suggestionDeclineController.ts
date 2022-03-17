import { Request, Response } from "express";

import { SuggestionDeclineUseCase } from "./suggestionDeclineUseCase";

export class SuggestionDeclineController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { suggestionId } = request.body;
    const suggestionDeclineUseCase = new SuggestionDeclineUseCase();
    console.log(suggestionId);
    const suggestion = await suggestionDeclineUseCase.execute(suggestionId);

    return response.json(suggestion);
  }
}
