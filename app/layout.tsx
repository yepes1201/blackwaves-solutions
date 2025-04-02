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
  title:
    "Blackwaves Solutions: Creamos tu MVP Web y Móvil Rápido y con Calidad",
  description:
    "Desarrollamos tu MVP web o móvil de forma rápida, con alta calidad y a precios competitivos. Ideal para startups y PYMEs que quieren validar sus ideas. ¡Contáctanos!",
  keywords: [
    "desarrollo de software",
    "desarrollo web",
    "desarrollo de aplicaciones móviles",
    "MVP",
    "Producto Mínimo Viable",
    "desarrollo de MVP",
    "desarrollo de software a medida",
    "desarrollo de aplicaciones iOS",
    "desarrollo de aplicaciones Android",
    "desarrollo frontend",
    "desarrollo backend",
    "soporte de software",
    "mantenimiento de software",
    "desarrollo de productos digitales",
    "startups",
    "PYMEs",
    "negocio digital",
    "transformación digital",
    "innovación digital",
    "React.js",
    "React Native",
    "Flutter",
    "Node.js",
    ".NET",
    "AWS",
    "Cloudflare",
    "consultoría de software",
    "creación de aplicaciones móviles",
    "diseño y desarrollo web",
    "soporte técnico de software",
    "empresa de desarrollo de software",
    "necesito desarrollar una aplicación móvil",
    "busco soporte técnico para mi sistema web",
    "cuánto cuesta desarrollar una aplicación móvil",
    "servicios de mantenimiento de software empresarial",
    "desarrollo de software personalizado",
    "desarrollo de software para startups",
    "desarrollo de aplicaciones para negocios",
    "desarrollo de soluciones digitales",
    "validación de ideas",
    "lanzamiento rápido de productos",
    "desarrollo ágil",
    "prototipos rápidos",
    "arquitectura escalable",
  ],
  openGraph: {
    type: "website",
    url: "https://blackwaves.io",
    title:
      "Blackwaves Solutions: Creamos tu MVP Web y Móvil Rápido y con Calidad",
    description:
      "Desarrollamos tu MVP web o móvil de forma rápida, con alta calidad y a precios competitivos. Ideal para startups y PYMEs que quieren validar sus ideas. ¡Contáctanos!",
    images: ["/img/blackwaves-logo.png"],
    locale: "es_ES",
    siteName: "Blackwaves Solutions",
    emails: ["contacto@blackwaves.io"],
    countryName: "Colombia",
  },
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
