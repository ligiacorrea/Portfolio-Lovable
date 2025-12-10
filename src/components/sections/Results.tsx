import { TrendingUp, MessageSquare, HeadphonesIcon, Users, Percent, DollarSign } from "lucide-react";

const results = [
  {
    icon: DollarSign,
    value: "R$ 5M+",
    label: "orgânicos no FAQ",
  },
  {
    icon: TrendingUp,
    value: "+80%",
    label: "crescimento de receita no FAQ",
  },
  {
    icon: MessageSquare,
    value: "90%",
    label: "satisfação em fluxos de bot",
  },
  {
    icon: HeadphonesIcon,
    value: "73%",
    label: "redução de tickets no atendimento",
  },
  {
    icon: Users,
    value: "R$ 100M+",
    label: "em projeto de parceiros",
  },
  {
    icon: Percent,
    value: "+335%",
    label: "crescimento em cadastros",
  },
];

export function Results() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center">
          Resultados e impactos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <result.icon className="h-5 w-5" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
