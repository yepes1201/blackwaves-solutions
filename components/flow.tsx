import { Lightbulb, Compass, Code, Rocket, Workflow } from "lucide-react";
import { Island } from "./ui/island";

const flowSteps = [
  {
    name: "Fase Preliminar: Conectamos con tu Visión 🪐",
    description:
      "Iniciamos con una reunion de 30 minutos donde nos sumergimos en tu idea, exploramos tu vision y definimos juntos lo que deseas lograr. 🤝<br/><br/>" +
      "Posterior a la reunion, evaluamos la viabilidad tecnica y estrategica de tu concepto para decidir si está listo para convertise en MVP",
    icon: Lightbulb,
  },
  {
    name: "Construyendo la Estrategia  ✍️📖",
    description:
      "Definimos objetivos claros y diseñamos un plan detallado que guíe el desarrollo de tu MVP hacia el éxito. 📝",
    icon: Lightbulb,
  },
  {
    name: "Diseñando el Futuro 💻🤓",
    description:
      "Creamos diseños únicos y arquitecturas sólidas que se ajustan a tus necesidades, asegurando que tu MVP sea tanto funcional como atractivo. 👨‍💻",
    icon: Compass,
  },
  {
    name: "Dando Vida a Tu Idea 👷‍♂️",
    description:
      "Ponemos manos a la obra con metodologías ágiles, desarrollando tu MVP y sometiéndolo a pruebas exhaustivas para garantizar una calidad impecable. 🪛⚙️",
    icon: Code,
  },
  {
    name: "Lanzamiento y Más Allá  🚀👨‍🚀",
    description: "Implementamos tu producto sin contratiempos.",
    icon: Rocket,
  },
];

export default function Flow() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center flex flex-col gap-0">
        <Island className="mx-auto w-fit text-center mb-2 flex gap-2 items-center">
          <Workflow className="w-5 h-5 md:w-6 md:h-6" />
          Workflow
        </Island>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          ¿Cómo es nuestro Proceso de Trabajo?
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          En Blackwaves Solutions seguimos un enfoque personalizado para
          transformar tus ideas en MVPs de alta calidad.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        {flowSteps.map((step, index) => (
          <div key={step.name} className="relative pl-16 pb-12">
            {/* Timeline line */}
            {index !== flowSteps.length - 1 && (
              <div
                className="absolute left-[1.25rem] top-14 h-[60%] w-[1px] bg-primary/15"
                aria-hidden="true"
              />
            )}
            {/* Icon */}
            <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <step.icon className="h-5 w-5" />
            </div>
            {/* Content */}
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-2 flex items-center">
                <span className="text-primary mr-2">{index + 1}.</span>
                {step.name}
              </h3>
              <p
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
