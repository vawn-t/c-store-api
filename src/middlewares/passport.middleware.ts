// Libraries
import Passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

// Prisma
import { UserStatus } from '@prisma/client';
import prisma from '../prisma';

const middlewarePassportStrategy = (passport: typeof Passport) => {
  // Config strategy for authentication token
  passport.use(
    'jwt-auth',
    new Strategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: process.env.JWT_AUTHENTICATE_SECRET,
      },
      async (payload, done) => {
        try {
          const user = await prisma.user.findFirst({
            where: { id: payload.userId },
          });

          if (!!user && user.status === UserStatus.ACTIVE) {
            return done(null, user);
          }

          return done(null, false);
        } catch (error) {
          done(error);
        }
      }
    )
  );
  // Config strategy for verify otp token
  passport.use(
    'jwt-verify-otp',
    new Strategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: process.env.JWT_AUTHENTICATE_OTP_SECRET,
      },
      async (payload, done) => {
        try {
          const user = await prisma.user.findFirst({
            where: { id: payload.userId },
          });

          if (!!user && user.status === UserStatus.PRE_ACTIVE) {
            return done(null, user);
          }

          return done(null, false);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};

export { middlewarePassportStrategy };
