"use client";

import { MenuIcon, ShoppingBag, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Brand, Category } from "@/types";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

interface NavbarActionProps {
  data: Brand[];
  data1: Category[];
}

const NavbarActions: React.FC<NavbarActionProps> = ({ data, data1 }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/brand/${route.id}`,
    label: route.name,
    active: pathname === `/brand/${route.id}`,
  }));

  const routes1 = data1
    .filter((route) => route.name !== "Mobile Phones")
    .map((route) => ({
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    }));

  return (
    <div className="flex items-center gap-x-4">
      <div className="max-md:flex">
      </div>
      <Button onClick={() => {
        router.refresh()
        router.push('/cart')
      }} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      <div className="hidden max-lg:flex items-center justify-between">
        {toggle ? (
          <XCircle className="h-6 w-6 hover:text-[#FB6D11]" onClick={() => setToggle(!toggle)} />
        ) : (
          <MenuIcon className="h-6 w-6 hover:text-[#FB6D11]" onClick={() => setToggle(!toggle)} />
        )}
        <div
          className={`${!toggle ? "hidden" : "flex flex-col gap-4"
            } bg-[#FB6D11] z-10 p-6 absolute top-20 right-2 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          {routes.map((route) => (
            <a
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                route.active
                  ? "text-white"
                  : "text-black"
              )}
              onClick={() => setToggle(!toggle)}
            >
              {route.label}
            </a>
          ))}
          {routes1.map((route) => (
            <a
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                route.active
                  ? "text-white"
                  : "text-black"
              )}
              onClick={() => setToggle(!toggle)}
            >
              {route.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarActions;