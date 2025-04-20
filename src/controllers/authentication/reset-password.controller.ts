// Libraries
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// Service
import { resetPasswordService } from 'src/services/authentication';

import prisma from 'src/prisma';
import { generateHash, generatePassword } from 'src/utils';

const resetPassword = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: 'User not found' });
    }

    const pwd: string = generatePassword();

    const { hash: hashedPassword } = generateHash(pwd);

    const result = await resetPasswordService.resetPassword({
      email,
      pwd,
    });

    if (result.code !== StatusCodes.OK) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: 'Failed to reset password' });
    }

    // Update user password in the database
    await prisma.user.update({
      where: { email: email },
      data: {
        password: hashedPassword,
      },
    });

    res.status(result.code).json(result.data);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: (error as Error).message });
  }
};

export const resetPasswordController = {
  resetPassword,
};
