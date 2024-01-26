import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToMongoDB from "@/lib/db/dbAdaptor";
import dbOptions from "./dbAuthOptions";
import connectMongoDB from "../db/dbNativeConnect";
import { nanoid } from "nanoid";
import { ObjectId } from "mongodb";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(connectToMongoDB(), dbOptions),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: "nosecret",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      console.log(session, token, "misti");
      return {
        ...token,
        userId: token.id,
        image: token.picture,
        expires: new Date("2024 Dec 12").toISOString(),
      };
      return token;
    },

    async jwt({ token, user }) {
      console.log(token, user, "alla");
      const db = await connectMongoDB();
      const dbUser = await db
        .collection("users")
        .findOne({ _id: new ObjectId(token.sub) });
      if (!dbUser) {
        token.id = token!.id;
        return token;
      }

      if (!dbUser.username) {
        await db.collection("user").updateOne(
          {
            _id: dbUser.id,
          },
          {
            $set: {
              userName: nanoid(10),
            },
          }
        );
      }
      if (user) {
        token.accessToken = user.access_token;
        token.id = user.id;
      }
      console.log(token);
      return {
        id: dbUser._id.toHexString(),
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        userName: dbUser.username,
        expires: new Date("2024 Dec 12").toISOString(),
        sessionToken: token.jti,
      };
    },
    redirect() {
      return "/";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
