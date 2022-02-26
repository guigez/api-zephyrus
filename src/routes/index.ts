import { Request, Response, Router } from "express";

import { CreateUserController } from "../modules/users/useCase/createUser/createUserController";

const routes = Router();

const createUserController = new CreateUserController();

routes.get("/", (request: Request, response: Response) => {
  response.send("Server On-line!");
});

//  create a user
routes.post("/users", createUserController.handle);

export { routes };
