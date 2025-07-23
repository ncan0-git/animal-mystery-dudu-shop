import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import Altcha from "@/components/ui/altcha";

export const Contact = () => {
  const { toast } = useToast();
  const altchaRef = useRef<{ value: string | null }>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🛡️ Ensure Altcha token is present
    const token = altchaRef.current?.value;
    if (!token) {
      toast({
        title: "Verification Required",
        description: "Please complete the verification before submitting.",
        variant: "destructive",
      });
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://fablefuzzies.com:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          token, // send as `token` to match backend
        }),
      });

      const data = await response.json();
      console.log("Response:", response.status, data);

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        altchaRef.current!.value = null; // reset Altcha widget
        toast({
          title: "Message Sent! 📧",
          description: "Thanks! We'll be in touch shortly.",
        });
      } else {
        setStatus("error");
        toast({
          title: "Error sending message",
          description: data.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
      toast({
        title: "Oops, something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Get in Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Have questions about our mystery boxes? We'd love to help!
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
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Message */}
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
                    />
                  </div>

                  {/* Altcha */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Security Verification
                    </label>
                    <Altcha ref={altchaRef} />
                  </div>

                  {/* Submit */}
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
          {/* ... rest of your component */}
        </div>
      </div>
    </section>
  );
};