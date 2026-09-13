export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  size: "sm" | "lg";
  icon: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: string[];
  popular?: boolean;
  cta: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};
