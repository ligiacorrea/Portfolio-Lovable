import { useLanguage } from "@/contexts/LanguageContext";
import { translations, Translations } from "@/i18n/translations";

export function useTranslation(): Translations {
  const { language } = useLanguage();
  return translations[language];
}
