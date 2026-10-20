"use client";

import { useEffect } from "react";
import { initFirebaseAnalytics } from "@/lib/firebase";

export function FirebaseAnalytics() {
  useEffect(() => {
    initFirebaseAnalytics();
  }, []);

  return null;
}
