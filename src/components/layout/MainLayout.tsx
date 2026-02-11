import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-[1920px] mx-auto w-full">
                <Outlet />
            </main>
            <Footer />
            <Toaster />
        </div>
    );
}
