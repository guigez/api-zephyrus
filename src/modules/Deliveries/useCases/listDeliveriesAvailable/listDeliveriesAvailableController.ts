import { Request, Response } from "express";

import { ListDeliveriesAvailableUseCase } from "./listDeliveriesAvailableUseCase";

export class ListDeliveriesAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listDeliveriesAvailableUseCase = new ListDeliveriesAvailableUseCase();

    const deliveriesAvailable = await listDeliveriesAvailableUseCase.execute(
      id
    );

    return response.json(deliveriesAvailable);
  }
}
