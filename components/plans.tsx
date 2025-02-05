import { Brain, Cloud, Shield, Zap } from "lucide-react";

const plans = [
  {
    name: "Desarrollo a la medida",
    description:
      "Nuestro enfoque se basa en la creación de soluciones personalizadas que se ajusten a las necesidades de cada cliente.",
    icon: Brain,
  },
  {
    name: "Desarrollo de eCommerce",
    description:
      "Desarrollo de tiendas en línea con carrito de compras, gestión de pagos, y gestión de inventario.",
    icon: Cloud,
  },
  {
    name: "Aplicaciones móviles",
    description:
      "Desarrollo de aplicaciones para dispositivos móviles con una experiencia de usuario excepcional.",
    icon: Shield,
  },
  {
    name: "High-Performance Systems",
    description:
      "Optimized for speed and efficiency, our solutions deliver unparalleled performance.",
    icon: Zap,
  },
];

export default function Plans() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Planes
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descubre como Amane Soft transforma tu negocio con nuestras
          tecnologías innovadoras.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <plan.icon className="h-8 w-8" />
              <h3 className="font-bold">{plan.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
