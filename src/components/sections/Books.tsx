const books = [
  {
    title: "Things are what you make of them - Life advice for creatives",
    author: "Adam J. Kurtz",
  },
  {
    title: "Redação estratégica para UX",
    author: "Torrey Podmajersky",
  },
  {
    title: "UX Writing - Métrica textual comparativa",
    author: "Andressa Ferrugem Bandeira",
  },
  {
    title: "A biblioteca da meia-noite",
    author: "Matt Haig",
  },
  {
    title: "Em busca de mim",
    author: "Viola Davis",
  },
  {
    title: "Ponto de inflexão - Uma decisão muda tudo",
    author: "Flávio Augusto da Silva",
  },
  {
    title: "A arte da felicidade - Um manual para a vida",
    author: "Dalai Lama e Howard C. Cutler",
  },
  {
    title: "O profissional do futuro",
    author: "Michelle Schneider",
  },
];

export function Books() {
  return (
    <section id="livros" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">Sessão leitura</h2>
        <p className="text-muted-foreground mb-10">Favoritos da estante</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {books.map((book, index) => (
            <div
              key={index}
              className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-medium text-foreground mb-2">{book.title}</h3>
              <p className="text-sm text-muted-foreground">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
