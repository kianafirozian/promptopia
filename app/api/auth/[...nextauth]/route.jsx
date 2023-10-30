import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// to handle authentications
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as Get, handler as Post };
