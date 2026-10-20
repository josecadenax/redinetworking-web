export interface FAQItem {
  q: string;
  a: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  desc: string;
}

export interface FeatureCard {
  title: string;
  desc: string;
  highlight: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  desc: string;
  tag: string;
}

export interface TranslationDictionary {
  locale: "es" | "en";
  whatsappUrl: string;
  nav: {
    howItWorks: string;
    features: string;
    pricing: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    phoneLabel: string;
    pills: string[];
  };
  mockup: {
    status: string;
    audioTitle: string;
    audioTranscript: string;
    botGreeting: string;
    companyLabel: string;
    companyVal: string;
    specialtyLabel: string;
    specialtyVal: string;
    idealClientLabel: string;
    idealClientVal: string;
    reminderLabel: string;
    reminderVal: string;
    scheduledNote: string;
    pitchPrompt: string;
    pitchResponse: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: HowItWorksStep[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    cards: FeatureCard[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    freePlan: {
      title: string;
      subtitle: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
    };
    proPlan: {
      badge: string;
      title: string;
      subtitle: string;
      price: string;
      period: string;
      tax: string;
      taxNote: string;
      features: string[];
      cta: string;
      guarantee: string;
    };
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    cta: string;
    phoneLabel: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    contact: string;
    disclaimer: string;
  };
}
