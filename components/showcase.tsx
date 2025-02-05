"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const showcase = [
  {
    title: "EcoTrack",
    description:
      "A mobile app for tracking and reducing personal carbon footprint.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/amanesoft/ecotrack",
    liveLink: "https://ecotrack-demo.amanesoft.com",
  },
  {
    title: "HealthHub",
    description:
      "An AI-powered health monitoring platform integrated with wearable devices.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "https://healthhub.amanesoft.com",
  },
  {
    title: "SmartCity Dashboard",
    description:
      "A comprehensive dashboard for city administrators to manage urban infrastructure.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/amanesoft/smartcity-dashboard",
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot for customer service automation.",
    image: "/placeholder.svg?height=300&width=400",
    liveLink: "https://chatbot-demo.amanesoft.com",
  },
  {
    title: "DataViz Pro",
    description: "Advanced data visualization tool for business intelligence.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/amanesoft/dataviz-pro",
    liveLink: "https://dataviz.amanesoft.com",
  },
];

export default function Showcase() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? showcase : showcase.slice(0, 3);

  return (
    <section id="proyectos" className="container py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center mb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Our Projects
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Explore some of our recent work and see how we've helped businesses
          achieve their goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
