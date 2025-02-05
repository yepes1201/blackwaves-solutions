import { Button } from "@/components/ui/button";
import { Rocket, Wrench } from "lucide-react";

const plans = [
  {
    name: "MVP Development",
    description:
      "Launch your product quickly and efficiently. We'll help you build a Minimum Viable Product to validate your idea and attract early adopters.",
    icon: Rocket,
    features: [
      "Rapid prototyping",
      "Core feature development",
      "User experience design",
      "Scalable architecture",
      "Basic analytics integration",
    ],
  },
  {
    name: "Ongoing Support & Development",
    description:
      "Keep your software up-to-date and continuously improving. Our team provides ongoing support and development to ensure your product evolves with your business needs.",
    icon: Wrench,
    features: [
      "Bug fixes and maintenance",
      "Feature enhancements",
      "Performance optimization",
      "Security updates",
      "Technical support",
    ],
  },
];

export default function Plans() {
  return (
    <section id="planes" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Our Services
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Choose the service that best fits your current needs and let's build
          something great together.
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
            <Button className="w-full">Contact Us</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
