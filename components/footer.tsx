import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Blackwaves Solutions</h2>
          <p className="text-sm text-muted-foreground">
            Somos una empresa dedicada a la desarrollo de software.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Servicios</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/ai-analytics"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Desarrollo web
                </Link>
              </li>
              <li>
                <Link
                  href="/cloud-services"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Desarrollo móvil
                </Link>
              </li>
              <li>
                <Link
                  href="/cloud-services"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Desarrollo de eCommerce
                </Link>
              </li>
              <li>
                <Link
                  href="/cloud-services"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Desarrollo de videojuegos
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Acerca de nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Nuestros trabajos
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Redes Sociales</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Blackwave Solutions, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
