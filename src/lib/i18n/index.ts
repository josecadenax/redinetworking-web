import { es } from "./es";
import { en } from "./en";
import { TranslationDictionary } from "./types";

export * from "./types";
export { es, en };

export function getDictionary(locale: "es" | "en"): TranslationDictionary {
  return locale === "en" ? en : es;
}
