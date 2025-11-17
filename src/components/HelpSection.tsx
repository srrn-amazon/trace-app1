import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Mail, MessageCircle, Phone, FileText } from "lucide-react";

export function HelpSection() {
  const faqs = [
    {
      question: "How do I search for answers?",
      answer: "Simply type your question in the search bar on the home page and click 'Search'. Our system will find the most relevant answers from our knowledge base.",
    },
    {
      question: "What if I can't find my answer?",
      answer: "If you can't find what you're looking for, you can contact our support team directly using the contact options below. We typically respond within 24 hours.",
    },
    {
      question: "Is there a limit to how many questions I can ask?",
      answer: "No, you can search and ask as many questions as you need. Our service is designed to help you find all the information you're looking for.",
    },
    {
      question: "How often is the knowledge base updated?",
      answer: "We continuously update our knowledge base to ensure all information is current and accurate. You can see the last update date on each answer.",
    },
    {
      question: "Can I suggest new questions to be added?",
      answer: "Absolutely! We welcome suggestions. Contact us through any of the support channels below and let us know what topics you'd like to see covered.",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "support@traceapp.com",
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Available Mon-Fri, 9am-5pm",
      action: "Start Chat",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "1-800-QUICK-ANS",
      action: "Call Now",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse our full guides",
      action: "View Docs",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1>Help & Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Browse our FAQs or get in touch with our support team.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <h2>Frequently Asked Questions</h2>
          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6">
          <h2>Contact Support</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4>{method.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
