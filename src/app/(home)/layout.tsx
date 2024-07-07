import { getAuthUser } from "@/backend/utilities/utils";
import Container from "@/components/container";
import Footer from "@/global/navigation/footer";
import Navbar from "@/global/navigation/navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isAuth } = await getAuthUser();
  return (
    <>
      <Navbar />
      <Container className="pt-16">{children}</Container>
      <Footer />
    </>
  );
}
