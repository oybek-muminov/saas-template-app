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
    <section id="pricing" className="border-b border-[#26262F] bg-[#0F1016] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8D8D98]">Pricing</p>
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#EDECF0] sm:text-5xl">
            Simple pricing, no surprises
          </h2>
          <p className="mt-4 text-base text-[#8D8D98] sm:text-lg">
            Start free. Upgrade when your team needs more history and more control.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <PricingToggle yearly={yearly} onToggle={setYearly} />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const price = plan.name === "Free" ? "$0" : yearly ? `$${plan.yearlyPrice}` : `$${plan.monthlyPrice}`;
            const billing = plan.name === "Enterprise" ? "Custom" : yearly ? "/seat /mo billed yearly" : "/seat /mo";

            return (
              <div
                key={plan.name}
                className={`flex h-full flex-col rounded-[24px] border p-6 ${
                  plan.popular
                    ? "border-[#5F5AE8]/40 bg-[#15161D] shadow-[0_0_0_1px_rgba(95,90,232,0.2)]"
                    : "border-[#26262F] bg-[#101117]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#EDECF0]">{plan.name}</h3>
                    <p className="mt-2 text-sm text-[#8D8D98]">{plan.description}</p>
                  </div>
                  {plan.popular ? (
                    <span className="rounded-full border border-[#5F5AE8]/30 bg-[#5F5AE8]/12 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#EDECF0]">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-[-0.06em] text-[#EDECF0]">{price}</span>
                  {plan.name !== "Enterprise" ? (
                    <span className="pb-1 text-sm text-[#8D8D98]">{billing}</span>
                  ) : (
                    <span className="pb-1 text-sm text-[#8D8D98]">Custom</span>
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
                    <a href="#">{plan.cta}</a>
                  )}
                </Button>

                <ul className="mt-8 space-y-3 text-sm text-[#EDECF0]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#5F5AE8]/12 text-[#5F5AE8]">
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
