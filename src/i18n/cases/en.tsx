import { CasesDataRecord } from "./types";
import * as img from "./images";

export const casesDataEn: CasesDataRecord = {
  "faq-5m-organicos": {
    title: "How I transacted over R$ 5M in the help center organically",
    projectType: "Real Case",
    skills: [
      "ux writing",
      "information architecture",
      "usability testing",
      "SEO",
      "GEO",
      "interface content",
      "tech writing",
    ],
    area: "FAQ",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              The{" "}
              <a
                href="https://suporte.icasei.com.br/hc/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                help center
              </a>{" "}
              at iCasei already functioned as a relevant support channel, with articles, tutorials, videos and visual
              resources, and was gaining increasing visibility thanks to SEO and continuous maintenance. However, there
              were <strong>two major gaps</strong>:
            </p>

            <ul className="space-y-4 list-none">
              <li>
                <strong>Lack of data-driven culture</strong>
                <p className="mt-1 text-muted-foreground">
                  Until 2022, iCasei didn't have deep conversion or behavior analysis. The help center wasn't measured
                  as a strategic acquisition or revenue channel.
                </p>
              </li>
              <li>
                <strong>Unexplored opportunity</strong>
                <p className="mt-1 text-muted-foreground">
                  Despite receiving qualified and growing traffic, the FAQ was not yet thought of as a{" "}
                  <strong>conversion engine</strong>.
                </p>
              </li>
            </ul>

            <figure className="my-8">
              <img
                src={img.faqCentralAjudaHome}
                alt="Screenshot of the help center homepage"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Screenshot of the help center homepage
              </figcaption>
            </figure>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic">
              Why not leverage a strong organic channel to convert users into registrations, plan purchases and gift
              list transactions?
            </blockquote>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-6">
            <p>
              With the implementation of <strong>Metabase</strong>, a more precise analysis of traffic sources began
              (Google Search, social networks, digital magazine). I then requested the creation of an exclusive
              dashboard for the FAQ, allowing us to identify its real conversion potential.
            </p>

            <p>
              From there, we started <strong>a continuous optimization cycle</strong>, including:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">1. Instrumentation and monitoring</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Hyperlink parameterization for click and route reading.</li>
                  <li>
                    Implementation of tracking tags in Google Analytics via GTM, allowing conversion measurement
                    (clicks → effective registrations).
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">2. Content and navigation strategies</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    Inclusion of <strong>strategic hyperlinks</strong> in high-volume articles.
                  </li>
                  <li>Continuous content updates for more clarity and relevance.</li>
                  <li>
                    Inclusion of <strong>videos</strong> as visual reinforcement.
                  </li>
                  <li>Tags and keywords to improve categorization and suggest new content.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">3. SEO and information architecture</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Recurring SEO maintenance and indexing adjustments.</li>
                  <li>Complete help center redesign, improving structure and usability.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">4. Conversion within the FAQ</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    <strong>Dynamic banners</strong> in footer and sidebar for specific campaigns.
                  </li>
                  <li>
                    Replacement of "Contact Us" with "Help Center" in the main site menu, directing qualified traffic
                    to the channel and reducing ticket openings.
                  </li>
                  <li>Satisfaction survey at the end of articles to continuously improve quality.</li>
                </ul>
              </div>
            </div>

            <p>
              These actions transformed the FAQ into a channel not only for support, but for{" "}
              <strong>recurring access, reliable content and active conversion</strong>.
            </p>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              The solution was to structure the help center as an <strong>acquisition and revenue channel</strong>,
              without losing focus on user experience.
            </p>

            <p>This involved:</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  1. Consolidation of the FAQ as the main destination for guidance search
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    Functional redesign, improving information architecture and aligning with user and business needs.
                  </li>
                  <li>Topic grouping and refined navigation.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">2. Adoption of native conversion elements</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Highly visible and contextual banners.</li>
                  <li>Hyperlinks leading to strategic pages.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">3. Integration with data analysis</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Conversion dashboard.</li>
                  <li>
                    Implementation of tracking tags in Google Analytics via Google Tag Manager, enabling conversion
                    rate measurement from the clicks x effective registrations ratio.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">4. Continuous improvement of article quality</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Review guided by satisfaction metrics.</li>
                  <li>Recurring SEO maintenance to ensure indexing and expand reach.</li>
                  <li>Inclusion of practical videos as visual complement to text.</li>
                  <li>Tags with keywords to categorize topics and suggest complementary content.</li>
                </ul>
              </div>
            </div>

            <figure className="my-8">
              <img
                src={img.faqBannerLateral}
                alt="Screenshot with example of sidebar banner and hyperlinks in the help center"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Screenshot with example of sidebar banner and hyperlinks in the help center
              </figcaption>
            </figure>

            <figure className="my-8">
              <img
                src={img.faqBannerRodape}
                alt="Screenshot with example of footer banner, tags and search in the help center"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Screenshot with example of footer banner, tags and search in the help center
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-8">
            <p>
              In just over two years, the help center became one of iCasei's largest organic conversion engines, with{" "}
              <strong>exponential growth in revenue, registrations and engagement</strong>.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">🚀 R$ 6 million</div>
              <p className="text-muted-foreground">
                transacted solely through the help center, in gift list transactions, without paid media.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">📈 Expressive growth (2023 → 2024)</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+500%</span>
                  <span className="text-muted-foreground">in gift list transaction value</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+492%</span>
                  <span className="text-muted-foreground">in new registrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+641%</span>
                  <span className="text-muted-foreground">in printed card sales (complementary product)</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/20 p-6 rounded-xl border border-accent/30">
              <h4 className="font-semibold text-lg mb-2">🎯 Banners as protagonists</h4>
              <p className="text-muted-foreground">
                Over <strong>60% of conversions</strong> came from banners introduced after the redesign (Dec/2023).
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">👥 Audience growth</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>2024: ~45k active users in the semester</li>
                <li>
                  2025: <strong>+80k users</strong> (average of 15k/month) — Almost <strong>double</strong> the audience
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">⭐ Evolution of quality and usefulness perception</h4>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>2023: 52.8% negative votes × 47.2% positive votes</li>
                <li>
                  2024: <strong>75.7% positive</strong> (+60.4%) and only <strong>24.3% negative</strong> (–54%)
                </li>
              </ul>

              <div className="space-y-6">
                <figure>
                  <img
                    src={img.faqVotos2023}
                    alt="Chart of positive and negative votes analysis for 2023"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Chart of positive and negative votes analysis for 2023 (Zendesk)
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={img.faqVotos2024}
                    alt="Chart of positive and negative votes analysis for 2024"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Chart of positive and negative votes analysis for 2024, illustrating the reduction in negative vote
                    peaks (Zendesk)
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">📊 Comparison 2024 × 2025</h4>
              <p className="text-muted-foreground mb-4">
                Analyzing the first 3 quarters of 2024 and 2025, we see a considerable increase in the main product
                metrics:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-6">
                <li>More registrations</li>
                <li>More gift list revenue</li>
                <li>More printed card sales</li>
              </ul>

              <figure>
                <img
                  src={img.faqComparativoTrimestres}
                  alt="Comparison of quarterly performance for 2024 and 2025"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Comparison of quarterly performance for 2024 and 2025
                </figcaption>
              </figure>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-lg mb-4">Conclusion</h4>
              <p className="text-muted-foreground mb-4">
                The FAQ stopped being a help repository to become a <strong>strategic ecosystem</strong>, uniting:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>User experience</li>
                <li>SEO strategies</li>
                <li>High-performance content</li>
                <li>Conversion-oriented design</li>
                <li>Direct revenue impact</li>
              </ul>
              <p className="text-muted-foreground">
                A solid example of how content + UX + metrics can transform an underutilized channel into a{" "}
                <strong>scalable growth asset</strong>. The help center gained authority, expanded its audience,
                improved quality perception and achieved <strong>growth rates above 400%</strong> across different
                metrics.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Next steps</h4>
              <p className="text-muted-foreground">
                The help center undergoes continuous maintenance, with recurring analyses to improve strategies and
                offer an increasingly relevant and useful experience to users. As a next step, we are developing a plan
                to apply GEO (Generative Engine Optimization) to articles, strengthening iCasei's presence and
                increasing the chances of the brand being cited in major AI tools.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  "bot-90-satisfacao": {
    title: "How I built bot flows with 90% satisfaction and 73% ticket reduction",
    projectType: "Real Case",
    skills: [
      "ux writing",
      "ux research",
      "microcopy",
      "content ops",
      "information architecture",
      "usability testing",
      "error messages",
    ],
    area: "Conversational Flow",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>Until 2023, iCasei didn't have an efficient or scalable chat service. This generated:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>High dependence on human support</li>
              <li>Growing operational costs</li>
              <li>Inconsistent experience for couples and guests</li>
              <li>Lack of 24/7 availability</li>
              <li>High ticket volume</li>
            </ul>

            <p>
              Additionally, the <strong>RSVP (confirmation of attendance)</strong> process happened passively
              (site/app) or by phone, generating:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Low response rate</li>
              <li>Limited experience for guests</li>
              <li>Costly and non-scalable operation</li>
            </ul>

            <p>There was, therefore, a clear opportunity to use technology to:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Improve customer experience</li>
              <li>Reduce tickets</li>
              <li>Automate repetitive tasks</li>
              <li>Create new competitive differentiators (such as active RSVP via WhatsApp)</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. Solution architecture and planning</h3>
              <p className="mb-4">
                3 <strong>bot models</strong> were structured, each meeting specific needs:
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">RSVP via WhatsApp (developed internally)</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>
                      Consideration of multiple scenarios and exceptions involved in the attendance confirmation process
                    </li>
                    <li>Direct collaboration with development to ensure technical feasibility</li>
                  </ul>
                  <figure className="mt-4">
                    <img
                      src={img.botRsvpMockup}
                      alt="Mockup of WhatsApp attendance confirmation conversation"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Mockup of WhatsApp attendance confirmation conversation
                    </figcaption>
                  </figure>
                  <figure className="mt-4">
                    <img
                      src={img.botFluxoMiroV1}
                      alt="Conversational flow in Miro (initial version for testing)"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Conversational flow in Miro (initial version for testing)
                    </figcaption>
                  </figure>
                  <figure className="mt-4">
                    <img
                      src={img.botFluxoMiroOficial}
                      alt="Official flow in Miro with use case table requiring error messages"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Official flow in Miro with use case table requiring error messages
                    </figcaption>
                  </figure>
                  <figure className="mt-4">
                    <img
                      src={img.botFluxoMiroIds}
                      alt="Official flow in Miro with database ID links (for dev)"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Official flow in Miro with database ID links (for dev)
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Bot via WhatsApp for customer service</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Exclusive feature of the Black plan (iCasei's complete package)</li>
                    <li>Built in Zendesk</li>
                    <li>Includes automated responses, recommended articles and agent transfer</li>
                  </ul>
                  <figure className="mt-4">
                    <img
                      src={img.botFluxoZendesk}
                      alt="Flow in Zendesk"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Flow in Zendesk
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Bot via Chat on institutional website</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Available to all users</li>
                    <li>Built in Zendesk with neutral and accessible language</li>
                    <li>Considered different behaviors during and outside business hours</li>
                  </ul>
                  <figure className="mt-4">
                    <img
                      src={img.botChatSite}
                      alt="Screenshot of chat on institutional website"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Screenshot of chat on institutional website
                    </figcaption>
                  </figure>
                  <div className="mt-4">
                    <img src={img.botZendesk1} alt="Flow in Zendesk" className="w-full rounded-lg border border-border" />
                  </div>
                  <div className="mt-4">
                    <img src={img.botZendesk2} alt="Flow in Zendesk" className="w-full rounded-lg border border-border" />
                  </div>
                  <figure className="mt-4">
                    <img src={img.botZendesk3} alt="Flows in Zendesk" className="w-full rounded-lg border border-border" />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Flows in Zendesk
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">2. Strategy and objectives</h3>
              <p className="mb-4">The bots were designed with focus on four pillars:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  <strong>Satisfaction:</strong> 24/7 service, fast and clear
                </li>
                <li>
                  <strong>Operational efficiency:</strong> ticket volume reduction
                </li>
                <li>
                  <strong>Personalization:</strong> prioritization of different experiences by plan type
                </li>
                <li>
                  <strong>RSVP process improvement:</strong> higher response rate and smooth experience for guests,
                  plus more agility in confirmations and event management for couples
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">3. Iterations, improvements and monitoring</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">For RSVP:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Bug fixes in the dispatch system</li>
                    <li>Message reclassification following Meta guidelines</li>
                    <li>Removal of unnecessary interactions to reduce operational costs</li>
                    <li>Redirect reviews to external form, personalizing the experience more</li>
                    <li>Funnel monitoring creation in Metabase</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">For service bots:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Continuous evaluation via Zendesk reports</li>
                    <li>Identification of topics requiring improvement</li>
                    <li>Expansion planning with AI, personalization and A/B tests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              The project consolidated <strong>an integrated conversational ecosystem</strong>, formed by:
            </p>

            <div className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-lg mb-3">1. Active RSVP via WhatsApp</h4>
                <p className="mb-2 text-muted-foreground">
                  A fully guided experience for guests to confirm attendance:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Structured conversation</li>
                  <li>Clear and accessible tone</li>
                  <li>Optimized flows reducing friction</li>
                  <li>Metrics captured automatically</li>
                  <li>Scalable experience for couples</li>
                </ul>
              </div>

              <div className="bg-accent/20 p-6 rounded-xl border border-accent/30">
                <h4 className="font-semibold text-lg mb-3">2. Customer Service Bot via WhatsApp</h4>
                <p className="mb-2 text-muted-foreground">Focused on Black plan clients:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Fast and automated responses</li>
                  <li>Article suggestions</li>
                  <li>Forwarding to agent when necessary</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-semibold text-lg mb-3">3. Customer Service Bot via Website Chat</h4>
                <p className="mb-2 text-muted-foreground">For visitors and general users:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Answers questions about website, gift list, plans and payments</li>
                  <li>Flow adjustment according to operation hours</li>
                  <li>Neutral and consistent language</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-8">
            <p>
              The 3 conversational products generated <strong>direct, measurable and consistent impact</strong>,
              consolidating the project as one of iCasei's greatest CX evolutions.
            </p>

            <div>
              <h4 className="font-semibold text-lg mb-4">📉 Significant ticket reduction</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">-73%</span>
                  <span className="text-muted-foreground">
                    in chat and WhatsApp ticket volume between 2023 and 2025
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">-12%</span>
                  <span className="text-muted-foreground">
                    between 2024 and 2025, indicating stabilization with continuous improvement
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">-14%</span>
                  <span className="text-muted-foreground">reduction in total support tickets in 2 years</span>
                </li>
              </ul>
              <figure className="mt-6">
                <img
                  src={img.botGraficoTickets}
                  alt="Ticket volume chart"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Screenshot of ticket volume chart, showing a sharp drop and healthy stabilization (Zendesk)
                </figcaption>
              </figure>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">🤖 Bot usage and efficiency</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+34k</span>
                  <span className="text-muted-foreground">total engagements</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">50%</span>
                  <span className="text-muted-foreground">
                    agent transfer (above average due to demand complexity)
                  </span>
                </li>
              </ul>
              <div className="mt-4 bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Topics with significant efficiency:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                  <li>
                    "Gift a couple": <strong>13%</strong> transfer
                  </li>
                  <li>
                    "Website and gift list": <strong>16%</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-lg mb-4">💬 RSVP via WhatsApp: high and consolidated satisfaction</h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">82%</span>
                  <span className="text-muted-foreground">
                    satisfaction (maximum ratings) since launch in 2024
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-primary">+46k</span>
                  <span className="text-muted-foreground">accumulated reviews</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-2">New survey showed:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 text-sm">
                <li>
                  <strong>88%</strong> no difficulties in use
                </li>
                <li>
                  <strong>87%</strong> found the messages clear
                </li>
                <li>
                  <strong>92%</strong> rated as excellent/good
                </li>
              </ul>
              <div className="mt-4">
                <img
                  src={img.botRsvpExperiencia}
                  alt="Overall WhatsApp confirmation experience"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Qualitative feedbacks</h4>
              <div className="space-y-3">
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic text-sm">
                  "I found it excellent, due to the app's speed and very clear information"
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic text-sm">
                  "Despite being elderly, I found everything well explained"
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic text-sm">
                  "Good afternoon, it was very fast and well explained, easy to fill out, thank you"
                </blockquote>
              </div>
              <div className="mt-4 space-y-4">
                <img src={img.botFeedbacks1} alt="Qualitative feedbacks" className="w-full rounded-lg" />
                <img src={img.botFeedbacks2} alt="Qualitative feedbacks" className="w-full rounded-lg" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">🧭 Strategic impact</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>24/7 service with high satisfaction level</li>
                <li>Consistent reduction in operational costs</li>
                <li>Significant ticket reduction</li>
                <li>Expansion of competitive differentiators (especially in the All Inclusive plan)</li>
                <li>Clear and continuous funnel view via Metabase</li>
              </ul>
              <figure className="mt-4">
                <img
                  src={img.botMetabaseFunil}
                  alt="Funnel performance monitoring in Metabase"
                  className="w-full rounded-lg"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 italic">
                  Screenshot of funnel performance monitoring in Metabase for real-time tracking of WhatsApp attendance confirmations
                </figcaption>
              </figure>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">🔮 Next steps already planned</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>AI to increase resolutions without agent</li>
                <li>New topics and flows</li>
                <li>More advanced personalization by plan</li>
                <li>A/B tests for optimization</li>
                <li>Conversion channel for plan contracting, additional services and upgrades</li>
                <li>Predictive analysis to anticipate resolutions</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-lg mb-4">Conclusion</h4>
              <p className="text-muted-foreground">
                iCasei's bot projects demonstrate that good strategic technology integration, with good conversational
                design practices, brings real and significant value to the business. With a high satisfaction rate,
                positive qualitative feedback and reduction in operational costs, the project delivered expressive
                results that directly impacted customer experience improvement. Additionally, 24/7 availability ensured
                continuous and efficient support, reinforcing the commitment to excellent service.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  "content-system-ops": {
    title: "Creating integrated, scalable and efficient processes through Content System Ops",
    projectType: "Real Case",
    skills: ["ux writing", "information architecture", "language guide", "discovery", "tech writing"],
    area: "Content Ops",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              Teams worked in a dynamic environment, with multiple simultaneous projects and lean teams. The lack of a
              documentation culture generated <strong>rework, information loss and low autonomy</strong>. Among the
              main pains identified:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Important decisions were discussed in meetings and applied directly in Figma, without recording the
                rationale behind the choices
              </li>
              <li>
                Lack of support materials to guide recurring tasks (e.g.: guides, standards, processes)
              </li>
              <li>Constant delivery delays and communication failures between areas</li>
              <li>Teams had difficulty resuming postponed projects due to lack of structured history</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic">
              <strong>Audiences involved:</strong> product, design, marketing, technology, growth and other stakeholders.
            </blockquote>

            <div>
              <h4 className="font-semibold text-lg mb-3">Project objectives:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Strengthen standards, best practices and writing principles</li>
                <li>Create processes and tools that ensured scale, quality and efficiency</li>
                <li>Centralize information to accelerate access and facilitate resumptions</li>
                <li>Build an operational culture of continuous recording and consultation</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <p>
              The work developed in three main fronts: <strong>documentation</strong>,{" "}
              <strong>standardization</strong>, <strong>management and operational integration</strong>.
            </p>

            <div>
              <h3 className="font-semibold text-xl mb-4">Structured content and design documentation</h3>
              <p className="mb-4">Collaborative spreadsheets were created to record all deliveries, containing:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Scenario and context</li>
                <li>Content type</li>
                <li>Title and description</li>
                <li>Character limit</li>
                <li>Icons and interface elements</li>
                <li>Buttons and destinations</li>
                <li>Associated tests</li>
                <li>Validation status</li>
                <li>Figma implementation confirmation</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                The proposal was to create a simple, fast and easy-to-edit tool that would allow clear recording of
                stages, decisions, tests and histories of each delivery.
              </p>

              <figure className="mb-6">
                <img
                  src={img.opsDocAlertas}
                  alt="Example of panel alerts and notifications documentation"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Example of panel alerts and notifications documentation
                </figcaption>
              </figure>

              <figure className="mb-6">
                <img
                  src={img.opsDocStatus}
                  alt="Example of plan contracting status documentation in the panel"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Example of plan contracting status documentation in the panel
                </figcaption>
              </figure>

              <figure>
                <img
                  src={img.opsDocCopy}
                  alt="Example of copy documentation for new panel/system interface"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Example of copy documentation for new panel/system interface
                </figcaption>
              </figure>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-semibold text-xl mb-4">Operational guides</h3>
              <p className="mb-4">Guides were created to support day-to-day operations:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>How to update and create articles in the help center</li>
                <li>How to apply surveys with iCasei users</li>
                <li>Writing patterns for different contexts (website, panel, app, support)</li>
                <li>Good practices for product teams - Growth edition</li>
              </ul>

              <div className="space-y-6">
                <figure>
                  <img
                    src={img.opsGuiaCentralAjuda}
                    alt="Help center update and creation guide"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Help center update and creation guide
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={img.opsGuiaPesquisas}
                    alt="Guide for applying surveys with users"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Guide for applying surveys with users
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={img.opsGuiaUxWriting}
                    alt="UX Writing good practices guide"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    UX Writing good practices guide
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={img.opsGuiaGrowth}
                    alt="Growth team good practices guide"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Growth team good practices guide
                  </figcaption>
                </figure>
              </div>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-semibold text-xl mb-4">Metrics, monitoring and roadmap</h3>
              <p className="mb-4">Dashboards and roadmaps were created to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Track team metrics</li>
                <li>Monitor goals and progress of activities</li>
                <li>Organize and prioritize deliveries</li>
              </ul>

              <div className="space-y-6">
                <figure>
                  <img
                    src={img.opsBoardMetricas}
                    alt="Growth team metrics dashboard"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Growth team metrics dashboard
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={img.opsBoardGeo}
                    alt="GEO metrics dashboard"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    GEO metrics dashboard
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={img.opsRoadmapGrowth}
                    alt="Growth team roadmap"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Growth team roadmap
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={img.opsAtividadesGrowth}
                    alt="Growth team activities"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Growth team activities
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src={img.opsFunilPirata}
                    alt="Pirate funnel (AARRR)"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Pirate funnel (AARRR)
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              The solution was the <strong>implementation of a content operations system</strong>, covering three
              fundamental pillars:
            </p>

            <div className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-lg mb-3">1. Structured Documentation</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Spreadsheets for recording decisions, tests and content history</li>
                  <li>Templates for different delivery types</li>
                  <li>Single source of truth for reference</li>
                </ul>
              </div>

              <div className="bg-accent/20 p-6 rounded-xl border border-accent/30">
                <h4 className="font-semibold text-lg mb-3">2. Standardization</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Operational guides for recurring tasks</li>
                  <li>Writing patterns aligned with brand tone</li>
                  <li>Work processes defined and shared</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="font-semibold text-lg mb-3">3. Management and Monitoring</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Dashboards to track metrics and goals</li>
                  <li>Roadmaps to organize deliveries</li>
                  <li>Funnels to visualize the complete journey</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-8">
            <p>
              Implementation of the content operations system generated{" "}
              <strong>significant impact on efficiency and team quality</strong>:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold">Reduced rework</h4>
                  <p className="text-muted-foreground">
                    Centralized and accessible documentation reduced need for queries and duplicate work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold">More autonomy</h4>
                  <p className="text-muted-foreground">
                    Teams now have clear references for recurring tasks, without depending on others to consult.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold">Quality and consistency</h4>
                  <p className="text-muted-foreground">
                    Writing patterns and guides ensured deliveries aligned with brand and expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold">Clear visibility</h4>
                  <p className="text-muted-foreground">
                    Dashboards and roadmaps allowed monitoring progress and identifying bottlenecks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold">Facilitated resumptions</h4>
                  <p className="text-muted-foreground">
                    Structured history allowed resuming postponed projects with context and agility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-lg mb-4">Conclusion</h4>
              <p className="text-muted-foreground">
                The content operations system transformed the way teams work, creating an operational culture of
                recording and continuous consultation. The implementation of documentation, standardization and
                monitoring tools generated significant impact on efficiency, quality and team autonomy.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  "aquisicao-sem-code": {
    title: "Leading acquisition improvements with UX Research and low-code/no-code solutions",
    projectType: "Real Case",
    skills: [
      "ux research",
      "usability testing",
      "desk research",
      "benchmarking",
      "discovery",
      "persona",
      "information architecture",
    ],
    area: "Acquisition",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              The iCasei website had a high bounce rate and low conversion, with users frequently abandoning the
              initial registration funnel. Additionally, there were no structured processes for UX Research, which
              prevented understanding of real user barriers.
            </p>

            <figure className="my-6">
              <img
                src={img.aquisicaoProblemaMapa}
                alt="Problem map with identification of barriers"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Problem map with identification of barriers
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">1. Desk Research</h3>
              <p className="mb-4">
                Analysis of internal data, existing surveys and benchmarking with competitors to identify patterns and
                opportunities.
              </p>
              <figure>
                <img
                  src={img.aquisicaoDeskResearch}
                  alt="Desk research with data analysis"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Desk research with data analysis
                </figcaption>
              </figure>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">2. Persona creation</h3>
              <p className="mb-4">Based on research, two main personas were developed:</p>
              <div className="space-y-4">
                <figure>
                  <img
                    src={img.aquisicaoPersonaRafael}
                    alt="Persona Rafael"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Persona Rafael
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={img.aquisicaoPersonaCamila}
                    alt="Persona Camila"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Persona Camila
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">3. Benchmarking</h3>
              <p className="mb-4">
                Analysis of competitors and references to identify best practices in registration flows and value
                proposition presentation.
              </p>
              <figure>
                <img
                  src={img.aquisicaoBenchmarking}
                  alt="Benchmarking with competitors"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Benchmarking with competitors
                </figcaption>
              </figure>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">4. Usability testing</h3>
              <p className="mb-4">
                Tests with real users to validate hypotheses and identify specific barriers in the registration flow.
              </p>
              <figure>
                <img
                  src={img.aquisicaoTestesUsabilidade}
                  alt="Usability tests with users"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Usability tests with users
                </figcaption>
              </figure>
              <figure className="mt-4">
                <img
                  src={img.aquisicaoAchadosTestes}
                  alt="Findings from usability tests"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Findings from usability tests
                </figcaption>
              </figure>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              Based on research and testing, several improvements were implemented using low-code/no-code solutions:
            </p>

            <ul className="space-y-3 list-disc pl-6">
              <li>
                <strong>Simplified registration flow</strong> with fewer steps and clearer fields
              </li>
              <li>
                <strong>Improved value proposition</strong> with clearer communication of benefits
              </li>
              <li>
                <strong>Visual improvements</strong> in interface with better visual hierarchy
              </li>
              <li>
                <strong>Specific error messages</strong> to guide users in case of problems
              </li>
              <li>
                <strong>Structured research process</strong> for continuous understanding of users
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <p>
              Improvements generated <strong>significant impact on acquisition metrics</strong>:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <h4 className="font-semibold">Increased conversions</h4>
                  <p className="text-muted-foreground">
                    More users completing the registration flow after the implemented improvements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📉</span>
                <div>
                  <h4 className="font-semibold">Reduced bounce rate</h4>
                  <p className="text-muted-foreground">
                    Fewer users abandoning the funnel in intermediate stages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold">Continuous research process</h4>
                  <p className="text-muted-foreground">
                    Establishment of a recurring research cycle for continuous improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  "nps-tom-voz": {
    title: "How I helped a business create its Tone and Voice based on NPS",
    projectType: "Volunteer Case",
    skills: [
      "ux writing",
      "ux research",
      "tone and voice",
      "discovery",
      "desk research",
      "interface content",
      "user journey",
    ],
    area: "Tone and Voice",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              A small local business wanted to implement NPS (Net Promoter Score) to measure customer satisfaction, but
              didn't have a clear brand identity or defined tone and voice.
            </p>

            <figure className="my-6">
              <img
                src={img.npsBrandingSweetCannelle}
                alt="Sweet Cannelle branding"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Sweet Cannelle branding
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">1. Desk Research</h3>
              <p className="mb-4">
                Study about NPS, best practices and how to apply in a small business context.
              </p>
              <figure>
                <img
                  src={img.npsDeskResearch}
                  alt="Desk research on NPS"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Desk research on NPS
                </figcaption>
              </figure>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">2. Tone and Voice definition</h3>
              <p className="mb-4">
                Based on brand values and target audience, the tone and voice were defined.
              </p>
              <figure>
                <img
                  src={img.npsDefinicao}
                  alt="Tone and voice definition"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Tone and voice definition
                </figcaption>
              </figure>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              The final solution was the <strong>implementation of NPS survey in the post-purchase journey</strong>, with:
            </p>

            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>
                  <strong>Message written according to brand tone and voice</strong>, encouraging friendly feedback
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>
                  <strong>Clear and organized interface</strong>, with 0 to 10 scale and comments field
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>
                  <strong>Categorization of review reasons</strong> (service, delivery, navigation etc.)
                </span>
              </li>
            </ul>

            <figure className="my-6">
              <img
                src={img.npsEntregar}
                alt="NPS survey design and user journey"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                NPS survey design and user journey
              </figcaption>
            </figure>

            <figure className="my-6">
              <img
                src={img.npsTesteAb}
                alt="A/B test for NPS survey"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                A/B test for NPS survey
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <p>
              Implementation generated <strong>significant impact for the business</strong>:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold">Consistent data</h4>
                  <p className="text-muted-foreground">
                    Structured collection of customer feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold">Clear identity</h4>
                  <p className="text-muted-foreground">
                    Tone and voice defined and documented for future communications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold">Actionable insights</h4>
                  <p className="text-muted-foreground">
                    Ability to identify improvement areas based on feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  "navegacao-testes-conteudo": {
    title: "Using content testing to improve navigation and experience",
    projectType: "Real Case",
    skills: [
      "ux research",
      "usability testing",
      "card sorting",
      "cloze test",
      "information architecture",
      "discovery",
    ],
    area: "Navigation",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              Users were having difficulty finding information and features in the iCasei panel. The navigation
              structure didn't reflect how users thought about tasks and content.
            </p>

            <div className="space-y-4">
              <figure>
                <img
                  src={img.navegacaoHistorico1}
                  alt="Navigation history - part 1"
                  className="w-full rounded-lg border border-border"
                />
              </figure>
              <figure>
                <img
                  src={img.navegacaoHistorico2}
                  alt="Navigation history - part 2"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Navigation history and context
                </figcaption>
              </figure>
            </div>

            <figure className="my-6">
              <img
                src={img.navegacaoZendeskTickets}
                alt="Zendesk tickets related to navigation"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Zendesk tickets related to navigation
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">1. Team alignment</h3>
              <p className="mb-4">
                Workshops with product, design and development teams to understand constraints and goals.
              </p>
              <figure>
                <img
                  src={img.navegacaoAlinhamentoTimes}
                  alt="Team alignment workshops"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Team alignment workshops
                </figcaption>
              </figure>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">2. Cloze Test</h3>
              <p className="mb-4">
                Content tests to validate if the terms used in the interface were understood by users.
              </p>
              <div className="space-y-4">
                <figure>
                  <img
                    src={img.navegacaoCloze1}
                    alt="Cloze test - example 1"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
                <figure>
                  <img
                    src={img.navegacaoCloze2}
                    alt="Cloze test - example 2"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
                <figure>
                  <img
                    src={img.navegacaoCloze3}
                    alt="Cloze test - example 3"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
                <figure>
                  <img
                    src={img.navegacaoCloze4}
                    alt="Cloze test - example 4"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Cloze test examples
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">3. Card Sorting</h3>
              <p className="mb-4">
                Exercise with users to understand how they mentally organized features and content.
              </p>
              <figure>
                <img
                  src={img.navegacaoCardSorting}
                  alt="Card sorting with users"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Card sorting with users
                </figcaption>
              </figure>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">4. Benchmarking</h3>
              <p className="mb-4">
                Analysis of competitors and references to identify navigation patterns.
              </p>
              <figure>
                <img
                  src={img.navegacaoBenchmarking}
                  alt="Benchmarking of navigation patterns"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Benchmarking of navigation patterns
                </figcaption>
              </figure>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              Based on research, a <strong>new navigation structure</strong> was proposed:
            </p>

            <figure className="my-6">
              <img
                src={img.navegacaoSolucaoResumo}
                alt="Navigation solution summary"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Navigation solution summary
              </figcaption>
            </figure>

            <figure className="my-6">
              <img
                src={img.navegacaoSolucaoDetalhe}
                alt="Navigation solution detail"
                className="w-full rounded-lg border border-border"
              />
            </figure>

            <figure className="my-6">
              <img
                src={img.navegacaoSolucaoDetalhe2}
                alt="Navigation solution detail 2"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Navigation solution details
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <p>
              The new navigation structure generated <strong>significant impact on user experience</strong>:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧭</span>
                <div>
                  <h4 className="font-semibold">Improved findability</h4>
                  <p className="text-muted-foreground">
                    Users finding features and information more quickly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📉</span>
                <div>
                  <h4 className="font-semibold">Reduced support tickets</h4>
                  <p className="text-muted-foreground">
                    Fewer questions about where to find features.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold">Validated terminology</h4>
                  <p className="text-muted-foreground">
                    Terms used in the interface now understood by users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  "redesign-central-ajuda": {
    title: "How I redesigned the help center to improve user experience",
    projectType: "Real Case",
    skills: [
      "ux writing",
      "information architecture",
      "SEO",
      "GEO",
      "interface content",
      "tech writing",
      "usability testing",
    ],
    area: "FAQ",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              The iCasei help center needed a complete redesign to improve user experience, align visual identity with
              other products, and optimize content for search and AI tools.
            </p>

            <figure className="my-6">
              <img
                src={img.redesignCentralAtual}
                alt="Current help center"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Help center before redesign
              </figcaption>
            </figure>

            <figure className="my-6">
              <img
                src={img.redesignBenchmarking}
                alt="Benchmarking of help centers"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Benchmarking of help centers
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">1. Content analysis</h3>
              <p className="mb-4">
                Detailed analysis of existing articles, identifying outdated content, gaps and improvement opportunities.
              </p>
              <figure>
                <img
                  src={img.redesignRelatorioArtigos}
                  alt="Article analysis report"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Article analysis report
                </figcaption>
              </figure>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">2. Information architecture restructuring</h3>
              <p className="mb-4">
                Reorganization of categories and content hierarchy based on user research and best practices.
              </p>
              <div className="space-y-4">
                <figure>
                  <img
                    src={img.redesignArquiteturaAntes}
                    alt="Architecture before"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Architecture before
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={img.redesignArquiteturaDepois}
                    alt="Architecture after"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Architecture after
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">3. Visual design</h3>
              <p className="mb-4">
                New visual design aligned with iCasei brand identity, with better navigation and readability.
              </p>
              <figure>
                <img
                  src={img.redesignTelasFigma}
                  alt="Figma screens"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Design screens in Figma
                </figcaption>
              </figure>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">1. New architecture and navigation</h3>

            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Reorganization of categories based on user mental models</li>
              <li>Prominent search field for quick access to answers</li>
              <li>New, more intuitive navigation hierarchy</li>
            </ul>

            <figure className="my-6">
              <img
                src={img.redesignHomeNova}
                alt="New help center homepage"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                New help center homepage with main categories, video playlists and featured articles
              </figcaption>
            </figure>

            <h3 className="text-lg font-semibold text-foreground">2. Content and identity standardization</h3>

            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>
                <strong>Tone and voice</strong> review according to iCasei language
              </li>
              <li>Fixed structure for all articles: title → body → footer with tags, CTA, social networks and satisfaction survey</li>
              <li>
                Implementation of <strong>reading time</strong> and <strong>anchor index</strong> to improve reading experience
              </li>
              <li>Standardization of author photos, strengthening visual identity and humanization</li>
            </ul>

            <figure className="my-6">
              <img
                src={img.redesignArtigoBanner}
                alt="Article with banner, reading time, hyperlinks and anchor index"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Article with banner, reading time, strategic hyperlinks and anchor index
              </figcaption>
            </figure>

            <h3 className="text-lg font-semibold text-foreground">3. Application of GEO pillars</h3>

            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Independent paragraphs with clear context and purpose</li>
              <li>Multimodal, versatile writing with natural language</li>
              <li>Writing for implicit prompts - question anticipation</li>
              <li>Semantic structure aimed at AI</li>
              <li>Clarity, scannability, lists and summary</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Visual and structural transformation (2022 → 2025)</h3>

            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Clearer and functionality-oriented homepage</li>
              <li>Simpler navigation</li>
              <li>Visual identity unified with website, panel and app</li>
              <li>More responsive and accessible structure</li>
            </ul>

            <figure className="my-6">
              <img
                src={img.redesignAntes2022}
                alt="Help center before redesign, 2022"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Help center before redesign, 2022
              </figcaption>
            </figure>

            <figure className="my-6">
              <img
                src={img.redesignDepois2023}
                alt="Help center redesign, December 2023"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Help center redesign, December 2023
              </figcaption>
            </figure>

            <figure className="my-6">
              <img
                src={img.redesignUpgrade2025}
                alt="Help center design upgrade, September 2025"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Help center design upgrade, September 2025
              </figcaption>
            </figure>

            <h3 className="text-lg font-semibold text-foreground">Impact on experience and support</h3>

            <h4 className="text-base font-medium text-foreground mt-4">1. Significant increase in autonomy</h4>
            <p>
              With architecture, search, content and navigation improvements, users started finding answers more quickly, reducing friction and support dependence.
            </p>

            <h4 className="text-base font-medium text-foreground mt-4">2. Significant reduction in support demands</h4>
            <p>
              Reorganization, standardization and new integrations reduced ticket volume generated by simple questions and momentary instabilities.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-8">Conclusion</h3>
            <p>
              Between <strong>2023 and 2025</strong>, the help center underwent a series of improvements involving{" "}
              <strong>information architecture</strong>, <strong>taxonomy</strong> and{" "}
              <strong>visual hierarchy</strong>. <strong>Accessibility improvements</strong> and{" "}
              <strong>new navigation features</strong> were also implemented, providing{" "}
              <strong>greater user autonomy</strong> and <strong>significantly reducing support demands</strong>.
            </p>
          </div>
        ),
      },
    ],
  },
  "ong-voluntarios": {
    title: "How I used UX to increase volunteer adhesion and retention in an NGO",
    projectType: "Volunteer Case",
    skills: [
      "ux research",
      "usability testing",
      "discovery",
      "ux writing",
      "persona",
      "language guide",
      "interface content",
      "registration flow",
      "onboarding",
      "content ops",
    ],
    area: "",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              During and after the pandemic, NGOs faced significant drops in volunteer numbers and supporters.
              According to{" "}
              <a
                href="https://www1.folha.uol.com.br/empreendedorsocial/2020/12/metade-das-organizacoes-sociais-brasileiras-afirma-ter-dificuldades-para-se-manter-apos-a-pandemia.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                research
              </a>{" "}
              by Datafolha in partnership with Ambev,{" "}
              <strong>
                41% of institutions report lack of financial supporters, 13% lack of materials/equipment and 11% lack of volunteers
              </strong>
              .
            </p>

            <div className="my-6">
              <img
                src={img.ongDatafolha}
                alt="Datafolha research on NGO difficulties"
                className="w-full rounded-lg border border-border/30"
              />
            </div>

            <p>
              The NGO chosen by the group,{" "}
              <a
                href="https://kurumins.portfoliobox.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                <strong>Projeto Kurumins</strong>
              </a>
              , depended on volunteer work, but faced:
            </p>

            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Lack of internal organization and task management</li>
              <li>Communication difficulties between volunteers and team</li>
              <li>Low retention due to lack of clarity in responsibilities</li>
              <li>Absence of a structured tool to coordinate activities</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg italic">
              Create a UX solution capable of improving Kurumins NGO internal management and increasing volunteer offer and retention.
            </blockquote>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">1. Challenge organization</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li><strong>589 registered volunteers</strong></li>
                <li><strong>97 groups</strong> (≈6 people each)</li>
                <li><strong>11 volunteer mentors</strong></li>
                <li>5 months of work with checkpoints and Demo Day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">2. Discovery and Desk Research</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Deep analysis of the NGO: activities, schedule, volunteer profiles and families served</li>
                <li><strong>CSD Matrix</strong> construction to organize certainties, assumptions and doubts</li>
                <li><strong>Proto-personas</strong> creation (in-person and remote volunteer profiles)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">3. Research</h3>
              <h4 className="font-medium mb-2">Quantitative - 196 responses</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li><strong>61.2%</strong> have been volunteers</li>
                <li><strong>21.9%</strong> never did volunteer work</li>
                <li><strong>16.8%</strong> are currently volunteers</li>
              </ul>
              <p className="mb-2"><strong>Main discoveries:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Those who quit: <strong>41.8% due to lack of time</strong>, <strong>13.7% due to lack of motivation</strong></li>
                <li>Those who never did: <strong>55.8% don't know where to start</strong></li>
                <li>Those who stay: <strong>90.2% for the satisfaction of doing good</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">4. Persona Building</h3>
              <p className="mb-2">Created profiles:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Never did volunteer work</li>
                <li>Has done it</li>
                <li>Currently does</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">5. User Journey</h3>
              <p className="text-muted-foreground">
                Identification of friction points and experience opportunities.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              The final solution was a <strong>responsive website</strong> with:
            </p>

            <ul className="space-y-3 list-disc pl-6">
              <li><strong>Simplified registration flow</strong> for new volunteers</li>
              <li><strong>Onboarding</strong> with clear instructions</li>
              <li><strong>Task management area</strong> for coordination</li>
              <li><strong>Language guide</strong> for consistent communication</li>
              <li><strong>Style guide</strong> aligned with NGO identity</li>
            </ul>

            <p>
              The solution was developed based on feedback from Demo Day, prioritizing simplicity and financial viability for the NGO.
            </p>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <p>The project delivered:</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold">Responsive website prototype</h4>
                  <p className="text-muted-foreground">
                    Solution tested and validated with users.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold">Complete documentation</h4>
                  <p className="text-muted-foreground">
                    Language guide, style guide and design specifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold">Actionable insights</h4>
                  <p className="text-muted-foreground">
                    Deep understanding of volunteers and their needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  "revista-redesign": {
    title: "How I helped grow the digital magazine with a strategic redesign",
    projectType: "Real Case",
    skills: [
      "ux writing",
      "information architecture",
      "SEO",
      "interface content",
      "tech writing",
    ],
    area: "Digital Magazine",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              The iCasei digital magazine needed a redesign to improve user experience, increase organic traffic and
              align visual identity with other company products.
            </p>

            <div className="space-y-4">
              <figure>
                <img
                  src={img.revistaMockupHome}
                  alt="Magazine mockup"
                  className="w-full rounded-lg border border-border"
                />
              </figure>
              <figure>
                <img
                  src={img.revistaMockupMobile}
                  alt="Magazine mobile mockup"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Magazine mockups
                </figcaption>
              </figure>
            </div>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">1. Analysis and planning</h3>
              <p className="mb-4">
                Detailed analysis of current magazine, identifying improvement opportunities and alignment with business goals.
              </p>
              <div className="space-y-4">
                <figure>
                  <img
                    src={img.revistaFigma1}
                    alt="Figma analysis - part 1"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
                <figure>
                  <img
                    src={img.revistaFigma2}
                    alt="Figma analysis - part 2"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Analysis in Figma
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">2. Before state</h3>
              <div className="space-y-4">
                <figure>
                  <img
                    src={img.revistaAntes1}
                    alt="Magazine before - example 1"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
                <figure>
                  <img
                    src={img.revistaAntes2}
                    alt="Magazine before - example 2"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
                <figure>
                  <img
                    src={img.revistaAntes3}
                    alt="Magazine before - example 3"
                    className="w-full rounded-lg border border-border"
                  />
                </figure>
                <figure>
                  <img
                    src={img.revistaAntes4}
                    alt="Magazine before - example 4"
                    className="w-full rounded-lg border border-border"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                    Magazine before redesign
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              The redesign included:
            </p>

            <ul className="space-y-3 list-disc pl-6">
              <li><strong>New visual identity</strong> aligned with iCasei brand</li>
              <li><strong>Improved navigation</strong> and content organization</li>
              <li><strong>SEO optimization</strong> for organic traffic growth</li>
              <li><strong>Responsive design</strong> for mobile experience</li>
            </ul>

            <div className="space-y-4 mt-6">
              <figure>
                <img
                  src={img.revistaNovaHome1}
                  alt="New magazine homepage - part 1"
                  className="w-full rounded-lg border border-border"
                />
              </figure>
              <figure>
                <img
                  src={img.revistaNovaHome2}
                  alt="New magazine homepage - part 2"
                  className="w-full rounded-lg border border-border"
                />
              </figure>
              <figure>
                <img
                  src={img.revistaNovaHome3}
                  alt="New magazine homepage - part 3"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  New magazine homepage
                </figcaption>
              </figure>
            </div>

            <div className="space-y-4 mt-6">
              <figure>
                <img
                  src={img.revistaNovaInterna1}
                  alt="New internal page - part 1"
                  className="w-full rounded-lg border border-border"
                />
              </figure>
              <figure>
                <img
                  src={img.revistaNovaInterna2}
                  alt="New internal page - part 2"
                  className="w-full rounded-lg border border-border"
                />
              </figure>
              <figure>
                <img
                  src={img.revistaNovaInterna3}
                  alt="New internal page - part 3"
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  New internal pages
                </figcaption>
              </figure>
            </div>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <p>
              The redesign generated <strong>significant results</strong>:
            </p>

            <figure className="my-6">
              <img
                src={img.revistaGraficoCrescimento}
                alt="Traffic growth chart"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Traffic growth after redesign
              </figcaption>
            </figure>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📈</span>
                <div>
                  <h4 className="font-semibold">Organic traffic growth</h4>
                  <p className="text-muted-foreground">
                    Significant increase in organic visits after SEO improvements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-semibold">Unified identity</h4>
                  <p className="text-muted-foreground">
                    Magazine aligned with iCasei visual identity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold">Better mobile experience</h4>
                  <p className="text-muted-foreground">
                    Responsive design improving reading on mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  "lp-lovable-calculadora": {
    title: "Creating a landing page with AI to increase acquisition",
    projectType: "Real Case",
    skills: [
      "ux writing",
      "discovery",
      "interface content",
      "information architecture",
      "content strategy",
    ],
    area: "Acquisition",
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              iCasei wanted to create a new acquisition channel that would add value to potential customers while generating qualified leads. The challenge was to create a useful experience that would convert visitors into platform users.
            </p>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-6">
            <p>
              Using AI (Lovable), we developed a landing page with a dynamic wedding cost calculator, including:
            </p>

            <ol className="space-y-3 list-decimal pl-6">
              <li><strong>Complete content and language review</strong>, including tone of voice standardization, more fluid texts, intentional CTAs, clearer form and instructive step-by-step</li>
              <li><strong>Design adjustments</strong> made with Product Designer</li>
              <li><strong>Inclusion of new capture strategies</strong>, like banner offering free wedding website at the end of the experience</li>
              <li><strong>Inclusion expansion</strong>: we added "Couple's attire" field (dress/suit, suit/suit, dress/dress)</li>
              <li><strong>Results page improvements</strong>, allowing item removal and real-time total value update</li>
              <li><strong>Technical construction in Supabase</strong>, making the process more agile and allowing future data integration</li>
            </ol>

            <figure className="my-6">
              <img
                src={img.lpLovablePreviewV1}
                alt="First landing page result in Lovable"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                First landing page result in Lovable
              </figcaption>
            </figure>

            <figure className="my-6">
              <img
                src={img.lpLovableHome1}
                alt="Refined landing page homepage - part 1"
                className="w-full rounded-lg border border-border/30"
              />
            </figure>

            <figure className="my-6">
              <img
                src={img.lpLovableHome2}
                alt="Refined landing page homepage - part 2"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Refined landing page homepage
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              We created a <strong>new landing page with a dynamic wedding cost calculator</strong>, built with AI support (Lovable) and integrated with Supabase.
            </p>

            <p>The solution delivers:</p>

            <ul className="space-y-3 list-disc pl-6">
              <li><strong>Personalized cost estimate</strong> based on event city and guest count</li>
              <li><strong>Real average values</strong> of about 20 essential items</li>
              <li><strong>Interactive experience</strong>, allowing adding/removing services and updating budget in real time</li>
              <li><strong>Accessible and inclusive content</strong>, considering different couple attire combinations</li>
              <li><strong>Strategic conversion</strong>, inserting free wedding website as list item and reinforcing offer with footer banner</li>
            </ul>

            <figure className="my-6">
              <img
                src={img.lpLovableFormulario}
                alt="Form with inclusion focus"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Form with inclusion focus
              </figcaption>
            </figure>

            <figure className="my-6">
              <img
                src={img.lpLovableEstimativa}
                alt="Wedding value estimate"
                className="w-full rounded-lg border border-border/30"
              />
            </figure>

            <figure className="my-6">
              <img
                src={img.lpLovableBanner}
                alt="Value estimate and conversion banner"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Value estimate and conversion banner
              </figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <p>
              The new{" "}
              <a
                href="https://calculadora.icasei.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                landing page
              </a>{" "}
              launch brought important indicators in the first days.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-4">Initial conversion and engagement results</h3>

            <ul className="space-y-3 list-disc pl-6">
              <li><strong>+180 couples</strong> on trial migrated to <strong>free Basic plan</strong> after accessing the landing page</li>
              <li>Email marketing dispatch showed <strong>excellent performance</strong>, reaching <strong>3% of goal</strong></li>
              <li>Experience elevated product value perception, reinforcing iCasei's role as wedding planning reference</li>
            </ul>

            <figure className="my-6">
              <img
                src={img.lpLovableMockup}
                alt="Wedding cost calculator results mockup"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Wedding cost calculator results mockup
              </figcaption>
            </figure>

            <h3 className="font-semibold text-lg mt-8 mb-4">Conclusion</h3>

            <p>
              The landing page creation with wedding calculator showed how strategic use of content, inclusive design and AI can transform user experience. Besides providing personalized cost estimates, the tool offers insights on spending priorities and budget optimization, helping couples plan their wedding with more security and clarity.
            </p>
          </div>
        ),
      },
    ],
  },
  "parceiros-100m": {
    title: "Conquering 1k+ partners and transacting over R$ 100M in project",
    projectType: "Real Case",
    skills: [
      "ux writing",
      "information architecture",
      "SEO",
      "tech writing",
      "FAQ",
      "interface content",
      "email content",
      "registration flow",
    ],
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              iCasei needed to create from scratch a partnership ecosystem with wedding suppliers. The company wanted to gather market professionals in a structured program, offering them a personalized page to gift their clients with a free wedding website, plus other benefits.
            </p>

            <p>
              The challenge was to attract suppliers, clearly explain partnership operation and create internal processes that would allow scaling with quality.
            </p>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-6">
            <p>
              As UX Writer and Growth team member, I worked from conception to continuous project operation, contributing to various initiatives that supported project growth.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-4">Landing Page creation "Become an iCasei partner"</h3>

            <p>
              I structured page communication focused on clarity, objectivity and conversion. The copy included value proposition, benefits, registration step-by-step and FAQ.
            </p>

            <figure className="my-6">
              <img
                src={img.parceirosLp}
                alt="Become an iCasei partner landing page screenshot"
                className="w-full h-auto rounded-lg border border-border/30 object-contain"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                LP screenshot
              </figcaption>
            </figure>

            <h3 className="font-semibold text-lg mt-6 mb-4">Retention email sequence</h3>

            <p>
              I created communication flows to engage partners throughout the journey. Campaigns maintain an average of <strong>40% open rate</strong> and <strong>3% click rate</strong>, healthy rates for the market.
            </p>

            <figure className="my-6">
              <img
                src={img.parceirosIntercom1}
                alt="Relationship sequence flow in Intercom - part 1"
                className="w-full rounded-lg border border-border/30"
              />
            </figure>

            <figure className="my-6">
              <img
                src={img.parceirosIntercom2}
                alt="Relationship sequence flow in Intercom - part 2"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Relationship sequence flows in Intercom
              </figcaption>
            </figure>

            <h3 className="font-semibold text-lg mt-6 mb-4">Exclusive help center for partners</h3>

            <p>
              I structured the new "For partners" section in the help center to reduce internal team dependencies and serve as support channel for partners and commercial team.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-4">Operational flows</h3>

            <p>
              Construction and review of registration, contract signing, onboarding and partner page customization flows. I also collaborated in creating and adjusting contracts and team support materials.
            </p>

            <figure className="my-6">
              <img
                src={img.parceirosFigmaFluxos}
                alt="Operational flows in Figma"
                className="w-full rounded-lg border border-border/30"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">Figma screens</figcaption>
            </figure>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              We created a complete partnership program, from communication, capture and onboarding to retention. Communication was designed to be clear, scalable and conversion-oriented, aligning website, emails, help center and internal flows.
            </p>

            <p>
              Continuous proposition evolution reinforced partnership value and increased supplier engagement over time.
            </p>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <p>
              In just 3 years, the program achieved expressive results, especially considering our focus is not volume, but quality and qualified revenue return. That's why we have a curation process to carefully select each partner:
            </p>

            <ul className="space-y-3 list-disc pl-6">
              <li><strong>+1,000 active partners</strong> in different regions of Brazil</li>
              <li><strong>+R$ 100 million transacted</strong> through these partners' couples gift lists</li>
              <li>Consolidated and scalable communication flow</li>
              <li>Reduced operational questions thanks to dedicated help center section</li>
              <li>Building a solid base for future expansion</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "proposta-valor-app": {
    title: "Increasing application value proposition",
    projectType: "Fictional Case",
    skills: [
      "ux writing",
      "discovery",
      "desk research",
      "benchmarking",
      "accessibility",
      "microcopy",
      "interface content",
      "registration flow",
      "onboarding",
      "FAQ",
      "error messages",
      "email content",
      "push notification",
    ],
    sections: [
      {
        title: "Problem",
        content: (
          <div className="space-y-6">
            <p>
              Many people in Brazil live in locations without valid ZIP code or officially recognized address. This creates barriers in basic daily activities, such as:
            </p>

            <ul className="space-y-2 list-disc pl-6">
              <li>inability to receive orders</li>
              <li>difficulty proving residence</li>
              <li>specific privacy, security and logistics needs</li>
            </ul>

            <p>
              Additionally, during research, several <strong>recurring user questions</strong> about the PO Box service were identified, such as:
            </p>

            <ul className="space-y-2 list-disc pl-6">
              <li>how to rent</li>
              <li>costs</li>
              <li>required documents</li>
              <li>subscription and renewal operation</li>
              <li>receiving rules</li>
              <li>package arrival notifications</li>
            </ul>

            <p>
              These understanding gaps revealed the need to{" "}
              <strong>improve clarity, journey and service value proposition within the app</strong>, making the process intuitive and accessible for all audiences.
            </p>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Discovery - Desk Research</h4>
              <p className="mb-4">In-depth information was gathered about:</p>
              <ul className="space-y-2 list-disc pl-6 mb-4">
                <li>PO Box operation</li>
                <li>current in-person contracting process</li>
                <li>required documents for individuals and companies</li>
                <li>modalities, prices and additional fees</li>
                <li>receiving limitations</li>
                <li>usage rules and risks</li>
                <li>pickup and renewal deadlines</li>
                <li>notification mechanisms (non-existent in current physical process)</li>
              </ul>
              <p>
                <strong>Benchmarking</strong> analysis was also performed with postal services and logistics companies, identifying best practices for flow, onboarding, payment and delivery management.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Target audience mapping</h4>
              <ul className="space-y-2 list-disc pl-6">
                <li>People without fixed address</li>
                <li>Residents in locations without recognized ZIP code</li>
                <li>Users seeking privacy and security</li>
                <li>Those away all day who cannot receive deliveries</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Pain identification</h4>
              <ul className="space-y-2 list-disc pl-6">
                <li>Bureaucratic in-person process</li>
                <li>Lack of transparency in steps</li>
                <li>Absence of official notifications</li>
                <li>Inability to contract online</li>
                <li>Non-inclusive journey for those without valid ZIP code</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Tone and language definition</h4>
              <p>
                <strong>Simple, clear and welcoming</strong> language, accessible to anyone and aligned with the "My PO Box" app proposition.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-8">
            <p>
              The proposed solution was to{" "}
              <strong>reimagine the entire PO Box contracting and usage journey within the application</strong>,
              creating a complete digital experience, from onboarding to package tracking.
            </p>

            <h4 className="font-display font-semibold text-lg">Main deliverables and features</h4>

            <div>
              <h5 className="font-display font-semibold mb-3">1. Home screen and app positioning</h5>
              <ul className="space-y-2 list-disc pl-6 mb-4">
                <li>
                  Name proposal <strong>"My PO Box"</strong>, reinforcing autonomy, security and belonging
                </li>
                <li>
                  Inclusion of value promise: <em>100% app management</em>
                </li>
              </ul>
              <figure className="my-6">
                <img
                  src={img.propostaValorTelaInicial}
                  alt="My PO Box app home screen"
                  className="w-full max-w-sm mx-auto h-auto rounded-lg border border-border/30"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  App home screen
                </figcaption>
              </figure>
            </div>

            <div>
              <h5 className="font-display font-semibold mb-3">2. Guided onboarding with usage tutorial</h5>
              <p className="mb-4">Clear flow for:</p>
              <ul className="space-y-2 list-disc pl-6 mb-4">
                <li>subscription choice</li>
                <li>modality choice (semi-annual, annual, biennial)</li>
                <li>PO Box selection</li>
                <li>document submission and validation through app</li>
                <li>digital term signature</li>
                <li>online payment</li>
              </ul>
              <figure className="my-6">
                <img
                  src={img.propostaValorOnboarding}
                  alt="App onboarding flow"
                  className="w-full h-auto rounded-lg border border-border/30"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Guided onboarding with usage tutorial
                </figcaption>
              </figure>
            </div>

            <div>
              <h5 className="font-display font-semibold mb-3">3. Alternative flow for users without valid ZIP code</h5>
              <p className="mb-4">Dedicated CTA to proceed with personal data when ZIP code is not recognized.</p>
              <figure className="my-6">
                <img
                  src={img.propostaValorCep}
                  alt="Alternative flow for users without valid ZIP code"
                  className="w-full h-auto rounded-lg border border-border/30"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Alternative flow for users without valid ZIP code
                </figcaption>
              </figure>
            </div>

            <div>
              <h5 className="font-display font-semibold mb-3">4. Integrated payment system</h5>
              <p className="mb-4">Payments via:</p>
              <ul className="space-y-2 list-disc pl-6 mb-4">
                <li>Pix</li>
                <li>bank slip</li>
                <li>credit card (cash)</li>
              </ul>
              <p className="mb-4">With error and recovery screens, reducing journey friction.</p>
              <figure className="my-6">
                <img
                  src={img.propostaValorPagamento}
                  alt="Payment error and recovery screen"
                  className="w-full max-w-sm mx-auto h-auto rounded-lg border border-border/30"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Payment error and recovery screen
                </figcaption>
              </figure>
            </div>

            <div>
              <h5 className="font-display font-semibold mb-3">5. Post-contracting confirmation</h5>
              <p className="mb-4">Clear message with:</p>
              <ul className="space-y-2 list-disc pl-6 mb-4">
                <li>success confirmation</li>
                <li>instructions on how to locate contracted number</li>
                <li>resend alternative if needed</li>
              </ul>
              <figure className="my-6">
                <img
                  src={img.propostaValorConfirmacao}
                  alt="Post-contracting confirmation screen"
                  className="w-full max-w-sm mx-auto h-auto rounded-lg border border-border/30"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Post-contracting confirmation
                </figcaption>
              </figure>
            </div>

            <div>
              <h5 className="font-display font-semibold mb-3">6. Package received notifications</h5>
              <p className="mb-4">Push + SMS + email whenever there's a new item in the PO Box.</p>
              <figure className="my-6">
                <img
                  src={img.propostaValorNotificacoes}
                  alt="Package received notifications on Android and iOS"
                  className="w-full h-auto rounded-lg border border-border/30"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                  Package received notifications
                </figcaption>
              </figure>
            </div>

            <div>
              <h5 className="font-display font-semibold mb-3">7. Help center</h5>
              <p className="mb-4">Questions answered directly in the app:</p>
              <ul className="space-y-2 list-disc pl-6 mb-6">
                <li>service costs</li>
                <li>accepted item types</li>
                <li>how to track deliveries</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-6">
            <p>
              The project delivered a <strong>complete prototype</strong> with:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold">Complete contracting flow</h4>
                  <p className="text-muted-foreground">
                    From registration to payment confirmation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🔔</span>
                <div>
                  <h4 className="font-semibold">Notification system</h4>
                  <p className="text-muted-foreground">
                    Push, SMS and email for package arrivals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">❓</span>
                <div>
                  <h4 className="font-semibold">Integrated FAQ</h4>
                  <p className="text-muted-foreground">
                    Answers to main questions within the app.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">♿</span>
                <div>
                  <h4 className="font-semibold">Inclusive journey</h4>
                  <p className="text-muted-foreground">
                    Alternative flow for users without valid ZIP code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  // Expanding product acquisition
  "aquisicao-produto": {
    title: "Expanding product acquisition",
    projectType: "Fictional Case",
    skills: ["ux writing", "ux research", "discovery", "benchmarking", "persona", "usability testing", "information architecture", "copywriting", "interface content"],
    sections: [
      { title: "Problem", content: (<div className="space-y-6"><p className="text-muted-foreground">UOL Chat offers a complete free version - anonymous, no registration required - which leads to <strong>low understanding of why someone should subscribe to the VIP plan</strong>.</p><p className="text-muted-foreground">Pain points mapped: users don't understand VIP benefits, people use trial without feeling the need to upgrade, fear of losing anonymity, lack of clarity generates low trust.</p><img src={img.aquisicaoProblemaMapa} alt="Business problem map" className="w-full rounded-lg" /><blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">How can we improve product understanding and increase acquisition through design and experience?</blockquote></div>) },
      { title: "Process", content: (<div className="space-y-8"><p className="text-muted-foreground">The process involved <strong>UX Research, benchmarking, voice definition, and usability testing</strong>.</p><h4 className="font-semibold text-lg">1. Voice Definition</h4><p className="text-muted-foreground">A light, friendly, inclusive, helpful and cool voice.</p><h4 className="font-semibold text-lg">2. Desk Research</h4><p className="text-muted-foreground">Most famous chat in Brazil since 1997, +5M installations, 4k rooms, 7 categories.</p><img src={img.aquisicaoDeskResearch} alt="Desk Research" className="w-full rounded-lg" /><h4 className="font-semibold text-lg">3. Proto-personas</h4><img src={img.aquisicaoPersonaRafael} alt="Proto-persona Rafael" className="w-full rounded-lg" /><img src={img.aquisicaoPersonaCamila} alt="Proto-persona Camila" className="w-full rounded-lg mt-4" /><h4 className="font-semibold text-lg">4. Benchmarking</h4><img src={img.aquisicaoBenchmarking} alt="Benchmarking" className="w-full rounded-lg" /><h4 className="font-semibold text-lg">5. Usability Testing</h4><p className="text-muted-foreground">Main findings: page very cluttered, second banner invisible, users prefer to try before paying.</p><img src={img.aquisicaoTestesUsabilidade} alt="Usability Testing" className="w-full rounded-lg" /><img src={img.aquisicaoAchadosTestes} alt="Main findings" className="w-full rounded-lg" /></div>) },
      { title: "Solution", content: (<div className="space-y-6"><p className="text-muted-foreground">Focus on <strong>reducing cognitive load and reorganizing content hierarchy</strong>.</p><ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4"><li>Reduce visible information</li><li>Highlight exclusive VIP benefits</li><li>Reinforce security and anonymity</li><li>Create clearer page with organized categories and plans</li></ul></div>) },
      { title: "Result", content: (<div className="space-y-6"><p className="text-muted-foreground">As a <strong>fictional case</strong>, no real metrics, but tests indicated: greater plan clarity, reduced cognitive noise, reinforced trust, path to increased conversion.</p></div>) },
    ],
  },
  // Tone of voice and NPS
  "tom-voz-nps": {
    title: "Applying tone of voice and NPS to improve experience and guide product decisions",
    projectType: "Fictional Case",
    skills: ["ux writing", "A/B testing", "discovery", "taxonomy", "ux research", "information architecture", "persona", "benchmarking", "language guide", "email content", "conversational flow"],
    sections: [
      { title: "Problem", content: (<div className="space-y-6"><p>Sweet Cannelle is a fictional patisserie specializing in tea and spice-based beverages. The problem: the bistro <strong>wasn't collecting feedback after purchases</strong>.</p><figure className="my-8"><img src={img.npsBrandingSweetCannelle} alt="Sweet Cannelle visual identity" className="w-full rounded-lg border border-border" /></figure><p>Without structured NPS capture: impossible to measure satisfaction, dissatisfied customers not identified, opportunities for evolution missed.</p></div>) },
      { title: "Process", content: (<div className="space-y-6"><p>Used <strong>Double Diamond framework</strong>: Discover, Define, Develop, Deliver.</p><h4 className="font-semibold">Discover</h4><p className="text-muted-foreground">Main return reasons: product quality, service, welcoming experience.</p><figure className="my-6"><img src={img.npsDeskResearch} alt="Desk Research" className="w-full rounded-lg border border-border" /></figure><h4 className="font-semibold">Define</h4><p className="text-muted-foreground">Defined customer pain points, target audience, brand persona, voice table.</p><figure className="my-6"><img src={img.npsDefinicao} alt="Definition phase" className="w-full rounded-lg border border-border" /></figure><h4 className="font-semibold">Develop - Tone of Voice</h4><p className="text-muted-foreground">Built tone of voice document with brand persona, values, vocabulary, grammar rules.</p><h4 className="font-semibold">Deliver</h4><p className="text-muted-foreground">Interface proof of concept with NPS message, new user journey with post-purchase survey.</p><figure className="my-6"><img src={img.npsEntregar} alt="NPS survey design" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Solution", content: (<div className="space-y-6"><p><strong>NPS survey in post-purchase journey</strong> with: message per brand tone, clear interface with 0-10 scale, evaluation categorization, journey update.</p></div>) },
      { title: "Result", content: (<div className="space-y-6"><p>Sweet Cannelle now has: structured tone of voice manual, collection flow for satisfaction, additional customer touchpoint, solid data foundation.</p><figure className="my-6"><img src={img.npsTesteAb} alt="A/B testing" className="w-full rounded-lg border border-border" /></figure></div>) },
    ],
  },
  // Panel navigation
  "melhorando-navegacao-painel": {
    title: "Improving panel navigation and reducing tickets",
    projectType: "Real Case",
    skills: ["ux writing", "information architecture", "ux research", "cloze testing", "benchmarking", "interface content"],
    sections: [
      { title: "Problem", content: (<div className="space-y-6"><p>Growth in support tickets revealed difficulties couples had understanding the <strong>Gift History</strong> flow. Main questions: order status, balance release deadline, distinguishing purchase status/credit/payment terms.</p><figure className="my-6 space-y-4"><img src={img.navegacaoHistorico1} alt="Gift History screen" className="w-full rounded-lg border border-border" /><img src={img.navegacaoHistorico2} alt="Order details" className="w-full rounded-lg border border-border" /></figure><figure className="my-6"><img src={img.navegacaoZendeskTickets} alt="Zendesk tickets" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Process", content: (<div className="space-y-8"><h4 className="font-semibold">1. Internal team alignment</h4><p className="text-muted-foreground">Mapped critical points: validate terms, review hierarchy, identify relevant data.</p><figure className="my-6"><img src={img.navegacaoAlinhamentoTimes} alt="Team alignment" className="w-full rounded-lg border border-border" /></figure><h4 className="font-semibold">2. Cloze Test</h4><p className="text-muted-foreground">Verified vocabulary and term precision. Insight: terms were correct, but presentation was the problem.</p><figure className="my-6 space-y-4"><img src={img.navegacaoCloze1} alt="Cloze test" className="w-full rounded-lg border border-border" /><img src={img.navegacaoCloze2} alt="Cloze test 2" className="w-full rounded-lg border border-border" /></figure><h4 className="font-semibold">3. Information Architecture</h4><p className="text-muted-foreground">Users ranked: item purchased = most relevant, then total value, then status.</p><figure className="my-6"><img src={img.navegacaoCardSorting} alt="Card sorting" className="w-full rounded-lg border border-border" /></figure><h4 className="font-semibold">4. Benchmarking</h4><p className="text-muted-foreground">Compared with Nubank and Méliuz for transaction clarity patterns.</p><figure className="my-6"><img src={img.navegacaoBenchmarking} alt="Benchmarking" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Solution", content: (<div className="space-y-8"><h4 className="font-semibold">1. Gift summary</h4><p className="text-muted-foreground">Filter by purchase status, secondary info moved to detail, last update tag added.</p><figure className="my-6"><img src={img.navegacaoSolucaoResumo} alt="Summary redesign" className="w-full rounded-lg border border-border" /></figure><h4 className="font-semibold">2. Gift detail</h4><p className="text-muted-foreground">New timeline with purchase steps and dates, info redistribution per couple priorities.</p><figure className="my-6"><img src={img.navegacaoSolucaoDetalhe} alt="Detail redesign" className="w-full rounded-lg border border-border" /><img src={img.navegacaoSolucaoDetalhe2} alt="Mobile version" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Result", content: (<div className="space-y-6"><p>Proposal delivered: reorganized hierarchy, new timeline, more accessible information. Ready for testing.</p></div>) },
    ],
  },
  // Digital magazine redesign
  "revista-digital": {
    title: "Elevating the digital magazine experience with a redesign process",
    projectType: "Real Case",
    skills: ["ux writing", "information architecture", "GEO", "SEO", "accessibility", "taxonomy", "tech writing", "interface content"],
    sections: [
      { title: "Problem", content: (<div className="space-y-6"><p>The <a href="https://revista.icasei.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">iCasei Magazine</a> had reached <strong>1 million monthly visitors</strong>, but structure, visual, and resources didn't keep up with market evolution, brand updates, and modern usability standards.</p><p>Old version had navigation problems, unstructured content, outdated layout, and low strategic integration.</p><figure className="my-8"><img src={img.revistaMockupHome} alt="Magazine homepage mockup" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Process", content: (<div className="space-y-8"><h4 className="font-semibold">1. Analysis and planning</h4><p className="text-muted-foreground">Detailed analysis of current magazine identifying improvement opportunities.</p><figure className="my-6"><img src={img.revistaFigma1} alt="Figma analysis" className="w-full rounded-lg border border-border" /></figure><h4 className="font-semibold">2. Before state</h4><figure className="my-6 space-y-4"><img src={img.revistaAntes1} alt="Before 1" className="w-full rounded-lg border border-border" /><img src={img.revistaAntes2} alt="Before 2" className="w-full rounded-lg border border-border" /></figure><h4 className="font-semibold">3. New design</h4><figure className="my-6 space-y-4"><img src={img.revistaNovaHome1} alt="New home 1" className="w-full rounded-lg border border-border" /><img src={img.revistaNovaHome2} alt="New home 2" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Solution", content: (<div className="space-y-6"><p>Complete redesign with: modern visual identity, improved navigation, mobile-first approach, SEO optimization, better content structure.</p><figure className="my-6"><img src={img.revistaNovaInterna1} alt="New internal page" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Result", content: (<div className="space-y-6"><p>Magazine became more modern, responsive, and integrated with iCasei ecosystem. Improved user experience and SEO performance.</p><figure className="my-6"><img src={img.revistaGraficoCrescimento} alt="Growth chart" className="w-full rounded-lg border border-border" /></figure></div>) },
    ],
  },
  // Lovable landing page
  "landing-page-lovable": {
    title: "Creating a lead capture landing page with Lovable",
    projectType: "Real Case",
    skills: ["ux writing", "AI tools", "landing page", "conversion", "interface content", "inclusive design"],
    sections: [
      { title: "Problem", content: (<div className="space-y-6"><p>iCasei needed a tool to help couples estimate wedding costs. The challenge: create an interactive, inclusive experience that captures leads and reinforces the platform's value proposition.</p></div>) },
      { title: "Process", content: (<div className="space-y-6"><p>Built with <strong>Lovable AI</strong> and integrated with Supabase. Complete content revision including: tone standardization, clearer texts, more intentional CTAs, inclusive form, step-by-step instructions.</p><figure className="my-6"><img src={img.lpLovablePreviewV1} alt="First Lovable result" className="w-full rounded-lg border border-border" /></figure><figure className="my-6"><img src={img.lpLovableHome1} alt="Refined homepage 1" className="w-full rounded-lg border border-border" /><img src={img.lpLovableHome2} alt="Refined homepage 2" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Solution", content: (<div className="space-y-6"><p>New <strong>dynamic wedding cost calculator</strong> landing page with: personalized estimates based on city and guests, real average values for ~20 essential items, interactive experience, inclusive content, strategic conversion with free site offer.</p><figure className="my-6"><img src={img.lpLovableFormulario} alt="Inclusive form" className="w-full rounded-lg border border-border" /></figure><figure className="my-6"><img src={img.lpLovableEstimativa} alt="Cost estimate" className="w-full rounded-lg border border-border" /></figure></div>) },
      { title: "Result", content: (<div className="space-y-6"><p>Initial results: <strong>+180 couples</strong> migrated from trial to Basic plan, email marketing reached <strong>3% of objective</strong>. The experience elevated product value perception.</p><figure className="my-6"><img src={img.lpLovableMockup} alt="Calculator mockup" className="w-full rounded-lg border border-border" /></figure></div>) },
    ],
  },
};
