// Dependencies
import Link from "next/link";
import Image from "next/image";

// Icons
import { Twitter, Instagram } from "lucide-react";

// Assets
import blackwaves from "@/public/img/blackwaves-logotipo.png";
import blackwavesIcon from "@/public/img/blackwaves-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="container flex flex-col items-center justify-between gap-8 py-8 md:flex-row md:py-12">
        <div className="">
        <Link href="#hero" className="mr-6 flex items-center space-x-2">
          <Image
            className="max-w-[160px]"
            src={blackwaves}
            alt="Blackwaves Logo"
          />
        </Link>
        </div>
        <div className="grid">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Redes Sociales</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link
                href="https://instagram.com/blackwaves"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com/blackwavesio"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6 border-primary/10">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Blackwaves Solutions, Inc. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
