export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-muted">
      <main className="flex w-full flex-grow bg-muted">{children}</main>
    </div>
  );
}
