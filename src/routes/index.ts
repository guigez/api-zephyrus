import { Request, Response, Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateSessionController } from "../modules/Account/useCase/createSession/createSessionController";

const routes = Router();

const createSessionController = new CreateSessionController();

routes.get("/", (request: Request, response: Response) => {
  response.send("Server On-line!");
});

//  create a session
routes.post("/session", createSessionController.handle);

export { routes };
