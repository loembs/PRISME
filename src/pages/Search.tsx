import { useSearchParams } from "react-router-dom";
import { VideoGrid } from "@/components/video/VideoGrid";
import { useSearchVideos } from "@/hooks/useVideos";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data: filteredVideos = [], isLoading } = useSearchVideos(query);

  const resultSuffix = filteredVideos.length > 1 ? "s" : "";
  const resultsText = query
    ? `${filteredVideos.length} résultat${resultSuffix} pour "${query}"`
    : "Entrez un terme dans la barre de recherche pour filtrer les vidéos";
  const hasResults = !isLoading && filteredVideos.length > 0;

  let resultsContent;
  if (isLoading) {
    resultsContent = <VideoGrid title="Résultats" videos={[]} isLoading={true} />;
  } else if (hasResults) {
    resultsContent = <VideoGrid videos={filteredVideos} />;
  } else {
    resultsContent = (
      <div className="py-20 text-center">
        <p className="text-xl text-muted-foreground">
          {query
            ? "Aucune vidéo trouvée. Essayez un autre terme de recherche."
            : "Utilisez la barre de recherche pour trouver des vidéos."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: '#FF8400' }}>
          Résultats de recherche
        </h1>
        <p className="text-muted-foreground text-lg">{resultsText}</p>
      </div>

      {resultsContent}
    </div>
  );
};

export default Search;
