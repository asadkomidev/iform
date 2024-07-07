import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAuthUser } from "@/backend/utilities/utils";

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
        {children}
      </body>
    </html>
  );
}
