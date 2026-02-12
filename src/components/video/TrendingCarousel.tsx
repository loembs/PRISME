
import { TrendingUp } from "lucide-react";
import { TrendingVideoCard } from "./TrendingVideoCard";
import { VideoProps } from "./VideoCard";

interface TrendingCarouselProps {
    videos: VideoProps[];
}

export function TrendingCarousel({ videos }: TrendingCarouselProps) {
    return (
        <div className="space-y-6 pt-4 pb-8">
            <div className="flex items-center gap-3">
                <div className="text-primary">
                    <TrendingUp className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                    EN CE MOMENT
                </h2>
            </div>

            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-5 pb-6">
                    {videos.slice(0, 5).map((video, index) => (
                        <div key={video.id} className="flex-none w-[280px] sm:w-[320px] md:w-[360px]">
                            <TrendingVideoCard video={video} rank={index + 1} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
