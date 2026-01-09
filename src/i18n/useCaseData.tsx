import { useLanguage } from "@/contexts/LanguageContext";
import { casesDataEn } from "./cases/en";
import { CasesDataRecord, CaseData } from "./cases/types";

// This hook returns the appropriate case data based on language
// For English, it uses translated content when available, falling back to Portuguese
export function useCaseData(slug: string | undefined, ptCasesData: CasesDataRecord): CaseData | null {
  const { language } = useLanguage();
  
  if (!slug) return null;
  
  const ptCase = ptCasesData[slug];
  if (!ptCase) return null;
  
  // If English and we have translated content, use it
  if (language === "en" && casesDataEn[slug]) {
    return casesDataEn[slug];
  }
  
  // Otherwise return Portuguese content
  return ptCase;
}

// Helper to check if a case has English translation
export function hasCaseTranslation(slug: string): boolean {
  return !!casesDataEn[slug];
}
