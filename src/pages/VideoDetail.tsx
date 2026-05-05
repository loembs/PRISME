import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useVideo, useTrendingVideos } from "@/hooks/useVideos";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Share2, ThumbsUp, MessageCircle } from "lucide-react";

const VideoDetail = () => {
  const { id } = useParams();
  const { data: video, isLoading, error } = useVideo(id);
  const { data: recommendations = [] } = useTrendingVideos();
  const [playerError, setPlayerError] = useState(false);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
        <Skeleton className="aspect-video rounded-none shadow-2xl" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-32 rounded-full" />
                <Skeleton className="h-4 w-40" />
              </div>
              <Skeleton className="h-12 w-full md:w-3/4" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>

            <div className="flex items-center gap-4 border-y border-border py-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
              <Skeleton className="h-11 w-32 rounded-full" />
            </div>

            <div className="flex gap-4">
              <Skeleton className="h-11 w-28 rounded-full" />
              <Skeleton className="h-11 w-28 rounded-full" />
              <Skeleton className="h-11 w-28 rounded-full ml-auto" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-tight">
              À suivre
            </h3>
            <div className="space-y-4">
              {[
                "recommendation-skeleton-1",
                "recommendation-skeleton-2",
                "recommendation-skeleton-3",
                "recommendation-skeleton-4",
              ].map((id) => (
                <div key={id} className="group flex gap-3 p-2">
                  <Skeleton className="w-32 aspect-video rounded-xl" />
                  <div className="flex-1 min-w-0 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="p-10 text-center">
        <p className="text-muted-foreground text-lg">Vidéo introuvable</p>
        <Link to="/" className="text-primary hover:underline mt-2 inline-block">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const recos = recommendations.filter((v) => v.id !== video.id).slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Video Player */}
      <div className="relative aspect-video bg-black rounded-none shadow-2xl overflow-hidden">
        {video.videoUrl && !playerError ? (
          <iframe
            src={video.videoUrl}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={() => setPlayerError(true)}
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <p className="text-white/80 text-sm">
                Lecture non disponible pour cette vidéo
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-primary text-primary text-xs font-bold uppercase tracking-wider rounded-none"
              >
                {video.category}
              </Badge>
              <span className="text-muted-foreground text-sm">
                • {video.date} {video.views && `• ${video.views} vues`}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none" style={{ color: '#FF8400' }}>
              {video.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {video.description || "Aucune description disponible pour cette vidéo."}
            </p>
          </div>

          <div className="flex items-center gap-4 border-y border-border py-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Prisme Media</h3>
              <p className="text-sm text-muted-foreground">1,2M Abonnés</p>
            </div>
            <Button className="rounded-full font-bold bg-white text-black hover:bg-gray-200">
              S'abonner
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="secondary" className="rounded-full gap-2">
              <ThumbsUp className="w-4 h-4" /> J'aime
            </Button>
            <Button variant="secondary" className="rounded-full gap-2">
              <MessageCircle className="w-4 h-4" /> Commentaire
            </Button>
            <Button variant="secondary" className="rounded-full gap-2 ml-auto">
              <Share2 className="w-4 h-4" /> Partager
            </Button>
          </div>
        </div>

        {/* Sidebar Recommendations */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase">À suivre</h3>
          <div className="space-y-4">
            {recos.map((v) => (
              <Link
                to={`/video/${v.id}`}
                key={v.id}
                className="group flex gap-3 hover:bg-accent/5 p-2 transition-colors"
              >
                <div className="relative w-32 aspect-video flex-shrink-0 overflow-hidden bg-muted">
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 text-white font-bold">
                    {v.duration}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {v.category} • {v.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
