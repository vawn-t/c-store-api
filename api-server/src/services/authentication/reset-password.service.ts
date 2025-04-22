// Libraries
import { StatusCodes } from 'http-status-codes';
import prisma from 'src/prisma';

// Helpers
import { sendResetPassword } from 'src/helpers/authentication';

interface IResetPasswordParameter {
  email: string;
  pwd: string;
}

interface ICreateServiceReturn {
  code: number;
  data: { msg?: string };
}

const resetPassword = async (
  params: IResetPasswordParameter
): Promise<ICreateServiceReturn> => {
  await sendResetPassword(params.email, params.pwd);

  return {
    code: StatusCodes.OK,
    data: {},
  };
};

export const resetPasswordService = {
  resetPassword,
};
