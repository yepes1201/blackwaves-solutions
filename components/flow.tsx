import { Brain, Cloud, Shield, Zap } from "lucide-react";

const flow = [
  {
    name: "AI-Powered Analytics",
    description:
      "Harness the power of machine learning to derive actionable insights from your data.",
    icon: Brain,
  },
  {
    name: "Cloud-Native Architecture",
    description:
      "Scalable, resilient, and efficient solutions built for the modern cloud ecosystem.",
    icon: Cloud,
  },
  {
    name: "Enterprise-Grade Security",
    description:
      "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "High-Performance Systems",
    description:
      "Optimized for speed and efficiency, our solutions deliver unparalleled performance.",
    icon: Zap,
  },
];

export default function Flow() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Cómo trabajamos
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descubre como Amane Soft transforma tu negocio con nuestras
          tecnologías innovadoras.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {flow.map((flow) => (
          <div
            key={flow.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <flow.icon className="h-8 w-8" />
              <h3 className="font-bold">{flow.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{flow.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
