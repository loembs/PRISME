import { useQuery } from "@tanstack/react-query";
import { api, type ArticleDto } from "@/lib/api";
import type { Article } from "@/lib/types";

function toArticle(d: ArticleDto): Article {
  return {
    id: d.id,
    title: d.title,
    excerpt: d.excerpt,
    category: d.category,
    image: d.image,
    author: d.author,
    date: d.date,
    readTime: d.readTime,
    featured: d.featured,
    orientation: d.orientation as Article["orientation"],
    views: d.views,
    duration: d.duration,
    tags: d.tags,
  };
}

export function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => api.articles.getAll(),
    select: (data) => data.map(toArticle),
  });
}

export function useLatestArticles() {
  return useQuery({
    queryKey: ["articles", "latest"],
    queryFn: () => api.articles.getLatest(),
    select: (data) => data.map(toArticle),
  });
}

export function useArticle(id: string | undefined) {
  return useQuery({
    queryKey: ["articles", id],
    queryFn: () => api.articles.getById(id!),
    enabled: !!id,
    select: (data) => toArticle(data),
  });
}

export function useArticlesByCategory(category: string | undefined) {
  return useQuery({
    queryKey: ["articles", "category", category],
    queryFn: () => api.articles.getByCategory(category!),
    enabled: !!category,
    select: (data) => data.map(toArticle),
  });
}
