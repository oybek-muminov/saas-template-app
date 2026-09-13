import type { Feature, PricingPlan } from "@/types";

export const featureData: Feature[] = [
  {
    id: "deploy-analytics",
    title: "Deploy analytics",
    description:
      "Track deploy frequency, lead time, and failure rate trends across every service without wiring up your own dashboards.",
    size: "lg",
    icon: "chart",
  },
  {
    id: "automatic-incident-timelines",
    title: "Automatic incident timelines",
    description:
      "Arcline reconstructs what happened — alerts, deploys, chat mentions — into one timeline the moment an incident opens.",
    size: "sm",
    icon: "timeline",
  },
  {
    id: "on-call-handoffs",
    title: "On-call handoffs",
    description:
      "Rotations, escalations, and handoff notes in one place so the next person on call is never starting from zero.",
    size: "sm",
    icon: "handoff",
  },
  {
    id: "works-with-your-stack",
    title: "Works with your stack",
    description:
      "Native integrations with the tools already in your pipeline for faster adoption and clearer context.",
    size: "lg",
    icon: "integrations",
  },
  {
    id: "access-control",
    title: "Access control & audit log",
    description:
      "Role-based access and a full audit trail of who saw or changed what across the system.",
    size: "sm",
    icon: "shield",
  },
  {
    id: "live-system-status",
    title: "Live system status",
    description:
      "A real-time pulse of what is healthy, what is degraded, and what needs attention right now.",
    size: "sm",
    icon: "status",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "For small teams getting a first look at their deploy and incident history.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ["1 team", "7-day history", "3 integrations", "Community support"],
    cta: "Start for free",
  },
  {
    name: "Pro",
    description: "For teams that live in Arcline daily and need full history and integrations.",
    monthlyPrice: 29,
    yearlyPrice: 23,
    features: [
      "Unlimited teams",
      "Unlimited history",
      "All integrations",
      "On-call scheduling",
      "Priority support",
    ],
    popular: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    description: "For orgs that need SSO, audit logs, and dedicated support.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Pro",
      "SSO & SCIM",
      "Full audit log",
      "Dedicated support engineer",
      "Custom contract terms",
    ],
    cta: "Contact sales",
  },
];
