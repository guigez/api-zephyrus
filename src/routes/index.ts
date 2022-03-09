import { Request, Response, Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateSessionController } from "../modules/Account/useCases/createSession/createSessionController";
import { ListDeliveriesAvailableController } from "../modules/Deliveries/useCases/listDeliveriesAvailable/listDeliveriesAvailableController";
import { ListDeliveriesClientController } from "../modules/Deliveries/useCases/listDeliveriesClient/listDeliveriesClientController";
import { ListDeliveriesDeliverymanController } from "../modules/Deliveries/useCases/listDeliveriesDeliveryman/listDeliveriesDeliverymanController";

const routes = Router();

const createSessionController = new CreateSessionController();
const listDeliveriesAvailableController =
  new ListDeliveriesAvailableController();
const listDeliveriesClientController = new ListDeliveriesClientController();
const listDeliveriesDeliverymanController =
  new ListDeliveriesDeliverymanController();

routes.get("/", (request: Request, response: Response) => {
  response.send("Server On-line!");
});

//  create a session
routes.post("/session", createSessionController.handle);

// deliveries
routes.get(
  "/deliveries",
  ensureAuthenticated,
  listDeliveriesAvailableController.handle
);

routes.get(
  "/deliveries/client",
  ensureAuthenticated,
  listDeliveriesClientController.handle
);

routes.get(
  "/deliveries/deliveryman",
  ensureAuthenticated,
  listDeliveriesDeliverymanController.handle
);

export { routes };
