
import { useParams } from "react-router-dom";
import { VideoGrid } from "@/components/video/VideoGrid";
import { MOCK_VIDEOS } from "@/data/mockData";

const Category = () => {
    const { slug } = useParams();
    const categoryTitle = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Videos";

    // Filter videos based on slug (mock logic)
    const videos = MOCK_VIDEOS.filter(v =>
        v.category.toLowerCase() === slug?.toLowerCase() ||
        v.title.toLowerCase().includes(slug?.toLowerCase() || "")
    );

    // If no videos match, just show all for demo purposes
    const displayVideos = videos.length > 0 ? videos : MOCK_VIDEOS;

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{categoryTitle}</h1>
                <p className="text-muted-foreground text-lg">Latest stories in {categoryTitle}</p>
            </div>

            <VideoGrid videos={displayVideos} />
        </div>
    );
};

export default Category;
