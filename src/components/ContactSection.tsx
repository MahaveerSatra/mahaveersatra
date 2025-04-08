
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail, Send, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { HandDrawnUnderline, HighlightedText } from '@/components/FunElements';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // In a real implementation, you would send the form data to a server
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="vibrant-heading">
            Get In Touch
            <span className="ml-3 text-lg font-handwritten text-annotation-blue inline-block transform rotate-[5deg]">
              Let's chat!
            </span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to contact me for any questions, collaborations, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <Card className="border-t-4 border-coral shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex items-start">
                  <Mail className="h-10 w-10 text-coral mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-indigo mb-1">Email</h3>
                    <p className="text-gray-700">mahaveersatra@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-azure shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex items-start">
                  <Linkedin className="h-10 w-10 text-azure mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-indigo mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/mahaveer-satra" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-coral transition-colors"
                    >
                      linkedin.com/in/mahaveer-satra
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-teal shadow-sm hover:shadow-md transition-all relative">
                <CardContent className="p-6 flex items-start">
                  <MapPin className="h-10 w-10 text-teal mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-indigo mb-1">Location</h3>
                    <p className="text-gray-700">Plano, Texas</p>
                  </div>
                </CardContent>
                <span className="absolute -right-4 -bottom-4 font-handwritten text-base text-annotation-green transform rotate-[8deg]">
                  Howdy, y'all! 🤠
                </span>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="border-t-4 border-sunshine shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-indigo mb-6">
                  Send Me a Message
                  <span className="ml-2 text-base font-handwritten text-annotation-orange inline-block transform rotate-[3deg]">
                    I promise to reply!
                  </span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="w-full border-sunshine focus:border-sunshine focus:ring-sunshine"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="w-full border-sunshine focus:border-sunshine focus:ring-sunshine"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can I help you?" 
                      required 
                      className="w-full border-sunshine focus:border-sunshine focus:ring-sunshine"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      rows={5} 
                      required 
                      className="w-full border-sunshine focus:border-sunshine focus:ring-sunshine"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-sunshine hover:bg-sunshine/90 text-indigo font-medium flex items-center justify-center rounded-full shadow-sm"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
