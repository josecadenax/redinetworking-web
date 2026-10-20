import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics, logEvent } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "redinetworking-app",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

export function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null;
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return null;

  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
  return app;
}

export async function initFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  if (!firebaseConfig.apiKey || !firebaseConfig.measurementId) return null;

  try {
    const supported = await isSupported();
    if (supported) {
      const fbApp = getFirebaseApp();
      if (fbApp) {
        analytics = getAnalytics(fbApp);
        return analytics;
      }
    }
  } catch (error) {
    console.warn("Firebase Analytics initialization skipped or unsupported:", error);
  }
  return null;
}

export async function trackFirebaseEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;
  try {
    const a = analytics || (await initFirebaseAnalytics());
    if (a) {
      logEvent(a, eventName, eventParams);
    }
  } catch (err) {
    console.warn("trackFirebaseEvent error:", err);
  }
}
