import { Request, Response } from "express";

import { CreateSessionUseCase } from "./createSessionUseCase";

export class CreateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name } = request.body;
    const createSessionUseCase = new CreateSessionUseCase();

    const session = await createSessionUseCase.execute({
      email,
      name,
    });

    return response.json(session);
  }
}
