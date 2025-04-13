import {
  type Language,
  defaultLang,
  type TranslationKey,
  getTranslations,
} from "./translations";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  return lang in getTranslations(defaultLang)
    ? (lang as Language)
    : defaultLang;
}

export function useTranslations(lang: Language) {
  const translations = getTranslations(lang);
  return function t(key: TranslationKey): string {
    return translations[key] || getTranslations(defaultLang)[key] || key;
  };
}
