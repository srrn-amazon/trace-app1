import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

export function SearchSection({ onSearch, isSearching }: SearchSectionProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleExampleClick = (example: string) => {
    setQuery(example);
    onSearch(example);
  };

  const examples = [
    "Which SOP you can support",
    "What was the recent updates to Rufus SOP",
    "Who are the respective SOP POCs",
  ];

  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1640963269654-3fe248c5fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjIxNDI1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Hero Text */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Powered Answers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Get Instant Answers to Your Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search our knowledge base and get quick, accurate responses to all your queries
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="space-y-4">
            <Card className="p-2 flex items-center gap-2 shadow-lg">
              <Search className="w-5 h-5 text-muted-foreground ml-2" />
              <Input
                type="text"
                placeholder="Ask a question..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
              />
              <Button 
                type="submit" 
                disabled={!query.trim() || isSearching}
                className="shrink-0"
              >
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </Card>
          </form>

          {/* Example Questions */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Try asking:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-sm"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
