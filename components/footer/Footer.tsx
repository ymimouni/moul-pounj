import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1422] text-gray-300">
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo/Logo-V2-scaled.png"
                alt="Moul Pounj"
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Le spécialiste du sommeil au Maroc. Matelas &amp; mousses de
              qualité fabriqués au Maroc depuis 2011.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/matelas"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  Matelas
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-magasins"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  Nos Magasins
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/conseils"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  Conseils
                </Link>
              </li>
            </ul>
          </div>

          {/* Produits */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Nos produits</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/matelas?filter=mousse"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  Matelas en mousse
                </Link>
              </li>
              <li>
                <Link
                  href="/matelas?filter=ressorts"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  Matelas à ressorts
                </Link>
              </li>
              <li>
                <Link
                  href="/matelas?filter=salon"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  Salon Marocain
                </Link>
              </li>
              <li>
                <Link
                  href="/matelas?filter=accessoires"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  Accessoires
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">
              Besoin d&apos;aide ?
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#f2622e]" />
                <a
                  href="tel:+212661475136"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  06 61 47 51 36
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[#f2622e]" />
                <a
                  href="mailto:contact@moulpounj.ma"
                  className="hover:text-[#f2622e] transition-colors"
                >
                  contact@moulpounj.ma
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0 text-[#f2622e]" />
                Lun – Sam : 08h00 – 19h00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Moul Pounj. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
