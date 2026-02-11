import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-black text-primary">404</h1>
        <p className="text-2xl font-bold uppercase tracking-tight">Page not found</p>
        <Link to="/" className="inline-block bg-white text-black font-bold uppercase py-3 px-8 hover:bg-gray-200 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
