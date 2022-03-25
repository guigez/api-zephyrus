import { Request, Response } from "express";

import { FindClientUseCase } from "./findClientUseCase";

export class FindClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_client } = request.params;

    const findClientUseCase = new FindClientUseCase();

    const client = await findClientUseCase.execute(id_client);

    return response.json({ client });
  }
}
