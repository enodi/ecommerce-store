import type { Metadata } from "next";

import "@/app/globals.css";
import { fonts } from "@/lib/chakra/fonts";
import { ChakraProvider } from "@/lib/chakra/ChakraProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.lato.variable}>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
