import { useTranslation } from "@/hooks/useTranslation";

export function Experience() {
  const t = useTranslation();

  return (
    <section id="experiencia" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Experience */}
        <div className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            {t.experience.companiesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.experience.companies.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {exp.company}
                </h3>
                <div className="space-y-3">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="bg-card p-4 rounded-lg border border-border">
                      <p className="font-medium text-foreground">{role.title}</p>
                      {role.description && (
                        <p className="text-sm text-muted-foreground mt-1">{role.description}</p>
                      )}
                      <p className="text-sm text-primary mt-2">{role.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            {t.experience.volunteeringTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.experience.volunteering.map((vol, index) => (
              <div
                key={index}
                className="relative bg-card p-5 rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
                {vol.honorableMention && (
                  <span className="absolute top-3 right-3 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full border border-primary/20">
                    {t.experience.honorableMention}
                  </span>
                )}
                <h3 className="font-medium text-foreground">{vol.org}</h3>
                <p className="text-sm text-muted-foreground mt-1">{vol.role}</p>
                <p className="text-sm text-primary mt-2">{vol.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
