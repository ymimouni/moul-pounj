"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";

const matelasMenu = [
  { label: "Matelas en mousse", href: "/matelas?filter=mousse" },
  { label: "Matelas à ressorts ensachés", href: "/matelas?filter=ressorts" },
  { label: "Salon Marocain", href: "/matelas?filter=salon" },
  { label: "Accessoires", href: "/matelas?filter=accessoires" },
  { label: "Tous les produits", href: "/matelas" },
];

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Matelas", href: "/matelas", dropdown: true },
  { label: "Nos Magasins", href: "/nos-magasins" },
  { label: "À propos", href: "/a-propos" },
  { label: "Conseils", href: "/conseils" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-[#f2622e] text-white text-xs">
        <div className="max-w-[1200px] mx-auto px-4 h-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-medium">
              Livraison gratuite partout au Maroc
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/90">
            <span>Paiement à la livraison</span>
            <span>Fabriqué au Maroc 🇲🇦</span>
            <span className="flex items-center gap-1 font-semibold text-white">
              <Phone className="w-3 h-3" />
              06 61 47 51 36
            </span>
          </div>
        </div>
      </div>

      {/* Main nav — dark navy */}
      <div className="bg-[#0f1b2e]">
        <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/Logo-V2-scaled.png"
              alt="Moul Pounj"
              width={160}
              height={60}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("?")[0]);
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                        active
                          ? "text-[#f2622e]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {open && (
                      <div className="absolute left-0 top-full pt-3 w-64">
                        <ul className="bg-white rounded-2xl shadow-2xl py-2 overflow-hidden">
                          {matelasMenu.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block px-5 py-2.5 text-sm text-[#0f1b2e] hover:bg-[#f2622e]/8 hover:text-[#f2622e] transition-colors font-medium"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors ${
                    active ? "text-[#f2622e]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
