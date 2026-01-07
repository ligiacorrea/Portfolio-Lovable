import { Star, Quote } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function Testimonials() {
  const t = useTranslation();

  return (
    <section id="feedbacks" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">{t.testimonials.title}</h2>
          <p className="text-muted-foreground">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-background p-6 rounded-xl border border-border hover:border-primary/20 transition-colors"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
              <div className="pt-4 border-t border-border">
                <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.linkedin.com/in/ligia-correa-ux-writer/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            {t.testimonials.viewMore}
          </a>
        </div>
      </div>
    </section>
  );
}
