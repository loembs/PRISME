import { Search, User, Home, Film, Newspaper, Leaf, Globe, Zap, Menu, Heart, Briefcase, Trophy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Main menu items (always visible)
const mainMenuItems = [
    {
        title: "Afrique",
        url: "/category/afrique",
        icon: Globe,
    },
    {
        title: "International",
        url: "/category/international",
        icon: Newspaper,
    },
    {
        title: "Culture",
        url: "/category/culture",
        icon: Film,
    },
    {
        title: "Articles",
        url: "/articles",
        icon: Newspaper,
    },
];

// Additional menu items (in dropdown)
const moreMenuItems = [
    {
        title: "Environnement",
        url: "/category/environnement",
        icon: Leaf,
    },
    {
        title: "Technologie",
        url: "/category/technologie",
        icon: Zap,
    },
    {
        title: "Santé",
        url: "/category/sante",
        icon: Heart,
    },
    {
        title: "Économie",
        url: "/category/economie",
        icon: Briefcase,
    },
    {
        title: "Sports",
        url: "/category/sports",
        icon: Trophy,
    },
];

// All menu items for mobile
const allMenuItems = [...mainMenuItems, ...moreMenuItems];

export function Header() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-24 items-center px-4 lg:px-8 gap-4 max-w-[1920px] mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="https://res.cloudinary.com/dlna2kuo1/image/upload/v1770812136/PRSME_lc1kwf.png"
                        alt="Prisme"
                        className="h-60 lg:h-60 w-auto object-contain transition-all duration-300"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 flex-1 ml-6">
                    {mainMenuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.url;
                        return (
                            <Link
                                key={item.title}
                                to={item.url}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold transition-colors ${isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{item.title}</span>
                            </Link>
                        );
                    })}

                    {/* More Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold text-foreground/80 hover:bg-accent hover:text-accent-foreground">
                                Plus
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                            {moreMenuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <DropdownMenuItem key={item.title} asChild>
                                        <Link
                                            to={item.url}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </DropdownMenuItem>
                                );
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 ml-auto md:ml-0">
                    {/* Search Bar - Desktop */}
                    <div className="relative hidden lg:flex items-center">
                        <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-48 xl:w-64 bg-secondary/50 border-none rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    window.location.href = `/search?q=${(e.target as HTMLInputElement).value}`;
                                }
                            }}
                        />
                    </div>

                    {/* Search Button - Mobile/Tablet */}
                    <Button variant="ghost" size="icon" className="lg:hidden">
                        <Search className="w-5 h-5" />
                    </Button>

                    {/* Subscribe Button */}
                    <Button variant="default" className="hidden sm:flex rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                        S'abonner
                    </Button>

                    {/* User Button */}
                    <Button variant="ghost" size="icon">
                        <User className="w-5 h-5" />
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64 bg-background">
                            <nav className="flex flex-col gap-2 mt-8">
                                {allMenuItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.url;
                                    return (
                                        <Link
                                            key={item.title}
                                            to={item.url}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-md text-base font-semibold transition-colors ${isActive
                                                ? "bg-primary text-primary-foreground"
                                                : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
