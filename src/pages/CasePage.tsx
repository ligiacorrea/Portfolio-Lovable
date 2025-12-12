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
    projectType: "Case real",
    skills: ["ux writing", "ux research", "discovery", "benchmarking"],
    area: "Aquisição",
    sections: [
      {
        title: "Visão geral",
        content: (
          <p>
            Projeto focado em aumentar a aquisição de novos usuários através da otimização da comunicação e experiência
            de cadastro.
          </p>
        ),
      },
      {
        title: "O desafio",
        content: (
          <p>
            A taxa de conversão de visitantes para cadastros estava abaixo do potencial. O fluxo de onboarding tinha
            pontos de fricção e a proposta de valor não estava clara.
          </p>
        ),
      },
      {
        title: "A solução",
        content: (
          <p>
            Realizamos pesquisa com usuários, benchmarking de concorrentes, reestruturamos a landing page, simplificamos
            o fluxo de cadastro e melhoramos o microcopy em todos os pontos de contato.
          </p>
        ),
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
        ),
      },
    ],
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
          <p>
            Projeto de evolução contínua da experiência do usuário baseado em feedback NPS e aplicação consistente do
            tom de voz da marca.
          </p>
        ),
      },
      {
        title: "O desafio",
        content: (
          <p>
            O NPS indicava pontos de insatisfação relacionados à comunicação do produto. Não havia um processo
            estruturado para transformar feedback em melhorias de conteúdo.
          </p>
        ),
      },
      {
        title: "A solução",
        content: (
          <p>
            Implementamos análise sistemática dos feedbacks NPS, categorizamos os problemas de comunicação, criamos e
            aplicamos o guia de tom de voz, e realizamos testes A/B para validar melhorias.
          </p>
        ),
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
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">4. Construção de Personas</h3>
              <p className="mb-2">Perfis criados:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Nunca fez voluntariado</li>
                <li>Já fez</li>
                <li>Faz atualmente</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">5. Jornada do Usuário</h3>
              <p className="text-muted-foreground">
                Identificação de pontos de fricção e oportunidades de experiência.
              </p>
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
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">8. Testes de usabilidade</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  <strong>10 testes moderados</strong> (5 no wireframe de média fidelidade e 5 no de alta fidelidade)
                </li>
                <li>Validação e ajustes baseados em problemas de conteúdo e caminhos de ação</li>
              </ul>
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

              <p className="text-muted-foreground mb-4">Navegue pelo framework do Miro 👇</p>
              <p>
                <a
                  href="https://miro.com/app/board/uXjVMh9aCwU=/?share_link_id=291828313839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Frameworks no Miro
                </a>
              </p>
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
