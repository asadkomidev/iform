import DashboardNavbar from "@/modules/dashboard/navbar/dashboard-navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted min-h-screen p-4 fixed inset-0 top-0 bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto bg-background rounded-lg border shadow-sm h-[calc(100vh-30px)]">
        <DashboardNavbar />
        <div className="h-[calc(100vh-80px)] rounded-lg max-w-5xl mx-auto  overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}
