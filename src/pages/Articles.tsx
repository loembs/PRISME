import { MOCK_ARTICLES, Article } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Articles = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

    const categories = ["Tous", "Afrique", "International", "Environnement", "Technologie", "Culture", "Santé", "Économie", "Sports"];

    const filteredArticles = selectedCategory === "Tous"
        ? MOCK_ARTICLES
        : MOCK_ARTICLES.filter(article => article.category === selectedCategory);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">Articles de Presse</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    Découvrez nos derniers articles sur l'actualité africaine et internationale
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${selectedCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            {/* Empty State */}
            {filteredArticles.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">Aucun article trouvé dans cette catégorie</p>
                </div>
            )}
        </div>
    );
};

function ArticleCard({ article }: { article: Article }) {
    return (
        <Link
            to={`/article/${article.id}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                    <Badge className="bg-primary text-primary-foreground rounded-none text-xs font-bold uppercase">
                        {article.category}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 space-y-3">
                <h3 className="font-bold text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                    {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Articles;
