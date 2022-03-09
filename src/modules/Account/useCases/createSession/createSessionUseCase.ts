import { sign } from "jsonwebtoken";

import auth from "../../../../config/auth";
import { prisma } from "../../../../database/prismaClient";

interface IRequest {
  id: string;
  email: string;
  name: string;
}

export class CreateSessionUseCase {
  async execute({ id, email, name }: IRequest) {
    let user = await prisma.users.findFirst({
      where: {
        id, // id = id
      },
    });

    if (!user) {
      user = await prisma.users.create({
        data: {
          id,
          email,
          name,
        },
      });
    }

    const token = sign({}, auth.secret_token, {
      subject: user?.id,
      expiresIn: "1d",
    });

    return token;
  }
}
