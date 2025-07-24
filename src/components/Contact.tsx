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
      if (event.detail.state === 'verified') {
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
      setIsLoading