
import React from 'react';
import { Card } from '@/components/ui/card';
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
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal/5 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-deep-blue/5 animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-teal uppercase tracking-widest text-sm font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 relative inline-block">
            Contact Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber"></span>
          </h2>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6 border-l-2 border-deep-blue">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-deep-blue mr-3" />
                <h3 className="text-lg font-medium text-deep-blue">Email</h3>
              </div>
              <a href="mailto:mahaveersatra@gmail.com" className="text-slate-600 hover:text-teal transition-colors group">
                mahaveersatra@gmail.com
                <span className="block h-0.5 w-0 group-hover:w-full bg-teal transition-all duration-300 mt-1"></span>
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6 border-l-2 border-teal">
              <div className="flex items-center mb-4">
                <Linkedin className="h-5 w-5 text-teal mr-3" />
                <h3 className="text-lg font-medium text-deep-blue">LinkedIn</h3>
              </div>
              <a 
                href="https://www.linkedin.com/in/mahaveer-satra" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-teal transition-colors group"
              >
                linkedin.com/in/mahaveer-satra
                <span className="block h-0.5 w-0 group-hover:w-full bg-teal transition-all duration-300 mt-1"></span>
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6 border-l-2 border-amber">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-amber mr-3" />
                <h3 className="text-lg font-medium text-deep-blue">Location</h3>
              </div>
              <p className="text-slate-600">Plano, Texas</p>
            </div>
          </div>
          
          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-md bg-white overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-deep-blue mb-6 relative inline-block">
                  Send Me a Message
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber"></span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="w-full border border-slate-200 focus:border-deep-blue focus:ring-1 focus:ring-deep-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="w-full border border-slate-200 focus:border-deep-blue focus:ring-1 focus:ring-deep-blue"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can I help you?" 
                      required 
                      className="w-full border border-slate-200 focus:border-deep-blue focus:ring-1 focus:ring-deep-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      rows={5} 
                      required 
                      className="w-full border border-slate-200 focus:border-deep-blue focus:ring-1 focus:ring-deep-blue"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white font-medium py-2.5 px-4 rounded-md shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
