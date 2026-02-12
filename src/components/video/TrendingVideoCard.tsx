
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { VideoProps } from "./VideoCard";

interface TrendingVideoCardProps {
    video: VideoProps;
    rank: number;
}

export function TrendingVideoCard({ video, rank }: TrendingVideoCardProps) {
    return (
        <div className="group cursor-pointer flex flex-col gap-3 w-full">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                {/* Rank Badge */}
                <div className="absolute top-3 left-3 z-10">
                    <div className="bg-primary text-black w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                        {rank}
                    </div>
                </div>

                {/* Thumbnail */}
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay with Play Button */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                        <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 text-[10px] font-bold text-white rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 block"></span>
                    {video.duration}
                </div>

                {/* Content Info Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <Badge variant="outline" className="mb-2 bg-primary/20 border-primary/30 text-primary text-[9px] px-1.5 py-0 font-bold uppercase tracking-wider backdrop-blur-sm">
                        {video.category}
                    </Badge>
                    <h3 className="font-bold text-white text-sm md:text-base leading-tight line-clamp-2 drop-shadow-md">
                        {video.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-300 font-medium">
                        <span className="flex items-center gap-1">
                            <span className="w-3 h-3 border border-white/30 rounded-full flex items-center justify-center text-[7px]">👁</span>
                            {video.views}
                        </span>
                        <span>•</span>
                        <span>{video.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
