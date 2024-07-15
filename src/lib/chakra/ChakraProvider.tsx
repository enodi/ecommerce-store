"use client";
import { ChakraProvider as Provider } from "@chakra-ui/react";

import { theme } from "@/lib/chakra/theme";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <Provider theme={theme}>{children}</Provider>;
}
