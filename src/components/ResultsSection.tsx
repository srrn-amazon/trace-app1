import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, Clock } from "lucide-react";

interface Result {
  id: string;
  question: string;
  answer: string;
  category: string;
  lastUpdated: string;
}

interface ResultsSectionProps {
  results: Result[];
  query: string;
}

export function ResultsSection({ results, query }: ResultsSectionProps) {
  if (results.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="p-12 text-center">
          <div className="max-w-md mx-auto space-y-3">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h3>No results found</h3>
            <p className="text-muted-foreground">
              We couldn't find any answers matching "{query}". Try rephrasing your question or contact support for help.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Found {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
          </p>
        </div>

        <div className="space-y-4">
          {results.map((result) => (
            <Card key={result.id} className="p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="flex-1">{result.question}</h3>
                  <Badge variant="secondary">{result.category}</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {result.answer}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Verified</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Updated {result.lastUpdated}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
