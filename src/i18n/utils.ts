import {
  type Language,
  defaultLang,
  type TranslationKey,
  getTranslations,
  languages,
} from "./translations";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  return lang in languages ? (lang as Language) : defaultLang;
}

export function useTranslations(lang: Language) {
  const translations = getTranslations(lang);
  return function t(key: TranslationKey): string {
    if (!translations) {
      console.error(
        `Translations not loaded for language: ${lang}. Call loadTranslations() first or ensure it runs before useTranslations.`
      );
      return key;
    }
    const defaultTranslations = getTranslations(defaultLang);
    return (
      translations[key] ||
      (defaultTranslations ? defaultTranslations[key] : null) ||
      key
    );
  };
}
