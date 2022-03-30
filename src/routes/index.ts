import { Request, Response, Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateSessionController } from "../modules/Account/useCases/createSession/createSessionController";
import { DeliveryController } from "../modules/Deliveries/useCases/delivery/deliveryController";
import { FindClientController } from "../modules/Deliveries/useCases/findClient/findClientController";
import { ListDeliveriesAvailableController } from "../modules/Deliveries/useCases/listDeliveriesAvailable/listDeliveriesAvailableController";
import { ListDeliveriesClientController } from "../modules/Deliveries/useCases/listDeliveriesClient/listDeliveriesClientController";
import { ListDeliveriesDeliverymanController } from "../modules/Deliveries/useCases/listDeliveriesDeliveryman/listDeliveriesDeliverymanController";
import { SuggestionAcceptController } from "../modules/Deliveries/useCases/suggestionAccept/suggestionAcceptController";
import { SuggestionAvailableController } from "../modules/Deliveries/useCases/suggestionAvailable/suggestionAvailableController";
import { SuggestionCreateController } from "../modules/Deliveries/useCases/suggestionCreate/suggestionCreateController";
import { SuggestionDeclineController } from "../modules/Deliveries/useCases/suggestionDecline/suggestionDeclineController";
import { UpdateStatusController } from "../modules/Deliveries/useCases/updateStatus/updateStatusController";

const routes = Router();

const createSessionController = new CreateSessionController();
const listDeliveriesAvailableController =
  new ListDeliveriesAvailableController();
const listDeliveriesClientController = new ListDeliveriesClientController();
const listDeliveriesDeliverymanController =
  new ListDeliveriesDeliverymanController();
const suggestionCreateController = new SuggestionCreateController();

const suggestionAcceptController = new SuggestionAcceptController();
const suggestionDeclineController = new SuggestionDeclineController();
const suggestionAvailableController = new SuggestionAvailableController();
const deliveryController = new DeliveryController();
const findClientController = new FindClientController();
const updateStatusController = new UpdateStatusController();

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
  "/deliveries/:id_delivery",
  ensureAuthenticated,
  deliveryController.handle
);

routes.get(
  "/deliveriesClient",
  ensureAuthenticated,
  listDeliveriesClientController.handle
);

routes.get(
  "/deliveriesDeliveryman",
  ensureAuthenticated,
  listDeliveriesDeliverymanController.handle
);

routes.post(
  "/deliveries/suggestion",
  ensureAuthenticated,
  suggestionCreateController.handle
);

routes.put(
  "/deliveries/suggestion/accept/:suggestionId",
  ensureAuthenticated,
  suggestionAcceptController.handle
);

routes.delete(
  "/deliveries/suggestion/decline/:id",
  ensureAuthenticated,
  suggestionDeclineController.handle
);

routes.get(
  "/deliveries/suggestion/availables/:deliveryId",
  ensureAuthenticated,
  suggestionAvailableController.handle
);

routes.get(
  "/client/:id_client",
  ensureAuthenticated,
  findClientController.handle
);

routes.put(
  "/delivery/status",
  ensureAuthenticated,
  updateStatusController.handle
);

export { routes };
