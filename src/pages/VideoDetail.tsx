
import { useParams, Link } from "react-router-dom";
import { MOCK_VIDEOS, HERO_VIDEO } from "@/data/mockData";
import { VideoGrid } from "@/components/video/VideoGrid";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Share2, ThumbsUp, MessageCircle, Play } from "lucide-react";

const VideoDetail = () => {
    const { id } = useParams();

    // Find video (including hero video for demo)
    const video = MOCK_VIDEOS.find(v => v.id === id) || (id === HERO_VIDEO.id ? HERO_VIDEO : null);

    if (!video) {
        return <div className="p-10 text-center">Vidéo introuvable</div>;
    }

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Video Player Placeholder */}
            <div className="relative aspect-video bg-black rounded-none shadow-2xl overflow-hidden group">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" className="w-20 h-20 rounded-full bg-primary text-black hover:bg-primary/90 hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 ml-1 fill-black" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="border-primary text-primary text-xs font-bold uppercase tracking-wider rounded-none">
                                {video.category}
                            </Badge>
                            <span className="text-muted-foreground text-sm">• {video.date} {video.views && `• ${video.views} vues`}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                            {video.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {video.description || "Aucune description disponible pour cette vidéo."}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 border-y border-border py-4">
                        <Avatar className="w-12 h-12">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>PR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <h3 className="font-bold text-lg">Prisme Media</h3>
                            <p className="text-sm text-muted-foreground">1,2M Abonnés</p>
                        </div>
                        <Button className="rounded-full font-bold bg-white text-black hover:bg-gray-200">
                            S'abonner
                        </Button>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="secondary" className="rounded-full gap-2">
                            <ThumbsUp className="w-4 h-4" /> J'aime
                        </Button>
                        <Button variant="secondary" className="rounded-full gap-2">
                            <MessageCircle className="w-4 h-4" /> Commentaire
                        </Button>
                        <Button variant="secondary" className="rounded-full gap-2 ml-auto">
                            <Share2 className="w-4 h-4" /> Partager
                        </Button>
                    </div>
                </div>

                {/* Sidebar Recommendations */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold uppercase">À suivre</h3>
                    <div className="space-y-4">
                        {MOCK_VIDEOS.slice(0, 5).map(v => (
                            <Link to={`/video/${v.id}`} key={v.id} className="group flex gap-3 hover:bg-accent/5 p-2 transition-colors">
                                <div className="relative w-32 aspect-video flex-shrink-0 overflow-hidden bg-muted">
                                    <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                                    <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 text-white font-bold">{v.duration}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                                        {v.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1">{v.category} • {v.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
