import { useQuery } from "@tanstack/react-query";
import { api, type VideoDto } from "@/lib/api";
import { MOCK_VIDEOS } from "@/data/mockData";
import type { VideoProps } from "@/components/video/VideoCard";

function toVideoProps(d: VideoDto): VideoProps {
  return {
    id: d.id,
    title: d.title,
    thumbnail: d.thumbnail,
    duration: d.duration || "0:00",
    category: d.category,
    date: d.date,
    views: d.views,
    description: d.description,
    videoUrl: d.videoUrl,
  };
}

async function fetchWithMock<T>(queryFn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await queryFn();
  } catch (error) {
    console.warn("API unavailable, using mock video data", error);
    return fallback;
  }
}

export function useVideos() {
  return useQuery({
    queryKey: ["videos"],
    queryFn: () => fetchWithMock(() => api.videos.getAll(), MOCK_VIDEOS),
    select: (data) => data.map(toVideoProps),
    retry: false,
  });
}

export function useLatestVideos() {
  return useQuery({
    queryKey: ["videos", "latest"],
    queryFn: () => fetchWithMock(() => api.videos.getLatest(), MOCK_VIDEOS.slice(0, 4)),
    select: (data) => data.map(toVideoProps),
    retry: false,
  });
}

export function useTrendingVideos() {
  return useQuery({
    queryKey: ["videos", "trending"],
    queryFn: () => fetchWithMock(() => api.videos.getTrending(), MOCK_VIDEOS.slice(0, 5)),
    select: (data) => data.map(toVideoProps),
    retry: false,
  });
}

export function useVideo(id: string | undefined, enabled = true) {
  return useQuery({
    queryKey: ["videos", id],
    queryFn: async () => {
      try {
        return await api.videos.getById(id ?? "");
      } catch (error) {
        console.warn("API unavailable for single video, using mock fallback", error);
        const fallback = MOCK_VIDEOS.find((video) => video.id === id) || MOCK_VIDEOS[0];
        return fallback;
      }
    },
    enabled: !!id && enabled,
    select: (data) => toVideoProps(data),
    retry: false,
  });
}

export function useVideosByCategory(category: string | undefined) {
  return useQuery({
    queryKey: ["videos", "category", category],
    queryFn: async () => {
      try {
        return await api.videos.getByCategory(category ?? "");
      } catch (error) {
        console.warn("API unavailable for category videos, using mock fallback", error);
        const filtered = MOCK_VIDEOS.filter(
          (video) => video.category.toLowerCase() === category?.toLowerCase()
        );
        return filtered.length > 0 ? filtered : MOCK_VIDEOS.slice(0, 6);
      }
    },
    enabled: !!category,
    select: (data) => data.map(toVideoProps),
    retry: false,
  });
}

export function useSearchVideos(query: string) {
  return useQuery({
    queryKey: ["videos", "search", query],
    queryFn: async () => {
      try {
        return await api.videos.search(query || "");
      } catch (error) {
        console.warn("API unavailable for search, using mock fallback", error);
        if (!query) {
          return MOCK_VIDEOS;
        }

        const lower = query.toLowerCase();
        const filtered = MOCK_VIDEOS.filter(
          (video) =>
            video.title.toLowerCase().includes(lower) ||
            video.category.toLowerCase().includes(lower) ||
            (video.description?.toLowerCase().includes(lower) ?? false)
        );
        return filtered.length > 0 ? filtered : MOCK_VIDEOS;
      }
    },
    select: (data) => data.map(toVideoProps),
    retry: false,
  });
}
