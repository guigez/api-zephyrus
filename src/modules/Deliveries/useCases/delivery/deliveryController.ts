import { Request, Response } from "express";

import { DeliveryUseCase } from "./deliveryUseCase";

export class DeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_delivery } = request.params;

    const deliveryUseCase = new DeliveryUseCase();

    const delivery = await deliveryUseCase.execute(id_delivery);

    return response.json({ delivery });
  }
}
