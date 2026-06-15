"use client";

import Link from "next/link";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";
import Image from "next/image";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <Image
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-50 h-auto hidden md:block"
              width={2470}
              height={520}
            />
            {/* Mobile Logo */}
            <Image
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-10 h-auto block md:hidden"
              width={199}
              height={172}
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <NavLink
            href="/3d-models"
            isActive={pathname.startsWith("/3d-models")}
          >
            3D Models
          </NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
