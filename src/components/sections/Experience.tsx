const experiences = [
  {
    company: "iCasei",
    roles: [
      {
        title: "Head of UX Writing & Growth Team Lead",
        period: "Jul 2024 - Atual",
      },
      {
        title: "UX Writer",
        description: "1ª UXW da empresa, responsável por estruturar a área, criar processos e boas práticas",
        period: "Mar 2022 - Jun 2024",
      },
      {
        title: "Conteúdo | Social Media",
        period: "Mar 2020 - Fev 2022",
      },
    ],
  },
  {
    company: "Agência Mazzanti",
    roles: [
      {
        title: "Social Media Manager",
        period: "Abr 2018 - Mar 2020",
      },
      {
        title: "Social Media",
        period: "Ago 2016 - Abr 2018",
      },
    ],
  },
  {
    company: "Metrohm Brasil",
    roles: [
      {
        title: "Analista de Marketing",
        period: "Jun 2014 - Abr 2016",
      },
    ],
  },
  {
    company: "Atelier Turismo",
    roles: [
      {
        title: "Assistente de Marketing",
        period: "Nov 2013 - Jun 2014",
      },
      {
        title: "Auxiliar de Marketing",
        period: "Out 2012 - Nov 2013",
      },
    ],
  },
];

const volunteering = [
  {
    org: "Jovens UX&UI e VagasUX",
    role: "UX Writer | Líder de grupo no projeto \"Desafio apoie uma ONG\"",
    period: "Dez 2021 - Mai 2022",
  },
  {
    org: "Playbook da Cris Luckner",
    role: "\"Os Primeiros 100 Dias Trabalhando com UX Writing\"",
    period: "Nov 2021",
  },
  {
    org: "AACD",
    role: "Community Manager no War Room do Teleton",
    period: "Out 2021",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Experience */}
        <div className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Empresas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
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
            Voluntariado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {volunteering.map((vol, index) => (
              <div
                key={index}
                className="bg-card p-5 rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
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
