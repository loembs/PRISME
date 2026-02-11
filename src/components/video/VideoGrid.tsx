
import { VideoCard, VideoProps } from "./VideoCard";

interface VideoGridProps {
    videos: VideoProps[];
    title?: string;
}

export function VideoGrid({ videos, title }: VideoGridProps) {
    return (
        <div className="space-y-6">
            {title && (
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
                </div>
            )}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-4 pb-4">
                    {videos.map((video) => (
                        <div key={video.id} className="flex-none w-[180px] sm:w-[200px] md:w-[220px]">
                            <VideoCard video={video} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
