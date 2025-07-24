import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
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

  // Holds Altcha verification data
  const altchaRef = useRef<AltchaValue | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null);

  // Called when Altcha widget emits state change event with challenge data
  const handleAltchaStateChange = (ev: CustomEvent) => {
    if (!ev.detail?.payload) {
      console.warn("Altcha state changed event missing payload; reset altchaRef.current");
      altchaRef.current = null;
      return;
    }
    try {
      const payloadEncoded = ev.detail.payload as string;
  
      // Decode base64 JSON string
      const jsonStr = atob(payloadEncoded);
  
      // Parse JSON string to object
      const payloadObj = JSON.parse(jsonStr) as AltchaValue;
  
      altchaRef.current = payloadObj;
  
      console.log("Updated altchaRef.current:", altchaRef.current);
    } catch (err) {
      console.error("Failed to decode/parse Altcha payload:", err);
      altchaRef.current = null;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify Altcha was completed
    if (!altchaRef.current) {
      toast({
        title: "Verification Required",
        description: "Please complete the security verification challenge before submitting.",
        variant: "destructive",
      });
      return;
    }

    const { challenge, answer, signature } = altchaRef.current;

    // Sanity check Altcha data fields are present and non-empty
    if (!challenge || !answer || !signature) {
      toast({
        title: "Incomplete Verification Data",
        description: "Security verification data missing or incomplete. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setStatus("sending");

    try {
      console.log("Submitting form data with Altcha:", {
        ...formData,
        challenge,
        answer,
        signature,
      });

      const response = await fetch("https://duduanimalparty.com:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          challenge,
          answer,
          signature,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message Sent! 📧",
          description: "Thank you for contacting us. We'll get back to you soon!",
        });
        // Reset Altcha ref so user must verify again if they want to submit again
        altchaRef.current = null;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Have questions about our DuDu Animal Party mystery boxes? We'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-12">
            <Card className="bg-gradient-card shadow-card border-none">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-primary rounded-full">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Send us a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                      required
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
                      required
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
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Security Verification
                    </label>
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
        </div>
      </div>
    </section>
  );
};