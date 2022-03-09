import { Request, Response } from "express";

import { CreateSessionUseCase } from "./createSessionUseCase";

export class CreateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email, name } = request.body;

    const createSessionUseCase = new CreateSessionUseCase();

    const session = await createSessionUseCase.execute({ id, email, name });

    return response.json(session);
  }
}