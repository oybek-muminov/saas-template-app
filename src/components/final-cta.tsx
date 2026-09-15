import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-[#26262F] bg-[#15161D] p-8 sm:p-12">
          <div className="absolute inset-x-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-[#5F5AE8]/18 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#EDECF0] sm:text-5xl">
              Stop reconstructing incidents from memory.
            </h2>
            <p className="mt-5 text-base text-[#8D8D98] sm:text-lg">
              Connect your first integration in minutes and see your team&apos;s actual deploy and incident history today.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#">Start free trial</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#">Book a demo</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
