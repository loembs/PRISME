export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const categories = [
  "À la une",
  "Afrique",
  "International",
  "Environnement",
  "Technologie",
  "Culture",
  "Santé",
  "Économie",
  "Sport",
] as const;

export type Category = (typeof categories)[number];
