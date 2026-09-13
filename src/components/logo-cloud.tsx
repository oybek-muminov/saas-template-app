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
    <section className="border-b border-[#26262F] py-8 sm:py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#8D8D98]">
          Trusted by engineering teams at
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-16 items-center justify-center rounded-xl border border-[#26262F] bg-[#101117]/60 px-5 text-center text-lg font-semibold tracking-[-0.05em] text-[#8D8D98] transition-colors duration-200 hover:border-[#33333F] hover:text-[#EDECF0]"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
