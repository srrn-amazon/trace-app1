import { Card } from "./ui/card";
import { Target, Users, Zap } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide instant, accurate answers to help users solve their problems quickly and efficiently.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A dedicated group of experts committed to building the best Q&A experience for our users.",
    },
    {
      icon: Zap,
      title: "Our Vision",
      description: "Empowering everyone with immediate access to knowledge and support whenever they need it.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1>About Trace App</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make information accessible and helpful for everyone. 
            Our platform combines intelligent search with a comprehensive knowledge base 
            to deliver the answers you need, when you need them.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3>{value.title}</h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <Card className="p-8 md:p-12 space-y-6">
          <h2>Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Trace App was born from a simple observation: people waste too much time 
              searching for answers to common questions. We believed there had to be a better way.
            </p>
            <p>
              Since our founding, we've built a platform that combines cutting-edge search 
              technology with a carefully curated knowledge base. Our goal is to help you 
              find answers in seconds, not minutes.
            </p>
            <p>
              Today, thousands of users trust Trace App to help them solve problems, 
              learn new things, and get support when they need it most.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
