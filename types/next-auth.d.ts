import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    userName: string | null;
    expires: string;
    picture: string;
    jti: string;
    accessToken: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      userName?: string | null;
      expires: string;
      picture: string;
    };
    picture: string;
    jti: string;
    accessToken: string;
  }
}
