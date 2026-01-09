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
              <div className="text-3xl font-bold text-primary mb-2">🚀 R$ 5 million</div>
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
              <li>Create new competitive differentiators (like active RSVP via WhatsApp)</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Process",
        content: (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">1. Architecture and solution planning</h3>
              <p className="mb-4">
                <strong>3 bot models</strong> were structured, each addressing specific needs:
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">RSVP via WhatsApp (internally developed)</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Consideration of multiple scenarios and exceptions in the attendance confirmation process</li>
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
                  <h4 className="font-semibold mb-2">WhatsApp Bot for customer service</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Exclusive feature of the Black plan (iCasei's complete package)</li>
                    <li>Built in Zendesk</li>
                    <li>Includes automated responses, recommended articles, and transfer to agents</li>
                  </ul>
                  <figure className="mt-4">
                    <img src={img.botFluxoZendesk} alt="Flow in Zendesk" className="w-full rounded-lg border border-border" />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Flow in Zendesk
                    </figcaption>
                  </figure>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Chat Bot on the institutional website</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Available for all users</li>
                    <li>Built in Zendesk with neutral and accessible language</li>
                    <li>Considered different behaviors inside and outside business hours</li>
                  </ul>
                  <figure className="mt-4">
                    <img
                      src={img.botChatSite}
                      alt="Screenshot of chat on the institutional website"
                      className="w-full rounded-lg border border-border"
                    />
                    <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                      Screenshot of chat on the institutional website
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
                  <strong>Satisfaction:</strong> 24/7, fast and clear service
                </li>
                <li>
                  <strong>Operational efficiency:</strong> ticket volume reduction
                </li>
                <li>
                  <strong>Personalization:</strong> prioritization of different experiences by plan type
                </li>
                <li>
                  <strong>RSVP process improvement:</strong> higher response rate and smooth experience for guests,
                  plus faster confirmations and event management for couples
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Solution",
        content: (
          <div className="space-y-6">
            <p>
              The solution combined <strong>conversational design + UX Writing + strategic integrations</strong> to
              create an ecosystem of bots that resolve doubts, personalize service and generate business insights.
            </p>

            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">📱 WhatsApp RSVP</h4>
                <p className="text-muted-foreground">
                  Active guest confirmation flow, with scenario handling, error messages and visual feedback.
                </p>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">💬 Service bots</h4>
                <p className="text-muted-foreground">
                  Automated service via WhatsApp (Black plan) and website chat, with article recommendations and agent
                  transfer.
                </p>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">📊 Monitoring and iteration</h4>
                <p className="text-muted-foreground">
                  Dashboards in Metabase for funnel tracking, satisfaction and continuous improvements.
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Result",
        content: (
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <p className="text-muted-foreground">satisfaction rate in RSVP flows</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">-73%</div>
                <p className="text-muted-foreground">reduction in support tickets</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">📈 Qualitative impacts</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <strong className="text-foreground">24/7 service:</strong> continuous support without human dependency
                </li>
                <li>
                  <strong className="text-foreground">Higher response rate:</strong> guest engagement in confirmation
                  flow
                </li>
                <li>
                  <strong className="text-foreground">Operational cost reduction:</strong> fewer tickets and calls
                </li>
                <li>
                  <strong className="text-foreground">Positive feedback:</strong> couples praising the agility and
                  clarity of the flow
                </li>
              </ul>
            </div>

            <figure className="mt-4">
              <img
                src={img.botGraficoTickets}
                alt="Chart showing ticket reduction after bot implementation"
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
                Chart showing ticket reduction after bot implementation
              </figcaption>
            </figure>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-lg mb-4">Conclusion</h4>
              <p className="text-muted-foreground">
                iCasei's bot projects demonstrate that good strategic technology integration, with conversational
                design best practices, brings real and significant value to the business. With a high satisfaction
                rate, positive qualitative feedback and reduced operational costs, the project delivered expressive
                results that directly impacted customer experience improvement.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
};

export default casesDataEn;
