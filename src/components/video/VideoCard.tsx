
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface VideoProps {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    category: string;
    date: string;
    views?: string;
    description?: string;
}

export function VideoCard({ video }: { video: VideoProps }) {
    return (
        <div className="group cursor-pointer flex flex-col gap-3">
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-muted">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-primary/90 p-3 rounded-full">
                        <Play className="w-6 h-6 text-black fill-black" />
                    </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-bold text-white rounded">
                    {video.duration}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-none border-primary text-primary text-[10px] px-1 py-0 font-bold uppercase tracking-wider">
                        {video.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">• {video.date}</span>
                </div>
                <h3 className="font-extrabold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                </h3>
            </div>
        </div>
    );
}
