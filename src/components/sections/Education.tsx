import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Universidade Anhembi Morumbi 🇧🇷",
    degree: "MBA em Marketing Digital",
    period: "Mar 2019 - Nov 2020",
  },
  {
    institution: "Universidade Europeia 🇵🇹",
    degree: "Publicidade, Marketing e Relações Públicas",
    period: "Set 2011 - Fev 2012",
  },
  {
    institution: "Universidade Anhembi Morumbi 🇧🇷",
    degree: "Publicidade e Propaganda",
    period: "Fev 2009 - Nov 2012",
  },
];

const courses = [
  { name: "GEO: Otimização para IA Generativa", org: "Escola de Conteúdo", period: "Jul 2025" },
  { name: "Introdução a protótipos com Lovable e IA", org: "Tera", period: "Jul 2025" },
  { name: "Introdução ao n8n e agentes de IA", org: "Tera", period: "Jul 2025" },
  { name: "UX Inclusivo Além da Acessibilidade Técnica", org: "UX Brasília", period: "Jul 2025" },
  { name: "Inteligência Artificial para líderes", org: "Escola Conquer", period: "Abr 2025" },
  { name: "Abrindo a cozinha do iFood", org: "iFood", period: "Mar 2025" },
  { name: "Redação para Mídias Digitais na Era da IA", org: "CESAR School", period: "Out 2024" },
  { name: "Product Growth - Certificado com Menção Honrosa", org: "PM3", period: "Jul 2024" },
  { name: "Take The Lead - Mulheres Líderes", org: "eCornell University", period: "Mar 2024" },
  { name: "Mergulho em Produtos Digitais", org: "PM3", period: "Nov 2023" },
  { name: "Curso Intensivo de UX Writing", org: "Awari", period: "Out 2023" },
  { name: "Bootcamp UX Writer e Conteúdo Digital", org: "Aldeia.cc", period: "Out 2021" },
];

export function Education() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Formação
              </h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-background p-5 rounded-lg border border-border"
                >
                  <h3 className="font-medium text-foreground">{edu.institution}</h3>
                  <p className="text-muted-foreground mt-1">{edu.degree}</p>
                  <p className="text-sm text-primary mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Cursos e especializações
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-background p-4 rounded-lg border border-border hover:border-primary/20 transition-colors"
                >
                  <p className="font-medium text-foreground text-sm">{course.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{course.org}</p>
                  <p className="text-xs text-primary mt-1">{course.period}</p>
                </div>
              ))}
            </div>
            <a
              href="https://www.linkedin.com/in/ligia-correa-ux-writer/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm text-primary hover:underline"
            >
              Ver mais certificados no LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
