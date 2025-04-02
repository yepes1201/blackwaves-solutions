// Dependencies
import Link from "next/link";
import Image from "next/image";

// Components
import { ContactInfo } from "./footer-email";

// Icons
import { Twitter, Instagram } from "lucide-react";

// Assets
import blackwaves from "@/public/img/blackwaves-logotipo.png";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/blackwaves.io",
    icon: <Instagram className="h-5 w-5" />,
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com/blackwavesio",
  //   icon: <Twitter className="h-5 w-5" />,
  // },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="container flex flex-col items-center justify-between gap-8 py-8 md:flex-row md:py-12">
        <div className="flex flex-col gap-1">
          <Link href="#hero" className="mr-6 flex items-center space-x-2">
            <Image
              className="max-w-[160px]"
              src={blackwaves}
              alt="Blackwaves Logo"
            />
          </Link>
          <ContactInfo />
        </div>
        <div className="grid">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Redes Sociales</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6 border-primary/10">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Blackwaves Solutions, Inc. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
