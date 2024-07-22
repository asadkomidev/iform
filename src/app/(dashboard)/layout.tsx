import DashboardNavbar from "@/global/navigation/dashboard-navbar/dashboard-navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted min-h-screen p-4 fixed inset-0 top-0 bottom-0 left-0 right-0 ">
      <div className="max-w-7xl mx-auto rounded-lg border shadow-sm h-[calc(100vh-30px)] bg-muted">
        <DashboardNavbar />
        <div className="h-[calc(100vh-80px)] rounded-lg max-w-5xl mx-auto  overflow-y-scroll no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
