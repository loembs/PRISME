import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { Home, Search, Film, Newspaper, Leaf, Globe, Zap, Menu } from "lucide-react"
import { Link } from "react-router-dom"

const items = [
    {
        title: "A la une",
        url: "/",
        icon: Home,
    },
    {
        title: "Documentaries",
        url: "/category/documentary",
        icon: Film,
    },
    {
        title: "News",
        url: "/category/news",
        icon: Newspaper,
    },
    {
        title: "Nature",
        url: "/category/nature",
        icon: Leaf,
    },
    {
        title: "Culture",
        url: "/category/culture",
        icon: Globe,
    },
    {
        title: "Sports",
        url: "/category/sports",
        icon: Zap,
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="border-r-0 bg-background">
            <SidebarHeader className="p-4">
                <h1 className="text-3xl font-black tracking-tighter text-primary">PRISME</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="hover:bg-accent hover:text-accent-foreground font-bold text-lg py-6">
                                        <Link to={item.url}>
                                            <item.icon className="w-6 h-6 mr-2" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
