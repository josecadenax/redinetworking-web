import { TranslationDictionary } from "./types";

export const en: TranslationDictionary = {
  locale: "en",
  whatsappUrl: "https://wa.me/19783500663?text=Hi%20Redi",
  nav: {
    howItWorks: "How it works",
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Open WhatsApp",
  },
  hero: {
    badge: "Your Smart AI Networking Copilot on WhatsApp",
    titlePart1: "Turn your business meetings into ",
    titleHighlight: "real opportunities.",
    description:
      "The assistant that lives in your WhatsApp. After any meeting or networking session, send a 15-second voice note: Redi extracts contact details, schedules follow-up reminders, and drafts your sales pitch.",
    primaryCta: "Start Free on WhatsApp",
    phoneLabel: "Official WhatsApp: +1 (978) 350-0663",
    pills: [
      "🎙️ Voice note input on the go",
      "⏰ Proactive follow-up reminders",
      "🎯 Weekly 30s elevator pitch",
    ],
  },
  mockup: {
    status: "online (+1 978 350 0663)",
    audioTitle: "Voice note (0:18)",
    audioTranscript:
      '"Just had breakfast with Santiago from LogiPack. They handle US exports and look for manufacturers. Agreed to call him Tuesday at 9 am..."',
    botGreeting: "All set! Saved your meeting with Santiago Mendoza",
    companyLabel: "Company:",
    companyVal: "LogiPack International",
    specialtyLabel: "Specialty:",
    specialtyVal: "Freight & customs logistics",
    idealClientLabel: "Ideal Referral:",
    idealClientVal: "Manufacturers exporting to the US",
    reminderLabel: "Reminder:",
    reminderVal: "Tuesday 9:00 AM for follow-up.",
    scheduledNote: "Reminder scheduled in WhatsApp",
    pitchPrompt: '"Help me with my 30-second pitch"',
    pitchResponse: "🎯 Your weekly pitch ready for BNI / networking:",
  },
  howItWorks: {
    badge: "Simple Process",
    title: "3 steps to never lose a contact or follow-up again",
    subtitle:
      "Built for busy professionals and founders who don't have time for clunky, traditional CRMs.",
    steps: [
      {
        step: "01",
        title: "Send a voice note",
        desc: "Right after your meeting or networking event, open WhatsApp and send Redi a quick voice note describing who you met and what you agreed on.",
        tag: "15 seconds",
      },
      {
        step: "02",
        title: "Redi extracts & organizes",
        desc: "Our AI automatically extracts the person's name, company, specialty, promises made, and the exact date for your next touchpoint.",
        tag: "Instant AI",
      },
      {
        step: "03",
        title: "Proactive reminders",
        desc: "On the morning of the agreed date, Redi sends you a direct WhatsApp message reminding you exactly what you promised to deliver.",
        tag: "On-time delivery",
      },
    ],
  },
  features: {
    badge: "Core Capabilities",
    title: "Everything you need for executive networking",
    subtitle:
      "Tools tailored to close more commercial deals without the friction of complex software.",
    cards: [
      {
        title: "Smart Voice Notes",
        desc: "Speak naturally as you leave meetings. Redi transcribes speech, extracts key insights, and detects commitments automatically.",
        highlight: "Zero typing",
      },
      {
        title: "Proactive Reminders",
        desc: "Get pinged on WhatsApp the morning you need to send a quote, make a call, or make an introduction to keep every promise.",
        highlight: "100% Reliability",
      },
      {
        title: "Weekly 30-Second Pitch",
        desc: "Ask 'help me with my pitch' and get a compelling, structured 30-to-45 second script with hook, problem, solution, and specific ask.",
        highlight: "Built for BNI",
      },
      {
        title: "Smart Directory Search",
        desc: "Ask Redi about any contact: 'who does packaging?' or 'when did I last meet Santiago?' and get instant answers inside the chat.",
        highlight: "Semantic search",
      },
      {
        title: "Privacy & Security",
        desc: "Your network belongs strictly to you. Enterprise-grade encryption backed by AWS infrastructure and Cellar Technologies.",
        highlight: "Protected data",
      },
      {
        title: "100% Inside WhatsApp",
        desc: "No apps to install, no passwords to remember, and no cumbersome CRM spreadsheets to manage.",
        highlight: "Zero friction",
      },
    ],
  },
  pricing: {
    badge: "Transparent Pricing",
    title: "Invest in your network with zero lock-in contracts",
    subtitle:
      "Start 100% free with 20 connections. When it helps you close clients, unlock the Pro Plan.",
    freePlan: {
      title: "Free Plan",
      subtitle: "To experience Redi's copilot power in your upcoming meetings.",
      price: "$0",
      period: "lifetime",
      features: [
        "20 lifetime contact connections",
        "Voice notes and text capture",
        "Automated WhatsApp reminders",
        "Weekly 30-second pitch generator",
        "100% inside WhatsApp, no app downloads",
      ],
      cta: "Try for Free",
    },
    proPlan: {
      badge: "Most Popular",
      title: "Redi Pro Plan",
      subtitle: "For active executives, founders, and sales leaders.",
      price: "$199",
      period: "MXN / month",
      tax: "+ VAT",
      taxNote: "~$11 USD/mo • Electronic tax invoice (CFDI) available via Stripe",
      features: [
        "Unlimited contact connections",
        "Proactive reminders via WhatsApp",
        "Priority voice note transcription",
        "Unlimited weekly pitches for networking",
        "Instant activation right inside the chat",
        "Cancel anytime with 1 click",
      ],
      cta: "Start Now on WhatsApp",
      guarantee: "No lock-in contracts • Cancel anytime in 1 click",
    },
  },
  faq: {
    badge: "Clear Answers",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know before getting started with Redi.",
    items: [
      {
        q: "Do I need to download an app or create an account on a website?",
        a: "No. Redi works 100% inside WhatsApp. Just click the start button, send a message, and your copilot is instantly active without installing apps or creating passwords.",
      },
      {
        q: "How do I log a contact after a business meeting?",
        a: "As you leave your meeting, open the Redi chat and send a quick voice note (for example: 'Had breakfast with Carlos from CargoFast, he handles freight and wants manufacturing leads. Promised to introduce my partner on Friday'). Redi transcribes, extracts key data, and schedules the reminder automatically.",
      },
      {
        q: "How does Redi remind me of commitments and agreements?",
        a: "Redi uses smart calendar intelligence connected to WhatsApp. On the morning of the day you agreed to follow up, you will receive a direct message with the contact's name and the promised action.",
      },
      {
        q: "How does the weekly pitch generator work?",
        a: "If you participate in business networking groups (like BNI, Chambers of Commerce, or sales roundtables), just tell Redi 'help me with my pitch'. Redi creates a punchy 30-to-45 second script with hook, solution, and specific referral request.",
      },
      {
        q: "Are my contacts and client data secure?",
        a: "Completely. Your contact address book is strictly private and isolated with cloud encryption. We never sell, share, or monetize your directory with third parties.",
      },
      {
        q: "Does the Pro Plan include tax and do you issue invoices?",
        a: "The base price is $199.00 MXN (~$11 USD) per month plus 16% VAT ($230.84 MXN total). Through Stripe checkout, you can input your tax information to receive an automated official CFDI invoice issued by CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.",
      },
      {
        q: "How do I cancel my subscription if I no longer need it?",
        a: "You can cancel anytime in 1 click through 100% self-service. Just text 'cancel subscription' to Redi on WhatsApp to receive your private Stripe customer portal link, or click 'Manage Subscription' on any Stripe receipt. No phone calls, no hidden fees.",
      },
      {
        q: "What happens to my saved contacts if I decide to cancel?",
        a: "Your contacts, notes, and past agreements are never deleted. When you cancel, you keep Pro benefits through the end of your 30-day billing cycle. Afterward, your account switches to the free tier, and all past data remains accessible.",
      },
      {
        q: "What if I had more than 20 contacts saved when canceling Pro?",
        a: "None of your contacts are ever locked or deleted. You can continue searching your directory ('who handles logistics?', 'what is Carlos's phone?'), reviewing past agreements, and enriching notes for existing contacts at zero cost. Only logging new additional contacts is paused until you reactivate Pro.",
      },
      {
        q: "Are there long-term contracts or minimum commitments?",
        a: "None. Redi Pro is a month-to-month service. Use it as long as you need for your networking, and pause or cancel whenever you choose without penalty.",
      },
    ],
  },
  ctaBanner: {
    title: "Take your networking to the next level today.",
    subtitle:
      "Join founders and sales leaders who never miss an opportunity due to forgotten follow-ups. Try your 20 free contacts.",
    cta: "Chat with Redi on WhatsApp",
    phoneLabel: "Official WhatsApp: +1 (978) 350-0663",
  },
  footer: {
    rights: "CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact (+1 978 350 0663)",
    disclaimer:
      "WhatsApp® is a registered trademark of Meta Platforms, Inc. Redi Networking is an independent service powered by Artificial Intelligence.",
  },
};
