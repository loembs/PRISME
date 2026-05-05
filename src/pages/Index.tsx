import { VideoGrid } from "@/components/video/VideoGrid";
import { TrendingCarousel } from "@/components/video/TrendingCarousel";
import { useTrendingVideos, useLatestVideos } from "@/hooks/useVideos";
import { Play, Info, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: trendingVideos, isLoading: loadingTrending } = useTrendingVideos();
  const { data: latestVideos, isLoading: loadingLatest } = useLatestVideos();

  const heroVideo = trendingVideos?.[0];
  const cultureVideos = latestVideos?.filter(
    (v) => v.category === "Culture" || v.category === "Actualités"
  ) ?? [];
  const fallbackLatest = latestVideos ?? [];
  const fallbackTrending = trendingVideos ?? [];

  if (loadingTrending && loadingLatest) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      {heroVideo ? (
        <Link
          to={`/video/${heroVideo.id}`}
          className="block relative aspect-[4/5] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] md:rounded-lg group cursor-pointer mx-auto"
        >
          <img
            src={heroVideo.thumbnail}
            alt={heroVideo.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 items-center text-center md:items-start md:text-left">
            <div className="max-w-3xl space-y-4">
              <div className="flex justify-center md:justify-start">
                <Badge className="bg-primary text-black hover:bg-primary/90 rounded-none text-xs font-bold uppercase tracking-wider">
                  {heroVideo.category}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase drop-shadow-xl">
                {heroVideo.title}
              </h1>
              <p className="text-gray-200 line-clamp-3 md:line-clamp-2 md:text-lg max-w-2xl drop-shadow-md">
                {heroVideo.description || "Découvrez cette vidéo d'actualité."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full font-bold text-base bg-white text-black hover:bg-gray-200"
                >
                  <Play className="w-5 h-5 mr-2 fill-black" />
                  Regarder
                </Button>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full font-bold text-base bg-black/80 text-white hover:bg-black border border-white/30 backdrop-blur-sm"
                >
                  <Info className="w-5 h-5 mr-2" />
                  Plus d'infos
                </Button>
              </div>
            </div>
          </div>
        </Link>
      ) : loadingTrending ? (
        <div className="relative aspect-[4/5] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] md:rounded-lg bg-muted flex items-center justify-center mx-auto">
          <div className="max-w-3xl space-y-4 w-full p-6 md:p-10">
            <Skeleton className="h-6 w-20 mx-auto md:mx-0" />
            <Skeleton className="h-12 md:h-16 lg:h-20 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex gap-3 pt-2">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative aspect-[4/5] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] md:rounded-lg bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Aucune vidéo en vedette. Synchronisez une playlist YouTube depuis le backend.</p>
        </div>
      )}

      {/* Trending Section */}
      <TrendingCarousel videos={fallbackTrending} isLoading={loadingTrending} />

      {/* Video Sections */}
      <VideoGrid title="Dernières Vidéos" videos={fallbackLatest.slice(0, 4)} isLoading={loadingLatest} />
      <VideoGrid
        title="Culture & Actualités"
        videos={cultureVideos.length > 0 ? cultureVideos.slice(0, 4) : fallbackLatest.slice(4, 8)}
        isLoading={loadingLatest}
      />
      <VideoGrid title="Tendances" videos={fallbackTrending.slice(4, 8)} isLoading={loadingTrending} />
    </div>
  );
};

export default Index;
