import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { TrendingVideoCard } from "./TrendingVideoCard";
import { TrendingVideoCardSkeleton } from "./TrendingVideoCardSkeleton";
import { VideoProps } from "./VideoCard";

interface TrendingCarouselProps {
    videos: VideoProps[];
    isLoading?: boolean;
}

export function TrendingCarousel({ videos, isLoading = false }: TrendingCarouselProps) {
    const displayVideos = isLoading && videos.length === 0 ? [] : videos.slice(0, 5);
    const showSkeletons = isLoading && videos.length === 0;

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
                    {showSkeletons ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="flex-none w-[280px] sm:w-[320px] md:w-[360px]">
                                <TrendingVideoCardSkeleton />
                            </div>
                        ))
                    ) : (
                        displayVideos.map((video, index) => (
                            <Link
                                key={video.id}
                                to={`/video/${video.id}`}
                                className="flex-none w-[280px] sm:w-[320px] md:w-[360px] block"
                            >
                                <TrendingVideoCard video={video} rank={index + 1} />
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
