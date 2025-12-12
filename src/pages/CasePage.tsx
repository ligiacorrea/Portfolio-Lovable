import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Case images
import faqCentralAjudaHome from "@/assets/cases/faq-central-ajuda-home.webp";
import faqBannerLateral from "@/assets/cases/faq-banner-lateral.webp";
import faqBannerRodape from "@/assets/cases/faq-banner-rodape.webp";
import faqVotos2023 from "@/assets/cases/faq-votos-2023.webp";
import faqVotos2024 from "@/assets/cases/faq-votos-2024.webp";
import faqComparativoTrimestres from "@/assets/cases/faq-comparativo-trimestres.webp";
import botRsvpMockup from "@/assets/cases/bot-rsvp-mockup.webp";
import botFluxoMiroV1 from "@/assets/cases/bot-fluxo-miro-v1.webp";
import botFluxoMiroOficial from "@/assets/cases/bot-fluxo-miro-oficial.webp";
import botFluxoMiroIds from "@/assets/cases/bot-fluxo-miro-ids.webp";
import botFluxoZendesk from "@/assets/cases/bot-fluxo-zendesk.webp";
import botChatSite from "@/assets/cases/bot-chat-site.webp";
import botZendesk1 from "@/assets/cases/bot-zendesk-1.webp";
import botZendesk2 from "@/assets/cases/bot-zendesk-2.webp";
import botZendesk3 from "@/assets/cases/bot-zendesk-3.webp";
import botGraficoTickets from "@/assets/cases/bot-grafico-tickets.webp";
import botRsvpExperiencia from "@/assets/cases/bot-rsvp-experiencia.webp";
import botFeedbacks1 from "@/assets/cases/bot-feedbacks-1.webp";
import botFeedbacks2 from "@/assets/cases/bot-feedbacks-2.webp";
import botMetabaseFunil from "@/assets/cases/bot-metabase-funil.webp";
import opsDocAlertas from "@/assets/cases/ops-doc-alertas.webp";
import aquisicaoProblemaMapa from "@/assets/cases/aquisicao-problema-mapa.webp";
import aquisicaoDeskResearch from "@/assets/cases/aquisicao-desk-research.webp";
import aquisicaoPersonaRafael from "@/assets/cases/aquisicao-persona-rafael.webp";
import aquisicaoPersonaCamila from "@/assets/cases/aquisicao-persona-camila.webp";
import aquisicaoBenchmarking from "@/assets/cases/aquisicao-benchmarking.webp";
import aquisicaoTestesUsabilidade from "@/assets/cases/aquisicao-testes-usabilidade.webp";
import aquisicaoAchadosTestes from "@/assets/cases/aquisicao-achados-testes.webp";
import opsDocStatus from "@/assets/cases/ops-doc-status.webp";
import opsDocCopy from "@/assets/cases/ops-doc-copy.webp";
import opsGuiaCentralAjuda from "@/assets/cases/ops-guia-central-ajuda.webp";
import opsGuiaPesquisas from "@/assets/cases/ops-guia-pesquisas.webp";
import opsGuiaUxWriting from "@/assets/cases/ops-guia-ux-writing.webp";
import opsGuiaGrowth from "@/assets/cases/ops-guia-growth.webp";
import opsBoardMetricas from "@/assets/cases/ops-board-metricas.webp";
import opsBoardGeo from "@/assets/cases/ops-board-geo.webp";
import opsRoadmapGrowth from "@/assets/cases/ops-roadmap-growth.webp";
import opsAtividadesGrowth from "@/assets/cases/ops-atividades-growth.webp";
import opsFunilPirata from "@/assets/cases/ops-funil-pirata.webp";
import ongDatafolha from "@/assets/cases/ong-datafolha.webp";
import ongThumbKurumins from "@/assets/cases/ong-thumb-kurumins.webp";
import ongMiro1 from "@/assets/cases/ong-miro-1.webp";
import ongMiro2 from "@/assets/cases/ong-miro-2.webp";
import ongMiro3 from "@/assets/cases/ong-miro-3.webp";
import ongProtoPersonas from "@/assets/cases/ong-proto-personas.webp";
import ongPesquisaDescobrir from "@/assets/cases/ong-pesquisa-descobrir.webp";
import ongRespostasDesistiu from "@/assets/cases/ong-respostas-desistiu.webp";
import ongRespostasNuncaFez from "@/assets/cases/ong-respostas-nunca-fez.webp";
import ongRespostasContinua from "@/assets/cases/ong-respostas-continua.webp";
import ongParedeInsights from "@/assets/cases/ong-parede-insights.webp";
import ongInsightsCategoria from "@/assets/cases/ong-insights-categoria.webp";
import ongPersonaNuncaFez from "@/assets/cases/ong-persona-nunca-fez.webp";
import ongPersonaJaFez from "@/assets/cases/ong-persona-ja-fez.webp";
import ongPersonaVoluntaria from "@/assets/cases/ong-persona-voluntaria.webp";
import ongJornadaVoluntarios from "@/assets/cases/ong-jornada-voluntarios.webp";
import ongWireframesFigma from "@/assets/cases/ong-wireframes-figma.webp";
import ongStyleGuide from "@/assets/cases/ong-style-guide.webp";
import ongGuiaLinguagem from "@/assets/cases/ong-guia-linguagem.webp";
import ongWireframesAlta from "@/assets/cases/ong-wireframes-alta.webp";
import ongTestesUsabilidade from "@/assets/cases/ong-testes-usabilidade.webp";
import ongDemoDay from "@/assets/cases/ong-demo-day.webp";
import ongFluxoSite from "@/assets/cases/ong-fluxo-site.webp";
import npsBrandingSweetCannelle from "@/assets/cases/nps-branding-sweet-cannelle.webp";
import npsDeskResearch from "@/assets/cases/nps-desk-research.webp";
import npsDefinicao from "@/assets/cases/nps-definicao.webp";

interface CaseSection {
  title: string;
  content: React.ReactNode;
}

interface CaseData {
  title: string;
  projectType: string;
  skills: string[];
  area?: string;
  sections: CaseSection[];
  closing?: React.ReactNode;
}

