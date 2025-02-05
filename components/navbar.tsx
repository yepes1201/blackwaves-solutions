import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Blackwaves Solutions</span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
            <Link
              href="/solutions"
              className="transition-colors hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="transition-colors hover:text-primary"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-primary"
            >
              About Us
            </Link>
          </nav>
          <Button size="sm">Consulta ahora</Button>
        </div>
      </div>
    </header>
  );
}
