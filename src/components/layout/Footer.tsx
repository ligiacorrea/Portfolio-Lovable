import { Linkedin, Mail, Phone, FileText } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold text-foreground">
              Ligia Corrêa <span className="text-accent">🌿</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">Estrategista de Conteúdo UX</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ligia-correa-ux-writer/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors card-shadow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ligia_cosi@hotmail.com"
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors card-shadow"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+5511999673847"
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors card-shadow"
              aria-label="Telefone"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://drive.google.com/file/d/11ZYVRKRPXkYwRessLX8vOcyaDd4o1Xtz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors card-shadow"
              aria-label="Currículo"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ligia Corrêa. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
