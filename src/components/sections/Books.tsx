

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
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Sessão leitura
        </h2>
        <p className="text-muted-foreground mb-10">Livros mais recentes</p>

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
