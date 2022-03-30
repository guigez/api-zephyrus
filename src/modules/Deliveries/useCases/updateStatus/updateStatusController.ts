import { Request, Response } from "express";

import { UpdateStatusUseCase } from "./updateStatusUseCase";

export class UpdateStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_delivery, status } = request.body;

    console.log(id_delivery, status);

    const updateStatusUseCase = new UpdateStatusUseCase();

    const delivery = await updateStatusUseCase.execute(id_delivery, status);

    return response.json({ delivery });
  }
}
