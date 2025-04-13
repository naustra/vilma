export const languages = {
  mk: "Македонски",
  en: "English",
  fr: "Français",
};

export const defaultLang = "en";
export type Language = keyof typeof languages;

// This type represents the structure of our translation files
export type TranslationKey = string;
export type TranslationDict = Record<TranslationKey, string>;

let translations: Record<Language, TranslationDict> | null = null;

export async function loadTranslations() {
  if (translations !== null) return translations;

  const translationFiles = import.meta.glob<{ default: TranslationDict }>(
    "/src/locales/*/translation.json"
  );
  translations = {} as Record<Language, TranslationDict>;

  for (const [path, loader] of Object.entries(translationFiles)) {
    const lang = path.split("/")[3] as Language;
    const module = await loader();
    translations[lang] = module.default;
  }

  return translations;
}

export function getTranslations(lang: Language) {
  if (!translations) {
    throw new Error("Translations not loaded. Call loadTranslations() first.");
  }
  return translations[lang] || translations[defaultLang];
}
