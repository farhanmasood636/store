import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
      <head>
        <meta
          title="description"
          content="Discover unbeatable deals on refurbished devices like iPhones, iPads, MacBooks, and more at Direct Promotion. Shop for refurbished iPhone, Apple refurbished iPhone, used iPhones for sale unlocked, cheap refurbished iPhone, Samsung smartwatch, smart watches, refurbished MacBook, refurbished MacBook Pro, best smartwatch, used iPhones, Apple smart watch, Android smartwatch, and used MacBook Air. Professionally tested with 15-day warranty. Shop confidently with transparent disclosure of cosmetic flaws. Save big, shop smart at Direct Promotion!"
        ></meta>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B6RE6MNBT3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B6RE6MNBT3');
            `,
          }}
        />
      </head>
      <body>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
