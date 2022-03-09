import { Request, Response, Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateSessionController } from "../modules/Account/useCases/createSession/createSessionController";
import { ListDeliveriesAvailableController } from "../modules/Deliveries/useCases/listDeliveriesAvailable/listDeliveriesAvailableController";

const routes = Router();

const createSessionController = new CreateSessionController();
const listDeliveriesAvailableController =
  new ListDeliveriesAvailableController();

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

export { routes };
