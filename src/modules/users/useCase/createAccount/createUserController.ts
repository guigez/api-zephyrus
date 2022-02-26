import { Request, Response } from "express";

import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email, name } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({ id, email, name });

    return response.json(user);
  }
}
