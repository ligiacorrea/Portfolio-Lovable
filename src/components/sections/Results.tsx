import { TrendingUp, MessageSquare, HeadphonesIcon, Users, Percent, DollarSign } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const icons = [DollarSign, TrendingUp, MessageSquare, HeadphonesIcon, Users, Percent];

export function Results() {
  const t = useTranslation();

  return (
    <section id="resultados" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
          {t.results.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {t.results.items.map((result, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group bg-card rounded-lg p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {result.value}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {result.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
