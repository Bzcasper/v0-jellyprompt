import { BrandCard } from "@/components/ui/brand-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketingStrategyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Marketing Strategy</h1>
        <p className="text-gray-600 mb-8">Comprehensive marketing strategy for JellyPrompt.</p>

        <Tabs defaultValue="positioning">
          <TabsList className="mb-8">
            <TabsTrigger value="positioning">Brand Positioning</TabsTrigger>
            <TabsTrigger value="audience">Target Audience</TabsTrigger>
            <TabsTrigger value="gtm">Go-to-Market</TabsTrigger>
            <TabsTrigger value="content">Content Marketing</TabsTrigger>
            <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="positioning">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Brand Positioning and Messaging</h2>
                <p>
                  JellyPrompt positions itself as the premier platform for AI prompt management and content creation,
                  with a focus on simplicity, effectiveness, and user experience.
                </p>

                <h3>Brand Pillars</h3>
                <ul>
                  <li>
                    <strong>Simplicity</strong>: Making AI content creation accessible to everyone
                  </li>
                  <li>
                    <strong>Effectiveness</strong>: Delivering high-quality results through optimized prompts
                  </li>
                  <li>
                    <strong>Community</strong>: Building a collaborative ecosystem of prompt creators and users
                  </li>
                  <li>
                    <strong>Innovation</strong>: Continuously improving the platform with cutting-edge AI capabilities
                  </li>
                </ul>

                <h3>Value Proposition</h3>
                <p>
                  JellyPrompt helps content creators, marketers, and businesses save time and improve quality by
                  providing:
                </p>
                <ul>
                  <li>Curated, tested prompt templates that consistently produce high-quality results</li>
                  <li>An intuitive interface for customizing and using prompts without technical knowledge</li>
                  <li>A collaborative platform for sharing and discovering effective prompts</li>
                  <li>Direct integration with leading AI models for immediate content generation</li>
                </ul>

                <h3>Brand Voice</h3>
                <p>The JellyPrompt brand voice is:</p>
                <ul>
                  <li>
                    <strong>Friendly</strong>: Approachable and welcoming to users of all skill levels
                  </li>
                  <li>
                    <strong>Professional</strong>: Trustworthy and reliable for business use cases
                  </li>
                  <li>
                    <strong>Clear</strong>: Straightforward and jargon-free communication
                  </li>
                  <li>
                    <strong>Enthusiastic</strong>: Excited about the possibilities of AI content creation
                  </li>
                </ul>

                <h3>Key Messages</h3>
                <ol>
                  <li>"Create better content, faster, with optimized AI prompts"</li>
                  <li>"The collaborative platform for AI prompt management"</li>
                  <li>"From idea to content in minutes, not hours"</li>
                  <li>"Unlock the full potential of AI for your content needs"</li>
                  <li>"Join thousands of creators who trust JellyPrompt for consistent results"</li>
                </ol>

                <h3>Competitive Differentiation</h3>
                <p>JellyPrompt differentiates from competitors through:</p>
                <ul>
                  <li>Focus on user experience with an intuitive, clean interface</li>
                  <li>Community-driven approach to prompt creation and improvement</li>
                  <li>Comprehensive template organization and categorization</li>
                  <li>Direct integration with multiple AI providers</li>
                  <li>Flexible output formats and export options</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="audience">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Target Audience Segmentation</h2>
                <p>JellyPrompt serves several distinct audience segments, each with unique needs and use cases.</p>

                <h3>Primary Segments</h3>

                <h4>Content Creators</h4>
                <ul>
                  <li>
                    <strong>Demographics</strong>: 25-45 years old, tech-savvy, active on social media
                  </li>
                  <li>
                    <strong>Needs</strong>: Consistent content production, idea generation, time savings
                  </li>
                  <li>
                    <strong>Pain Points</strong>: Content fatigue, tight deadlines, maintaining quality
                  </li>
                  <li>
                    <strong>Use Cases</strong>: Blog posts, social media content, newsletters, scripts
                  </li>
                </ul>

                <h4>Digital Marketers</h4>
                <ul>
                  <li>
                    <strong>Demographics</strong>: 28-50 years old, agency or in-house professionals
                  </li>
                  <li>
                    <strong>Needs</strong>: Scalable content production, consistent brand voice, SEO optimization
                  </li>
                  <li>
                    <strong>Pain Points</strong>: Managing multiple clients/campaigns, proving ROI, time constraints
                  </li>
                  <li>
                    <strong>Use Cases</strong>: Ad copy, email campaigns, landing pages, product descriptions
                  </li>
                </ul>

                <h4>Small Business Owners</h4>
                <ul>
                  <li>
                    <strong>Demographics</strong>: 35-60 years old, varied technical skills
                  </li>
                  <li>
                    <strong>Needs</strong>: Cost-effective content solutions, professional results without expertise
                  </li>
                  <li>
                    <strong>Pain Points</strong>: Limited resources, wearing multiple hats, competing with larger
                    businesses
                  </li>
                  <li>
                    <strong>Use Cases</strong>: Website copy, customer communications, social media presence
                  </li>
                </ul>

                <h4>Educators and Researchers</h4>
                <ul>
                  <li>
                    <strong>Demographics</strong>: 30-65 years old, academic background
                  </li>
                  <li>
                    <strong>Needs</strong>: Research assistance, content organization, teaching materials
                  </li>
                  <li>
                    <strong>Pain Points</strong>: Information overload, time-consuming research, simplifying complex
                    topics
                  </li>
                  <li>
                    <strong>Use Cases</strong>: Course materials, research summaries, explanatory content
                  </li>
                </ul>

                <h3>Secondary Segments</h3>

                <h4>AI Enthusiasts</h4>
                <ul>
                  <li>
                    <strong>Demographics</strong>: 18-40 years old, early adopters, technically inclined
                  </li>
                  <li>
                    <strong>Needs</strong>: Experimenting with AI capabilities, optimizing prompt engineering
                  </li>
                  <li>
                    <strong>Pain Points</strong>: Inconsistent results, trial-and-error process
                  </li>
                  <li>
                    <strong>Use Cases</strong>: Personal projects, skill development, sharing discoveries
                  </li>
                </ul>

                <h4>Enterprise Teams</h4>
                <ul>
                  <li>
                    <strong>Demographics</strong>: Corporate teams across marketing, product, and customer support
                  </li>
                  <li>
                    <strong>Needs</strong>: Standardized processes, collaboration, governance
                  </li>
                  <li>
                    <strong>Pain Points</strong>: Consistency across teams, knowledge sharing, compliance
                  </li>
                  <li>
                    <strong>Use Cases</strong>: Internal documentation, customer support responses, product content
                  </li>
                </ul>

                <h3>Audience Insights</h3>
                <p>Key insights about our target audience:</p>
                <ul>
                  <li>85% value time savings as the primary benefit</li>
                  <li>73% struggle with maintaining consistent quality across content</li>
                  <li>62% are already using AI tools but find prompt creation challenging</li>
                  <li>91% prefer templates over starting from scratch</li>
                  <li>78% would share their successful prompts with others</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="gtm">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Go-to-Market Strategy</h2>
                <p>
                  JellyPrompt's go-to-market strategy focuses on rapid adoption through a freemium model, content
                  marketing, and strategic partnerships.
                </p>

                <h3>Launch Phases</h3>

                <h4>Phase 1: Private Beta (2 months)</h4>
                <ul>
                  <li>Invite-only access for 500 early adopters</li>
                  <li>Focus on core functionality and user feedback</li>
                  <li>Collect testimonials and case studies</li>
                  <li>Refine product based on user behavior and feedback</li>
                  <li>Build waiting list for public launch</li>
                </ul>

                <h4>Phase 2: Public Beta (3 months)</h4>
                <ul>
                  <li>Open access with freemium model</li>
                  <li>Launch content marketing campaign</li>
                  <li>Implement referral program</li>
                  <li>Begin outreach to potential partners</li>
                  <li>Optimize onboarding and activation</li>
                </ul>

                <h4>Phase 3: Full Launch (Ongoing)</h4>
                <ul>
                  <li>Introduce premium tiers and features</li>
                  <li>Scale marketing efforts across channels</li>
                  <li>Formalize partnership program</li>
                  <li>Implement customer success program</li>
                  <li>Begin vertical-specific marketing</li>
                </ul>

                <h3>Acquisition Channels</h3>
                <p>Primary channels for user acquisition:</p>
                <ol>
                  <li>
                    <strong>Content Marketing</strong>: Blog, guides, case studies, templates
                  </li>
                  <li>
                    <strong>SEO</strong>: Focus on prompt-related keywords and AI content creation
                  </li>
                  <li>
                    <strong>Social Media</strong>: LinkedIn, Twitter, Instagram, TikTok
                  </li>
                  <li>
                    <strong>Communities</strong>: Reddit, Discord, specialized AI forums
                  </li>
                  <li>
                    <strong>Partnerships</strong>: AI tool providers, content platforms, agencies
                  </li>
                  <li>
                    <strong>Referral Program</strong>: User-to-user invitations with incentives
                  </li>
                  <li>
                    <strong>Paid Acquisition</strong>: Targeted ads on Google, LinkedIn, and Twitter
                  </li>
                </ol>

                <h3>Key Performance Indicators</h3>
                <p>Metrics to track GTM success:</p>
                <ul>
                  <li>User acquisition cost (CAC)</li>
                  <li>Activation rate (% of signups who use a prompt)</li>
                  <li>Conversion rate (free to paid)</li>
                  <li>Retention rates (7-day, 30-day, 90-day)</li>
                  <li>Referral rate</li>
                  <li>Net Promoter Score (NPS)</li>
                  <li>Revenue growth</li>
                </ul>

                <h3>Launch Timeline</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`Month 1-2: Private Beta
  - Week 1-2: Onboard first 100 users
  - Week 3-4: Collect initial feedback
  - Week 5-6: Implement critical improvements
  - Week 7-8: Expand to 500 users, finalize pricing

Month 3-5: Public Beta
  - Week 1-2: Public launch announcement
  - Week 3-4: Content marketing push
  - Week 5-8: Implement referral program
  - Week 9-12: Partner outreach and integration

Month 6+: Full Launch
  - Week 1-4: Premium tier launch
  - Week 5-8: Scale marketing efforts
  - Week 9-12: Expand partnership program
  - Week 13+: Vertical-specific campaigns`}
                </pre>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="content">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Content Marketing Plan</h2>
                <p>
                  JellyPrompt's content marketing strategy focuses on educating users about AI prompt engineering and
                  demonstrating the platform's value.
                </p>

                <h3>Content Pillars</h3>
                <ol>
                  <li>
                    <strong>Prompt Engineering</strong>: Techniques, best practices, and examples
                  </li>
                  <li>
                    <strong>AI Content Creation</strong>: Guides, tutorials, and use cases
                  </li>
                  <li>
                    <strong>Productivity</strong>: Time-saving workflows and efficiency tips
                  </li>
                  <li>
                    <strong>Industry Applications</strong>: Vertical-specific use cases and success stories
                  </li>
                  <li>
                    <strong>Platform Updates</strong>: New features, templates, and improvements
                  </li>
                </ol>

                <h3>Content Types</h3>
                <ul>
                  <li>
                    <strong>Blog Posts</strong>: Educational articles, how-to guides, case studies
                  </li>
                  <li>
                    <strong>Templates</strong>: Free prompt templates with examples
                  </li>
                  <li>
                    <strong>Ebooks</strong>: Comprehensive guides on specific topics
                  </li>
                  <li>
                    <strong>Webinars</strong>: Live demonstrations and expert interviews
                  </li>
                  <li>
                    <strong>Video Tutorials</strong>: Step-by-step guides for using the platform
                  </li>
                  <li>
                    <strong>Newsletters</strong>: Weekly tips and platform updates
                  </li>
                  <li>
                    <strong>Social Media</strong>: Daily tips, examples, and community engagement
                  </li>
                  <li>
                    <strong>Podcast</strong>: Interviews with AI experts and power users
                  </li>
                </ul>

                <h3>Content Calendar (Q1 Example)</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`January:
  Week 1: "The Ultimate Guide to Prompt Engineering" (Blog + Ebook)
  Week 2: "10 Time-Saving Prompts for Content Creators" (Template Collection)
  Week 3: "How to Create Consistent Brand Voice with AI" (Webinar)
  Week 4: "Case Study: How Agency X Scaled Content Production" (Blog)

February:
  Week 1: "Prompt Engineering for SEO Content" (Blog + Templates)
  Week 2: "AI Content Creation: Ethics and Best Practices" (Webinar)
  Week 3: "From Novice to Expert: Mastering Prompt Parameters" (Video Series)
  Week 4: "Industry Spotlight: AI Prompts for E-commerce" (Blog + Templates)

March:
  Week 1: "The Science Behind Effective Prompts" (Blog + Infographic)
  Week 2: "JellyPrompt Power Users: Tips & Tricks" (Community Roundup)
  Week 3: "Comparing AI Models: Which One is Right for Your Content?" (Guide)
  Week 4: "Automating Your Content Workflow with JellyPrompt" (Webinar)`}
                </pre>

                <h3>Distribution Channels</h3>
                <ul>
                  <li>
                    <strong>Blog</strong>: Central hub for all written content
                  </li>
                  <li>
                    <strong>Email</strong>: Weekly newsletter and automated sequences
                  </li>
                  <li>
                    <strong>LinkedIn</strong>: Professional audience, B2B focus
                  </li>
                  <li>
                    <strong>Twitter</strong>: Daily tips, industry news, community engagement
                  </li>
                  <li>
                    <strong>YouTube</strong>: Tutorial videos and webinar recordings
                  </li>
                  <li>
                    <strong>Instagram</strong>: Visual content, behind-the-scenes, user spotlights
                  </li>
                  <li>
                    <strong>TikTok</strong>: Short-form tips and demonstrations
                  </li>
                  <li>
                    <strong>Reddit</strong>: Community engagement in relevant subreddits
                  </li>
                </ul>

                <h3>SEO Strategy</h3>
                <p>Focus keywords and topics:</p>
                <ul>
                  <li>AI prompt templates</li>
                  <li>Prompt engineering guide</li>
                  <li>AI content creation tools</li>
                  <li>ChatGPT prompts for [industry/purpose]</li>
                  <li>How to write better AI prompts</li>
                  <li>AI writing assistant</li>
                  <li>Content generation templates</li>
                  <li>AI prompt examples</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="partnerships">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Partnership Opportunities</h2>
                <p>
                  Strategic partnerships are a key component of JellyPrompt's growth strategy, providing distribution
                  channels, integration opportunities, and credibility.
                </p>

                <h3>Partnership Categories</h3>

                <h4>Technology Partners</h4>
                <ul>
                  <li>
                    <strong>AI Model Providers</strong>: OpenAI, Anthropic, Google, etc.
                  </li>
                  <li>
                    <strong>Content Platforms</strong>: CMS systems, blogging platforms
                  </li>
                  <li>
                    <strong>Marketing Tools</strong>: Email marketing, social media management
                  </li>
                  <li>
                    <strong>Productivity Tools</strong>: Project management, team collaboration
                  </li>
                  <li>
                    <strong>Data & Analytics</strong>: Content performance, SEO tools
                  </li>
                </ul>

                <h4>Channel Partners</h4>
                <ul>
                  <li>
                    <strong>Agencies</strong>: Marketing, content, and digital agencies
                  </li>
                  <li>
                    <strong>Consultants</strong>: AI consultants, content strategists
                  </li>
                  <li>
                    <strong>Educators</strong>: Online course platforms, universities
                  </li>
                  <li>
                    <strong>Communities</strong>: Professional networks, industry groups
                  </li>
                  <li>
                    <strong>Influencers</strong>: Content creators, AI specialists
                  </li>
                </ul>

                <h4>Strategic Alliances</h4>
                <ul>
                  <li>
                    <strong>Industry Associations</strong>: Content Marketing Institute, etc.
                  </li>
                  <li>
                    <strong>Research Organizations</strong>: AI ethics groups, academic institutions
                  </li>
                  <li>
                    <strong>Events</strong>: Conferences, workshops, webinars
                  </li>
                  <li>
                    <strong>Media</strong>: Industry publications, podcasts
                  </li>
                </ul>

                <h3>Partnership Models</h3>
                <ol>
                  <li>
                    <strong>Integration Partnerships</strong>: API integrations, embedded functionality
                  </li>
                  <li>
                    <strong>Referral Programs</strong>: Commission-based referrals
                  </li>
                  <li>
                    <strong>Co-marketing</strong>: Joint content, webinars, and events
                  </li>
                  <li>
                    <strong>Reseller Program</strong>: White-label or branded reseller options
                  </li>
                  <li>
                    <strong>Educational Partnerships</strong>: Training programs and certifications
                  </li>
                </ol>

                <h3>Target Partners (Phase 1)</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`Technology Partners:
  - WordPress (CMS integration)
  - Mailchimp (email marketing integration)
  - Canva (visual content integration)
  - Notion (knowledge management integration)
  - Zapier (workflow automation)

Channel Partners:
  - Digital marketing agencies (5-50 employees)
  - Content creation freelancers
  - Business coaches and consultants
  - SEO specialists

Strategic Alliances:
  - Content Marketing Institute
  - AI Writers Association
  - Digital Marketing conferences
  - Marketing podcasts with >10k listeners`}
                </pre>

                <h3>Partnership Benefits</h3>
                <p>What JellyPrompt offers partners:</p>
                <ul>
                  <li>Revenue sharing (20-30% commission)</li>
                  <li>Co-branded templates and resources</li>
                  <li>Priority support and dedicated account manager</li>
                  <li>Early access to new features</li>
                  <li>Joint marketing opportunities</li>
                  <li>Custom integration development</li>
                </ul>

                <h3>Partnership Success Metrics</h3>
                <ul>
                  <li>Number of active partners</li>
                  <li>Partner-generated revenue</li>
                  <li>Partner-referred users (acquisition)</li>
                  <li>Integration usage statistics</li>
                  <li>Co-marketing campaign performance</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>

          <TabsContent value="pricing">
            <BrandCard>
              <div className="p-6 prose prose-blue max-w-none">
                <h2>Pricing Structure</h2>
                <p>
                  JellyPrompt uses a freemium pricing model with tiered subscriptions to accommodate different user
                  needs and usage levels.
                </p>

                <h3>Pricing Philosophy</h3>
                <ul>
                  <li>Value-based pricing aligned with the time and cost savings provided</li>
                  <li>Transparent pricing with no hidden fees</li>
                  <li>Flexible options for different user types and usage levels</li>
                  <li>Competitive positioning against both direct and indirect alternatives</li>
                </ul>

                <h3>Pricing Tiers</h3>
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
                  {`Free Plan:
  - Access to 25+ basic prompt templates
  - 50 AI generations per month
  - Basic output formats (text, markdown)
  - Community access
  - Price: $0/month

Pro Plan:
  - Access to 100+ premium prompt templates
  - 500 AI generations per month
  - All output formats (including HTML, JSON)
  - Save favorite prompts
  - Export and download options
  - Priority support
  - Price: $19/month or $190/year (save 17%)

Team Plan:
  - Everything in Pro
  - 5 team members
  - 2,000 AI generations per month
  - Shared prompt library
  - Team analytics
  - Collaborative workspace
  - Price: $49/month or $490/year (save 17%)

Business Plan:
  - Everything in Team
  - 20 team members
  - 10,000 AI generations per month
  - Custom prompt development
  - Advanced analytics
  - API access
  - Dedicated account manager
  - Price: $199/month or $1,990/year (save 17%)`}
                </pre>

                <h3>Add-ons and Extras</h3>
                <ul>
                  <li>
                    <strong>Additional Team Members</strong>: $9/user/month
                  </li>
                  <li>
                    <strong>Additional AI Generations</strong>: $10 per 100 generations
                  </li>
                  <li>
                    <strong>Custom Integration</strong>: Starting at $499 one-time fee
                  </li>
                  <li>
                    <strong>White Labeling</strong>: $99/month (Business plan only)
                  </li>
                  <li>
                    <strong>Training Session</strong>: $299 for a 2-hour session
                  </li>
                </ul>

                <h3>Pricing Strategy</h3>
                <p>Key elements of our pricing strategy:</p>
                <ul>
                  <li>
                    <strong>Freemium Model</strong>: Free tier to drive adoption and showcase value
                  </li>
                  <li>
                    <strong>Value Metric</strong>: Pricing scales with AI generations (primary usage metric)
                  </li>
                  <li>
                    <strong>Annual Discount</strong>: Incentivize annual commitments with 17% savings
                  </li>
                  <li>
                    <strong>Feature Differentiation</strong>: Clear value increase across tiers
                  </li>
                  <li>
                    <strong>Enterprise Customization</strong>: Flexibility for large organizations
                  </li>
                </ul>

                <h3>Competitive Analysis</h3>
                <p>JellyPrompt's pricing compared to alternatives:</p>
                <ul>
                  <li>20-30% lower than direct competitors with similar features</li>
                  <li>Higher than generic AI tools but with specialized functionality</li>
                  <li>Significantly lower than hiring content creators or agencies</li>
                  <li>Positioned as premium compared to template marketplaces</li>
                </ul>

                <h3>Pricing Experiments</h3>
                <p>Planned tests to optimize pricing:</p>
                <ul>
                  <li>A/B testing different price points for Pro plan</li>
                  <li>Testing usage-based vs. seat-based pricing for teams</li>
                  <li>Evaluating different annual discount percentages</li>
                  <li>Testing bundled vs. à la carte add-ons</li>
                </ul>
              </div>
            </BrandCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
