"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Brand, Category } from "@/types";

interface MainNavProps {
  data: Brand[];
  data1: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data, data1 }) => {
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
    <div className="flex items-center justify-center gap-2">
      {routes.map((route) => (
        <a
          key={route.href}
          href={route.href}
          className={cn(
            "rounded-full bg-black py-2 px-5 text-lg font-medium transition-colors hover:text-white hover:bg-[#FB6D11]",
            route.active ? "bg-[#FB6D11] text-white" : "text-white"
          )}
        >
          {route.label}
        </a>
      ))}
      {routes1.map((route) => (
        <a
          key={route.href}
          href={route.href}
          className={cn(
            "rounded-full bg-black py-2 px-5 text-lg font-medium transition-colors hover:text-white hover:bg-[#FB6D11]",
            route.active ? "bg-[#FB6D11] text-white" : "text-white"
          )}
        >
          {route.label}
        </a>
      ))}
    </div>
  );
};

export default MainNav;
