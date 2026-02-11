import { VideoGrid } from "@/components/video/VideoGrid";
import { MOCK_VIDEOS, HERO_VIDEO } from "@/data/mockData";
import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Link to={`/video/${HERO_VIDEO.id}`} className="block relative aspect-[21/9] w-full overflow-hidden rounded-lg group cursor-pointer">
        <img
          src={HERO_VIDEO.thumbnail}
          alt={HERO_VIDEO.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-primary text-black hover:bg-primary/90 rounded-none text-xs font-bold uppercase tracking-wider">
              {HERO_VIDEO.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase drop-shadow-xl">
              {HERO_VIDEO.title}
            </h1>
            <p className="text-gray-200 line-clamp-2 md:text-lg max-w-2xl drop-shadow-md">
              {HERO_VIDEO.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Button size="lg" className="rounded-full font-bold text-base bg-white text-black hover:bg-gray-200">
                <Play className="w-5 h-5 mr-2 fill-black" />
                Watch Now
              </Button>
              <Button size="lg" className="rounded-full font-bold text-base bg-black/80 text-white hover:bg-black border border-white/30 backdrop-blur-sm">
                <Info className="w-5 h-5 mr-2" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </Link>

      {/* Video Sections */}
      <VideoGrid title="Latest Videos" videos={MOCK_VIDEOS.slice(0, 4)} />
      <VideoGrid title="Documentaries" videos={MOCK_VIDEOS.filter(v => v.category === 'Documentary' || v.title.includes('legacy') || v.category === 'Culture')} />
      <VideoGrid title="Trending Now" videos={MOCK_VIDEOS.slice(4, 8)} />
    </div>
  );
};

export default Index;
