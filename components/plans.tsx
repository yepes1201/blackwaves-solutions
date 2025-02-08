// Components
import { Button } from "@/components/ui/button";
import { Island } from "./ui/island";

// Icons
import { Gem, Rocket, Wrench } from "lucide-react";

const plans = [
  {
    name: "Desarrollo de MVP",
    description:
      "Lanza tu producto rápido y de manera eficiente. Te ayudamos a construir un Producto Mínimo Viable (MVP) que valide tu idea y atraiga a tus primeros usuarios.",
    icon: Rocket,
    features: [
      "Prototipos rápidos para acelerar el desarrollo",
      "Creación de las funcionalidades esenciales",
      "Diseño centrado en la experiencia del usuario",
      "Arquitectura escalable para crecer con confianza",
      "Integración de analíticas básicas para medir resultados",
    ],
  },
  {
    name: "Soporte y Evolución Continua",
    description:
      "Mantén tu software siempre actualizado y en constante mejora. Nuestro equipo garantiza que tu producto evolucione junto a las necesidades de tu negocio.",
    icon: Wrench,
    features: [
      "Corrección de errores y mantenimiento técnico.",
      "Mejora de funcionalidades para un producto más competitivo.",
      "Optimización del rendimiento para máxima eficiencia.",
      "Actualizaciones de seguridad para proteger tu software.",
      "Soporte técnico dedicado para resolver tus dudas.",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <Island className="mx-auto w-fit text-center mb-2 flex gap-2 items-center">
          <Gem className="w-6 h-6" />
          Planes
        </Island>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Nuestros Servicios
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Elige el servicio que se adapte a tus necesidades actuales y
          trabajemos juntos para hacer realidad tu idea.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col rounded-lg border bg-background p-8 shadow-sm"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <plan.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-2xl">{plan.name}</h3>
            </div>
            <p className="mb-6 flex-grow text-muted-foreground">
              {plan.description}
            </p>
            <ul className="mb-8 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full">Contactanos</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
