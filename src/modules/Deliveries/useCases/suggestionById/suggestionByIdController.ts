import { Request, Response } from "express";

import { SuggestionByIdUseCase } from "./suggestionByIdUseCase";

export class SuggestionByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const suggestionByIdUseCase = new SuggestionByIdUseCase();

    const suggestion = await suggestionByIdUseCase.execute(id);

    return response.json({ suggestion });
  }
}
