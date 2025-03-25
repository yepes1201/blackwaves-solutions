"use client";

// Dependencies
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Components
import { Island } from "./ui/island";

// Icons
import { Handshake } from "lucide-react";

// Assets
import microsoft from "@/public/img/microsoft.png";
import black from "@/public/img/black-logo.png";
import isaromas from "@/public/img/isaromas-logo.svg";

// Styles
import "@/styles/components/companies.css";

const companies = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: "Microsoft",
  logo: microsoft,
}));

// Duplicate companies for seamless loop
const duplicatedCompanies = [...companies, ...companies];

export default function Companies() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const contentWidth = container.scrollWidth / 2;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 2; // Increased speed

      if (scrollPosition >= contentWidth) {
        scrollPosition = 0;
        container.scrollLeft = 0; // Instant reset
      }

      container.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      id="aliados"
      className="container flex flex-col items-center text-center pt-32 pb-16"
    >
      <Island className="mx-auto w-fit text-center mb-2 flex gap-2 items-center">
        <Handshake className="w-5 h-5 md:w-6 md:h-6" />
        Aliados
      </Island>
      <h2 className="text-3xl font-bold md:text-5xl mb-4">
        Aliados que Confían en Nuestro Talento
      </h2>
      <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Grandes ideas requieren socios estratégicos. Estas son algunas de las
        empresas que han confiado en nosotros para llevar sus MVPs al siguiente
        nivel.{" "}
      </p>
      <div
        ref={containerRef}
        className="flex gap-8 overflow-hidden w-full relative h-[120px] items-center justify-center"
      >
        <Image src={black} alt={"Black"} className="w-fit h-full" />
        <Image src={isaromas} alt={"Isaromas"} className="max-w-[180px] w-fit max-h-[80px]" />
      </div>
    </section>
  );
}
