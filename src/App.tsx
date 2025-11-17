import { useState } from "react";
import { Header } from "./components/Header";
import { SearchSection } from "./components/SearchSection";
import { ResultsSection } from "./components/ResultsSection";
import { AboutSection } from "./components/AboutSection";
import { HelpSection } from "./components/HelpSection";

interface Result {
  id: string;
  question: string;
  answer: string;
  category: string;
  lastUpdated: string;
}

// Mock data for demonstration
const mockQA: Result[] = [
  {
    id: "1",
    question: "How do I reset my password?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a secure link to create a new password. The link will expire after 24 hours for security reasons.",
    category: "Account",
    lastUpdated: "2 days ago",
  },
  {
    id: "2",
    question: "What are your business hours?",
    answer: "Our customer support team is available Monday through Friday, 9:00 AM to 5:00 PM EST. For urgent matters outside these hours, you can submit a ticket through our support portal, and we'll respond as soon as possible.",
    category: "General",
    lastUpdated: "1 week ago",
  },
  {
    id: "3",
    question: "How can I contact support?",
    answer: "You can reach our support team through multiple channels: email at support@quickanswer.com, live chat during business hours, or by calling 1-800-QUICK-ANS. We aim to respond to all inquiries within 24 hours.",
    category: "Support",
    lastUpdated: "3 days ago",
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for enterprise customers. All payments are processed securely through our encrypted payment gateway.",
    category: "Billing",
    lastUpdated: "5 days ago",
  },
  {
    id: "5",
    question: "How do I update my account information?",
    answer: "Log into your account and navigate to Settings > Profile. From there, you can update your personal information, email address, and notification preferences. Remember to save your changes before leaving the page.",
    category: "Account",
    lastUpdated: "1 week ago",
  },
  {
    id: "6",
    question: "Is my data secure?",
    answer: "Yes, we take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security protocols and conduct regular security audits to ensure your information remains protected.",
    category: "Security",
    lastUpdated: "4 days ago",
  },
];

export default function App() {
  const [currentSection, setCurrentSection] = useState<'home' | 'about' | 'help'>('home');
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setIsSearching(true);
    setHasSearched(false);

    // Simulate API call delay
    setTimeout(() => {
      const results = mockQA.filter(item => 
        item.question.toLowerCase().includes(query.toLowerCase()) ||
        item.answer.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setHasSearched(true);
      setIsSearching(false);
    }, 500);
  };

  const handleNavigate = (section: 'home' | 'about' | 'help') => {
    setCurrentSection(section);
    setHasSearched(false);
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} currentSection={currentSection} />
      
      {currentSection === 'home' && (
        <>
          <SearchSection onSearch={handleSearch} isSearching={isSearching} />
          {hasSearched && <ResultsSection results={searchResults} query="" />}
        </>
      )}
      
      {currentSection === 'about' && <AboutSection />}
      {currentSection === 'help' && <HelpSection />}
    </div>
  );
}
