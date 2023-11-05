"use client";
import { SessionProvider } from "next-auth/react";
// hoc higher order component to wrap other components with it

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
