import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="border-t border-primary/10">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Únete a quienes ya están transformando sus ideas en realidades con
          Blackwaves Solutions. Trabajemos juntos para que tu MVP sea el impulso
          que tu negocio necesita en este mundo digital en constante cambio.
        </p>
        <a href="#">
          <Button size="lg" className="mt-4">
            Agenda una consulta gratis
          </Button>
        </a>
      </div>
    </section>
  );
}
