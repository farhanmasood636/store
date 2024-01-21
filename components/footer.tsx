import { Facebook, Instagram, Mail, PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard, FaCcDiscover } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import Container from "./ui/container";

const links = [
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
  {
    href: "/disclaimer",
    label: "Disclaimer",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    href: "/refund-policy",
    label: "Refund Policy",
  },
  {
    href: "/accessibility-statement",
    label: "Accessibility Statements",
  },
  {
    href: "/cookies-policy",
    label: "Cookies Policy",
  },
  {
    href: "/terms",
    label: "Terms & Conditions",
  },
];

const Footer = () => {
  return (
    <div className="bg-black p-5 py-10">
      <Container>
        <div className="flex flex-col bg-black justify-between">
          <div className="flex justify-between gap-12 flex-wrap w-[100%]">
            <div className="flex flex-col gap-10">
              <h1 className="text-[#FB6D11] text-xl font-bold"> Contact</h1>
              <div className="flex gap-5 items-center">
                <PhoneCall className="h-4 w-4 text-white" />
                <div className="text-white flex flex-col text-sm gap-2">
                  <p>+1 (786) 772-5533</p>
                  <p>9 AM – 6 PM EST</p>
                  <p>Monday to Saturday</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <Mail className="h-4 w-4 text-white" />
                <div className="text-white flex flex-col text-sm gap-2">
                  <p>Email Us</p>
                  <a href="mailto:support@directpromotion.online">
                    support@directpromotion.online
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-[#FB6D11] text-xl font-bold">
                Connect With Us
              </h1>
              <div className="flex gap-10 justify-center items-center">
                <a
                  href="https://instagram.com/direct_promotiononline?igshid=NzZlODBkYWE4Ng=="
                  target="_blank"
                >
                  <Facebook className="h-8 w-8 text-white hover:text-[#FB6D11]" />
                </a>
                <a
                  href="https://instagram.com/direct_promotiononline?igshid=NzZlODBkYWE4Ng=="
                  target="_blank"
                >
                  <Instagram className="h-8 w-8 text-white hover:text-[#FB6D11]" />
                </a>
                <a href="https://wa.me/+17867725533" target="_blank">
                  <BsWhatsapp className="h-8 w-8 text-white hover:text-[#FB6D11]" />
                </a>
              </div>
              <div className="flex gap-10 justify-center items-center">
                <img
                  src="/logos/visa.svg"
                  alt="visa logo"
                  className="h-10 w-10"
                />
                <img
                  src="/logos/mastercard.svg"
                  alt="mastercard logo"
                  className="h-10 w-10"
                />
                <img
                  src="/logos/american-express.svg"
                  alt="american express logo"
                  className="h-10 w-10"
                />
                <img
                  src="/logos/discover.svg"
                  alt="discover logo"
                  className="h-10 w-10"
                />
                <img
                  src="/logos/bank-transfer.png"
                  alt="discover logo"
                  className="h-10 w-10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className=" text-sm text-white hover:text-[#FB6D11] font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm text-white text-center font-bold">
            2023 All Rights Reserved – A&A Phone Servcies LLC
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
