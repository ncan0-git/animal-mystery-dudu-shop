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

  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & AltchaWidget, HTMLElement>;
    }
  }
}
