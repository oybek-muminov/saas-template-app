"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { PricingToggle } from "@/components/pricing-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { pricingPlans } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-24 border-b border-border bg-surface py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">Pricing</p>
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
            Simple pricing, no surprises
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Start free. Upgrade when your team needs more history and more control.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <PricingToggle yearly={yearly} onToggle={setYearly} />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            const billing = yearly ? "/seat /mo billed yearly" : "/seat /mo";

            return (
              <div
                key={plan.name}
                className={`flex h-full min-w-0 flex-col rounded-lg border p-6 ${
                  plan.popular
                    ? "border-accent/40 bg-surface shadow-[0_0_0_1px_var(--color-accent-soft)]"
                    : "border-border bg-surface-inset"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
                    <p className="mt-2 text-sm text-muted">{plan.description}</p>
                  </div>
                  {plan.popular ? (
                    <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-foreground">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-8 flex items-end gap-2">
                  {price === null ? (
                    <span className="text-4xl font-semibold tracking-[-0.06em] text-foreground">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold tracking-[-0.06em] text-foreground">${price}</span>
                      {plan.name !== "Free" ? (
                        <span className="pb-1 text-sm text-muted">{billing}</span>
                      ) : null}
                    </>
                  )}
                </div>

                <Button
                  className="mt-8 w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  {plan.name === "Enterprise" ? (
                    <a href={`mailto:${siteConfig.email}`}>{plan.cta}</a>
                  ) : (
                    <a href="/signup">{plan.cta}</a>
                  )}
                </Button>

                <ul className="mt-8 space-y-3 text-sm text-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
