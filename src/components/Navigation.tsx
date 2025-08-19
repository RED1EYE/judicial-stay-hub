import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold">IJA</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`hover:text-accent transition-colors ${
                location.pathname === '/' ? 'text-accent' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/login" 
              className={`hover:text-accent transition-colors ${
                location.pathname === '/login' ? 'text-accent' : ''
              }`}
            >
              Student Login
            </Link>
            <Link 
              to="/admin" 
              className={`hover:text-accent transition-colors ${
                location.pathname === '/admin' ? 'text-accent' : ''
              }`}
            >
              Admin
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            {location.pathname === '/' && (
              <>
                <Button 
                  asChild 
                  variant="secondary" 
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link to="/login">Student Login</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link to="/admin">Admin Login</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;