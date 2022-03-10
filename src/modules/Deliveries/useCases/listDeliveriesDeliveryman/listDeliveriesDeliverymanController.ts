import { Request, Response } from "express";

import { ListDeliveriesDeliverymanUseCase } from "./listDeliveriesDeliverymanUseCase";

export class ListDeliveriesDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listDeliveriesDeliverymanUseCase =
      new ListDeliveriesDeliverymanUseCase();

    const deliveriesDeliveryman =
      await listDeliveriesDeliverymanUseCase.execute(id);

    return response.json({ deliveries: deliveriesDeliveryman });
  }
}