const casesData: Record<string, CaseData> = {
  "faq-5m-organicos": {
    title: "Como transacionamos mais de R$ 5M na central de ajuda de forma orgânica",
    projectType: "Case real",
    skills: [
      "ux writing",
      "arquitetura de informação",
      "testes de usabilidade",
      "SEO",
      "GEO",
      "conteúdo para interface",
      "tech writing",
    ],
    area: "FAQ",
    sections: [
      {
        title: "Problema",
        content: (
          <div className="space-y-6">
            <p>
              A{" "}
              <a
                href="https://suporte.icasei.com.br/hc/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                central de ajuda
              </a>{" "}
              do iCasei já funcionava como um canal relevante de suporte, com artigos, tutoriais, vídeos e recursos
              visuais, e ganhava cada vez mais visibilidade graças ao SEO e manutenção contínua. Porém, havia{" "}
              <strong>duas grandes lacunas</strong>:
            </p>

            <ul className="space-y-4 list-none">
              <li>
                <strong>Ausência de cultura orientada por dados</strong>
                <p className="mt-1 text-muted-foreground">
                  Até 2022, o iCasei não possuía análises profundas de conversão ou comportamento. A central de ajuda
                  não era medida como canal estratégico de aquisição ou receita.
                </p>
              </li>
              <li>
                <strong>Oportunidade não explorada</strong>
                <p className="mt-1 text-muted-foreground">
                  Apesar de receber tráfego qualificado e crescente, o FAQ ainda não era pensado como um{" "}
                  <strong>motor de conversão</strong>.
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
              Por que não aproveitar um canal orgânico forte para converter usuários em cadastros, compras de planos e
              transações da lista de presentes?
            </blockquote>
          </div>
        ),
      },
      {
        title: "Processo",
        content: (
          <div className="space-y-6">
            <p>
              Com a implementação do <strong>Metabase</strong>, iniciou-se uma análise mais precisa de fontes de tráfego
              (Google Search, redes sociais, revista digital). Solicitei então a criação de um dashboard exclusivo para
              o FAQ, permitindo identificar seu real potencial de conversão.
            </p>

            <p>
              A partir disso, iniciamos <strong>um ciclo contínuo de otimização</strong>, incluindo:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">1. Instrumentação e monitoramento</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Parametrização de hiperlinks para leitura de cliques e rotas.</li>
                  <li>
                    Implementação de tags de rastreamento no Google Analytics via GTM, permitindo medir conversão
                    (cliques → cadastros efetivos).
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">2. Estratégias de conteúdo e navegação</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    Inclusão de <strong>hiperlinks estratégicos</strong> em artigos de alto volume.
                  </li>
                  <li>Atualização contínua de conteúdos para mais clareza e relevância.</li>
                  <li>
                    Inclusão de <strong>vídeos</strong> como reforço visual.
                  </li>
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
                  <li>
                    <strong>Banners dinâmicos</strong> no rodapé e lateral para campanhas específicas.
                  </li>
                  <li>
                    Substituição de "Fale Conosco" por "Central de Ajuda" no menu principal do site, direcionando
                    tráfego qualificado para o canal e reduzindo abertura de tickets.
                  </li>
                  <li>Pesquisa de satisfação no final dos artigos para melhorar continuamente a qualidade.</li>
                </ul>
              </div>
            </div>

            <p>
              Essas ações transformaram o FAQ em um canal não só de suporte, mas de{" "}
              <strong>acessos recorrentes, conteúdo confiável e conversão ativa</strong>.
            </p>
          </div>
        ),
      },
      {
        title: "Solução",
        content: (
          <div className="space-y-6">
            <p>
              A solução foi estruturar a central de ajuda como um <strong>canal de aquisição e receita</strong>, sem
              perder o foco em experiência do usuário.
            </p>

            <p>Isso envolveu:</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  1. Consolidação do FAQ como destino principal de busca por orientação
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    Redesign funcional, aprimorando arquitetura da informação e alinhando às necessidades do usuário e
                    do negócio.
                  </li>
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
                  <li>
                    Implementação de tags de rastreamento no Google Analytics via Google Tag Manager, possibilitando
                    medir a taxa de conversão a partir da relação cliques x cadastros efetivos.
                  </li>
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
        ),
      },
      {
        title: "Resultado",
        content: (
          <div className="space-y-8">
            <p>
              Em pouco mais de dois anos, a central de ajuda se tornou um dos maiores motores orgânicos de conversão do
              iCasei, com <strong>crescimento exponencial em receita, cadastros e engajamento</strong>.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">🚀 R$ 5 milhões</div>
              <p className="text-muted-foreground">
                transacionados somente pela central de ajuda, em transações da lista de presentes, sem mídia paga.
              </p>
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
                <li>
                  2025: <strong>+80 mil usuários</strong> (média de 15 mil/mês) — Quase <strong>dobro</strong> de
                  audiência
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">⭐ Evolução da percepção de qualidade e utilidade</h4>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>2023: 52,8% votos negativos × 47,2% votos positivos</li>
                <li>
                  2024: <strong>75,7% positivos</strong> (+60,4%) e apenas <strong>24,3% negativos</strong> (–54%)
                </li>
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
                    Gráfico da análise de votos positivos e negativos de 2024, ilustrando a redução de picos de votos
                    negativos (Zendesk)
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">📊 Comparativo 2024 × 2025</h4>
              <p className="text-muted-foreground mb-4">
                Analisando os 3 primeiros trimestres de 2024 e 2025, vemos um aumento considerável nas principais
                métricas do produto:
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
                O FAQ deixou de ser um repositório de ajuda para se tornar um <strong>ecossistema estratégico</strong>,
                unindo:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Experiência do usuário</li>
                <li>Estratégias de SEO</li>
                <li>Conteúdo de alta performance</li>
                <li>Design orientado a conversão</li>
                <li>Impacto direto em receita</li>
              </ul>
              <p className="text-muted-foreground">
                Um exemplo sólido de como conteúdo + UX + métricas podem transformar um canal subaproveitado em um{" "}
                <strong>ativo de crescimento escalável</strong>. A central de ajuda ganhou autoridade, ampliou a
                audiência, melhorou a percepção de qualidade e alcançou <strong>crescimentos superiores a 400%</strong>{" "}
                em diferentes métricas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Próximos passos</h4>
              <p className="text-muted-foreground">
                A central de ajuda passa por manutenção contínua, com análises recorrentes para aprimorar estratégias e
                oferecer uma experiência cada vez mais relevante e útil aos usuários. Como próximo passo, estamos
                desenvolvendo um plano para aplicar GEO (Generative Engine Optimization) aos artigos, fortalecendo a
                presença do iCasei e aumentando as chances de a marca ser citada nas principais ferramentas de IA.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  "bot-90-satisfacao": {
    title: "Como construímos fluxos de bot com 90% de satisfação e redução de 73% nos tickets",
    projectType: "Case real",
    skills: [
      "ux writing",
      "ux research",
      "microcopy",
      "content ops",
      "arquitetura de informação",
      "teste de usabilidade",
      "mensagem de erro",
    ],
    area: "Fluxo conversacional",
    sections: [
      {
        title: "Problema",
        content: (
          <div className="space-y-6">
            <p>Até 2023, o iCasei não possuía um atendimento por chat eficiente ou escalável. Isso gerava:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Alta dependência do suporte humano</li>
              <li>Custos operacionais crescentes</li>
              <li>Experiência inconsistente para casais e convidados</li>
              <li>Falta de disponibilidade 24/7</li>
              <li>Alto volume de tickets</li>
            </ul>

            <p>
              Além disso, o processo de <strong>confirmação de presença (RSVP)</strong> acontecia de forma passiva
              (site/app) ou por telefone, gerando:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Baixa taxa de resposta</li>
              <li>Experiência limitada para o convidado</li>
              <li>Operação custosa e pouco escalável</li>
            </ul>

            <p>Havia, portanto, uma oportunidade clara de usar tecnologia para:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Melhorar a experiência do cliente</li>
              <li>Reduzir tickets</li>
              <li>Automatizar tarefas repetitivas</li>
              <li>Criar novos diferenciais competitivos (como o RSVP ativo por WhatsApp)</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Processo",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. Arquitetura e planejamento das soluções</h3>
              <p className="mb-4">
                Foram estruturados 3 <strong>modelos de bot</strong>, cada um atendendo a necessidades específicas:
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">RSVP por WhatsApp (desenvolvido internamente)</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>
                      Consideração de múltiplos cenários e exceções envolvidos no processo de confirmação de presença
                    </li>
                    <li>Colaboração direta com desenvolvimento para garantir viabilidade técnica</li>
                  </ul>
                  <figure className="mt-4">
                    <img
                      src={botRsvpMockup}
                      alt="Mockup da conversa de confirmação de presença pelo WhatsApp"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Mockup da conversa de confirmação de presença pelo WhatsApp
                    </figcaption>
                  </figure>
                  <figure className="mt-4">
                    <img
                      src={botFluxoMiroV1}
                      alt="Fluxo conversacional no Miro (versão inicial para testes)"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Fluxo conversacional no Miro (versão inicial para testes)
                    </figcaption>
                  </figure>
                  <figure className="mt-4">
                    <img
                      src={botFluxoMiroOficial}
                      alt="Fluxo oficial no Miro com tabela de casos de uso que demandam mensagens de erro"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Fluxo oficial no Miro com tabela de casos de uso que demandam mensagens de erro
                    </figcaption>
                  </figure>
                  <figure className="mt-4">
                    <img
                      src={botFluxoMiroIds}
                      alt="Fluxo oficial no Miro, com os vínculos dos ID da base de dados (para dev)"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Fluxo oficial no Miro, com os vínculos dos ID da base de dados (para dev)
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Bot via WhatsApp para atendimento</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Recurso exclusivo do plano Black (pacote completo do iCasei)</li>
                    <li>Construído no Zendesk</li>
                    <li>Inclui respostas automatizadas, artigos recomendados e transferência para agentes</li>
                  </ul>
                  <figure className="mt-4">
                    <img
                      src={botFluxoZendesk}
                      alt="Fluxo no Zendesk"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Fluxo no Zendesk
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Bot via Chat no site institucional</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Disponível para todos os usuários</li>
                    <li>Construído no Zendesk com linguagem neutra e acessível</li>
                    <li>Considerou comportamentos diferentes dentro e fora do horário comercial</li>
                  </ul>
                  <figure className="mt-4">
                    <img
                      src={botChatSite}
                      alt="Captura de tela do chat no site institucional"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Captura de tela do chat no site institucional
                    </figcaption>
                  </figure>
                  <div className="mt-4">
                    <img src={botZendesk1} alt="Fluxo no Zendesk" className="w-full rounded-lg border border-border" />
                  </div>
                  <div className="mt-4">
                    <img src={botZendesk2} alt="Fluxo no Zendesk" className="w-full rounded-lg border border-border" />
                  </div>
                  <figure className="mt-4">
                    <img src={botZendesk3} alt="Fluxos no Zendesk" className="w-full rounded-lg border border-border" />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Fluxos no Zendesk
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">2. Estratégia e objetivos</h3>
              <p className="mb-4">Os bots foram desenhados com foco em quatro pilares:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  <strong>Satisfação:</strong> atendimento 24/7, rápido e claro
                </li>
                <li>
                  <strong>Eficiência operacional:</strong> redução do volume de tickets
                </li>
                <li>
                  <strong>Personalização:</strong> priorização de experiências diferentes por tipo de plano
                </li>
                <li>
                  <strong>Aprimoramento do processo de RSVP:</strong> maior taxa de resposta e experiência fluida para
                  convidados, além de mais agilidade no processo de confirmações e na gestão do evento para os casais
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">3. Iterações, melhorias e monitoramento</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Para o RSVP:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Correção de bugs do sistema de disparos</li>
                    <li>Reclassificação das mensagens seguindo guidelines da Meta</li>
                    <li>Remoção de interações desnecessárias para redução de custos operacionais</li>
                    <li>Direcionamento de avaliações para formulário externo, personalizando mais a experiência</li>
                    <li>Criação de monitoramento do funil no Metabase</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Para os bots de atendimento:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Avaliação contínua via relatórios do Zendesk</li>
                    <li>Identificação de assuntos que exigem melhoria</li>
                    <li>Planejamento de expansão com IA, personalização e testes A/B</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Solução",
        content: (
          <div className="space-y-6">
            <p>
              O projeto consolidou <strong>um ecossistema conversacional integrado</strong>, formado por:
            </p>

            <div className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-lg mb-3">1. RSVP Ativo por WhatsApp</h4>
                <p className="mb-2 text-muted-foreground">
                  Uma experiência totalmente guiada para convidados confirmarem presença:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Conversa estruturada</li>
                  <li>Tom claro e acessível</li>
                  <li>Fluxos otimizados reduzindo atrito</li>
                  <li>Métricas capturadas automaticamente</li>
                  <li>Experiência escalável para casais</li>
                </ul>
              </div>

              <div className="bg-accent/20 p-6 rounded-xl border border-accent/30">
                <h4 className="font-semibold text-lg mb-3">2. Bot de Atendimento via WhatsApp</h4>
                <p className="mb-2 text-muted-foreground">Focado em clientes do plano Black:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Respostas rápidas e automatizadas</li>
                  <li>Sugestões de artigos</li>
                  <li>Encaminhamento para agente quando necessário</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-semibold text-lg mb-3">3. Bot de Atendimento via Chat no Site</h4>
                <p className="mb-2 text-muted-foreground">Para visitantes e usuários em geral:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Atende dúvidas sobre site, lista de presentes, planos e pagamentos</li>
                  <li>Ajuste de fluxo conforme horário de operação</li>
                  <li>Linguagem neutra e consistente</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Resultado",
        content: (
          <div className="space-y-8">
            <p>
              Os 3 produtos conversacionais geraram <strong>impacto direto, mensurável e consistente</strong>,
              consolidando o projeto como uma das maiores evoluções de CX do iCasei.
            </p>

            <div>
              <h4 className="font-semibold text-lg mb-4">📉 Redução expressiva de tickets</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">-73%</span>
                  <span className="text-muted-foreground">
                    no volume de chamados de chat e WhatsApp entre 2023 e 2025
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">-12%</span>
                  <span className="text-muted-foreground">
                    entre 2024 e 2025, indicando estabilização com melhora contínua
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">-14%</span>
                  <span className="text-muted-foreground">de redução no total de tickets do suporte em 2 anos</span>
                </li>
              </ul>
              <figure className="mt-6">
                <img
                  src={botGraficoTickets}
                  alt="Gráfico de volume de tickets"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Captura de tela do gráfico de volume de tickets, mostrando uma queda acentuada e estabilização
                  saudável (Zendesk)
                </figcaption>
              </figure>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">🤖 Uso e eficiência dos bots</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+34 mil</span>
                  <span className="text-muted-foreground">engajamentos totais</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">50%</span>
                  <span className="text-muted-foreground">
                    de transferência para agente (acima da média devido à complexidade das demandas)
                  </span>
                </li>
              </ul>
              <div className="mt-4 bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Tópicos com eficiência significativa:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                  <li>
                    "Presentear um casal": <strong>13%</strong> de transferência
                  </li>
                  <li>
                    "Site e lista de presentes": <strong>16%</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-lg mb-4">💬 RSVP por WhatsApp: satisfação alta e consolidada</h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">82%</span>
                  <span className="text-muted-foreground">
                    de satisfação (notas máximas) desde o lançamento em 2024
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+46 mil</span>
                  <span className="text-muted-foreground">avaliações acumuladas</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">Nova pesquisa mostrou:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                <li>
                  <strong>88%</strong> sem dificuldades no uso
                </li>
                <li>
                  <strong>87%</strong> acharam as mensagens claras
                </li>
                <li>
                  <strong>92%</strong> avaliaram como excelente/boa
                </li>
              </ul>
              <div className="mt-4">
                <img
                  src={botRsvpExperiencia}
                  alt="Experiência geral de confirmação pelo WhatsApp"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Feedbacks qualitativos</h4>
              <div className="space-y-3">
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic text-sm">
                  "Achei excelente, devido a rapidez do aplicativo e informações bem claras"
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic text-sm">
                  "Apesar de idosa, achei tudo bem explicado"
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic text-sm">
                  "Boa tarde, fui muito rápido e bem explicado, fácil preenchimento, obrigado"
                </blockquote>
              </div>
              <div className="mt-4 space-y-4">
                <img src={botFeedbacks1} alt="Feedbacks qualitativos" className="w-full rounded-lg" />
                <img src={botFeedbacks2} alt="Feedbacks qualitativos" className="w-full rounded-lg" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">🧭 Impacto estratégico</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Atendimento 24/7 com alto nível de satisfação</li>
                <li>Redução consistente de custos operacionais</li>
                <li>Diminuição expressiva de tickets</li>
                <li>Ampliação de diferenciais competitivos (especialmente no plano All Inclusive)</li>
                <li>Visão clara e contínua do funil via Metabase</li>
              </ul>
              <figure className="mt-4">
                <img
                  src={botMetabaseFunil}
                  alt="Monitoramento de performance do funil no Metabase"
                  className="w-full rounded-lg"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 italic">
                  Captura de tela do monitoramento de performance do funil no Metabase para acompanhamento em tempo real
                  das confirmações de presença via WhatsApp
                </figcaption>
              </figure>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">🔮 Próximos passos já planejados</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>IA para aumentar resoluções sem agente</li>
                <li>Novos assuntos e fluxos</li>
                <li>Personalização mais avançada por plano</li>
                <li>Testes A/B para otimização</li>
                <li>Canal de conversão para contratação de planos, serviços adicionais e upgrades</li>
                <li>Análise preditiva para antecipar resoluções</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-lg mb-4">Conclusão</h4>
              <p className="text-muted-foreground">
                Os projetos de bot do iCasei demonstram que uma boa integração estratégica de tecnologia, e com boas
                práticas de design conversacional trazem valor real e significativo para o negócio. Com uma taxa de
                satisfação alta, feedback qualitativo positivo e a redução nos custos operacionais, o projeto entregou
                resultados expressivos que impactaram diretamente na melhoria da experiência do cliente. Além disso, a
                disponibilidade do atendimento 24/7 garantiu suporte contínuo e eficiente, reforçando o compromisso com
                um atendimento excelente.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  "content-system-ops": {
    title: "Criando processos integrados, escaláveis e eficientes através de Content System Ops",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação", "guia de linguagem", "discovery", "tech writing"],
    area: "Content Ops",
    sections: [
      {
        title: "Problema",
        content: (
          <div className="space-y-6">
            <p>
              As equipes trabalhavam em um ambiente dinâmico, com múltiplos projetos simultâneos e times enxutos. A
              falta de uma cultura de documentação gerava{" "}
              <strong>retrabalho, perda de informação e baixa autonomia</strong>. Entre as principais dores
              identificadas:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Decisões importantes eram discutidas em reuniões e aplicadas diretamente no Figma, sem registro do
                racional por trás das escolhas
              </li>
              <li>
                Ausência de materiais de apoio que orientassem tarefas recorrentes (ex.: guias, padrões, processos)
              </li>
              <li>Atrasos constantes nas entregas e falhas de comunicação entre áreas</li>
              <li>Equipes tinham dificuldade para retomar projetos adiados por falta de histórico estruturado</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic">
              <strong>Públicos envolvidos:</strong> produto, design, marketing, tecnologia, growth e outros
              stakeholders.
            </blockquote>

            <div>
              <h4 className="font-semibold text-lg mb-3">Objetivos do projeto:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Fortalecer padrões, boas práticas e princípios de escrita</li>
                <li>Criar processos e ferramentas que garantissem escala, qualidade e eficiência</li>
                <li>Centralizar informações para acelerar o acesso e facilitar retomadas</li>
                <li>Construir uma cultura operacional de registro e consulta contínua</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Processo",
        content: (
          <div className="space-y-8">
            <p>
              O trabalho se desenvolveu em três grandes frentes: <strong>documentação</strong>,{" "}
              <strong>padronização</strong>, <strong>gestão e integração operacional</strong>.
            </p>

            <div>
              <h3 className="font-semibold text-xl mb-4">Documentação estruturada de conteúdo e design</h3>
              <p className="mb-4">Foram criadas planilhas colaborativas para registrar todas as entregas, contendo:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Cenário e contexto</li>
                <li>Tipo de conteúdo</li>
                <li>Título e descrição</li>
                <li>Limite de caracteres</li>
                <li>Ícones e elementos de interface</li>
                <li>Botões e destinos</li>
                <li>Testes associados</li>
                <li>Status de validação</li>
                <li>Confirmação de implementação no Figma</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                A proposta era criar uma ferramenta simples, rápida e fácil de editar, que permitisse registrar de forma
                clara as etapas, decisões, testes e históricos de cada entrega.
              </p>

              <figure className="mb-6">
                <img
                  src={opsDocAlertas}
                  alt="Exemplo de documentação dos alertas e notificações do painel"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Exemplo de documentação dos alertas e notificações do painel
                </figcaption>
              </figure>

              <figure className="mb-6">
                <img
                  src={opsDocStatus}
                  alt="Exemplo de documentação dos status da contratação de plano no painel"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Exemplo de documentação dos status da contratação de plano no painel
                </figcaption>
              </figure>

              <figure>
                <img
                  src={opsDocCopy}
                  alt="Exemplo de documentação de copy para interface de novo painel/sistema"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Exemplo de documentação de copy para interface de novo painel/sistema
                </figcaption>
              </figure>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-semibold text-xl mb-4">Criação de guias internos (Confluence)</h3>
              <p className="mb-6">
                Foram desenvolvidos materiais completos para orientar equipes e criar consistência:
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Guia para Central de Ajuda</h4>
                  <p className="text-muted-foreground mb-2">
                    Incluía: objetivos, usuários, metas, rotina, princípios, instruções e estrutura.
                  </p>
                  <p className="text-muted-foreground">Também foram criados documentos relacionados de apoio:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-2">
                    <li>Passo a passo de atualização de artigos</li>
                    <li>Guia de redesign do template</li>
                  </ul>
                  <figure className="mt-4">
                    <img
                      src={opsGuiaCentralAjuda}
                      alt="Captura de uma seção do guia"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Captura de uma seção do guia
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Guia para Pesquisas</h4>
                  <p className="text-muted-foreground">
                    Documentava objetivos, etapas, princípios e estrutura para um processo claro e replicável. Mantinha
                    flexibilidade, evitando fórmulas engessadas.
                  </p>
                  <figure className="mt-4">
                    <img
                      src={opsGuiaPesquisas}
                      alt="Captura de uma seção do guia"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Captura de uma seção do guia
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Guia com Melhores Práticas de UX Writing</h4>
                  <p className="text-muted-foreground">
                    Baseado na tradução e adaptação do{" "}
                    <a
                      href="https://www.linkedin.com/posts/bobbiewood_ux-writing-heuristic-evaluation-ugcPost-7067260983148232704-hSHg/?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      material original
                    </a>{" "}
                    de Bobbie Wood (UX Content Collective).
                  </p>
                  <figure className="mt-4">
                    <img
                      src={opsGuiaUxWriting}
                      alt="Captura de uma seção do guia"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Captura de uma seção do guia
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Guia de Growth</h4>
                  <p className="text-muted-foreground">
                    Apoiado em frameworks como Product-Led Growth e Funil Pirata. Incluía métricas, conceitos essenciais
                    e materiais de referência.
                  </p>
                  <figure className="mt-4">
                    <img
                      src={opsGuiaGrowth}
                      alt="Captura de uma seção do guia"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Captura de uma seção do guia
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-semibold text-xl mb-4">Boards visuais de estudos e referência</h3>
              <p className="text-muted-foreground mb-2">
                Criados para registrar insights de livros e cursos, facilitando consulta prática.
              </p>
              <p className="text-muted-foreground">Incluíam frameworks, resumos e mapas visuais.</p>
              <figure className="mt-4">
                <img
                  src={opsBoardMetricas}
                  alt="Captura do board visual (livro sobre métricas de UXW)"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Captura do board visual (livro sobre métricas de UXW)
                </figcaption>
              </figure>
              <figure className="mt-4">
                <img
                  src={opsBoardGeo}
                  alt="Captura do board visual (curso/artigos sobre GEO)"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Captura do board visual (curso/artigos sobre GEO)
                </figcaption>
              </figure>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-semibold text-xl mb-4">Integração operacional e gestão via roadmaps</h3>
              <p className="mb-4">
                Para facilitar visibilidade e alinhamento entre áreas, toda a operação migrou do{" "}
                <strong>Trello para o Jira</strong>. Participei da implementação de diversos roadmaps para facilitar a
                gestão dos projetos e promover mais alinhamento entre as equipes, incorporando:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Roadmap de monitoramento da Central de Ajuda (mensal, trimestral e anual)</li>
                <li>Roadmap de PR (ações mensais, status e métricas)</li>
                <li>Roadmap de Growth (KPIs baseados no Funil Pirata)</li>
                <li>
                  Quadro de pesquisas (research) em formato kanban, facilitando a priorização e o andamento das
                  iniciativas
                </li>
                <li>Cronograma de grandes entregas e organização das atividades do time</li>
              </ul>
              <figure className="mt-4">
                <img
                  src={opsRoadmapGrowth}
                  alt="Roadmap de Growth"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Roadmap de Growth
                </figcaption>
              </figure>
              <figure className="mt-4">
                <img
                  src={opsAtividadesGrowth}
                  alt="Organização das atividades do time de Growth"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Organização das atividades do time de Growth
                </figcaption>
              </figure>
              <figure className="mt-4">
                <img
                  src={opsFunilPirata}
                  alt="Diretrizes do funil pirata, com conceito, objetivo, métricas, exemplos e canais"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Diretrizes do funil pirata, com conceito, objetivo, métricas, exemplos e canais
                </figcaption>
              </figure>
            </div>
          </div>
        ),
      },
      {
        title: "Solução",
        content: (
          <div className="space-y-6">
            <p>
              A solução entregue combinou <strong>Content Ops + System Ops + Gestão de Produto</strong>, resultando em:
            </p>

            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">📌 Um ecossistema de documentação centralizado e vivo</h4>
                <p className="text-muted-foreground">
                  Incluindo planilhas, guias, boards visuais e rotinas de atualização.
                </p>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">📌 Padronização transversal entre áreas</h4>
                <p className="text-muted-foreground">
                  Com princípios, regras, estruturas e boas práticas aplicáveis em UX Writing, Help Center, Research e
                  Growth.
                </p>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">📌 Processos integrados que aumentaram a autonomia</h4>
                <p className="text-muted-foreground">
                  Roadmaps estruturados em Jira permitiram acompanhamento claro de prioridades, dependências, metas e
                  resultados.
                </p>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">📌 Escalabilidade</h4>
                <p className="text-muted-foreground">
                  A criação de modelos, guias e referências reduziu a necessidade de retrabalho e facilitou onboarding
                  de novos colaboradores.
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Resultado",
        content: (
          <div className="space-y-6">
            <p>Os impactos qualitativos e operacionais foram claros:</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">🔹 Redução de retrabalho e perda de informações</h4>
                <p className="text-muted-foreground">
                  A documentação passou a registrar todo o racional das decisões, diminuindo gargalos e dependências.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">🔹 Aumento da autonomia das equipes</h4>
                <p className="text-muted-foreground">
                  Com acesso rápido a processos, conceitos e guias, as áreas passaram a operar com mais independência.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">🔹 Entregas mais consistentes e alinhadas</h4>
                <p className="text-muted-foreground">
                  A padronização trouxe identidade e coerência entre conteúdos, telas e fluxos.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">🔹 Agilidade na retomada de projetos</h4>
                <p className="text-muted-foreground">
                  As informações deixaram de ser dispersas, permitindo continuidade mesmo após pausas longas.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">🔹 Operação mais integrada entre áreas</h4>
                <p className="text-muted-foreground">
                  A migração para Jira, os roadmaps e cronogramas trouxeram visibilidade e sinergia entre Produto,
                  Conteúdo, Growth e Design.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">🔹 Base sólida para escala</h4>
                <p className="text-muted-foreground">
                  Novos projetos passaram a nascer com estrutura e rastreabilidade.
                </p>
              </div>
            </div>

            <hr className="border-border" />

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-lg mb-4">Conclusão e próximos passos</h4>
              <p className="text-muted-foreground mb-4">
                O fortalecimento da cultura de documentação abriu caminho para uma operação mais madura e eficiente. Os
                próximos passos incluem:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Guia de linguagem e glossário</li>
                <li>Guia de acessibilidade</li>
                <li>Componentes textuais reutilizáveis</li>
                <li>Plugin de revisão textual direto no Figma</li>
                <li>Testes com variáveis de texto para maior escalabilidade</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  "aquisicao-produto": {
    title: "Ampliando a aquisição do produto",
    projectType: "Case fictício",
    skills: [
      "ux writing",
      "ux research",
      "discovery",
      "benchmarking",
      "persona",
      "teste de usabilidade",
      "arquitetura de informação",
      "copywriting",
      "conteúdos para interface",
    ],
    sections: [
      {
        title: "Problema",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              O Bate-papo UOL oferece uma versão gratuita completa - anônima, sem cadastro e com várias funcionalidades
              - o que gera baixa compreensão sobre <strong>por que alguém deveria assinar o plano VIP</strong>.
            </p>

            <p className="text-muted-foreground">
              Durante a etapa inicial, foram mapeadas as seguintes dores e hipóteses:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Usuários <strong>não compreendem os benefícios</strong> do VIP em comparação à versão gratuita
              </li>
              <li>
                Pessoas utilizam o trial gratuito e <strong>não sentem necessidade de upgrade</strong>
              </li>
              <li>
                Há <strong>medo de perder o anonimato</strong> ao assinar e fornecer dados
              </li>
              <li>
                Falta de clareza gera <strong>baixa confiança</strong> no produto
              </li>
            </ul>

            <p className="text-muted-foreground">
              Além disso, os testes demonstraram que a página atual era <strong>poluída</strong>, com excesso de
              informações e elementos pouco perceptíveis, dificultando a tomada de decisão e impactando negativamente a
              aquisição.
            </p>

            <img src={aquisicaoProblemaMapa} alt="Mapa de problemas do negócio" className="w-full rounded-lg" />

            <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
              Como melhorar a compreensão do produto e, por consequência, aumentar a aquisição através do design e da
              experiência?
            </blockquote>
          </div>
        ),
      },
      {
        title: "Processo",
        content: (
          <div className="space-y-8">
            <p className="text-muted-foreground">
              O processo envolveu múltiplas etapas de{" "}
              <strong>UX Research, benchmarking, definição de voz e testes de usabilidade</strong>.
            </p>

            <hr className="border-border" />

            <div>
              <h4 className="font-semibold text-lg mb-4">1. Definição de Voz</h4>
              <p className="text-muted-foreground mb-4">
                Uma voz <strong>leve, amigável, inclusiva, prestativa</strong> e <strong>descolada</strong>, com
                linguagem simples e próxima, reforçando a construção de relações e o clima acolhedor do produto.
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                "Nós do Bate-Papo UOL damos aquela força, o resto é com você! 😉"
              </blockquote>
            </div>

            <hr className="border-border" />

            <div>
              <h4 className="font-semibold text-lg mb-4">2. Desk Research</h4>
              <p className="text-muted-foreground mb-4">
                Mapeamento das características do produto e do comportamento de uso:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-6">
                <li>Chat mais famoso do Brasil, desde 1997</li>
                <li>+5 milhões de instalações no app</li>
                <li>App grátis para Android e iOS</li>
                <li>4 mil salas</li>
                <li>7 categorias principais</li>
                <li>50 pessoas por sala (25 gratuitas + 25 VIP)</li>
                <li>Valores e condições dos planos</li>
              </ul>

              <p className="text-muted-foreground mb-4">Principais dúvidas que surgem antes da conversão:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>O Bate-papo UOL é gratuito?</li>
                <li>Quais são os temas de salas disponíveis?</li>
                <li>Há quantos lugares disponíveis nas salas?</li>
                <li>Posso entrar em mais de uma sala ao mesmo tempo?</li>
                <li>Como encontro alguém ou uma sala específica?</li>
                <li>Posso cancelar a assinatura a qualquer momento? Como funciona?</li>
                <li>A assinatura é renovada automaticamente?</li>
                <li>Posso mudar de plano a qualquer momento?</li>
              </ul>

              <img src={aquisicaoDeskResearch} alt="Desk Research" className="w-full rounded-lg mt-6" />
            </div>

            <hr className="border-border" />

            <div>
              <h4 className="font-semibold text-lg mb-4">3. Proto-personas</h4>
              <p className="text-muted-foreground mb-6">
                Criação de dois perfis principais com necessidades, dores e desejos distintos, reforçando a variedade de
                motivações (ex.: paquera, anonimato, pouco tempo disponível).
              </p>

              <img src={aquisicaoPersonaRafael} alt="Proto-persona Rafael" className="w-full rounded-lg" />

              <img src={aquisicaoPersonaCamila} alt="Proto-persona Camila" className="w-full rounded-lg mt-4" />
            </div>

            <hr className="border-border" />

            <div>
              <h4 className="font-semibold text-lg mb-4">4. Benchmarking</h4>
              <p className="text-muted-foreground mb-6">
                Análise de comparativos de planos e concorrentes, como Terra Chat, para compreender padrões de
                apresentação e clareza na escolha de planos.
              </p>

              <img src={aquisicaoBenchmarking} alt="Benchmarking" className="w-full rounded-lg" />
            </div>

            <hr className="border-border" />

            <div>
              <h4 className="font-semibold text-lg mb-4">5. Testes de Usabilidade (remoto e moderado)</h4>
              <p className="text-muted-foreground mb-4">Roteiro explorando:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-6">
                <li>Percepção do banner</li>
                <li>Clareza dos títulos</li>
                <li>Compreensão dos planos</li>
                <li>Entendimento do fluxo de assinatura</li>
                <li>Avaliação do FAQ</li>
              </ul>

              <img src={aquisicaoTestesUsabilidade} alt="Testes de Usabilidade" className="w-full rounded-lg mb-6" />

              <p className="text-muted-foreground font-semibold mb-4">Principais achados dos testes:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-6">
                <li>
                  Página <strong>muito poluída</strong>, gerando distração
                </li>
                <li>Segundo banner quase invisível</li>
                <li>
                  Interesse por <strong>categorias profissionais</strong>
                </li>
                <li>
                  Usuários <strong>preferem experimentar antes de pagar</strong>
                </li>
                <li>
                  Leitura completa antes de decidir comprar → reforço da necessidade de clareza e hierarquia textual
                </li>
              </ul>

              <img src={aquisicaoAchadosTestes} alt="Principais achados dos testes" className="w-full rounded-lg" />
            </div>
          </div>
        ),
      },
      {
        title: "Solução",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              A proposta concentrou-se em{" "}
              <strong>reduzir a carga cognitiva e reorganizar a hierarquia de conteúdo</strong>, destacando informações
              realmente relevantes para a decisão de compra.
            </p>

            <p className="text-muted-foreground font-semibold">Direcionamentos principais:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                <strong>Diminuir quantidade de informações</strong> visíveis de primeira
              </li>
              <li>
                Destacar <strong>benefícios exclusivos do VIP</strong> (ex.: criação de salas, acesso garantido às
                lotadas)
              </li>
              <li>
                Reforçar <strong>segurança e anonimato</strong>, uma das maiores barreiras
              </li>
              <li>
                Criar uma página mais clara, com <strong>categorias e planos organizados</strong>
              </li>
              <li>Revisar títulos, CTAs, FAQ e textos de apoio para aumentar compreensão</li>
              <li>Incorporar aprendizados dos testes para priorizar clareza + simplicidade</li>
            </ul>

            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-muted-foreground mb-4">
                Framework completo no Miro, com fluxos e estruturas reorganizadas:
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://miro.com/app/live-embed/uXjVOBMI954=/?moveToViewport=-2847,-1603,5694,3206&embedId=726602774095"
                  frameBorder="0"
                  scrolling="no"
                  allow="fullscreen; clipboard-read; clipboard-write"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Resultado",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Como se trata de um <strong>case fictício</strong>, não há métricas reais registradas. Entretanto, os
              testes e análises indicaram resultados qualitativos importantes:
            </p>

            <div className="grid gap-4">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-semibold text-lg mb-2">✓ Maior clareza na compreensão dos planos</h4>
                <p className="text-muted-foreground">
                  Os testes revelaram que a reorganização do conteúdo diminui a sensação de poluição da página e
                  facilita o entendimento dos planos.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-semibold text-lg mb-2">✓ Redução de ruído cognitivo</h4>
                <p className="text-muted-foreground">
                  A nova hierarquia proposta coloca foco no essencial, aumentando a probabilidade de tomada de decisão
                  rápida.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-semibold text-lg mb-2">✓ Reforço da confiança e segurança</h4>
                <p className="text-muted-foreground">
                  Ao enfrentar diretamente a dor sobre anonimato, aumenta-se a predisposição de upgrade.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-semibold text-lg mb-2">✓ Caminho para aumento de conversão</h4>
                <p className="text-muted-foreground mb-4">
                  Com benefícios mais claros, plano mais visível e fluxo reduzido, a proposta estabelece condições para:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    <strong>Aumento da taxa de upgrade do plano gratuito → VIP</strong>
                  </li>
                  <li>
                    <strong>Redução de desistências no fluxo de assinatura</strong>
                  </li>
                  <li>
                    <strong>Melhor alinhamento entre expectativa e oferta</strong>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-border" />

            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-muted-foreground mb-4">
                Mesmo sem números reais, é possível destacar que o processo entrega as bases necessárias para incremento
                de métricas como:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  <strong>CTR em CTAs de assinatura</strong>
                </li>
                <li>
                  <strong>Conversão de trial → plano pago</strong>
                </li>
                <li>
                  <strong>Tempo de compreensão do produto</strong>
                </li>
                <li>
                  <strong>Redução de dúvidas e tickets de suporte</strong>
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  "tom-voz-nps": {
    title: "Aplicação de tom de voz e NPS para melhorar experiência e guiar decisões de produto",
    projectType: "Case fictício",
    skills: [
      "ux writing",
      "teste A/B",
      "discovery",
      "taxonomia",
      "ux research",
      "arquitetura de informação",
      "persona",
      "benchmarking",
      "guia de linguagem",
      "conteúdo para e-mail",
      "fluxo conversacional",
    ],
    
    sections: [
      {
        title: "Problema",
        content: (
          <div className="space-y-6">
            <p>
              A Sweet Cannelle é uma doceria e cafeteria fictícia especializada em bebidas à base de chá e especiarias.
              O principal diferencial é que todas as harmonizações com mix de especiarias são criadas por baristas ingleses.
            </p>

            <p>
              O problema é que o bistrô <strong>não coletava feedback após as compras</strong>.
            </p>

            <figure className="my-8">
              <img
                src={npsBrandingSweetCannelle}
                alt="Identidade visual da Sweet Cannelle"
                className="w-full rounded-lg border border-border"
              />
            </figure>

            <p>Sem uma forma estruturada de captura de NPS, havia três impactos principais:</p>

            <ul className="space-y-4 list-none">
              <li>
                <strong>Não era possível mensurar a satisfação da jornada de compra</strong>
                <p className="mt-1 text-muted-foreground">
                  dificultando decisões de melhoria.
                </p>
              </li>
              <li>
                <strong>Clientes insatisfeitos não eram identificados</strong>
                <p className="mt-1 text-muted-foreground">
                  prejudicando retenção.
                </p>
              </li>
              <li>
                <strong>Ausência de dados para otimizar o serviço</strong>
                <p className="mt-1 text-muted-foreground">
                  já que comportamentos e dores reais não eram mapeados.
                </p>
              </li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic">
              Essa hipótese guiou todo o projeto: sem coleta de NPS, não há visibilidade sobre a experiência e não é possível atuar preventivamente ou evolutivamente.
            </blockquote>
          </div>
        ),
      },
      {
        title: "Processo",
        content: (
          <div className="space-y-6">
            <p>
              O projeto seguiu a metodologia <strong>Double Diamond</strong>, passando por todas as etapas: descobrir, definir, desenvolver e entregar.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Descobrir</h4>
                <p className="mb-4">Foram realizadas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong className="text-foreground">Desk research</strong> com benchmarking de como empresas de diversos segmentos capturam e exibem pesquisas de satisfação</li>
                  <li><strong className="text-foreground">Mapeamento da jornada atual</strong>, desde a pesquisa pelo site até o pós-compra</li>
                  <li><strong className="text-foreground">Construção de proto-personas</strong>, dores, necessidades e expectativas</li>
                  <li><strong className="text-foreground">Matriz CSD</strong> para organizar certezas, suposições e dúvidas</li>
                </ul>

                <figure className="my-6">
                  <img
                    src={npsDeskResearch}
                    alt="Desk research e discovery do projeto"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">Definir</h4>
                <p className="mb-4">Com os dados levantados, foram priorizados os principais problemas decorrentes da falta de NPS.</p>
                
                <p className="mb-4">O ponto crítico definido:</p>
                
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic mb-4">
                  Não capturar NPS após a compra pode resultar em clientes insatisfeitos que não são mapeáveis.
                </blockquote>

                <p>Esse foi o foco que direcionou as ideações.</p>

                <figure className="my-6">
                  <img
                    src={npsDefinicao}
                    alt="Framework de definição do problema"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">Desenvolver</h4>
                <p className="mb-4">
                  Com base no tom de voz criado para a marca - carinhosa, empática, zelosa - foram exploradas alternativas de texto e fluxo.
                </p>

                <p className="mb-4">Uma primeira versão de mensagem foi criada para ser inserida na jornada:</p>

                <blockquote className="border-l-4 border-primary pl-4 py-4 bg-muted/30 rounded-r-lg mb-6">
                  <p className="mb-4">"Olá, [nome do cliente]! Estamos muito felizes em ter você com a gente! ❤️</p>
                  <p className="mb-4">Nós queremos que você tenha sempre a melhor experiência por aqui, por isso, é importante sabermos como foi o seu processo de compra em nossa loja.</p>
                  <p className="mb-4">De 0 a 10, o quanto você recomendaria a Sweet Cannelle para um amigo ou parente?</p>
                  <p>Por que você deu esta nota?"</p>
                </blockquote>

                <h5 className="font-semibold mb-4">Processo de construção de tom e voz:</h5>

                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-2">1. Se a empresa fosse uma pessoa, como ela seria?</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Sexo: Feminino</li>
                      <li>Idade: 40 anos</li>
                      <li>Vestimenta: Estilo elegante, com tecidos fluidos, românticos e com toque vintage</li>
                      <li>Hobbies: Viajar, experimentar coisas novas, sair com os amigos e família, gosta de dividir novas experiências com quem ama</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium mb-2">2. Quais são os valores encontrados na voz?</p>
                    <p className="text-muted-foreground mb-4 ml-4">
                      "Nós teremos sucesso quando nossos clientes saírem satisfeitos, com a experiência acima da expectativa e voltarem com frequência, ou seja, quando forem fidelizados."
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-border rounded-lg">
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="p-3 bg-muted/30">Nós nos importamos com</td>
                            <td className="p-3"><strong>Qualidade e segurança</strong></td>
                            <td className="p-3 bg-muted/30">Porque</td>
                            <td className="p-3">Queremos reconhecimento, admiração e confiança</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="p-3 bg-muted/30">Nós nos importamos com</td>
                            <td className="p-3"><strong>Exclusividade</strong></td>
                            <td className="p-3 bg-muted/30">Porque</td>
                            <td className="p-3">Nos preocupamos com autenticidade e personalidade</td>
                          </tr>
                          <tr>
                            <td className="p-3 bg-muted/30">Nós nos importamos com</td>
                            <td className="p-3"><strong>Especialização</strong></td>
                            <td className="p-3 bg-muted/30">Porque</td>
                            <td className="p-3">Queremos destacar nossa experiência e surpreender os clientes com produtos diferenciados</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-2">3. Se a empresa fosse uma pessoa servindo um cliente, seu trabalho seria…</p>
                    <p className="text-muted-foreground ml-4">
                      Tornar a experiência diferente, exclusiva e acolhedora. Servir com amor, carinho e total atenção, entendendo os desejos do cliente para sugerir o produto certo, sempre se preocupando em fazer a pessoa se sentir importante, valorizada e única, ou seja, oferecer sempre a melhor experiência possível.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium mb-2">4. E os consumidores irão descrever como (3 adjetivos principais):</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Ambiente simpático e acolhedor</li>
                      <li>Melhor chá que já tomou</li>
                      <li>Ótimos profissionais, com atendimento impecável</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium mb-2">5. E como a empresa não deve ser vista? (3 adjetivos negativos):</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>De má qualidade (tanto produto, quanto atendimento)</li>
                      <li>Comum (nada de mais)</li>
                      <li>Ambiente frio (sem acolhimento)</li>
                    </ul>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-border rounded-lg">
                      <tbody>
                        <tr>
                          <td className="p-3 bg-muted/30">Personalidade principal da empresa</td>
                          <td className="p-3"><strong>Personalidade única, inesquecível, aquela pessoa que todo mundo quer estar perto</strong></td>
                          <td className="p-3 bg-muted/30">Porque</td>
                          <td className="p-3">Porque é uma pessoa simpática, que acolhe todo mundo, cuidadosa e que sempre busca fazer o melhor pelos outros</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <p className="font-medium mb-4">6. Público-alvo:</p>
                    
                    <ul className="list-none space-y-1 text-muted-foreground ml-4 mb-4">
                      <li>a) Quem é essa persona? Como é a personalidade dela?</li>
                      <li>b) Quais são suas/seus principais comportamentos?</li>
                      <li>c) Quais são suas principais informações sociodemográficas (sexo, idade, profissão, escolaridade etc.)?</li>
                      <li>d) Quais são suas necessidades e objetivos?</li>
                    </ul>
                    
                    <div className="space-y-4 ml-4">
                      <div className="p-4 bg-muted/20 rounded-lg">
                        <p className="font-medium mb-2">Persona 1: Joana</p>
                        <p className="text-muted-foreground text-sm">
                          Mulher, branca, 43 anos, sempre elegante, é super romântica, gosta de viajar e frequentar lugares que propiciem ótimos encontros com as amigas e família. Joana é gerente e sócia de um SPA de alto padrão que alia cuidados com o corpo e a mente. Costuma fazer parcerias com empresas que de bem-estar e beleza para divulgar o seu negócio e o do parceiro. É casada, tem dois filhos e uma pessoa muito querida por todos. Seu objetivo é continuar cuidando do SPA de perto sempre que possível e ver seu negócio crescer, mas sem deixar de cuidar de si e da família.
                        </p>
                      </div>

                      <div className="p-4 bg-muted/20 rounded-lg">
                        <p className="font-medium mb-2">Persona 2: Helen</p>
                        <p className="text-muted-foreground text-sm">
                          Mulher, negra, 38 anos, está sempre impecável, maquiada e com roupa elegante. Gosta de conhecer lugares novos e, sempre que pode, está em teatros, restaurantes, shows e outras atividades com os amigos. É advogada e tem seu próprio escritório. Divorciada e sem filhos, está sempre rodeada das melhores amigas e adora sair com elas para comer e conversar sobre as novidades.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-4">7. Tabela de voz:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-border rounded-lg">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="p-3 text-left font-semibold">Princípios</th>
                            <th className="p-3 text-left font-semibold">Carinhosa</th>
                            <th className="p-3 text-left font-semibold">Empática</th>
                            <th className="p-3 text-left font-semibold">Zelosa</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-border">
                            <td className="p-3 bg-muted/30 font-medium">Conceito</td>
                            <td className="p-3">Nos preocupamos com o bem-estar dos nossos clientes e tratamos todos com muito carinho e respeito</td>
                            <td className="p-3">Somos empáticos em nossa comunicação e sempre nos colocamos no lugar do cliente ao atendê-lo</td>
                            <td className="p-3">Somos muito cuidadosos com os nossos clientes e também com nossos funcionários, nosso processo de trabalho e com a qualidade dos nossos produtos, fornecedores e parceiros</td>
                          </tr>
                          <tr className="border-t border-border">
                            <td className="p-3 bg-muted/30 font-medium">Vocabulário</td>
                            <td className="p-3">Nos comunicamos de forma leve e tranquila</td>
                            <td className="p-3">Mais ouvimos do que falamos, assim conseguimos entender a necessidade dos clientes e entregar a melhor experiência, utilizando de palavras leves e amorosas</td>
                            <td className="p-3">Tomamos cuidado com as palavras e sempre tratamos as pessoas envolvidas com muito respeito, evitando palavras de mau gosto</td>
                          </tr>
                          <tr className="border-t border-border">
                            <td className="p-3 bg-muted/30 font-medium">Verbosidade</td>
                            <td className="p-3">Utilizamos "você" para conversar com nossos clientes de forma pessoal</td>
                            <td className="p-3">Utilizamos "você" para conversar com nossos clientes de forma pessoal</td>
                            <td className="p-3">Utilizamos "você" para conversar com nossos clientes, fornecedores e parceiros de forma pessoal</td>
                          </tr>
                          <tr className="border-t border-border">
                            <td className="p-3 bg-muted/30 font-medium">Gramática</td>
                            <td className="p-3">Utilizamos voz ativa, o plural engloba todos os gêneros</td>
                            <td className="p-3">Utilizamos voz ativa, o plural engloba todos os gêneros</td>
                            <td className="p-3">Utilizamos voz ativa, o plural engloba todos os gêneros</td>
                          </tr>
                          <tr className="border-t border-border">
                            <td className="p-3 bg-muted/30 font-medium">Pontuação</td>
                            <td className="p-3">Utilizamos a forma correta de pontuação, com o uso adequado de ponto final, vírgula, interrogação e exclamação. Também usamos emojis de forma moderada</td>
                            <td className="p-3">Utilizamos a forma correta de pontuação, com o uso adequado de ponto final, vírgula, interrogação e exclamação. Também usamos emojis de forma moderada</td>
                            <td className="p-3">Utilizamos a forma correta de pontuação, com o uso adequado de ponto final, vírgula, interrogação e exclamação. Também usamos emojis de forma moderada</td>
                          </tr>
                          <tr className="border-t border-border">
                            <td className="p-3 bg-muted/30 font-medium">Capitalização</td>
                            <td className="p-3">Usamos caixa baixa, iniciando a primeira palavra com letra maiúscula</td>
                            <td className="p-3">Usamos caixa baixa, iniciando a primeira palavra com letra maiúscula</td>
                            <td className="p-3">Usamos caixa baixa, iniciando a primeira palavra com letra maiúscula</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="/docs/tom-voz-sweet-cannelle.pdf"
                      download="Tom e Voz - Sweet Cannelle.pdf"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      Baixar documento completo de Tom e Voz (PDF)
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">Entregar</h4>
                <p className="mb-4">Na última fase, foram desenvolvidas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                  <li><strong className="text-foreground">Prova de conceito da interface</strong> com a mensagem de NPS</li>
                  <li><strong className="text-foreground">Nova jornada do usuário</strong>, agora incluindo a etapa de pesquisa após a compra</li>
                </ul>

                <p className="mb-4">
                  As telas apresentam a escala de 0 a 10, campo de justificativa e categorização de avaliação (valor dos produtos, atendimento, experiência etc.)
                </p>

                <p>
                  Também foi criado o fluxo atualizado, inserindo a etapa do NPS entre <em>confirmação de compra</em> e <em>recebimento do pedido</em>.
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Solução",
        content: (
          <div className="space-y-6">
            <p>
              A solução final foi a <strong>implantação da pesquisa de NPS na jornada pós-compra</strong>, com:
            </p>

            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Mensagem escrita conforme o tom de voz da marca</strong>, incentivando feedback de forma amigável</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Interface clara e organizada</strong>, com escala de 0 a 10 e campo para comentários</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Categorização de motivos de avaliação</strong> (atendimento, entrega, navegação etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Atualização da jornada</strong>, incorporando a coleta após cada compra</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Definição de momento ideal de envio</strong>: logo após o e-mail de confirmação de pedido</span>
              </li>
            </ul>

            <p>
              A solução também serviu como base para iniciativas futuras, incluindo testes A/B de fluxos conversacionais.
            </p>
          </div>
        ),
      },
      {
        title: "Resultado",
        content: (
          <div className="space-y-6">
            <p>Ao final do projeto, a Sweet Cannelle passou a ter:</p>

            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Manual estruturado de tom de voz</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Fluxo de coleta estruturado</strong> para medir satisfação da jornada</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Ponto adicional de contato com clientes</strong>, fortalecendo relacionamento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Base sólida de dados</strong> para tomada de decisão sobre melhorias</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Prova de conceito testável</strong>, permitindo validação rápida da solução</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Nova jornada mapeada</strong>, mais completa e orientada a feedback</span>
              </li>
            </ul>

            <p>
              Além disso, o material produzido serviu de referência para outros exercícios como o <strong>teste A/B de fluxos conversacionais</strong>, conectando UX Writing, arquitetura da informação e design conversacional.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic">
              Qual fluxo conversacional fará com que as pessoas usuárias mais visualizem as promoções sazonais?
            </blockquote>

            {/* Placeholder para imagem: ONG Kurumins + Sweet Cannelle - Frame 6 (1).jpg */}
            <div className="my-6 p-8 bg-muted/30 border border-dashed border-border rounded-lg text-center">
              <p className="text-muted-foreground italic">📷 Imagem pendente: Teste A/B de fluxos conversacionais</p>
            </div>

            <div className="space-y-4">
              <p className="font-medium">Navegue pelo framework do Miro:</p>
              <div className="w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://miro.com/app/live-embed/uXjVOB1tmr4=/?embedMode=view_only_without_ui&moveToViewport=-86214%2C-2364%2C39299%2C17337&embedId=422592594041"
                  className="w-full h-[500px]"
                  title="Frameworks no Miro"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://miro.com/app/board/uXjVOB1tmr4=/?share_link_id=909860330171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Abrir Frameworks no Miro em nova aba
                </a>
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  // Placeholder for other cases - will be filled when content is provided
  "melhorando-navegacao-painel": {
    title: "Melhorando a navegação no painel e reduzindo tickets",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação"],
    area: "Painel",
    sections: [],
  },
  "landing-page-lovable": {
    title: "Criando uma landing page de captação com a Lovable",
    projectType: "Case real",
    skills: ["ux writing", "copywriting"],
    area: "Landing page",
    sections: [],
  },
  "redesign-revista-digital": {
    title: "Elevando a experiência da revista digital com um processo de redesign",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação"],
    area: "Revista digital",
    sections: [],
  },
  "parceiros-100m": {
    title: "Conquistando mais de 1k parceiros e transacionando mais de R$ 100M em projeto",
    projectType: "Case real",
    skills: ["ux writing", "discovery"],
    area: "Parcerias",
    sections: [],
  },
  "redesign-central-ajuda": {
    title: "Como redesenhamos a central de ajuda para aumentar autonomia e reduzir tickets",
    projectType: "Case real",
    skills: ["ux writing", "arquitetura de informação"],
    area: "Central de ajuda",
    sections: [],
  },
  "proposta-valor-app": {
    title: "Aumentando a proposta de valor do aplicativo",
    projectType: "Case real",
    skills: ["ux writing", "discovery"],
    area: "App",
    sections: [],
  },
  "ong-voluntarios": {
    title: "Como utilizamos UX para aumentar adesão e retenção de voluntários em ONG",
    projectType: "Case voluntário",
    skills: [
      "ux research",
      "testes de usabilidade",
      "discovery",
      "ux writing",
      "persona",
      "guia de linguagem",
      "conteúdos para interface",
      "fluxo de cadastro",
      "onboarding",
      "content ops",
    ],
    area: "ONG",
    sections: [
      {
        title: "Problema",
        content: (
          <div className="space-y-6">
            <p>
              Durante e após a pandemia, as ONGs enfrentaram quedas significativas no número de voluntários e
              apoiadores. De acordo com a{" "}
              <a
                href="https://www1.folha.uol.com.br/empreendedorsocial/2020/12/metade-das-organizacoes-sociais-brasileiras-afirma-ter-dificuldades-para-se-manter-apos-a-pandemia.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                pesquisa
              </a>{" "}
              feita pelo Datafolha em parceria com a Ambev,{" "}
              <strong>
                41% das instituições relatam falta de apoiadores financeiros, 13% falta de materiais/equipamentos e 11%
                falta de voluntários
              </strong>
              .
            </p>

            <div className="my-6">
              <img
                src={ongDatafolha}
                alt="Pesquisa Datafolha sobre dificuldades das ONGs"
                className="w-full rounded-lg border border-border/30"
              />
            </div>

            <p>
              A ONG escolhida pelo grupo,{" "}
              <a
                href="https://kurumins.portfoliobox.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                <strong>Projeto Kurumins</strong>
              </a>
              , dependia da atuação de voluntários, mas enfrentava:
            </p>

            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Falta de organização interna e gestão de tarefas</li>
              <li>Dificuldade de comunicação entre voluntários e equipe</li>
              <li>Baixa retenção devido a falta de clareza nas responsabilidades</li>
              <li>Ausência de uma ferramenta estruturada para coordenar atividades</li>
            </ul>

            <p>
              O desafio proposto pelo programa{" "}
              <a
                href="https://www.linkedin.com/company/jovensuxui/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                <strong>Jovens UX&UI</strong>
              </a>{" "}
              e{" "}
              <a
                href="https://www.linkedin.com/company/vagasux/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                <strong>VagasUX</strong>
              </a>{" "}
              foi:
            </p>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic">
              Criar uma solução de UX capaz de melhorar a gestão interna da ONG Kurumins e aumentar a oferta e retenção
              de voluntários.
            </blockquote>

            <div className="my-6">
              <img
                src={ongThumbKurumins}
                alt="Projeto Kurumins"
                className="w-full rounded-lg border border-border/30"
              />
            </div>

            <p>
              Para saber mais sobre o projeto, acesse{" "}
              <a
                href="https://medium.com/vagas-ux/como-foi-organizar-um-desafio-volunt%C3%A1rio-entre-designers-e-ongs-8c87f07f7740"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Como foi organizar um desafio voluntário entre designers e ONGs
              </a>{" "}
              <em>(Por Marianna Piacesi)</em>
            </p>
          </div>
        ),
      },
      {
        title: "Processo",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">1. Organização do desafio</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  <strong>589 voluntários inscritos</strong>
                </li>
                <li>
                  <strong>97 grupos</strong> (≈6 pessoas cada)
                </li>
                <li>
                  <strong>11 mentores voluntários</strong>
                </li>
                <li>
                  5 meses de trabalho com checkpoints e Demo Day para os organizadores do desafio, mentores voluntários
                  e representantes da ONG
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">2. Discovery e Desk Research</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Análise profunda da ONG: atividades, cronograma, perfis dos voluntários e famílias atendidas</li>
                <li>
                  Construção da <strong>Matriz CSD</strong> para organizar certezas, suposições e dúvidas
                </li>
                <li>
                  Criação de <strong>proto-personas</strong> (perfis de voluntários presenciais e remotos)
                </li>
              </ul>

              <div className="mt-6 space-y-4">
                <img
                  src={ongMiro1}
                  alt="Fluxograma no Miro - Sobre o projeto, objetivos, desafios e atividades"
                  className="w-full rounded-lg border border-border/30"
                />
                <img
                  src={ongMiro2}
                  alt="Fluxograma no Miro - Canvas de modelo de negócios"
                  className="w-full rounded-lg border border-border/30"
                />
                <div>
                  <img
                    src={ongMiro3}
                    alt="Fluxograma no Miro - Matriz CSD"
                    className="w-full rounded-lg border border-border/30"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center italic">Fluxogramas no Miro</p>
                </div>
                <div>
                  <img
                    src={ongProtoPersonas}
                    alt="Proto-personas"
                    className="w-full rounded-lg border border-border/30"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center italic">Proto-personas</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">3. Pesquisa</h3>
              <p className="mb-4">
                <strong>O que precisamos descobrir:</strong>
              </p>

              <div className="my-6">
                <img
                  src={ongPesquisaDescobrir}
                  alt="O que precisamos descobrir na pesquisa"
                  className="w-full rounded-lg border border-border/30"
                />
              </div>
              <h4 className="font-medium mb-2">Quantitativa - 196 respostas</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>
                  <strong>61,2%</strong> já foram voluntários
                </li>
                <li>
                  <strong>21,9%</strong> nunca fizeram trabalho voluntário
                </li>
                <li>
                  <strong>16,8%</strong> são voluntários atualmente
                </li>
              </ul>

              <p className="mb-2">
                <strong>Principais descobertas:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>
                  Quem desistiu: <strong>41,8% por falta de tempo</strong>,{" "}
                  <strong>13,7% por falta de motivação</strong>
                </li>
                <li>
                  Quem nunca fez: <strong>55,8% não sabem por onde começar</strong>,{" "}
                  <strong>39,5% ajudam de outras formas</strong>
                </li>
                <li>
                  Quem permanece: <strong>90,2% pela satisfação de fazer o bem</strong>
                </li>
              </ul>

              <div className="my-6">
                <img
                  src={ongRespostasDesistiu}
                  alt="Respostas de quem desistiu do voluntariado"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Respostas de quem desistiu do voluntariado
                </p>
              </div>

              <div className="my-6">
                <img
                  src={ongRespostasNuncaFez}
                  alt="Respostas de quem nunca fez voluntariado"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Respostas de quem nunca fez voluntariado
                </p>
              </div>

              <div className="my-6">
                <img
                  src={ongRespostasContinua}
                  alt="Respostas de quem continua no voluntariado"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Respostas de quem continua no voluntariado
                </p>
              </div>
              <h4 className="font-medium mb-2">Qualitativa - 8 entrevistas</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Extração de padrões, dores e expectativas</li>
                <li>
                  Formação de <strong>parede de insights</strong>
                </li>
              </ul>

              <p className="mt-4 text-muted-foreground">
                Agrupamos todas as ideias e focamos em propor soluções para as problemáticas que envolvem a{" "}
                <strong>gestão de tarefas</strong> do projeto Kurumins e também das pessoas voluntárias.
              </p>
              <p className="text-muted-foreground">
                Com os resultados adquiridos na etapa de pesquisa, atualizamos nossa Matriz CSD e partimos para o
                desenvolvimento das nossas personas.
              </p>

              <div className="my-6">
                <img
                  src={ongParedeInsights}
                  alt="Parede de insights no Miro"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">Parede de insights no Miro</p>
              </div>

              <div className="my-6">
                <img
                  src={ongInsightsCategoria}
                  alt="Insights por categoria"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">Insights por categoria</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">4. Construção de Personas</h3>
              <p className="mb-2">Perfis criados:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Nunca fez voluntariado</li>
                <li>Já fez</li>
                <li>Faz atualmente</li>
              </ul>

              <div className="my-6">
                <img
                  src={ongPersonaNuncaFez}
                  alt="Persona que nunca fez voluntariado"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Persona que nunca fez voluntariado
                </p>
              </div>

              <div className="my-6">
                <img
                  src={ongPersonaJaFez}
                  alt="Persona que já fez voluntariado"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">Persona que já fez voluntariado</p>
              </div>

              <div className="my-6">
                <img
                  src={ongPersonaVoluntaria}
                  alt="Persona que ainda é voluntária"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">Persona que ainda é voluntária</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">5. Jornada do Usuário</h3>
              <p className="text-muted-foreground">
                Identificação de pontos de fricção e oportunidades de experiência.
              </p>

              <div className="my-6">
                <img
                  src={ongJornadaVoluntarios}
                  alt="Fluxo da jornada dos voluntários"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Fluxo da jornada dos voluntários
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">6. Ideação</h3>
              <p className="text-muted-foreground mb-4">
                De acordo com os estudos inicias e resultados das pesquisas com voluntários, pensamos em criar um{" "}
                <strong>aplicativo</strong> para funcionar como uma ferramenta digital de gestão por parte dos
                voluntários e representantes do projeto Kurumins.
              </p>
              <p className="text-muted-foreground mb-4">
                Idealizado para ser desenvolvido em um formato leve e ocupar pouco espaço de armazenamento, a ideia é
                funcionar no modo off-line, sendo facilmente utilizado na sede da ONG.
              </p>
              <p className="text-muted-foreground">
                Para começar a nossa solução usamos o método <strong>Crazy Eight</strong> e partimos para a construção
                de{" "}
                <a
                  href="https://www.figma.com/proto/wCxYnTgIvXzIY7IXnGxx2a/App-Kurumins?page-id=908%3A8998&node-id=908%3A8999&viewport=494%2C369%2C0.18&scaling=scale-down&starting-point-node-id=908%3A8999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  wireframes em média fidelidade
                </a>{" "}
                para iniciar os testes de usabilidade.
              </p>

              <div className="my-6">
                <img
                  src={ongWireframesFigma}
                  alt="Wireframes em média fidelidade no Figma"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Wireframes em média fidelidade no Figma
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">7. Guias de estilo e linguagem</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  Ajustes do guia de estilo e biblioteca de componentes já existentes, utilizando ilustrações para
                  evidenciar o aspecto lúdico e educativo da ONG
                </li>
                <li>
                  Criação do <strong>guia de linguagem</strong> para padronização de tom, emojis e boas práticas
                </li>
                <li>
                  Aplicação dos padrões nos{" "}
                  <a
                    href="https://www.figma.com/proto/wCxYnTgIvXzIY7IXnGxx2a/App-Kurumins?node-id=322%3A2196&scaling=scale-down&page-id=209%3A538&starting-point-node-id=322%3A2196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    wireframes de alta fidelidade
                  </a>
                </li>
              </ul>

              <div className="my-6">
                <img src={ongStyleGuide} alt="Style Guide" className="w-full rounded-lg border border-border/30" />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">Style Guide</p>
              </div>

              <div className="my-6">
                <img
                  src={ongGuiaLinguagem}
                  alt="Guia de Linguagem / Pocket de boas práticas"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Guia de Linguagem / Pocket de boas práticas
                </p>
              </div>

              <div className="my-6">
                <img
                  src={ongWireframesAlta}
                  alt="Wireframes em alta fidelidade no Figma"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Wireframes em alta fidelidade no Figma
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">8. Testes de usabilidade</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  <strong>10 testes moderados</strong> (5 no wireframe de média fidelidade e 5 no de alta fidelidade)
                </li>
                <li>Validação e ajustes baseados em problemas de conteúdo e caminhos de ação</li>
              </ul>

              <div className="my-6">
                <img
                  src={ongTestesUsabilidade}
                  alt="Testes realizados com o protótipo em alta fidelidade"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Testes realizados com o protótipo em alta fidelidade
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">9. Feedback do Demo Day</h3>
              <p className="mb-2">Principais pontos levantados para evolução do nosso projeto:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>App considerado robusto demais</li>
                <li>Muitas dores atacadas ao mesmo tempo</li>
                <li>Baixa viabilidade financeira para a ONG</li>
                <li>UX precisava ser mais enxuto</li>
              </ul>

              <div className="my-6">
                <img
                  src={ongDemoDay}
                  alt="Apresentação do trabalho no Demo Day"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  Apresentação do trabalho para os representantes do projeto voluntário, mentores do grupo (
                  <a
                    href="https://www.linkedin.com/in/paulavolker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Paula Völker
                  </a>{" "}
                  e{" "}
                  <a
                    href="https://www.linkedin.com/in/julia-nascimentto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Julia Nascimento
                  </a>
                  ) e representantes da ONG.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">10. Iteração e refinamento</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Priorização de features visando simplicidade e valor real</li>
                <li>
                  Criar uma versão executável e escalável, com condições de ser sustentada a longo prazo tanto pela ONG
                  quanto pelos voluntários
                </li>
                <li>
                  Migração de app para um <strong>website responsivo</strong>, simples e que atendesse às principais
                  necessidades
                </li>
                <li>
                  <strong>6 novos testes</strong> (3 no{" "}
                  <a
                    href="https://www.figma.com/proto/b98QC5tdrqYzG0sRrHCzoD/Site%2FLP-kurumins?page-id=8%3A2&node-id=104%3A1366&viewport=563%2C658%2C0.13&scaling=scale-down&starting-point-node-id=104%3A1366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    protótipo mobile
                  </a>{" "}
                  + 3 no{" "}
                  <a
                    href="https://www.figma.com/proto/b98QC5tdrqYzG0sRrHCzoD/Site%2FLP-kurumins?page-id=116%3A1611&node-id=133%3A2010&viewport=348%2C201%2C0.06&scaling=scale-down&starting-point-node-id=133%3A2010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    protótipo desktop
                  </a>
                  )
                </li>
                <li>Ajustes de conteúdo, layout e usabilidade</li>
              </ul>

              <div className="my-6">
                <img
                  src={ongFluxoSite}
                  alt="Fluxo de telas do site"
                  className="w-full rounded-lg border border-border/30"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center italic">Fluxo de telas do site</p>
              </div>

              <p className="text-muted-foreground mb-4">Navegue pelo framework do Miro 👇</p>
              <div className="w-full aspect-video rounded-lg overflow-hidden border border-border/30">
                <iframe
                  src="https://miro.com/app/embed/uXjVMh9aCwU=/?pres=1&frameId=0&embedId=291828313839"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="fullscreen; clipboard-read; clipboard-write"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Solução",
        content: (
          <div className="space-y-6">
            <p>
              <strong>Transformar um aplicativo robusto em um website simples, leve e viável</strong>, focado nas
              funcionalidades que realmente resolvem:
            </p>

            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Gestão de tarefas da ONG e voluntários</li>
              <li>Comunicação clara</li>
              <li>Acesso rápido a atividades, calendário e oportunidades de participação</li>
              <li>Linguagem inclusiva e alinhada ao tom da ONG</li>
              <li>Uso offline quando necessário</li>
              <li>Interface leve e educativa (ilustrações, componentes revisados)</li>
            </ul>

            <p>A solução final engloba:</p>

            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span>
                <span>Website com foco nas prioridades do usuário</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span>
                <span>Fluxo claro para "Seja voluntário"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span>
                <span>Calendário e organização de tarefas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span>
                <span>Conteúdo objetivo e linguagem acessível</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✔</span>
                <span>Protótipos desktop e mobile</span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Resultado",
        content: (
          <div className="space-y-8">
            <p>Embora o grupo não tenha vencido o desafio, os resultados do projeto foram altamente positivos:</p>

            <div>
              <h3 className="font-semibold text-lg mb-3">Impactos diretos do processo de UX</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  Pesquisa robusta com <strong>196 pessoas</strong>
                </li>
                <li>
                  Entrevistas qualitativas com <strong>8 usuários</strong>
                </li>
                <li>
                  <strong>10 testes de usabilidade</strong> (5 do app + 5 após ajustes)
                </li>
                <li>
                  Criação de <strong>personas</strong>, <strong>jornada</strong>, <strong>CSD</strong>,{" "}
                  <strong>wireframes</strong>, <strong>guia de estilo</strong> e <strong>guia de linguagem</strong>
                </li>
                <li>Reestruturação completa da solução após feedback, demonstrando maturidade de produto</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Impactos reconhecidos pelo time do desafio</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Fortes elogios ao UI e à organização do projeto</li>
                <li>Destino final: solução viável, sustentável e aderente à realidade da ONG</li>
                <li>
                  Ganhei uma{" "}
                  <strong>
                    bolsa na{" "}
                    <a
                      href="https://www.alura.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Alura
                    </a>
                  </strong>{" "}
                  na Formação{" "}
                  <a
                    href="https://cursos.alura.com.br/degree/certificate/14a1142d-0bdf-472c-94d2-8563765314f9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Desenvolvimento de Carreira em UX
                  </a>{" "}
                  <strong>com 5 cursos na área</strong> — o mesmo incentivo oferecido aos grupos vencedores. Recebi
                  menção honrosa <strong>por destaque de participação e engajamento ao longo do desafio</strong>. 🎉
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground">
              Como representante do grupo, tive um papel essencial na organização da equipe, no alinhamento dos
              processos e na comunicação direta com as mentoras, o que contribuiu para o reconhecimento adicional.
            </p>

            <div>
              <h3 className="font-semibold text-lg mb-3">Valor entregue à ONG Kurumins</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Uma solução possível de ser implementada</li>
                <li>Redução da complexidade inicialmente proposta</li>
                <li>Maior clareza na comunicação com voluntários</li>
                <li>Ferramenta estruturada para organização interna</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Próximos Passos</h3>
              <p className="text-muted-foreground">
                Temos plena consciência de que o produto precisa estar em constante aprimoramento para oferecer uma
                experiência cada vez melhor aos seus usuários e alcançar ainda mais voluntários e doadores.
              </p>
              <p className="text-muted-foreground mt-4">
                Como próximos passos, gostaríamos de implementar um sistema interno a ser usado pelos voluntários onde
                reuniria os grupos de WhatsApp, atualizações das informações e conteúdos de interesse do voluntário,
                além de uma newsletter para acompanhamento de todos os eventos e novidades.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
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
                {caseData.area && (
                  <Badge variant="outline" className="bg-accent/20 text-accent-foreground border-accent/30">
                    {caseData.area}
                  </Badge>
                )}
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
                  <div className="mt-12 p-8 bg-card rounded-xl border border-border">{caseData.closing}</div>
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground">Conteúdo completo em breve.</p>
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
              <a href="https://www.linkedin.com/in/ligia-correa-ux-writer/" target="_blank" rel="noopener noreferrer">
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
