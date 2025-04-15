"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Images } from "lucide-react";
import { Island } from "./ui/island";

const showcase = [
  {
    title: "Black Project",
    description:
      "Desarrollamos un MVP de tienda digital completamente funcional y optimizado para la marca Black. Creamos una experiencia de compra intuitiva y atractiva, permitiéndoles validar su modelo de negocio en línea rápidamente.",
    image: "/img/black-preview.jpg",
    liveLink: "https://blackproject.com.co",
  },
  {
    title: "Isaromas",
    description:
      "Para Isaromas, creamos un MVP de plataforma digital para la venta de sus productos. Nos enfocamos en un diseño atractivo y una navegación sencilla para garantizar una excelente experiencia de usuario desde el inicio.",
    image: "/img/isaromas-preview.png",
    liveLink: "https://isaromas.com",
  },
];

export default function Showcase() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? showcase : showcase.slice(0, 3);

  return (
    <section id="proyectos" className="container py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center mb-16">
        <Island className="mx-auto w-fit text-center mb-2 flex gap-2 items-center">
          <Images className="w-5 h-5 md:w-6 md:h-6" />
          Proyectos
        </Island>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Nuestros Proyectos
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Explora algunos de los MVPs que hemos desarrollado.
          <br />
          Hemos ayudado a emprendedores y empresas a transformar ideas en
          productos reales.
        </p>
      </div>
      {/* grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
      <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <ShowcaseCard key={project.title} project={project} />
        ))}
      </div>
      {!showAll && showcase.length > 3 && (
        <div className="mt-12 text-center">
          <Button onClick={() => setShowAll(true)} size="lg">
            See More Projects
          </Button>
        </div>
      )}
    </section>
  );
}

interface ShowcaseProps {
  project: {
    title: string;
    description: string;
    image: string;
    github?: string;
    liveLink?: string;
  };
}

function ShowcaseCard({ project }: ShowcaseProps) {
  return (
    <div className="group h-full rounded-lg border bg-background shadow-md transition-all hover:shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between p-6 flex-grow">
        <div>
          <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.liveLink && (
            <Button size="sm" asChild>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Explorar Proyecto
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
