import heroImg from "@/assets/hero-1.jpg";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";
import article5 from "@/assets/article-5.jpg";
import article6 from "@/assets/article-6.jpg";
import type { Article } from "./types";

export const articles: Article[] = [
  {
    id: "1",
    title: "Sénégal : la jeunesse redéfinit l'engagement citoyen à travers le continent",
    excerpt: "Une nouvelle génération de militants transforme le paysage politique avec des méthodes innovantes et une présence digitale sans précédent.",
    category: "Afrique",
    image: article1,
    author: "Aminata Diallo",
    date: "11 fév. 2026",
    readTime: "5 min",
    featured: true,
  },
  {
    id: "2",
    title: "Énergie solaire : le Sahel mise sur un plan de transition à grande échelle",
    excerpt: "Un investissement massif pour couvrir 40% des besoins énergétiques de la région d'ici 2035.",
    category: "Environnement",
    image: article2,
    author: "Moussa Traoré",
    date: "11 fév. 2026",
    readTime: "4 min",
  },
  {
    id: "3",
    title: "L'IA made in Africa : ces startups qui révolutionnent le continent",
    excerpt: "De Lagos à Nairobi, les startups africaines en intelligence artificielle attirent des investissements records.",
    category: "Technologie",
    image: article3,
    author: "Fatou Sow",
    date: "10 fév. 2026",
    readTime: "7 min",
  },
  {
    id: "4",
    title: "Gastronomie africaine : la street food conquiert le monde",
    excerpt: "Des marchés d'Abidjan aux restaurants de Londres, la cuisine de rue africaine s'impose comme une tendance mondiale.",
    category: "Culture",
    image: article4,
    author: "Kofi Mensah",
    date: "10 fév. 2026",
    readTime: "3 min",
  },
  {
    id: "5",
    title: "JO 2028 : les athlètes africaines qui vont marquer l'histoire",
    excerpt: "Portrait de cinq sportives du continent qui se préparent à briller aux Jeux Olympiques de Los Angeles.",
    category: "Sport",
    image: article5,
    author: "Ousmane Ba",
    date: "9 fév. 2026",
    readTime: "6 min",
  },
  {
    id: "6",
    title: "Montée des eaux : les côtes ouest-africaines face à l'urgence climatique",
    excerpt: "De nouvelles données satellite révèlent l'accélération de l'érosion côtière en Afrique de l'Ouest.",
    category: "Environnement",
    image: article6,
    author: "Awa Ndiaye",
    date: "9 fév. 2026",
    readTime: "5 min",
  },
];

export const heroArticle = {
  id: "hero",
  title: "Le continent à travers un nouveau regard",
  excerpt: "Prisme vous offre une perspective unique sur l'actualité africaine. Des reportages de fond, des analyses percutantes et des récits qui comptent.",
  category: "À la une",
  image: article1,
  author: "Rédaction Prisme",
  date: "11 fév. 2026",
  readTime: "8 min",
  featured: true,
};
