"use client";

// Dependencies
import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// Icons
import { Menu } from "lucide-react";

// Assets
import blackwaves from "@/public/img/blackwaves-logotipo.png";
import blackwavesIcon from "@/public/img/blackwaves-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setOpen((val) => !val);
  };

  return (
    <header className="sticky top-0 sm:top-4 z-50 sm:rounded-full border-b sm:border w-full max-w-screen-sm mx-auto border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 sm:h-14 max-w-screen-2xl gap-0 items-center justify-between">
        <Link href="#hero" className="mr-6 flex items-center space-x-2">
          <Image
            className="hidden sm:block max-w-[160px]"
            src={blackwaves}
            alt="Blackwaves Logo"
          />
          <Image
            className="sm:hidden max-w-[40px]"
            src={blackwavesIcon}
            alt="Blackwaves Logo"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden sm:flex flex-1 items-center space-x-6 text-sm font-medium">
            <Link
              href="#aliados"
              className="transition-colors hover:text-primary"
            >
              Aliados
            </Link>
            <Link
              href="#proyectos"
              className="transition-colors hover:text-primary"
            >
              Proyectos
            </Link>
            <Link
              href="#planes"
              className="transition-colors hover:text-primary"
            >
              Planes
            </Link>
          </nav>
          <a href="#">
            <Button className="bg-brand text-white hover:bg-brand/25" size="sm">
              Consulta gratis
            </Button>
          </a>
          <Button
            onClick={toggleDrawer}
            className="sm:hidden"
            variant="outline"
            size="icon"
          >
            <Menu />
          </Button>
          <Drawer onClose={toggleDrawer} open={open}>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
                <nav className="flex flex-1 flex-col items-baseline space-y-4 font-normal text-sm text-foreground/50">
                  <Link
                    href="#aliados"
                    className="transition-colors hover:text-primary w-full text-start"
                    onClick={toggleDrawer}
                  >
                    Aliados
                  </Link>
                  <Link
                    href="#proyectos"
                    className="transition-colors hover:text-primary w-full text-start"
                    onClick={toggleDrawer}
                  >
                    Proyectos
                  </Link>
                  <Link
                    href="#planes"
                    className="transition-colors hover:text-primary w-full text-start"
                    onClick={toggleDrawer}
                  >
                    Planes
                  </Link>
                </nav>
              </DrawerHeader>
              <DrawerFooter>
                <Button
                  variant="outline"
                  onClick={toggleDrawer}
                  className="w-full"
                >
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
