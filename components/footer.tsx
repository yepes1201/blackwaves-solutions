import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="container flex flex-col justify-between gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Blackwaves Solutions</h2>
          <p className="text-sm text-muted-foreground">
            Somos una empresa dedicada a la desarrollo de software.
          </p>
        </div>
        <div className="grid">
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
      <div className="container border-t py-6 border-primary/10">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Blackwaves Solutions, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
