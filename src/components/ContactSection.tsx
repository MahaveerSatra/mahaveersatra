
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail, Send, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the form data to a server
      // For now, we'll simulate sending an email 
      console.log("Sending email to mahaveersatra@gmail.com with:", formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        className: "bg-teal-500 text-white",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact me directly at mahaveersatra@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-20 w-64 h-64 bg-amber-100 rounded-full opacity-40 animate-float-slow"></div>
        <div className="absolute bottom-20 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-50 animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Get In Touch
          </h2>
          <div className="h-1 w-32 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or want to collaborate? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <Card className="border-0 bg-gradient-to-r from-blue-50 to-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 flex items-start">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-1">Email</h3>
                    <p className="text-gray-700">mahaveersatra@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-to-r from-teal-50 to-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 flex items-start">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-500 mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/mahaveer-satra" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition-colors relative group"
                    >
                      <span>linkedin.com/in/mahaveer-satra</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-to-r from-amber-50 to-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 flex items-start">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-500 mb-1">Location</h3>
                    <p className="text-gray-700">Plano, Texas</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 via-teal-500 to-amber-400"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">Send Me a Message</h3>
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
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-teal-200 focus:border-teal-500 focus:ring-teal-500"
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
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-teal-200 focus:border-teal-500 focus:ring-teal-500"
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
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-teal-200 focus:border-teal-500 focus:ring-teal-500"
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
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium rounded-full py-2.5 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending... <span className="animate-pulse ml-2">•••</span></>
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
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
