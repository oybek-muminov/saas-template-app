import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { faqData } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-[#26262F] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8D8D98]">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#EDECF0] sm:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-base text-[#8D8D98] sm:text-lg">
            Everything you&apos;d ask before rolling this out to your team.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[24px] border border-[#26262F] bg-[#101117] p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="rounded-xl px-2">
                <AccordionTrigger className="text-left text-base font-medium text-[#EDECF0] hover:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-[#8D8D98]">
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
