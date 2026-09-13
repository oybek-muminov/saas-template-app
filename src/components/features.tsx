import {
  Activity,
  ArrowRight,
  CheckCheck,
  Clock3,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { featureData } from "@/lib/data";

const iconMap = {
  chart: Sparkles,
  timeline: Activity,
  handoff: GitBranch,
  integrations: CheckCheck,
  shield: ShieldCheck,
  status: Clock3,
};

export function Features() {
  return (
    <section id="features" className="border-b border-[#26262F] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8D8D98]">Features</p>
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-[#EDECF0] sm:text-5xl">
            Built for how engineering teams actually work
          </h2>
          <p className="mt-4 text-base text-[#8D8D98] sm:text-lg">
            Six ways Arcline replaces the spreadsheets, standups, and Slack archaeology you&apos;re doing today.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featureData.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            const isLarge = feature.size === "lg";

            return (
              <article
                key={feature.id}
                className={[
                  "rounded-[24px] border border-[#26262F] bg-[#101117] p-5 transition-all duration-200 hover:border-[#5F5AE8]/35 hover:bg-[#15161D]",
                  isLarge ? "lg:col-span-2" : "",
                  index === 0 || index === 3 ? "lg:min-h-[260px]" : "",
                ].join(" ")}
              >
                <div className="flex h-full flex-col">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#26262F] bg-[#1C1D27] text-[#5F5AE8]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#EDECF0]">{feature.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#8D8D98]">{feature.description}</p>

                  {feature.id === "deploy-analytics" ? (
                    <div className="mt-6 flex h-20 items-end gap-2">
                      {[32, 46, 38, 60, 70, 82, 92].map((height, idx) => (
                        <div
                          key={idx}
                          className="w-full rounded-t-md bg-gradient-to-t from-[#5F5AE8] to-[#8F8CF7]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  ) : null}

                  {feature.id === "automatic-incident-timelines" ? (
                    <div className="mt-6 flex items-center gap-3">
                      {[0, 1, 2, 3].map((item) => (
                        <div key={item} className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#26262F] bg-[#1C1D27] text-[10px] font-semibold text-[#EDECF0]">
                          {item + 1}
                          {item < 3 ? <span className="absolute -right-2 h-px w-5 bg-[#33333F]" /> : null}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {feature.id === "on-call-handoffs" ? (
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {['AL', 'JS', 'NM'].map((person) => (
                          <div key={person} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0B0B10] bg-[#5F5AE8] text-[10px] font-semibold text-white">
                            {person}
                          </div>
                        ))}
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#8D8D98]" />
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#26262F] bg-[#1C1D27] text-[10px] font-semibold text-[#EDECF0]">
                        AV
                      </div>
                    </div>
                  ) : null}

                  {feature.id === "works-with-your-stack" ? (
                    <div className="mt-6 grid grid-cols-4 gap-2">
                      {['Slack', 'GitHub', 'Jira', 'Datadog', 'Linear', 'PagerDuty', 'Vercel', 'Sentry'].map((tool) => (
                        <div key={tool} className="flex items-center justify-center rounded-lg border border-[#26262F] bg-[#1C1D27] px-2 py-2 text-[10px] font-medium text-[#EDECF0]">
                          {tool}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {feature.id === "access-control" ? (
                    <div className="mt-6 flex items-center justify-between rounded-xl border border-[#26262F] bg-[#1C1D27] px-3 py-2">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#3ECF8E]" />
                        <span className="text-sm text-[#EDECF0]">Verified access</span>
                      </div>
                      <span className="text-xs text-[#8D8D98]">3 changes</span>
                    </div>
                  ) : null}

                  {feature.id === "live-system-status" ? (
                    <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#26262F] bg-[#1C1D27] p-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#3ECF8E] shadow-[0_0_12px_rgba(62,207,142,0.9)]" />
                      <div>
                        <p className="text-sm font-medium text-[#EDECF0]">System healthy</p>
                        <p className="text-xs text-[#8D8D98]">21 services running</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
