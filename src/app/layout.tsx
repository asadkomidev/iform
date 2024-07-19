import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAuthUser } from "@/backend/utilities/utils";
import { QueryProvider } from "@/providers/query-provider";

import { Toaster } from "sonner";

import ElementContextProvider from "@/context/element-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme.",
  description: "Acme.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isAuth } = await getAuthUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <QueryProvider>
          <ElementContextProvider>{children}</ElementContextProvider>
          <Toaster offset={"20px"} />
        </QueryProvider>
      </body>
    </html>
  );
}
