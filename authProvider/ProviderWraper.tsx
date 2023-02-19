"use client";

import { SessionProvider } from "next-auth/react";

function ProviderWraper({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default ProviderWraper;
