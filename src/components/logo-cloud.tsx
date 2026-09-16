import { Container } from "@/components/ui/container";

const logos = [
  "Northwind Systems",
  "Fenbrook",
  "Corvid Labs",
  "Haldane Robotics",
  "Petrel Analytics",
  "Ironframe",
];

export function LogoCloud() {
  return (
    <section className="border-b border-border py-8 sm:py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Trusted by engineering teams at
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-16 items-center justify-center rounded-xl border border-border bg-surface-inset/60 px-5 text-center text-lg font-semibold tracking-[-0.05em] text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
