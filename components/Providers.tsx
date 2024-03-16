"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <SessionProvider>{children}</SessionProvider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default Providers;
