

const books = [
  {
    title: "Redação Estratégica para UX",
    author: "Torrey Podmajersky",
  },
  {
    title: "Microcopy: The Complete Guide",
    author: "Kinneret Yifrah",
  },
  {
    title: "Writing is Designing",
    author: "Michael J. Metts & Andy Welfle",
  },
  {
    title: "Conversational Design",
    author: "Erika Hall",
  },
];

export function Books() {
  return (
    <section id="livros" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10">
          Sessão leitura
        </h2>
        <p className="text-muted-foreground mb-6">Livros mais recentes</p>

        <ul className="space-y-3">
          {books.map((book, index) => (
            <li key={index} className="flex items-baseline gap-2">
              <span className="font-medium text-foreground">{book.title}</span>
              <span className="text-muted-foreground text-sm">— {book.author}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
