import { sign } from "jsonwebtoken";

import auth from "../../../../config/auth";
import { prisma } from "../../../../database/prismaClient";

interface IRequest {
  email: string;
  name: string;
}

export class CreateSessionUseCase {
  async execute({ email, name }: IRequest) {
    let user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      user = await prisma.users.create({
        data: {
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
