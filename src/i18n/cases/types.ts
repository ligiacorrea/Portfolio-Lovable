import { ReactNode } from "react";

export interface CaseSection {
  title: string;
  content: ReactNode;
}

export interface CaseData {
  title: string;
  projectType: string;
  skills: string[];
  area?: string;
  sections: CaseSection[];
  closing?: ReactNode;
}

export type CasesDataRecord = Record<string, CaseData>;
