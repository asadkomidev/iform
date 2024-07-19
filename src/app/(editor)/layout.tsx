export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted min-h-screen p-4 fixed inset-0 top-0 bottom-0 left-0 right-0">
      {children}
    </div>
  );
}
