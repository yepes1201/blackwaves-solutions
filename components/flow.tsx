import { Lightbulb, Compass, Code, Rocket } from "lucide-react";

const flowSteps = [
  {
    name: "Analysis & Planning",
    description:
      "We start by understanding your needs and defining clear project objectives and scope.",
    icon: Lightbulb,
  },
  {
    name: "Design & Architecture",
    description:
      "Our experts create detailed designs and robust system architectures tailored to your requirements.",
    icon: Compass,
  },
  {
    name: "Development & Testing",
    description:
      "We employ agile methodologies to develop and rigorously test your software, ensuring top quality.",
    icon: Code,
  },
  {
    name: "Deployment & Support",
    description:
      "We handle smooth deployments and provide ongoing support to keep your software running optimally.",
    icon: Rocket,
  },
];

export default function Flow() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Our Development Process
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          At Amane Soft, we follow a comprehensive approach to deliver
          high-quality software solutions.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        {flowSteps.map((step, index) => (
          <div key={step.name} className="relative pl-16 pb-12">
            {/* Timeline line */}
            {index !== flowSteps.length - 1 && (
              <div
                className="absolute left-[1.9375rem] top-12 h-full w-[1px] bg-border"
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
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
