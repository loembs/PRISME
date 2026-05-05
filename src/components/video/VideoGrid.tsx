import { Link } from "react-router-dom";
import { VideoCard, VideoProps } from "./VideoCard";
import { VideoCardSkeleton } from "./VideoCardSkeleton";

interface VideoGridProps {
    videos: VideoProps[];
    title?: string;
    isLoading?: boolean;
}

export function VideoGrid({ videos, title, isLoading = false }: VideoGridProps) {
    const displayVideos = isLoading && videos.length === 0 ? [] : videos;
    const showSkeletons = isLoading && videos.length === 0;

    return (
        <div className="space-y-6">
            {title && (
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
                </div>
            )}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-4 pb-4">
                    {showSkeletons ? (
                        Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex-none w-[180px] sm:w-[200px] md:w-[220px]">
                                <VideoCardSkeleton />
                            </div>
                        ))
                    ) : (
                        displayVideos.map((video) => (
                            <Link
                                key={video.id}
                                to={`/video/${video.id}`}
                                className="flex-none w-[180px] sm:w-[200px] md:w-[220px] block"
                            >
                                <VideoCard video={video} />
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
