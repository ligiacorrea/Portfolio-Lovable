import { useTranslation } from "@/hooks/useTranslation";

export function About() {
  const t = useTranslation();

  return (
    <section id="sobre" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">{t.about.title}</h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {t.about.p1.start}<strong className="text-foreground">{t.about.p1.exp1}</strong>{t.about.p1.middle}{" "}
              <strong className="text-foreground">{t.about.p1.exp2}</strong>{t.about.p1.end}
            </p>

            <p>
              {t.about.p2.start}<strong className="text-foreground">{t.about.p2.highlight1}</strong>{t.about.p2.middle}{" "}
              <strong className="text-foreground">{t.about.p2.highlight2}</strong>{t.about.p2.end}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
