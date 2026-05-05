import { useParams } from "react-router-dom";
import { VideoGrid } from "@/components/video/VideoGrid";
import { useVideosByCategory } from "@/hooks/useVideos";

const Category = () => {
  const { slug } = useParams();
  const categoryTitle = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Videos";

  const { data: videos = [], isLoading } = useVideosByCategory(slug);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter" style={{ color: '#FF8400' }}>
          {categoryTitle}
        </h1>
        <p className="text-muted-foreground text-lg">
          Derniers contenus en {categoryTitle}
        </p>
      </div>

      {isLoading || videos.length > 0 ? (
        <VideoGrid title={`Dernières vidéos`} videos={videos} isLoading={isLoading} />
      ) : (
        <div className="py-20 text-center">
          <p className="text-xl text-muted-foreground">Aucune vidéo trouvée dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
};

export default Category;
