import { Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { testimonialData } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">Testimonials</p>
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
            Teams run on Arcline, not around it
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            A few of the engineering teams who stopped guessing what happened last night.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonialData.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col rounded-lg border border-border bg-surface-inset p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-foreground">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-sm text-muted">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>

              <div
                className="mt-5 flex items-center gap-1 text-warning"
                aria-label={`${item.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`${item.name}-${index}`}
                    className={`h-4 w-4 ${
                      index < item.rating ? "fill-current text-warning" : "text-border-strong"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-5 text-base leading-7 text-foreground">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
