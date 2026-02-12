
import { useSearchParams } from "react-router-dom";
import { VideoGrid } from "@/components/video/VideoGrid";
import { MOCK_VIDEOS } from "@/data/mockData";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const filteredVideos = MOCK_VIDEOS.filter(v =>
        v.title.toLowerCase().includes(query.toLowerCase()) ||
        v.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                    Résultats de recherche
                </h1>
                <p className="text-muted-foreground text-lg">
                    {filteredVideos.length} résultat{filteredVideos.length !== 1 && 's'} pour "{query}"
                </p>
            </div>

            {filteredVideos.length > 0 ? (
                <VideoGrid videos={filteredVideos} />
            ) : (
                <div className="py-20 text-center">
                    <p className="text-xl text-muted-foreground">Aucune vidéo trouvée. Essayez un autre terme de recherche.</p>
                </div>
            )}
        </div>
    );
};

export default Search;
