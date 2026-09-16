import { ArrowRight, CheckCircle2, CircleDashed, Gauge, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/motion/fade-up";

const statusRows = [
  { label: "Deploys", value: "24 shipped", tone: "positive" },
  { label: "Incidents", value: "2 active", tone: "warning" },
  { label: "On-call", value: "3 responders", tone: "neutral" },
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-[620px] lg:ml-auto">
      <div className="absolute inset-x-10 -top-6 h-36 rounded-full bg-[#5F5AE8]/18 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[28px] border border-[#26262F] bg-[#15161D] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="flex min-h-[560px]">
          <aside className="w-24 border-r border-[#26262F] bg-[#101117] p-4">
            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-[#26262F] bg-[#1C1D27] text-[#EDECF0]">
              <Sparkles className="h-5 w-5 text-[#5F5AE8]" />
            </div>
            <nav className="space-y-3">
              {[
                { label: "Overview", icon: Gauge, active: true },
                { label: "Deploys", icon: ArrowRight, active: false },
                { label: "Incidents", icon: ShieldCheck, active: false },
                { label: "On-call", icon: CircleDashed, active: false },
              ].map(({ label, icon: Icon, active }) => (
                <div
                  key={label}
                  className={`flex h-11 items-center justify-center rounded-xl border transition-colors ${
                    active
                      ? "border-[#5F5AE8]/35 bg-[#5F5AE8]/12 text-[#EDECF0]"
                      : "border-transparent text-[#8D8D98] hover:border-[#26262F] hover:bg-[#1C1D27]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </nav>
          </aside>

          <div className="flex-1">
            <header className="flex items-center justify-between border-b border-[#26262F] px-5 py-4">
              <div className="flex items-center gap-3"> 
                <div className="h-9 w-40 rounded-lg border border-[#26262F] bg-[#1C1D27]" />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-44 rounded-lg border border-[#26262F] bg-[#1C1D27]" />
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5F5AE8] font-semibold text-white">
                  AL
                </div>
              </div>
            </header>

            <div className="space-y-5 p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#26262F] bg-[#1C1D27] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8D8D98]">Deploy frequency</p>
                  <div className="mt-4 flex items-end gap-1">
                    {[32, 40, 36, 52, 64, 79, 86].map((height, idx) => (
                      <div
                        key={idx}
                        className="w-2 rounded-full bg-[#5F5AE8] opacity-90"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#26262F] bg-[#1C1D27] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8D8D98]">Open incidents</p>
                  <p className="mt-4 text-3xl font-semibold text-[#EDECF0]">04</p>
                  <p className="mt-2 text-xs text-[#3ECF8E]">-21% vs last week</p>
                </div>

                <div className="rounded-2xl border border-[#26262F] bg-[#1C1D27] p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8D8D98]">MTTR</p>
                  <p className="mt-4 text-3xl font-semibold text-[#EDECF0]">2h 12m</p>
                  <p className="mt-2 text-xs text-[#E8A33D]">+10m from target</p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#26262F] bg-[#1C1D27] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-[#EDECF0]">Live activity</p>
                  <span className="rounded-full border border-[#33333F] bg-[#15161D] px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-[#8D8D98]">
                    live
                  </span>
                </div>

                <div className="space-y-3">
                  {statusRows.map((row, index) => (
                    <div key={row.label} className="flex items-center justify-between rounded-xl border border-[#26262F] bg-[#15161D] px-3 py-2.5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            row.tone === "positive"
                              ? "bg-[#3ECF8E]"
                              : row.tone === "warning"
                                ? "bg-[#E8A33D]"
                                : "bg-[#5F5AE8]"
                          }`}
                        />
                        <div>
                          <p className="text-sm font-medium text-[#EDECF0]">{row.label}</p>
                          <p className="text-xs text-[#8D8D98]">{row.value}</p>
                        </div>
                      </div>
                      <span className="text-xs text-[#8D8D98]">{index === 0 ? "12m ago" : index === 1 ? "1h ago" : "4h ago"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden border-b border-[#26262F]">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -left-10 top-14 h-64 w-64 rounded-full bg-[#5F5AE8]/15 blur-3xl" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <FadeUp delay={0.08}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#33333F] bg-[#1C1D27]/80 px-3 py-1.5 text-xs font-medium text-[#EDECF0]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#5F5AE8]" />
                Now generating incident timelines automatically
              </div>
            </FadeUp>

            <FadeUp delay={0.16}>
              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.07em] text-[#EDECF0] sm:text-5xl lg:text-6xl">
                See what your engineering org
                is actually doing.
              </h1>
            </FadeUp>

            <FadeUp delay={0.24}>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#8D8D98]">
                Arcline pulls deploys, incidents, and on-call activity into one live view — so you stop reconstructing timelines from Slack threads and start shipping with a clear picture of what&apos;s happening.
              </p>
            </FadeUp>

            <FadeUp delay={0.32}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="/signup">Start free trial</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/demo">Book a demo</a>
                </Button>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.38}>
            <DashboardMockup />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
