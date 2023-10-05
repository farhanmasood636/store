import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoogleAnalytics from "./GoogleAnalytics";

import "./globals.css";

export const metadata = {
  title: "Direct Promotion",
  description: "Direct Promotion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
