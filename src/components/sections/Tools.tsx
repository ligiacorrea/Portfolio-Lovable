import { useTranslation } from "@/hooks/useTranslation";

export function Tools() {
  const t = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
          {t.tools.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {t.tools.items.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-card rounded-full text-sm text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
