import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  // configure the client
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});
