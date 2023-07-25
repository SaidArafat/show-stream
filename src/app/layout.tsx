import { ReactNode } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/globals.css";
import Navbar from "@/components/ui/layout/navbar";
import Footer from "@/components/ui/layout/footer";

export const metadata = {
  title: "Home",
  description: "Tv shows application",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="px-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
