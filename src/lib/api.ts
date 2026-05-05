/**
 * Client API Prisme Media - Backend
 */

const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/api`
  : "/api";

async function fetchApi<T>(path: string, options?: RequestInit): Promise<T> {
  const url = path.startsWith("http") ? path : `${API_BASE}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export const api = {
  videos: {
    getAll: () => fetchApi<VideoDto[]>("/videos"),
    getLatest: () => fetchApi<VideoDto[]>("/videos/latest"),
    getTrending: () => fetchApi<VideoDto[]>("/videos/trending"),
    getById: (id: string) => fetchApi<VideoDto>(`/videos/${id}`),
    getByCategory: (category: string) => fetchApi<VideoDto[]>(`/videos/category/${encodeURIComponent(category)}`),
    search: (q: string) => fetchApi<VideoDto[]>(`/videos/search?q=${encodeURIComponent(q)}`),
  },
  articles: {
    getAll: () => fetchApi<ArticleDto[]>("/articles"),
    getLatest: () => fetchApi<ArticleDto[]>("/articles/latest"),
    getById: (id: string) => fetchApi<ArticleDto>(`/articles/${id}`),
    getByCategory: (category: string) => fetchApi<ArticleDto[]>(`/articles/category/${encodeURIComponent(category)}`),
  },
};

/** DTO vidéo (aligné backend VideoResponseDto) */
export interface VideoDto {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  date: string;
  views?: string;
  description?: string;
  videoUrl?: string;
  storageType?: string;
}

/** DTO article (aligné backend ArticleResponseDto) */
export interface ArticleDto {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  orientation?: string;
  views?: string;
  duration?: string;
  tags?: string[];
}
