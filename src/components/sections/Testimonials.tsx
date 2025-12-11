import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Experiência incrível, site bem didático, maravilhoso. Sem comentários, simplesmente perfeito!",
    author: "E. e C.",
    role: "Clientes iCasei",
  },
  {
    quote:
      "Uma pessoa proativa, criativa e esforçada compartilhou seu conhecimento conosco de UX Writing. Dando muito apoio e suporte tanto na parte de pesquisa e escrita do nosso projeto para a ONG Kurumins.",
    author: "S.N.",
    role: "Product Designer - Case Kurumins",
  },
  {
    quote:
      "@ligia612 uau! ficou incrível, acho que uma das melhores pesquisas que vi na história do iCasei <3 Parabéns!",
    author: "D.M.",
    role: "Chief Product Officer - iCasei",
  },
  {
    quote:
      "Já te falei algumas vezes como admiro o seu trabalho e a forma como lidera. Você sempre me deixa participar e tem uma coisa que você faz que acho muito legal: você sempre me pergunta se faz sentido alguma proposta que você dá.",
    author: "G.A.",
    role: "UX Writer Jr. - iCasei",
  },
  {
    quote: "Foi a melhor experiência que ja tive site incrível tudo bem explicado e de fácil acesso obrigado iCasei!",
    author: "C. e I.",
    role: "Clientes iCasei",
  },
  {
    quote:
      "Sempre quis usar esse site e gostei muito da experiência! Tudo bem explicado, com detalhes e orientações. Fácil para montar o site, receber os presentes!",
    author: "F. e C.",
    role: "Clientes iCasei",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">Feedbacks</h2>
          <p className="text-muted-foreground">Algumas mensagens de carinho e reconhecimento que recebo no dia a dia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
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
            Ver mais recomendações no LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
