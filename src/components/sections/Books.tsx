import { BookOpen } from "lucide-react";

const books = [
  {
    title: "Redação Estratégica para UX",
    author: "Torrey Podmajersky",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&auto=format&fit=crop&q=60"
  },
  {
    title: "Microcopy: The Complete Guide",
    author: "Kinneret Yifrah",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=60"
  },
  {
    title: "Writing is Designing",
    author: "Michael J. Metts & Andy Welfle",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&auto=format&fit=crop&q=60"
  },
  {
    title: "Conversational Design",
    author: "Erika Hall",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&auto=format&fit=crop&q=60"
  },
];

export function Books() {
  return (
    <section id="livros" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Sessão leitura
          </h2>
        </div>
        <p className="text-muted-foreground mb-8">Livros mais recentes</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="group flex flex-col"
            >
              <div className="aspect-[2/3] rounded-lg overflow-hidden mb-3 card-shadow group-hover:card-shadow-hover transition-all duration-300">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {book.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
