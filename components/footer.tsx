import { Facebook, Instagram, Mail, MessageCircleIcon, PhoneCall, } from "lucide-react";
import { BsWhatsapp } from 'react-icons/bs'
import { FaCcVisa, FaCcMastercard, FaCcDiscover } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'

const links = [
  {
    href: '/about',
    label: 'About Us'
  },
  {
    href: '/contact',
    label: 'Contact Us'
  },
  {
    href: '/privacy-policy',
    label: 'Privacy Policy'
  },
  {
    href: '/accessibility-statement',
    label: 'Accessibility Statements'
  },
  {
    href: '/terms',
    label: 'Terms & Conditions'
  },
]

const Footer = () => {
  return (
    <div className="bg-black w-[100%] flex flex-col p-5">
      <div className="flex flex-col bg-black py-10 mx-auto max-w-7xl gap-10">
        <div className="flex justify-between gap-12 flex-wrap">
          <div className="flex flex-col gap-10">
            <h1 className="text-[#FB6D11] text-xl font-bold"> Contact</h1>
            <div className="flex gap-5 items-center">
              <PhoneCall className="h-4 w-4 text-white" />
              <div className="text-white flex flex-col text-sm gap-2">
                <p>1.800.429.3553</p>
                <p>9am - 8pm EST</p>
                <p>Everyday</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Mail className="h-4 w-4 text-white" />
              <div className="text-white flex flex-col text-sm gap-2">
                <p>Email Us</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <MessageCircleIcon className="h-4 w-4 text-white" />
              <div className="text-white flex flex-col text-sm gap-2">
                <p>Live Chat</p>
                <p>9am - 8pm EST</p>
                <p>Everyday</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-[#FB6D11] text-xl font-bold">Connect With Us</h1>
            <div className="flex gap-10">
              <a href="https://instagram.com/direct_promotiononline?igshid=NzZlODBkYWE4Ng==" target="_blank">
                <Facebook className="h-8 w-8 text-white hover:text-[#FB6D11]" />
              </a>
              <a href="https://instagram.com/direct_promotiononline?igshid=NzZlODBkYWE4Ng==" target="_blank">
                <Instagram className="h-8 w-8 text-white hover:text-[#FB6D11]" />
              </a>
              <a href="https://wa.me/+1779-218-8306" target="_blank">
                <BsWhatsapp className="h-8 w-8 text-white hover:text-[#FB6D11]" />
              </a>
            </div>
            <div className="flex gap-10">
              <FaCcVisa className="h-10 w-10 text-white hover:text-[#FB6D11]" />
              <FaCcMastercard className="h-10 w-10 text-white hover:text-[#FB6D11]" />
              <SiAmericanexpress className="h-10 w-10 text-white hover:text-[#FB6D11]" />
              <FaCcDiscover className="h-10 w-10 text-white hover:text-[#FB6D11]" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {links.map((link, index) => (
              <a key={index} href={link.href} className=" text-sm text-white hover:text-[#FB6D11] font-semibold">{link.label}</a>
            ))}
          </div>
        </div>
        <p className="text-sm text-white text-center font-light">
          ©2014 - 2023 A&A Phone Solutions, LLC. All Rights Reserved, Patents Pending. Direct Promotion is not affiliated with nor has it been authorized, sponsored, or otherwise approved by the manufacturers of the items available for trade-in or purchase.
        </p>
      </div>
    </div>
  );
};

export default Footer;
