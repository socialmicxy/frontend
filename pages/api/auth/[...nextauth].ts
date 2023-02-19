import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const GOOGLE_CLIENT_ID: string =
  "38238582225-hje5o3llosp9rdeqhr09v57u3jhdpjqq.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET: string = "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";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
});
