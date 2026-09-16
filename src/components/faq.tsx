import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { faqData } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-border py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Everything you&apos;d ask before rolling this out to your team.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-border bg-surface-inset p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="rounded-xl px-2">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-muted">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
