import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const casesData: Record<string, {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  learnings: string;
}> = {
  "faq-5m-organicos": {
    title: "Como transacionamos mais de R$ 5M na central de ajuda de forma orgânica",
    subtitle: "Transformando a central de ajuda em um canal de conversão através de SEO, GEO e arquitetura de informação estratégica",
    tags: ["ux writing", "arquitetura de informação", "teste de usabilidade", "SEO", "conteúdo para interface", "tech writing", "GEO"],
    image: "https://ligiacorrea.notion.site/image/attachment%3Aa4e72088-8605-430a-9921-05bc88246a22%3ACover.png?id=2228ba4d-245e-80e0-a0c7-dea755cd0829&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
    overview: "A central de ajuda do iCasei era vista apenas como um canal de suporte, mas identificamos uma oportunidade de transformá-la em um poderoso canal de aquisição e conversão orgânica.",
    challenge: "O FAQ tradicional tinha baixa visibilidade nos buscadores, conteúdo desatualizado e não estava conectado com a jornada do usuário. Os artigos não respondiam às dúvidas reais dos clientes e não incentivavam a conversão.",
    solution: "Realizamos uma reestruturação completa da arquitetura de informação, otimização SEO e GEO de todos os artigos, criação de CTAs estratégicos e implementação de um sistema de atualização contínua baseado em dados de busca e tickets.",
    results: [
      "Mais de R$ 5M em transações orgânicas diretas do FAQ",
      "+80% de crescimento de receita através do canal",
      "Aumento significativo no tráfego orgânico",
      "Redução de tickets relacionados a dúvidas já documentadas"
    ],
    learnings: "Este projeto mostrou que conteúdo de suporte pode ser estratégico para o negócio quando bem estruturado e otimizado. A integração entre UX Writing, SEO e análise de dados foi fundamental para o sucesso."
  },
  "bot-90-satisfacao": {
    title: "Como construímos fluxos de bot com 90% de satisfação e redução de 73% nos tickets",
    subtitle: "Redesenhando a experiência conversacional para aumentar autonomia e satisfação dos usuários",
    tags: ["ux writing", "ux research", "microcopy", "arquitetura de informação", "teste de usabilidade", "mensagem de erro", "content ops"],
    image: "https://ligiacorrea.notion.site/image/attachment%3Aa4e72088-8605-430a-9921-05bc88246a22%3ACover.png?id=2b28ba4d-245e-8056-9bce-cc4bca3bd8d3&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
    overview: "O bot de atendimento do iCasei precisava evoluir de um simples direcionador de tickets para um canal de autoatendimento eficiente e humanizado.",
    challenge: "O bot existente tinha fluxos confusos, linguagem robótica, alta taxa de abandono e baixa resolução de problemas. Os usuários preferiam falar com atendentes humanos mesmo para questões simples.",
    solution: "Realizamos pesquisa com usuários para entender suas principais dúvidas, redesenhamos a arquitetura dos fluxos, aplicamos tom de voz humanizado e criamos mensagens de erro empáticas. Implementamos testes A/B para otimização contínua.",
    results: [
      "90% de satisfação nos fluxos de bot",
      "73% de redução nos tickets de atendimento",
      "Aumento na taxa de resolução no primeiro contato",
      "Redução do tempo médio de atendimento"
    ],
    learnings: "A humanização do bot não significa torná-lo 'fofo', mas sim claro, empático e eficiente. Entender o momento emocional do usuário é essencial para criar respostas adequadas."
  },
  "content-system-ops": {
    title: "Criando processos integrados, escaláveis e eficientes através de Content System Ops",
    subtitle: "Estruturando a operação de conteúdo para garantir qualidade e consistência em escala",
    tags: ["ux writing", "arquitetura de informação", "discovery", "guia de linguagem", "tech writing"],
    image: "https://ligiacorrea.notion.site/image/attachment%3Aa4e72088-8605-430a-9921-05bc88246a22%3ACover.png?id=2228ba4d-245e-8007-9781-f53c733c696a&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
    overview: "Como primeira UX Writer do iCasei, precisei estruturar toda a área de UX Writing do zero, criando processos, ferramentas e governança de conteúdo.",
    challenge: "Não havia processos definidos para criação e revisão de conteúdo, cada área usava uma linguagem diferente, não existia guia de tom de voz e o conteúdo era criado de forma descentralizada.",
    solution: "Desenvolvi um Content System Ops completo incluindo guia de linguagem, templates de documentação, fluxo de revisão, biblioteca de componentes de texto e rituais de alinhamento com outras áreas.",
    results: [
      "Padronização da voz da marca em todos os touchpoints",
      "Redução do tempo de criação de conteúdo",
      "Maior autonomia das equipes para criar conteúdo on-brand",
      "Escalabilidade do processo de UX Writing"
    ],
    learnings: "Estruturar processos é tão importante quanto escrever bem. Um bom Content Ops permite que a qualidade do conteúdo se mantenha mesmo quando a empresa cresce."
  },
  "ong-voluntarios": {
    title: "Como utilizamos UX para aumentar adesão e retenção de voluntários em ONG",
    subtitle: "Projeto voluntário aplicando metodologias de UX para causa social",
    tags: ["discovery", "ux research", "persona", "teste de usabilidade", "guia de linguagem", "ux writing"],
    image: "https://ligiacorrea.notion.site/image/attachment%3A8bd90fd2-b8cb-4339-a350-c08bc96fda1d%3A66675d033cd65414f1af5a24_ogi.jpg?id=2118ba4d-245e-8096-8354-e23c1da1fb61&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
    overview: "Como líder de grupo no projeto 'Desafio apoie uma ONG' das comunidades Jovens UX&UI e VagasUX, ajudei a ONG Kurumins a melhorar sua comunicação e captação de voluntários.",
    challenge: "A ONG tinha dificuldade em atrair e reter voluntários. A comunicação não era clara sobre as oportunidades e a jornada de voluntariado era confusa.",
    solution: "Realizamos discovery completo com stakeholders e voluntários, mapeamos personas, identificamos pontos de fricção na jornada e criamos recomendações de UX Writing e design para melhorar a experiência.",
    results: [
      "Entendimento profundo das motivações dos voluntários",
      "Mapeamento completo da jornada de voluntariado",
      "Guia de linguagem adaptado ao público",
      "Recomendações implementáveis para a ONG"
    ],
    learnings: "UX pode ter impacto social significativo. Trabalhar com recursos limitados estimula a criatividade e foco no essencial."
  },
  "aquisicao-produto": {
    title: "Ampliando a aquisição do produto",
    subtitle: "Otimizando a jornada de descoberta e cadastro para aumentar conversão",
    tags: ["ux writing", "ux research", "discovery", "persona", "benchmarking", "teste de usabilidade", "arquitetura de informação", "copywriting"],
    image: "https://ligiacorrea.notion.site/image/attachment%3Abb5f0054-8920-43c6-bcd6-84f7dcbc4662%3Amaxresdefault.jpg?id=2118ba4d-245e-80ec-8181-ef8e84126001&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
    overview: "Projeto focado em aumentar a aquisição de novos usuários através da otimização da comunicação e experiência de cadastro.",
    challenge: "A taxa de conversão de visitantes para cadastros estava abaixo do potencial. O fluxo de onboarding tinha pontos de fricção e a proposta de valor não estava clara.",
    solution: "Realizamos pesquisa com usuários, benchmarking de concorrentes, reestruturamos a landing page, simplificamos o fluxo de cadastro e melhoramos o microcopy em todos os pontos de contato.",
    results: [
      "Mais de 335% de crescimento em cadastros",
      "Melhoria significativa na taxa de conversão",
      "Redução do tempo de cadastro",
      "Aumento na compreensão da proposta de valor"
    ],
    learnings: "Pequenas mudanças no conteúdo podem ter grande impacto na conversão. A clareza da proposta de valor é fundamental desde o primeiro contato."
  },
  "tom-voz-nps": {
    title: "Aplicação de tom de voz e NPS para melhorar experiência e guiar decisões de produto",
    subtitle: "Usando dados qualitativos e quantitativos para evoluir a experiência do usuário",
    tags: ["ux writing", "ux research", "arquitetura de informação", "teste A/B", "discovery", "persona", "benchmarking", "guia de linguagem", "taxonomia"],
    image: "https://ligiacorrea.notion.site/image/attachment%3A29fa0061-49b5-42f3-9c6d-7b57e2321060%3AScreen_Shot_2023-10-07_at_16.25.24.png?id=2118ba4d-245e-8056-9e8b-f0e5f103f629&table=block&spaceId=a4c5fb53-7256-4287-8559-d9881c87a210&width=520&userId=&cache=v2",
    overview: "Projeto de evolução contínua da experiência do usuário baseado em feedback NPS e aplicação consistente do tom de voz da marca.",
    challenge: "O NPS indicava pontos de insatisfação relacionados à comunicação do produto. Não havia um processo estruturado para transformar feedback em melhorias de conteúdo.",
    solution: "Implementamos análise sistemática dos feedbacks NPS, categorizamos os problemas de comunicação, criamos e aplicamos o guia de tom de voz, e realizamos testes A/B para validar melhorias.",
    results: [
      "Melhoria no score NPS",
      "Redução de feedback negativo relacionado a comunicação",
      "Padronização do tom de voz em toda a plataforma",
      "Processo contínuo de melhoria baseado em dados"
    ],
    learnings: "NPS é uma fonte rica de insights para UX Writing. A combinação de dados qualitativos e quantitativos permite priorizar melhorias com maior impacto."
  }
};

export default function CasePage() {
  const { slug } = useParams<{ slug: string }>();
  const caseData = slug ? casesData[slug] : null;

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case não encontrado</h1>
          <Button asChild>
            <Link to="/">Voltar para home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="hero-gradient py-12 md:py-20">
          <div className="container mx-auto px-4">
            <Link
              to="/#cases"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para cases
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {caseData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {caseData.title}
              </h1>
              
              <p className="text-lg text-muted-foreground">
                {caseData.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] rounded-xl overflow-hidden card-shadow">
                <img
                  src={caseData.image}
                  alt={caseData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Visão geral
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseData.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  O desafio
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseData.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  A solução
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseData.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Resultados
                </h2>
                <ul className="space-y-3">
                  {caseData.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Aprendizados
                </h2>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{caseData.learnings}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-4">
              Quer saber mais sobre este projeto ou conversar sobre UX Writing?
            </p>
            <Button asChild size="lg">
              <a
                href="https://www.linkedin.com/in/ligia-correa-ux-writer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vamos conversar no LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
