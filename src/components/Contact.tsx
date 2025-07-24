import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Mail, Phone } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import Altcha from "@/components/ui/altcha";

interface AltchaValue {
  challenge: string;
  answer: string | number;
  signature: string;
}

export const Contact = () => {
  const { toast } = useToast();
  // Assume Altcha widget exposes the full object, not just a string
  const altchaRef = useRef<AltchaValue | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<null | 'sending' | 'success' | 'error'>(null);

  // Handler for Altcha custom event to capture challenge data
  // Adjust if your Altcha widget emits 'statechange' or another event with detail.payload = AltchaValue
  const handleAltchaStateChange = (ev: CustomEvent) => {
    if (ev.detail?.payload) {
      altchaRef.current = ev.detail.payload as AltchaValue;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if ALTCHA is verified
    if (!altchaRef.current) {
      toast({
        title: "Verification Required",
        description: "Please complete the verification challenge before submitting.",
        variant: "destructive",
      });
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://duduanimalparty.com:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          challenge: altchaRef.current.challenge,
          answer: altchaRef.current.answer,
          signature: altchaRef.current.signature,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message Sent! 📧",
          description: "Thank you for contacting us. We'll get back to you within 24 hours!",
        });
      } else {
        setStatus("error");
        toast({
          title: "Error sending message",
          description: data.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
            Have questions about our DuDu Animal Party mystery boxes? We'd love to
            hear from you! Our friendly team is here to help with any questions or
            concerns.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Contact Form */}
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
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
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
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
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
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
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Security Verification
                    </label>
                    {/* listen to altcha statechange event to update ref */}
                    <Altcha onStateChange={handleAltchaStateChange} />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary-green hover:bg-primary-green-dark text-black-cat font-semibold py-6 text-lg shadow-card hover:shadow-hover transition-all duration-300"
                    disabled={status === "sending"}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Other contact info omitted for brevity */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};
