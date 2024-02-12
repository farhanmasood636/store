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
          content="Direct promotion compares deals on Refurbished Cell Phones, iPhones, Tablets, iPads, Smartwatches, 
          MacBooks & more. Direct promotion compares prices from the leading brands to help you find the best deals on 
          Refurbished devices. Save yourself the time and hassle of shopping around by using directpromotion.online to compare all 
          the best deals in one place. Direct promotion carries some of the best deals for refurbished phones in the USA, but one of 
          the many winning factors for buying refurbished is the significantly reduced prices on refurbished models that work as great as
           new! All our refurbished phones are professionally checked and tested with detailed quality checkpoints. We believe in transparency so
            we make it a priority to always inform our customers of any cosmetic flaws that may be present with our refurbished phones. No matter 
            the physical condition, all our devices are 100% functional and come with 15 days free check warranty."
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
