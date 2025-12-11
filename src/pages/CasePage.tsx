import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Case images
import faqCentralAjudaHome from "@/assets/cases/faq-central-ajuda-home.webp";
import faqBannerLateral from "@/assets/cases/faq-banner-lateral.webp";
import faqBannerRodape from "@/assets/cases/faq-banner-rodape.webp";
import faqVotos2023 from "@/assets/cases/faq-votos-2023.webp";
import faqVotos2024 from "@/assets/cases/faq-votos-2024.webp";
import faqComparativoTrimestres from "@/assets/cases/faq-comparativo-trimestres.webp";

interface CaseSection {
  title: string;
  content: React.ReactNode;
}

interface CaseData {
  title: string;
  projectType: string;
  skills: string[];
  area: string;
  sections: CaseSection[];
  closing?: React.ReactNode;
}

const casesData: Record<string, CaseData> = {
  "faq-5m-organicos": {
    title: "Como transacionamos mais de R$ 5M na central de ajuda de forma orgânica",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação", "testes de usabilidade", "SEO", "GEO", "conteúdo para interface", "tech writing"],
    area: "FAQ",
    sections: [
      {
        title: "Problema",
        content: (
          <div className="space-y-6">
            <p>
              A <a href="https://suporte.icasei.com.br/hc/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">central de ajuda</a> do iCasei já funcionava como um canal relevante de suporte, com artigos, tutoriais, vídeos e recursos visuais, e ganhava cada vez mais visibilidade graças ao SEO e manutenção contínua. Porém, havia <strong>duas grandes lacunas</strong>:
            </p>
            
            <ul className="space-y-4 list-none">
              <li>
                <strong>Ausência de cultura orientada por dados</strong>
                <p className="mt-1 text-muted-foreground">
                  Até 2022, o iCasei não possuía análises profundas de conversão ou comportamento. A central de ajuda não era medida como canal estratégico de aquisição ou receita.
                </p>
              </li>
              <li>
                <strong>Oportunidade não explorada</strong>
                <p className="mt-1 text-muted-foreground">
                  Apesar de receber tráfego qualificado e crescente, o FAQ ainda não era pensado como um <strong>motor de conversão</strong>.
                </p>
              </li>
            </ul>

            <figure className="my-8">
              <img 
                src={faqCentralAjudaHome} 
                alt="Captura da página inicial da central de ajuda"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Captura da página inicial da central de ajuda
              </figcaption>
            </figure>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic">
              Por que não aproveitar um canal orgânico forte para converter usuários em cadastros, compras de planos e transações da lista de presentes?
            </blockquote>
          </div>
        )
      },
      {
        title: "Processo",
        content: (
          <div className="space-y-6">
            <p>
              Com a implementação do <strong>Metabase</strong>, iniciou-se uma análise mais precisa de fontes de tráfego (Google Search, redes sociais, revista digital). Solicitei então a criação de um dashboard exclusivo para o FAQ, permitindo identificar seu real potencial de conversão.
            </p>
            
            <p>A partir disso, iniciamos <strong>um ciclo contínuo de otimização</strong>, incluindo:</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">1. Instrumentação e monitoramento</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Parametrização de hiperlinks para leitura de cliques e rotas.</li>
                  <li>Implementação de tags de rastreamento no Google Analytics via GTM, permitindo medir conversão (cliques → cadastros efetivos).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">2. Estratégias de conteúdo e navegação</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Inclusão de <strong>hiperlinks estratégicos</strong> em artigos de alto volume.</li>
                  <li>Atualização contínua de conteúdos para mais clareza e relevância.</li>
                  <li>Inclusão de <strong>vídeos</strong> como reforço visual.</li>
                  <li>Tags e palavras-chave para melhorar categorização e sugerir novos conteúdos.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">3. SEO e arquitetura da informação</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Manutenção recorrente de SEO e ajustes de indexação.</li>
                  <li>Redesign completo da central de ajuda, aprimorando estrutura e usabilidade.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">4. Conversão dentro do FAQ</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li><strong>Banners dinâmicos</strong> no rodapé e lateral para campanhas específicas.</li>
                  <li>Substituição de "Fale Conosco" por "Central de Ajuda" no menu principal do site, direcionando tráfego qualificado para o canal e reduzindo abertura de tickets.</li>
                  <li>Pesquisa de satisfação no final dos artigos para melhorar continuamente a qualidade.</li>
                </ul>
              </div>
            </div>

            <p>
              Essas ações transformaram o FAQ em um canal não só de suporte, mas de <strong>acessos recorrentes, conteúdo confiável e conversão ativa</strong>.
            </p>
          </div>
        )
      },
      {
        title: "Solução",
        content: (
          <div className="space-y-6">
            <p>
              A solução foi estruturar a central de ajuda como um <strong>canal de aquisição e receita</strong>, sem perder o foco em experiência do usuário.
            </p>
            
            <p>Isso envolveu:</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">1. Consolidação do FAQ como destino principal de busca por orientação</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Redesign funcional, aprimorando arquitetura da informação e alinhando às necessidades do usuário e do negócio.</li>
                  <li>Agrupamento de temas e navegação refinada.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">2. Adoção de elementos de conversão nativos</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Banners altamente visíveis e contextuais.</li>
                  <li>Hiperlinks que levavam a páginas estratégicas.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">3. Integração com análise de dados</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Dashboard de conversão.</li>
                  <li>Implementação de tags de rastreamento no Google Analytics via Google Tag Manager, possibilitando medir a taxa de conversão a partir da relação cliques x cadastros efetivos.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">4. Melhoria contínua da qualidade dos artigos</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Revisão guiada por métricas de satisfação.</li>
                  <li>Manutenção recorrente de SEO para garantir indexação e ampliar o alcance.</li>
                  <li>Inclusão de vídeos práticos como complemento visual ao texto.</li>
                  <li>Tags com palavras-chave para categorizar temas e sugerir conteúdos complementares.</li>
                </ul>
              </div>
            </div>

            <figure className="my-8">
              <img 
                src={faqBannerLateral} 
                alt="Captura de tela com exemplo do banner lateral e hiperlinks na central de ajuda"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Captura de tela com exemplo do banner lateral e hiperlinks na central de ajuda
              </figcaption>
            </figure>

            <figure className="my-8">
              <img 
                src={faqBannerRodape} 
                alt="Captura de tela com exemplo do banner no rodapé, tags e pesquisa na central de ajuda"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Captura de tela com exemplo do banner no rodapé, tags e pesquisa na central de ajuda
              </figcaption>
            </figure>
          </div>
        )
      },
      {
        title: "Resultado",
        content: (
          <div className="space-y-8">
            <p>
              Em pouco mais de dois anos, a central de ajuda se tornou um dos maiores motores orgânicos de conversão do iCasei, com <strong>crescimento exponencial em receita, cadastros e engajamento</strong>.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">🚀 R$ 5 milhões</div>
                <p className="text-muted-foreground">transacionados somente pela central de ajuda, em transações da lista de presentes, sem mídia paga.</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">📈 Crescimentos expressivos (2023 → 2024)</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+500%</span>
                  <span className="text-muted-foreground">no valor transacionado na lista de presentes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+492%</span>
                  <span className="text-muted-foreground">em novos cadastros</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+641%</span>
                  <span className="text-muted-foreground">nas vendas de cartões impressos (produto complementar)</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/20 p-6 rounded-xl border border-accent/30">
              <h4 className="font-semibold text-lg mb-2">🎯 Banners como protagonistas</h4>
              <p className="text-muted-foreground">
                Mais de <strong>60% das conversões</strong> vieram dos banners introduzidos após o redesign (dez/2023).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">👥 Crescimento da audiência</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>2024: ~45 mil usuários ativos no semestre</li>
                <li>2025: <strong>+80 mil usuários</strong> (média de 15 mil/mês) — Quase <strong>dobro</strong> de audiência</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">⭐ Evolução da percepção de qualidade e utilidade</h4>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>2023: 52,8% votos negativos × 47,2% votos positivos</li>
                <li>2024: <strong>75,7% positivos</strong> (+60,4%) e apenas <strong>24,3% negativos</strong> (–54%)</li>
              </ul>

              <div className="space-y-6">
                <figure>
                  <img 
                    src={faqVotos2023} 
                    alt="Gráfico da análise de votos positivos e negativos de 2023"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Gráfico da análise de votos positivos e negativos de 2023 (Zendesk)
                  </figcaption>
                </figure>

                <figure>
                  <img 
                    src={faqVotos2024} 
                    alt="Gráfico da análise de votos positivos e negativos de 2024"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Gráfico da análise de votos positivos e negativos de 2024, ilustrando a redução de picos de votos negativos (Zendesk)
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">📊 Comparativo 2024 × 2025</h4>
              <p className="text-muted-foreground mb-4">
                Analisando os 3 primeiros trimestres de 2024 e 2025, vemos um aumento considerável nas principais métricas do produto:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-6">
                <li>Mais cadastros</li>
                <li>Mais receita em lista de presentes</li>
                <li>Mais vendas de cartões impressos</li>
              </ul>

              <figure>
                <img 
                  src={faqComparativoTrimestres} 
                  alt="Comparativo do desempenho dos trimestres de 2024 e 2025"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Comparativo do desempenho dos trimestres de 2024 e 2025
                </figcaption>
              </figure>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-lg mb-4">Conclusão</h4>
              <p className="text-muted-foreground mb-4">
                O FAQ deixou de ser um repositório de ajuda para se tornar um <strong>ecossistema estratégico</strong>, unindo:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Experiência do usuário</li>
                <li>Estratégias de SEO</li>
                <li>Conteúdo de alta performance</li>
                <li>Design orientado a conversão</li>
                <li>Impacto direto em receita</li>
              </ul>
              <p className="text-muted-foreground">
                Um exemplo sólido de como conteúdo + UX + métricas podem transformar um canal subaproveitado em um <strong>ativo de crescimento escalável</strong>. A central de ajuda ganhou autoridade, ampliou a audiência, melhorou a percepção de qualidade e alcançou <strong>crescimentos superiores a 400%</strong> em diferentes métricas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Próximos passos</h4>
              <p className="text-muted-foreground">
                A central de ajuda passa por manutenção contínua, com análises recorrentes para aprimorar estratégias e oferecer uma experiência cada vez mais relevante e útil aos usuários. Como próximo passo, estamos desenvolvendo um plano para aplicar GEO (Generative Engine Optimization) aos artigos, fortalecendo a presença do iCasei e aumentando as chances de a marca ser citada nas principais ferramentas de IA.
              </p>
            </div>
          </div>
        )
      }
    ],
  },
  "bot-90-satisfacao": {
    title: "Como construímos fluxos de bot com 90% de satisfação e redução de 73% nos tickets",
    projectType: "Case real",
    skills: ["ux writing", "ux research", "microcopy", "content ops"],
    area: "Bot de atendimento",
    sections: [
      {
        title: "Visão geral",
        content: (
          <p>O bot de atendimento do iCasei precisava evoluir de um simples direcionador de tickets para um canal de autoatendimento eficiente e humanizado.</p>
        )
      },
      {
        title: "O desafio",
        content: (
          <p>O bot existente tinha fluxos confusos, linguagem robótica, alta taxa de abandono e baixa resolução de problemas. Os usuários preferiam falar com atendentes humanos mesmo para questões simples.</p>
        )
      },
      {
        title: "A solução",
        content: (
          <p>Realizamos pesquisa com usuários para entender suas principais dúvidas, redesenhamos a arquitetura dos fluxos, aplicamos tom de voz humanizado e criamos mensagens de erro empáticas. Implementamos testes A/B para otimização contínua.</p>
        )
      },
      {
        title: "Resultado",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>90% de satisfação nos fluxos de bot</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>73% de redução nos tickets de atendimento</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Aumento na taxa de resolução no primeiro contato</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Redução do tempo médio de atendimento</span>
            </li>
          </ul>
        )
      }
    ]
  },
  "content-system-ops": {
    title: "Criando processos integrados, escaláveis e eficientes através de Content System Ops",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação", "guia de linguagem"],
    area: "Content Ops",
    sections: [
      {
        title: "Visão geral",
        content: (
          <p>Como primeira UX Writer do iCasei, precisei estruturar toda a área de UX Writing do zero, criando processos, ferramentas e governança de conteúdo.</p>
        )
      },
      {
        title: "O desafio",
        content: (
          <p>Não havia processos definidos para criação e revisão de conteúdo, cada área usava uma linguagem diferente, não existia guia de tom de voz e o conteúdo era criado de forma descentralizada.</p>
        )
      },
      {
        title: "A solução",
        content: (
          <p>Desenvolvi um Content System Ops completo incluindo guia de linguagem, templates de documentação, fluxo de revisão, biblioteca de componentes de texto e rituais de alinhamento com outras áreas.</p>
        )
      },
      {
        title: "Resultado",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Padronização da voz da marca em todos os touchpoints</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Redução do tempo de criação de conteúdo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Maior autonomia das equipes para criar conteúdo on-brand</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Escalabilidade do processo de UX Writing</span>
            </li>
          </ul>
        )
      }
    ]
  },
  "ong-voluntarios": {
    title: "Como utilizamos UX para aumentar adesão e retenção de voluntários em ONG",
    projectType: "Case real",
    skills: ["discovery", "ux research", "persona", "guia de linguagem"],
    area: "Projeto voluntário",
    sections: [
      {
        title: "Visão geral",
        content: (
          <p>Como líder de grupo no projeto 'Desafio apoie uma ONG' das comunidades Jovens UX&UI e VagasUX, ajudei a ONG Kurumins a melhorar sua comunicação e captação de voluntários.</p>
        )
      },
      {
        title: "O desafio",
        content: (
          <p>A ONG tinha dificuldade em atrair e reter voluntários. A comunicação não era clara sobre as oportunidades e a jornada de voluntariado era confusa.</p>
        )
      },
      {
        title: "A solução",
        content: (
          <p>Realizamos discovery completo com stakeholders e voluntários, mapeamos personas, identificamos pontos de fricção na jornada e criamos recomendações de UX Writing e design para melhorar a experiência.</p>
        )
      },
      {
        title: "Resultado",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Entendimento profundo das motivações dos voluntários</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Mapeamento completo da jornada de voluntariado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Guia de linguagem adaptado ao público</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Recomendações implementáveis para a ONG</span>
            </li>
          </ul>
        )
      }
    ]
  },
  "aquisicao-produto": {
    title: "Ampliando a aquisição do produto",
    projectType: "Case real",
    skills: ["ux writing", "ux research", "discovery", "benchmarking"],
    area: "Aquisição",
    sections: [
      {
        title: "Visão geral",
        content: (
          <p>Projeto focado em aumentar a aquisição de novos usuários através da otimização da comunicação e experiência de cadastro.</p>
        )
      },
      {
        title: "O desafio",
        content: (
          <p>A taxa de conversão de visitantes para cadastros estava abaixo do potencial. O fluxo de onboarding tinha pontos de fricção e a proposta de valor não estava clara.</p>
        )
      },
      {
        title: "A solução",
        content: (
          <p>Realizamos pesquisa com usuários, benchmarking de concorrentes, reestruturamos a landing page, simplificamos o fluxo de cadastro e melhoramos o microcopy em todos os pontos de contato.</p>
        )
      },
      {
        title: "Resultado",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Mais de 335% de crescimento em cadastros</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Melhoria significativa na taxa de conversão</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Redução do tempo de cadastro</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Aumento na compreensão da proposta de valor</span>
            </li>
          </ul>
        )
      }
    ]
  },
  "tom-voz-nps": {
    title: "Aplicação de tom de voz e NPS para melhorar experiência e guiar decisões de produto",
    projectType: "Case real",
    skills: ["ux writing", "teste A/B", "discovery", "taxonomia"],
    area: "Tom de voz",
    sections: [
      {
        title: "Visão geral",
        content: (
          <p>Projeto de evolução contínua da experiência do usuário baseado em feedback NPS e aplicação consistente do tom de voz da marca.</p>
        )
      },
      {
        title: "O desafio",
        content: (
          <p>O NPS indicava pontos de insatisfação relacionados à comunicação do produto. Não havia um processo estruturado para transformar feedback em melhorias de conteúdo.</p>
        )
      },
      {
        title: "A solução",
        content: (
          <p>Implementamos análise sistemática dos feedbacks NPS, categorizamos os problemas de comunicação, criamos e aplicamos o guia de tom de voz, e realizamos testes A/B para validar melhorias.</p>
        )
      },
      {
        title: "Resultado",
        content: (
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Melhoria no score NPS</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Redução de feedback negativo relacionado a comunicação</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Padronização do tom de voz em toda a plataforma</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>Processo contínuo de melhoria baseado em dados</span>
            </li>
          </ul>
        )
      }
    ]
  },
  // Placeholder for other cases - will be filled when content is provided
  "melhorando-navegacao-painel": {
    title: "Melhorando a navegação no painel e reduzindo tickets",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação"],
    area: "Painel",
    sections: []
  },
  "landing-page-lovable": {
    title: "Criando uma landing page de captação com a Lovable",
    projectType: "Case real",
    skills: ["ux writing", "copywriting"],
    area: "Landing page",
    sections: []
  },
  "redesign-revista-digital": {
    title: "Elevando a experiência da revista digital com um processo de redesign",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação"],
    area: "Revista digital",
    sections: []
  },
  "parceiros-100m": {
    title: "Conquistando mais de 1k parceiros e transacionando mais de R$ 100M em projeto",
    projectType: "Case real",
    skills: ["ux writing", "discovery"],
    area: "Parcerias",
    sections: []
  },
  "redesign-central-ajuda": {
    title: "Como redesenhamos a central de ajuda para aumentar autonomia e reduzir tickets",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação"],
    area: "Central de ajuda",
    sections: []
  },
  "proposta-valor-app": {
    title: "Aumentando a proposta de valor do aplicativo",
    projectType: "Case real",
    skills: ["ux writing", "discovery"],
    area: "App",
    sections: []
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

  const hasSections = caseData.sections && caseData.sections.length > 0;

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
            
            <div className="max-w-3xl mx-auto">
              {/* Tags row */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  {caseData.projectType}
                </Badge>
                <Badge variant="outline" className="bg-accent/20 text-accent-foreground border-accent/30">
                  {caseData.area}
                </Badge>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {caseData.title}
              </h1>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {caseData.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content with Accordion */}
        {hasSections ? (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {caseData.sections.map((section, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`section-${index}`}
                      className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-xl font-display font-semibold hover:no-underline py-6">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-foreground leading-relaxed">
                        {section.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Closing message */}
                {caseData.closing && (
                  <div className="mt-12 p-8 bg-card rounded-xl border border-border">
                    {caseData.closing}
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground">
                  Conteúdo completo em breve.
                </p>
              </div>
            </div>
          </section>
        )}

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
