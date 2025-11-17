import { Home, HelpCircle, Users } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNavigate: (section: 'home' | 'about' | 'help') => void;
  currentSection: string;
}

export function Header({ onNavigate, currentSection }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white">T</span>
          </div>
          <span className="text-lg">Trace App</span>
        </div>
        
        <nav className="flex items-center gap-2">
          <Button 
            variant={currentSection === 'home' ? 'default' : 'ghost'}
            onClick={() => onNavigate('home')}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
          <Button 
            variant={currentSection === 'about' ? 'default' : 'ghost'}
            onClick={() => onNavigate('about')}
            className="gap-2"
          >
            <Users className="w-4 h-4" />
            About Us
          </Button>
          <Button 
            variant={currentSection === 'help' ? 'default' : 'ghost'}
            onClick={() => onNavigate('help')}
            className="gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            Help/Support
          </Button>
        </nav>
      </div>
    </header>
  );
}
