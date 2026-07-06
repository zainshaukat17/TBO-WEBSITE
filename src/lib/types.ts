import type { IconName } from "@/components/icons";

export type FAQ = { q: string; a: string };

export type ServiceCategory =
  | "Foundation"
  | "Paid Advertising"
  | "Search & AI Visibility"
  | "Social & Content"
  | "Conversion";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: IconName;
  tagline: string;
  summary: string;
  painPoints: string[];
  deliverables: { title: string; description: string }[];
  approach: { step: string; title: string; description: string }[];
  stat: { value: string; label: string };
  faqs: FAQ[];
};

export type Industry = {
  slug: string;
  name: string;
  pluralName: string;
  icon: IconName;
  summary: string;
  challenges: string[];
  approach: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  featuredServices: string[];
  faqs: FAQ[];
};
