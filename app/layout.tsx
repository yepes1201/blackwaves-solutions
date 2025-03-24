// Types
import type React from "react";
import type { Metadata } from "next";

// Fonts
import { Inter } from "next/font/google";

// Components
import MouseMoveEffect from "@/components/mouse-move-effect";

// Styles
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blackwaves Solutions - Tu Negocio Digital en Semanas",
  description:
    "Blackwaves ofrece soluciones de software innovadoras y de alta performance para empresas del futuro.",
  keywords: [
    "Blackwaves",
    "Blackwaves Solutions",
    "Negocio Digital",
    "Negocio Digital en Semanas",
    "Negocio Digital en Semanas",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/img/blackwaves-logo.png" />
      </head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
