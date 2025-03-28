
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail, Send, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-liverpool mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to contact me for any questions, collaborations, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start">
                  <Mail className="h-10 w-10 text-liverpool mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">Email</h3>
                    <p className="text-gray-700">contact@mahaveersatra.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start">
                  <Linkedin className="h-10 w-10 text-liverpool mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/mahaveer-satra" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-liverpool transition-colors"
                    >
                      linkedin.com/in/mahaveer-satra
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start">
                  <MapPin className="h-10 w-10 text-liverpool mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">Location</h3>
                    <p className="text-gray-700">Boston, Massachusetts</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-navy mb-6">Send Me a Message</h3>
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
                        className="w-full"
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
                        className="w-full"
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
                      className="w-full"
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
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-liverpool hover:bg-liverpool/90 text-white flex items-center justify-center"
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
