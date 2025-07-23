/// <reference types="vite/client" />

// Altcha widget types
declare global {
  interface AltchaWidget {
    challengeurl?: string;
    test?: boolean;
    debug?: boolean;
  }

  interface AltchaWidgetMethods {
    reset(): void;
    requestChallenge(): void;
  }

  // PayPal SDK types
  interface PayPalHostedButtons {
    hostedButtonId: string;
  }

  interface PayPalSDK {
    HostedButtons: (config: PayPalHostedButtons) => {
      render: (selector: string) => void;
    };
  }

  interface Window {
    paypal?: PayPalSDK;
  }

  namespace JSX {
    interface IntrinsicElements {
      'altcha': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        name?: string;
        sitekey?: string;
      }, HTMLElement>;
    }
  }
}
