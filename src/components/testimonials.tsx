import { Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { testimonialData } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="border-b border-[#26262F] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8D8D98]">Testimonials</p>
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#EDECF0] sm:text-5xl">
            Teams run on Arcline, not around it
          </h2>
          <p className="mt-4 text-base text-[#8D8D98] sm:text-lg">
            A few of the engineering teams who stopped guessing what happened last night.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonialData.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col rounded-[24px] border border-[#26262F] bg-[#101117] p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5F5AE8]/15 text-sm font-semibold text-[#EDECF0]">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-medium text-[#EDECF0]">{item.name}</p>
                  <p className="text-sm text-[#8D8D98]">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 text-[#E8A33D]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`${item.name}-${index}`}
                    className={`h-4 w-4 ${
                      index < item.rating ? "fill-current text-[#E8A33D]" : "text-[#33333F]"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-5 text-base leading-7 text-[#EDECF0]">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
