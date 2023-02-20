// lib/withSession.ts

import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";
import { UserSession } from "../types";
const sessionOptions = {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "myapp_cookiename",
  ttl: 15 * 24 * 3600,
  cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      httpOnly: true,
  },
};



export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSession<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, sessionOptions);
}



export const withAuth = (handler: (props: GetServerSidePropsResult<any>) => any) => {
  return withSession(async (req, res) => {
    const session = req.session.get<Session>('session');

    if (!session || !session.user) {
      res.setHeader('location', '/login');
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    const props = await handler({ props: {} });

    return props;
  });
// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    user?: UserSession;
  }
}




