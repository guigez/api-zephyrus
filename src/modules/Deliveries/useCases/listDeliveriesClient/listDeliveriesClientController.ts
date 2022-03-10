import { Request, Response } from "express";

import { ListDeliveriesClientUseCase } from "./listDeliveriesClientUseCase";

export class ListDeliveriesClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listDeliveriesClientUseCase = new ListDeliveriesClientUseCase();

    const deliveriesClient = await listDeliveriesClientUseCase.execute(id);

    return response.json({ deliveries: deliveriesClient });
  }
}
