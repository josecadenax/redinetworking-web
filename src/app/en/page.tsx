import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Redi Networking | Your AI Networking Copilot on WhatsApp",
  description:
    "Never lose a business opportunity after your meetings. Send quick voice notes to log contacts, receive proactive WhatsApp follow-up reminders, and draft weekly 30-second pitches in seconds.",
  keywords: [
    "networking copilot",
    "business networking ai",
    "whatsapp assistant for executives",
    "ai crm whatsapp",
    "meeting follow up automation",
    "bni weekly pitch generator",
    "voice notes to crm",
    "professional contact organizer",
    "whatsapp sales copilot",
  ],
  alternates: {
    canonical: "https://redinetworking.com/en",
    languages: {
      "es": "https://redinetworking.com",
      "es-MX": "https://redinetworking.com",
      "en": "https://redinetworking.com/en",
      "x-default": "https://redinetworking.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_MX"],
    url: "https://redinetworking.com/en",
    siteName: "Redi Networking",
    title: "Redi Networking | Your AI Networking Copilot on WhatsApp",
    description:
      "Never lose a business opportunity after your meetings. Send quick voice notes to log contacts, receive proactive WhatsApp follow-up reminders, and draft weekly 30-second pitches.",
    images: [
      {
        url: "https://redinetworking.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Redi Networking - AI Copilot on WhatsApp for Business Meetings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redi Networking | Your AI Networking Copilot on WhatsApp",
    description:
      "Never lose a business opportunity after your meetings. Capture contacts with voice notes and schedule follow-ups in WhatsApp.",
    images: ["https://redinetworking.com/images/og-image.jpg"],
    creator: "@cellartech",
  },
};

export default function EnglishPage() {
  return (
    <>
      <JsonLd locale="en" />
      <LandingPage locale="en" />
    </>
  );
}
