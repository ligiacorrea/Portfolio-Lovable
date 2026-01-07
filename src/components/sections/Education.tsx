import { useTranslation } from "@/hooks/useTranslation";

export function Education() {
  const t = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">{t.education.title}</h2>
            <div className="space-y-4">
              {t.education.degrees.map((edu, index) => (
                <div key={index} className="bg-background p-5 rounded-lg border border-border">
                  <h3 className="font-medium text-foreground">{edu.institution}</h3>
                  <p className="text-muted-foreground mt-1">{edu.degree}</p>
                  <p className="text-sm text-primary mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              {t.education.coursesTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.education.courses.map((course, index) => (
                <div
                  key={index}
                  className="relative bg-background p-4 rounded-lg border border-border hover:border-primary/20 transition-colors"
                >
                  {course.honorableMention && (
                    <span className="absolute top-2 right-2 bg-primary/10 text-primary text-[10px] font-medium px-2 py-0.5 rounded-full border border-primary/20">
                      {t.education.honorableMention}
                    </span>
                  )}
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
              {t.education.viewMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
