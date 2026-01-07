import { Linkedin, Mail, Phone, FileText, Coffee, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export function Contact() {
  const t = useTranslation();

  return (
    <section id="contato" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-4 text-2xl">
            <Coffee />
            <MessageSquare />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-muted-foreground mb-8">{t.contact.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild variant="default" size="lg">
              <a
                href="https://www.linkedin.com/in/ligia-correa-ux-writer/"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:ligia_cosi@hotmail.com" className="gap-2">
                <Mail className="h-4 w-4" />
                ligia_cosi@hotmail.com
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="tel:+5511999673847" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +55 (11) 99967-3847
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href="https://drive.google.com/file/d/1_R_lrTwGB18O1KPw0yHbqucUg0felcKr/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              {t.contact.resumePT}
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href="https://drive.google.com/file/d/1WLcD9s5S02HJKXs30AeebSigYzJF_lwU/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              {t.contact.resumeEN}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
