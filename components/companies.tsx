"use client";

// Dependencies
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Assets
import microsoft from "@/public/img/microsoft.png";

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
      id="testimonios"
      className="container flex flex-col items-center text-center pt-32 pb-16"
    >
      <h2 className="text-3xl font-bold md:text-5xl">
        Empresas que confían en nosotros
      </h2>
      <div
        ref={containerRef}
        className="flex gap-8 overflow-hidden w-full relative h-[120px]"
      >
        <div className="absolute left-0 w-24 h-full z-20"></div>
        <div className="absolute right-0 w-24 h-full z-20"></div>

        <div className="absolute flex animate-slide">
          {[...duplicatedCompanies].map((company) => (
            <Image
              key={`${company.id}-dup`}
              src={company.logo}
              alt={company.name}
              className="mx-8 h-[70px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
