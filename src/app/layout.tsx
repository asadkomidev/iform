import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAuthUser } from "@/backend/utilities/utils";
import { QueryProvider } from "@/providers/query-provider";

import { Toaster } from "sonner";

import ElementContextProvider from "@/context/element-context";
import { Layout } from "@/components/layouts";
import { ThemeProvider } from "@/providers/theme-provider";

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
    <Layout>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
          disableTransitionOnChange>
          <QueryProvider>
            <ElementContextProvider>{children}</ElementContextProvider>
            <Toaster offset={"20px"} />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </Layout>
  );
}
