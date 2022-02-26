import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../error/AppError";

interface IRequest {
  id: string;
  email: string;
  name: string;
}

export class CreateUserUseCase {
  async execute({ id, email, name }: IRequest) {
    const userExist = await prisma.users.findFirst({
      where: {
        id, // id = id
      },
    });

    if (userExist) {
      throw new AppError("Client already exists");
    }

    const user = await prisma.users.create({
      data: {
        id,
        email,
        name,
      },
    });

    return user;
  }
}
