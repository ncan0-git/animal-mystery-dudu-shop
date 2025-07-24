import React, { useState, FormEvent, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [altchaToken, setAltchaToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle Altcha state changes
  useEffect(() => {
    const handleAltchaStateChange = (event: CustomEvent) => {
bage     if (event.detail.state === 'verified') {
        setAltchaToken(event.detail.payload);
      } else if (event.detail.state === 'error') {
        toast({
          title: 'Verification Error',
          description: 'Failed to verify CAPTCHA. Please try again.',
          variant: 'destructive',
        });
        setAltchaToken('');
      }
    };

    // Add event listener for Altcha widget
    window.addEventListener('altcha:statechange', handleAltchaStateChange as EventListener);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('altcha:statechange', handleAltchaStateChange as EventListener);
    };
  }, [toast]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!altchaToken) {
      toast({
        title: 'Verification Required',
        description: 'Please complete the CAPTCHA verification.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://duduanimalparty.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          token: altchaToken,
        }),
        credentials: 'include',
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast({
          title: 'Message Sent',
          description: 'Your message has been successfully submitted!',
        });
        setName('');
        setEmail('');
        setMessage('');
        setAltchaToken('');
      } else {
        throw new Error(data.error || 'Failed to submit the form');
      }
    } catch (error: any) {
      toast({
        title: 'Submission Failed',
        description: error.message || 'An error occurred while submitting the form.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <altcha-widget
            challengeurl="https://altcha.org/api/challenge"
            auto="onload"
          ></altcha-widget>
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default Contact;