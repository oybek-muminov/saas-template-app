import type { Feature, FaqItem, FooterColumn, NavItem, PricingPlan, Testimonial } from "@/types";

import { siteConfig } from "@/lib/site-config";

export const navItems: NavItem[] = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "/docs" },
];

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

export const testimonialData: Testimonial[] = [
  {
    name: "Maya Chen",
    role: "Engineering Manager",
    company: "Northwind Systems",
    avatar: "MC",
    rating: 5,
    quote:
      "Before Arcline we were piecing incident timelines together from three different Slack channels. Now the timeline is just already there when the page fires.",
  },
  {
    name: "Diego Alvarez",
    role: "Site Reliability Lead",
    company: "Corvid Labs",
    avatar: "DA",
    rating: 5,
    quote:
      "The on-call handoff notes alone saved us from at least two repeat incidents this quarter. Nobody's starting a shift blind anymore.",
  },
  {
    name: "Priya Raman",
    role: "VP Engineering",
    company: "Haldane Robotics",
    avatar: "PR",
    rating: 4,
    quote:
      "Deploy analytics finally gave us a real lead-time number to bring to leadership, instead of a gut feeling.",
  },
  {
    name: "Tom Whitfield",
    role: "DevOps Engineer",
    company: "Fenbrook",
    avatar: "TW",
    rating: 5,
    quote:
      "Setup took an afternoon, not a quarter. We had Slack and PagerDuty wired in before lunch.",
  },
  {
    name: "Sara Kim",
    role: "Engineering Director",
    company: "Petrel Analytics",
    avatar: "SK",
    rating: 5,
    quote:
      "It's the first dashboard our whole team actually opens without being told to.",
  },
  {
    name: "James Okafor",
    role: "CTO",
    company: "Ironframe",
    avatar: "JO",
    rating: 4,
    quote:
      "The audit log alone justified the Enterprise plan for our compliance review.",
  },
];

export const faqData: FaqItem[] = [
  {
    question: "Can I try Arcline for free?",
    answer:
      "Yes. The Free plan works indefinitely for one team with 7 days of history, no credit card required to start.",
  },
  {
    question: "How does billing work?",
    answer:
      "Pro is billed per seat, monthly or yearly. Enterprise is invoiced on a custom contract negotiated with your team.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes — cancel from billing settings whenever you like. You keep access through the end of the period you've already paid for.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes, yearly billing saves about 20% compared to paying monthly, shown automatically at checkout.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Data is encrypted in transit and at rest. Enterprise plans add SSO/SCIM and a full audit log of who accessed what.",
  },
  {
    question: "Can I integrate my existing tools?",
    answer:
      "Arcline connects natively to Slack, PagerDuty, GitHub, Datadog, Jira, and Linear, with more integrations added regularly.",
  },
  {
    question: "Do you offer enterprise support?",
    answer:
      "Enterprise plans include a dedicated support engineer and hands-on onboarding for your team.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most teams connect their first integration and see live deploy/incident data within an hour.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: `mailto:${siteConfig.email}` },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];

