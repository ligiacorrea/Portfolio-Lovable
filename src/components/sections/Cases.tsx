import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";

const tagColors = [
  "bg-primary/20 text-primary border-primary/30",
  "bg-accent/40 text-accent-foreground border-accent/50",
  "bg-sage-200 text-sage-800 border-sage-300",
  "bg-earth-200 text-earth-800 border-earth-300",
  "bg-cream-300 text-earth-700 border-cream-400",
];

const getTagColor = (index: number) => tagColors[index % tagColors.length];

const caseTags: Record<string, string[]> = {
  "faq-5m-organicos": ["ux writing", "arquitetura de informação", "SEO", "GEO"],
  "bot-90-satisfacao": ["ux writing", "ux research", "microcopy", "content ops"],
  "content-system-ops": ["ux writing", "arquitetura de informação", "guia de linguagem", "discovery", "tech writing"],
  "ong-voluntarios": ["ux writing", "discovery", "ux research", "persona", "guia de linguagem", "teste de usabilidade", "conteúdos para interface", "fluxo de cadastro", "onboarding", "content ops"],
  "aquisicao-produto": ["ux writing", "ux research", "discovery", "benchmarking"],
  "tom-voz-nps": ["ux writing", "teste A/B", "discovery", "taxonomia", "ux research", "arquitetura de informação", "persona", "benchmarking", "guia de linguagem", "conteúdo para e-mail", "fluxo conversacional"],
};

const caseImages: Record<string, string> = {
  "faq-5m-organicos": "https://ligiacorrea.notion.site/image/attachment%3Aa4e72088-8605-430a-9921-05bc88246a22%3ACover.png?id=2228ba4d-245e-80e0-a0c7-dea755cd0829&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
  "bot-90-satisfacao": "https://ligiacorrea.notion.site/image/attachment%3Aa4e72088-8605-430a-9921-05bc88246a22%3ACover.png?id=2b28ba4d-245e-8056-9bce-cc4bca3bd8d3&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
  "content-system-ops": "https://ligiacorrea.notion.site/image/attachment%3Aa4e72088-8605-430a-9921-05bc88246a22%3ACover.png?id=2228ba4d-245e-8007-9781-f53c733c696a&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
  "ong-voluntarios": "https://ligiacorrea.notion.site/image/attachment%3A8bd90fd2-b8cb-4339-a350-c08bc96fda1d%3A66675d033cd65414f1af5a24_ogi.jpg?id=2118ba4d-245e-8096-8354-e23c1da1fb61&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
  "aquisicao-produto": "https://ligiacorrea.notion.site/image/attachment%3Abb5f0054-8920-43c6-bcd6-84f7dcbc4662%3Amaxresdefault.jpg?id=2118ba4d-245e-80ec-8181-ef8e84126001&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
  "tom-voz-nps": "https://ligiacorrea.notion.site/image/attachment%3A29fa0061-49b5-42f3-9c6d-7b57e2321060%3AScreen_Shot_2023-10-07_at_16.25.24.png?id=2118ba4d-245e-8056-9e8b-f0e5f103f629&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
};

export function Cases() {
  const t = useTranslation();

  return (
    <section id="cases" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10">{t.cases.title}</h2>

        {/* Main Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.cases.mainCases.map((caseItem) => {
            const tags = caseTags[caseItem.slug] || [];
            return (
              <Link
                key={caseItem.slug}
                to={`/case/${caseItem.slug}`}
                className="group bg-background rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/20"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {caseItem.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tag} variant="outline" className={`text-xs ${getTagColor(tagIndex)}`}>
                      {tag}
                    </Badge>
                  ))}
                  {tags.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-muted/50 text-muted-foreground">
                      +{tags.length - 3}
                    </Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Other Cases */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">{t.cases.otherTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.cases.otherCases.map((caseItem) => (
              <Link
                key={caseItem.slug}
                to={`/case/${caseItem.slug}`}
                className="group flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {caseItem.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
