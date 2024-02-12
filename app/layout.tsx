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
          content="At Direct Promotion, find the best deals on Refurbished Cell Phones, iPhones, Tablets, iPads, Smartwatches, MacBooks & more. Compare leading brands' prices and save time. All refurbished devices are thoroughly tested, ensuring functionality. Enjoy reduced prices and transparent information on cosmetic flaws. Shop now!"
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
