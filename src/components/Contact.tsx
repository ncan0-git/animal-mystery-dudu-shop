import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://fablefuzzies.com:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        toast({
          title: "Message Sent! 📧",
          description: "Thank you for contacting us. We'll get back to you within 24 hours!",
        });
      } else {
        setStatus('error');
        toast({
          title: "Error sending message",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Have questions about our DuDu Animal Party mystery boxes? We'd love to hear from you! 
            Our friendly team is here to help with any questions or concerns.
          </p>
        </div>

        <div className="flex flex-col items-center">
          
          {/* Contact Form - Full width on mobile, max-width on desktop */}
          <div className="w-full max-w-2xl mb-12">
            <Card className="bg-gradient-card shadow-card border-none">
              <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-primary rounded-full">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Send us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full min-h-32"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-primary-green hover:bg-primary-green-dark text-black-cat font-semibold py-6 text-lg shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information - Centered on mobile */}
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Other Ways to Reach Us</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Email */}
              <Card className="group bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-green-frog/20 hover:border-green-frog/40 h-48">
                <CardContent className="p-6 h-full flex">
                  <div className="flex items-start gap-4 w-full">
                    <div className="p-3 bg-green-frog rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
                        <p className="text-foreground/70 mb-2">
                          Send us an email for detailed inquiries
                        </p>
                        <p className="text-primary-green font-medium">
                          support@duduanimalparty.com
                        </p>
                      </div>
                      <p className="text-sm text-foreground/60 mt-auto">
                        24/7 Response Time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="group bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-blue-elephant/20 hover:border-blue-elephant/40 h-48">
                <CardContent className="p-6 h-full flex">
                  <div className="flex items-start gap-4 w-full">
                    <div className="p-3 bg-blue-elephant rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Phone Support</h4>
                        <p className="text-foreground/70 mb-2">
                          Call us during business hours
                        </p>
                        <p className="text-primary-green font-medium">
                          +1 (609) 405-7249
                        </p>
                      </div>
                      <p className="text-sm text-foreground/60 mt-auto">
                        Mon-Fri: 9AM-6PM EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Note - Centered */}
            <div className="flex justify-center">
              <Card className="bg-gradient-primary/10 border-primary-green/30 w-full max-w-md">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Quick Questions?</h4>
                <p className="text-sm text-foreground/70">
                  Check out our FAQ section for instant answers to common questions about shipping, 
                  returns, and our mystery box contents!
                </p>
              </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};