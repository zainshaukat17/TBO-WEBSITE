import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "website-design",
    name: "Website Design",
    category: "Foundation",
    icon: "monitor",
    tagline: "A site built to book jobs, not win design awards.",
    summary:
      "Fast, mobile-first contractor websites built around one job: turning a visitor into a booked estimate.",
    painPoints: [
      "The current site looks fine on a laptop and falls apart on the phone screen where most calls actually start.",
      "Nobody on staff can update a price, a service area, or a review without calling a web developer first.",
      "Traffic comes in from ads and search, but the site gives visitors no clear next step, so they leave.",
    ],
    deliverables: [
      {
        title: "Conversion-first page architecture",
        description:
          "Every service and city page is built around one primary action — call, form, or book — with proof and pricing context placed before the fold, not after it.",
      },
      {
        title: "Mobile-first build",
        description:
          "Designed and tested on a phone screen first, since the majority of home-services searches start and end there.",
      },
      {
        title: "Editable content system",
        description:
          "A CMS your team can actually use to update service areas, pricing notes, seasonal offers, and reviews without a developer ticket.",
      },
      {
        title: "Speed and technical SEO baseline",
        description:
          "Core Web Vitals, schema markup, and clean URL structure handled at launch, not retrofitted six months later.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit the current site and funnel",
        description:
          "We review analytics, call tracking, and every page a paid or organic visitor can land on to find where the current site loses jobs.",
      },
      {
        step: "02",
        title: "Map the buyer's path by service and trade",
        description:
          "A homeowner searching '24-hour emergency plumber' and one comparing 'kitchen remodel cost' need different pages, proof points, and calls to action. We map both.",
      },
      {
        step: "03",
        title: "Design, build, and QA",
        description:
          "Wireframes and design move to a working build in weekly checkpoints, tested across real devices before anything goes live.",
      },
      {
        step: "04",
        title: "Launch, track, and report",
        description:
          "Call tracking and form analytics go live with the site, and performance against the launch benchmark is reported on a fixed monthly cadence.",
      },
    ],
    stat: { value: "14-day", label: "Standard build sprint from signed scope to staging link" },
    faqs: [
      {
        q: "Do you build on WordPress or a custom platform?",
        a: "We scope the platform to the account — WordPress for teams that want in-house editing flexibility, a lighter framework for teams that want raw speed and are comfortable submitting content through us. We document the reasoning either way.",
      },
      {
        q: "Can you work with our existing branding?",
        a: "Yes. We build inside a client's existing brand guide by default. If a brand guide doesn't exist yet, that's scoped as a short, separate engagement before design starts.",
      },
      {
        q: "What happens to our old site's rankings?",
        a: "We run a full redirect map and technical migration checklist before launch so existing rankings and backlinks carry over instead of resetting to zero.",
      },
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    category: "Paid Advertising",
    icon: "target",
    tagline: "Paid search spend tracked to the keyword and the job.",
    summary:
      "Search and Performance Max campaigns built for one metric that matters: cost per booked job, not cost per click.",
    painPoints: [
      "Ad spend goes up every quarter and nobody can say which campaign, keyword, or ad actually produced a booked job.",
      "A previous agency or in-house effort is running the same broad-match keywords as every competitor in the same three-mile radius.",
      "Leads come in from the campaign, but there's no way to tell a real inquiry from a wrong number or a competitor click.",
    ],
    deliverables: [
      {
        title: "Keyword and geo structure by service line",
        description:
          "Campaigns split by service (install vs. repair vs. emergency) and by service area, so budget can be shifted toward what is actually converting.",
      },
      {
        title: "Call tracking and lead-quality tagging",
        description:
          "Every call and form is tracked back to the exact campaign, ad group, and keyword, and tagged as a real opportunity or not.",
      },
      {
        title: "Landing pages matched to intent",
        description:
          "Ad traffic lands on a page built for that specific search, not a generic homepage.",
      },
      {
        title: "Monthly performance reporting",
        description:
          "A fixed-format report covering spend, cost per lead, cost per booked job, and the specific changes made that cycle.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit spend and account structure",
        description:
          "We review the last 90 days of account data (or start from zero) to find wasted spend, missing negative keywords, and structural issues.",
      },
      {
        step: "02",
        title: "Build the offer and bidding strategy",
        description:
          "Budget, bid strategy, and ad copy are set against a documented target cost per booked job, not a generic industry benchmark.",
      },
      {
        step: "03",
        title: "Launch and monitor daily",
        description:
          "New campaigns are checked daily in the first two weeks to catch overspend, poor-quality traffic, or tracking gaps early.",
      },
      {
        step: "04",
        title: "Report, then reallocate",
        description:
          "Every reporting cycle ends with a specific reallocation decision — what gets more budget, what gets paused, and why.",
      },
    ],
    stat: { value: "100%", label: "Of calls and form fills tagged back to a specific campaign" },
    faqs: [
      {
        q: "What's a realistic starting budget?",
        a: "It depends on the trade and service area's cost per click, which we pull during the audit before recommending a number. We won't quote a budget before seeing the account's real market data.",
      },
      {
        q: "Do you require a long-term contract?",
        a: "Engagements run month to month after an initial evaluation period long enough for the account to reach a stable data baseline, typically 60–90 days.",
      },
      {
        q: "How is this different from Local Service Ads?",
        a: "Google Ads gives more control over keywords, ad copy, and landing pages. LSAs are pay-per-lead and appear above standard search ads. Most accounts we manage run both — see our Local Service Ads page.",
      },
    ],
  },
  {
    slug: "local-service-ads",
    name: "Local Service Ads (LSA)",
    category: "Paid Advertising",
    icon: "mapPin",
    tagline: "Google Guaranteed placement, managed and disputed for you.",
    summary:
      "Setup, budget management, and lead-dispute handling for Google's pay-per-lead Local Services Ads — the listings above the paid search results.",
    painPoints: [
      "The Google Guaranteed badge and background check process stalled out somewhere in setup, months ago.",
      "Budget gets spent on leads that were never a real customer — wrong number, out of service area, or a competitor.",
      "Nobody is disputing the leads that should have been credited back, so bad spend goes unquestioned every month.",
    ],
    deliverables: [
      {
        title: "Google Guaranteed application handling",
        description:
          "We manage the license, insurance, and background check submissions required to get the badge live.",
      },
      {
        title: "Budget and service-area tuning",
        description:
          "Weekly budget adjustments by service category and area based on lead volume and quality, not a set-and-forget budget.",
      },
      {
        title: "Lead dispute management",
        description:
          "Every disqualified lead — spam, wrong area, duplicate — is disputed with Google on a documented weekly cycle.",
      },
      {
        title: "Review generation workflow",
        description:
          "LSA ranking depends heavily on review volume and rating. We put a request workflow in place to keep both moving.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit or launch the profile",
        description:
          "Existing accounts are audited for approval status, budget efficiency, and dispute history. New accounts start the Google Guaranteed process immediately.",
      },
      {
        step: "02",
        title: "Set budget by service category",
        description:
          "Budget is allocated across the specific job types that convert best for that trade, not spread evenly across everything offered.",
      },
      {
        step: "03",
        title: "Manage leads weekly",
        description:
          "Every lead is reviewed, tagged, and disputed if disqualified, on a fixed weekly cycle rather than an occasional check-in.",
      },
      {
        step: "04",
        title: "Report and adjust",
        description:
          "Monthly reporting shows lead volume, dispute outcomes, and effective cost per qualified lead.",
      },
    ],
    stat: { value: "Weekly", label: "Lead dispute review cycle, documented every time" },
    faqs: [
      {
        q: "How long does Google Guaranteed approval take?",
        a: "Typically two to four weeks depending on how quickly licensing, insurance, and background check documentation come back — we manage the submission but the review sits with Google.",
      },
      {
        q: "What counts as a disputable lead?",
        a: "Wrong service area, wrong service category, spam, duplicate, or a lead that never responds after multiple documented contact attempts. We track and file these on your behalf.",
      },
      {
        q: "Does LSA replace Google Ads?",
        a: "No — they serve different intent and sit in different positions on the results page. Most contractor accounts run both in parallel once budget allows.",
      },
    ],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    category: "Paid Advertising",
    icon: "share",
    tagline: "Facebook and Instagram campaigns for demand you can't Google.",
    summary:
      "Awareness and remarketing campaigns on Facebook and Instagram for services homeowners don't search for directly — remodeling, solar, painting, flooring.",
    painPoints: [
      "Search ads work for emergency calls, but bigger-ticket jobs like remodels or solar rarely start with a direct Google search.",
      "Past boosted posts spent money on likes and comments instead of estimate requests.",
      "There's no remarketing in place for the visitors who looked at the site or a past estimate and never converted.",
    ],
    deliverables: [
      {
        title: "Offer and creative built for the trade",
        description:
          "Ad creative built around a specific offer — financing, a seasonal promotion, a portfolio project — rather than a generic 'contact us' post.",
      },
      {
        title: "Audience and remarketing structure",
        description:
          "Cold audiences by service area and interest, paired with a remarketing pool for site visitors and past estimate requests.",
      },
      {
        title: "Lead form and landing page setup",
        description:
          "Instant-form and landing-page options tested against each other, with the winner kept and the other retired.",
      },
      {
        title: "Monthly performance reporting",
        description:
          "Spend, cost per lead, and estimate-request volume, reported on the same fixed monthly cadence as every other channel.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit past spend and creative",
        description: "We review any past campaigns for what was actually optimized toward — engagement or leads.",
      },
      {
        step: "02",
        title: "Build the offer and audience map",
        description:
          "A specific offer, service area, and remarketing pool are defined before a single ad is built.",
      },
      {
        step: "03",
        title: "Launch and test creative in pairs",
        description: "New creative launches in controlled pairs so we know what's actually driving results, not guessing.",
      },
      {
        step: "04",
        title: "Report and reinvest",
        description: "Winning creative and audiences get more budget; underperformers are cut on a fixed monthly review.",
      },
    ],
    stat: { value: "A/B", label: "Every new creative set launches in a tested pair, not alone" },
    faqs: [
      {
        q: "Which trades see the best results with Meta Ads?",
        a: "Higher-consideration, higher-ticket work — remodeling, roofing replacement, solar, flooring, and painting — tends to perform best, since these buyers browse before they search.",
      },
      {
        q: "Do you handle the creative and copy too?",
        a: "Yes, working from your project photos and brand assets. If photo or video assets are limited, that's scoped through our Design and Editing services.",
      },
      {
        q: "Is Meta Ads worth it for emergency services?",
        a: "Usually not as a primary channel — emergency demand is better served by Google Ads and LSAs. We'll say so directly in the audit if that's the case for your account.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "Search & AI Visibility",
    icon: "search",
    tagline: "Rank for the jobs you actually want to win.",
    summary:
      "Technical, local, and content SEO built around the specific services and service areas that produce booked jobs.",
    painPoints: [
      "Rankings have been flat or slipping for the core service pages for months, with no clear explanation why.",
      "The Google Business Profile is unclaimed, unverified, or hasn't been updated since it was created.",
      "Competitors with worse work consistently outrank the business for the searches that matter most.",
    ],
    deliverables: [
      {
        title: "Technical SEO audit and fixes",
        description:
          "Site speed, crawlability, schema markup, and mobile usability issues identified and resolved on a documented punch list.",
      },
      {
        title: "Local SEO and Google Business Profile management",
        description:
          "Profile optimization, category and service accuracy, photo cadence, and review response management.",
      },
      {
        title: "Service and location page buildout",
        description:
          "Dedicated, non-duplicate pages for each service and each service area, built to rank rather than exist.",
      },
      {
        title: "Monthly ranking and traffic reporting",
        description:
          "Tracked keyword positions, organic traffic, and lead volume from organic search, on a fixed monthly report.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Technical and competitive audit",
        description:
          "A full crawl of the site paired with a review of the top-ranking competitors for the core service and location terms.",
      },
      {
        step: "02",
        title: "Build the keyword and page map",
        description:
          "Every target keyword is mapped to a specific page — new or existing — so nothing competes against itself.",
      },
      {
        step: "03",
        title: "Execute technical fixes and content",
        description:
          "Fixes and new content ship on a documented monthly schedule rather than an occasional batch.",
      },
      {
        step: "04",
        title: "Report and iterate",
        description:
          "Rankings and traffic are reviewed monthly against the original targets, and the plan is adjusted based on what's actually moving.",
      },
    ],
    stat: { value: "Monthly", label: "Ranking and organic traffic report, same format every cycle" },
    faqs: [
      {
        q: "How long until we see ranking movement?",
        a: "Local map pack movement can show in 60–90 days on an already-indexed site. Competitive organic rankings for high-volume terms typically take four to nine months of consistent work.",
      },
      {
        q: "Do you write the content yourselves?",
        a: "Yes, working from a documented brief on your services, service area, and differentiators, reviewed by your team before publishing.",
      },
      {
        q: "What's the difference between SEO and AEO or GEO?",
        a: "SEO targets traditional search results. AEO and GEO target answer boxes and AI assistants like Google AI Overviews, ChatGPT, and Perplexity. We treat them as a connected system — see our AEO and GEO pages.",
      },
    ],
  },
  {
    slug: "aeo",
    name: "AEO — Answer Engine Optimization",
    category: "Search & AI Visibility",
    icon: "message",
    tagline: "Structured to be the answer, not just a result.",
    summary:
      "Content and markup built so search engines can lift your business directly into featured snippets, People Also Ask boxes, and voice answers.",
    painPoints: [
      "Competitors show up in the featured snippet and voice search answers for questions this business could answer better.",
      "Content is written for humans to read but isn't structured for an algorithm to extract a direct answer from.",
      "There's no current strategy for the growing share of searches that end on the results page without a click.",
    ],
    deliverables: [
      {
        title: "Answer-formatted content structure",
        description:
          "Direct-answer paragraphs, FAQ schema, and clear headings built to be lifted into featured snippets and answer boxes.",
      },
      {
        title: "Structured data and schema markup",
        description:
          "FAQ, HowTo, and Service schema implemented site-wide so answer engines can parse and trust the content.",
      },
      {
        title: "Question-mapping research",
        description:
          "The actual questions homeowners ask about each service, sourced from search data and mapped to content.",
      },
      {
        title: "Answer-box tracking",
        description:
          "Ongoing monitoring of which questions the business owns an answer box for, and which are still open.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Map the questions being asked",
        description:
          "We pull the actual questions homeowners search around each service before writing a word of content.",
      },
      {
        step: "02",
        title: "Structure content for extraction",
        description:
          "Answers are written in the direct, concise format answer engines favor, backed by supporting detail underneath.",
      },
      {
        step: "03",
        title: "Implement schema markup",
        description: "FAQ and HowTo schema are added so the structure is machine-readable, not just human-readable.",
      },
      {
        step: "04",
        title: "Track and expand answer ownership",
        description:
          "We track which answer boxes are won and keep expanding the question map as new opportunities appear.",
      },
    ],
    stat: { value: "Schema-first", label: "Every service page ships with FAQ and Service markup, not bolted on later" },
    faqs: [
      {
        q: "What exactly is an answer engine?",
        a: "Any surface that gives a searcher a direct answer instead of a list of links — Google's featured snippets and AI Overviews, voice assistants, and People Also Ask boxes.",
      },
      {
        q: "Is this the same as SEO?",
        a: "It's a specialized layer on top of SEO. Good SEO fundamentals are required first; AEO is about formatting and structuring that content specifically to be extracted as a direct answer.",
      },
      {
        q: "Can you guarantee we win a featured snippet?",
        a: "No one can guarantee a specific placement Google controls — we can document exactly what was done to earn one and report on the results honestly.",
      },
    ],
  },
  {
    slug: "geo",
    name: "GEO — Generative Engine Optimization",
    category: "Search & AI Visibility",
    icon: "sparkles",
    tagline: "Get cited when ChatGPT and Perplexity answer for you.",
    summary:
      "Positioning and content built so AI assistants like ChatGPT, Perplexity, and Google's AI Overviews cite your business when homeowners ask for a recommendation.",
    painPoints: [
      "A growing share of homeowners now ask an AI assistant to recommend a local contractor instead of searching Google directly.",
      "There's no visibility into whether this business gets mentioned, or a competitor does, when that question is asked.",
      "Existing content wasn't built with AI training and retrieval sources in mind at all.",
    ],
    deliverables: [
      {
        title: "AI citation baseline audit",
        description:
          "We test how major AI assistants currently answer service and recommendation questions relevant to your business and market.",
      },
      {
        title: "Authoritative content and entity building",
        description:
          "Clear, well-sourced content and consistent business information across the web, since generative engines favor sources that agree with each other.",
      },
      {
        title: "Third-party citation and review strategy",
        description:
          "Directory, review platform, and press mentions built out, since AI models weight independent third-party sources heavily.",
      },
      {
        title: "Quarterly AI visibility reporting",
        description:
          "Retesting how the business appears in AI-generated answers each quarter, since these models update on their own timeline.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Baseline the current AI answer set",
        description:
          "We ask the major assistants the exact questions your customers would ask, and document what comes back today.",
      },
      {
        step: "02",
        title: "Build the entity and authority signals",
        description:
          "Consistent, structured, and verifiable information about the business is built across the site and third-party sources.",
      },
      {
        step: "03",
        title: "Publish citation-worthy content",
        description:
          "Content written to be a source an AI model would want to pull from and credit — specific, sourced, and current.",
      },
      {
        step: "04",
        title: "Retest and report quarterly",
        description:
          "Because generative engines update on their own schedule, we retest visibility quarterly rather than monthly.",
      },
    ],
    stat: { value: "Quarterly", label: "AI answer retesting cycle, since model behavior shifts on its own timeline" },
    faqs: [
      {
        q: "Is GEO replacing SEO?",
        a: "No — it's an additional layer running alongside SEO and AEO. Traditional search isn't going away, and the three disciplines share the same foundation of clear, structured, authoritative content.",
      },
      {
        q: "Which AI tools do you test against?",
        a: "ChatGPT, Perplexity, and Google's AI Overviews, since these carry the largest share of AI-assisted search and recommendation queries today.",
      },
      {
        q: "How is success measured here?",
        a: "By documented before-and-after answer testing on a defined question set — not a fabricated ranking number, since no public rank-tracking tool exists for AI answers yet.",
      },
    ],
  },
  {
    slug: "veo",
    name: "VEO — Video Engine Optimization",
    category: "Search & AI Visibility",
    icon: "play",
    tagline: "Show up where homeowners search with video, not text.",
    summary:
      "Video content and metadata built to rank inside YouTube, TikTok, and Instagram search — the platforms homeowners increasingly search directly instead of Google.",
    painPoints: [
      "A growing share of homeowners search platforms like YouTube and TikTok directly for 'before and after' and 'how much does it cost' content.",
      "Existing video, if any, has no title, description, or caption strategy built for search.",
      "There's no system turning finished jobs into searchable video content at all.",
    ],
    deliverables: [
      {
        title: "Video content plan by service",
        description:
          "A repeatable format — job walkthroughs, before-and-afters, FAQ answers — mapped to each service line.",
      },
      {
        title: "Search-optimized titles, descriptions, and captions",
        description:
          "Every video published with the title, description, tags, and captions structured for platform search, not left blank.",
      },
      {
        title: "Cross-platform publishing",
        description:
          "The same core content reformatted for YouTube, Instagram Reels, and TikTok rather than built three separate times.",
      },
      {
        title: "Monthly view and engagement reporting",
        description: "Views, watch time, and inquiry attribution tracked and reported on the standard monthly cycle.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit search demand on video platforms",
        description:
          "We check what homeowners are already searching for on YouTube and TikTok around your services before planning content.",
      },
      {
        step: "02",
        title: "Build a repeatable production format",
        description:
          "A format your crew can shoot on-site with minimal disruption, so content creation doesn't compete with getting jobs done.",
      },
      {
        step: "03",
        title: "Edit and publish with search metadata",
        description:
          "Every video ships with search-structured titles, descriptions, and captions across every platform it's published to.",
      },
      {
        step: "04",
        title: "Track and refine the format",
        description:
          "View and inquiry data determine which formats get repeated and which get retired each month.",
      },
    ],
    stat: { value: "Cross-platform", label: "Every core video reformatted for YouTube, Reels, and TikTok" },
    faqs: [
      {
        q: "Do we need to film our own footage?",
        a: "Raw footage from job sites works well and reads as authentic. Our Design and Editing service handles filming guidance, editing, and captioning from there.",
      },
      {
        q: "Which platforms does this cover?",
        a: "YouTube, Instagram Reels, and TikTok — the three platforms with the largest share of direct video search behavior among homeowners today.",
      },
      {
        q: "How does this connect to SMM?",
        a: "VEO is about search visibility on video platforms specifically. Our SMM service covers the broader social presence, posting cadence, and community management around it.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing (SMM)",
    category: "Social & Content",
    icon: "share",
    tagline: "A consistent presence that builds trust before the first call.",
    summary:
      "Ongoing social media management that keeps your business visibly active, credible, and top of mind between jobs.",
    painPoints: [
      "The business Facebook or Instagram page hasn't posted in months, which reads as inactive or out of business to a homeowner checking it.",
      "There's no one internally with the time to plan, shoot, and post content consistently.",
      "Past posting was inconsistent and untracked, with no sense of what actually built trust versus what was ignored.",
    ],
    deliverables: [
      {
        title: "Monthly content calendar",
        description: "A planned, approved posting schedule by platform, built around real job content rather than stock filler.",
      },
      {
        title: "Community management",
        description: "Comments, messages, and reviews monitored and responded to on a documented daily or next-business-day standard.",
      },
      {
        title: "Platform-specific formatting",
        description: "Content adapted to how each platform is actually used, not the same square image posted everywhere.",
      },
      {
        title: "Monthly performance reporting",
        description: "Reach, engagement, and inquiry attribution reported on the standard monthly cycle.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit current presence and content sources",
        description: "We review existing profiles and identify what job content, photos, and footage already exist to work with.",
      },
      {
        step: "02",
        title: "Build the content strategy and calendar",
        description: "A documented plan tied to our Content Strategy service, covering topics, cadence, and platform mix.",
      },
      {
        step: "03",
        title: "Produce and publish",
        description: "Content is designed, captioned, and published to a fixed monthly calendar, reviewed before it goes live.",
      },
      {
        step: "04",
        title: "Report and refine",
        description: "Performance is reviewed monthly, and the content mix is adjusted toward what's earning engagement and inquiries.",
      },
    ],
    stat: { value: "Documented", label: "Content calendar approved in advance, every single month" },
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "Typically Facebook, Instagram, and Google Business Profile posts for home-services businesses, with LinkedIn added for B2B-leaning trades like commercial roofing or restoration.",
      },
      {
        q: "Do you need our photos and videos, or do you create content?",
        a: "Both work. We build a plan around your existing job photos and footage first, and can arrange additional production through our Design and Editing service where needed.",
      },
      {
        q: "Is this the same as paid social advertising?",
        a: "No — SMM is organic content and community management. Paid promotion runs through our Meta Ads service, and the two are coordinated, not run in isolation.",
      },
    ],
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    category: "Social & Content",
    icon: "fileText",
    tagline: "One documented plan behind every page, post, and ad.",
    summary:
      "The research and planning layer that keeps website copy, blog content, social posts, and ad messaging aligned around what actually converts.",
    painPoints: [
      "Website copy, social posts, and ads all say something slightly different about the same services.",
      "Content gets created reactively — whatever comes to mind that week — instead of against a documented plan.",
      "There's no clear sense of which topics or messages have actually driven inquiries versus which were ignored.",
    ],
    deliverables: [
      {
        title: "Messaging framework by service and audience",
        description: "A documented reference for how each service is described, to whom, and with which proof points — used across every channel.",
      },
      {
        title: "Content calendar across channels",
        description: "One calendar covering website, blog, social, and email content, so nothing duplicates or contradicts.",
      },
      {
        title: "Competitive and keyword research",
        description: "A working view of what competitors publish and what homeowners actually search for, refreshed quarterly.",
      },
      {
        title: "Quarterly strategy review",
        description: "A documented review of what content performed, and what the plan becomes for the next quarter.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit existing content and messaging",
        description: "Every current page, post, and ad is reviewed for consistency and gaps against what customers actually ask.",
      },
      {
        step: "02",
        title: "Build the messaging framework",
        description: "A single documented reference for tone, proof points, and positioning by service and audience.",
      },
      {
        step: "03",
        title: "Plan the content calendar",
        description: "Topics and formats are scheduled across every channel from one shared plan, not built separately per channel.",
      },
      {
        step: "04",
        title: "Review and adjust quarterly",
        description: "Performance data feeds a documented quarterly review that updates the framework and calendar going forward.",
      },
    ],
    stat: { value: "One", label: "Shared messaging framework behind every channel, not five different ones" },
    faqs: [
      {
        q: "Is this a standalone service or does it come with everything else?",
        a: "It can run standalone, but it's most effective as the planning layer underneath SEO, SMM, Website Design, and paid campaigns — which is how most accounts run it.",
      },
      {
        q: "Who writes the actual content?",
        a: "Content Strategy sets the plan and framework. Execution runs through the relevant service — SEO for site content, SMM for social posts, and so on.",
      },
      {
        q: "How often does the strategy get revisited?",
        a: "Quarterly by default, or sooner if performance data or a business change — a new service line, a new service area — calls for it.",
      },
    ],
  },
  {
    slug: "social-platform-management",
    name: "Social Media Platform Handling",
    category: "Social & Content",
    icon: "sliders",
    tagline: "Every profile managed, monitored, and kept current.",
    summary:
      "Day-to-day administration of your business's social and directory profiles — settings, messaging, reviews, and platform updates — handled so nothing goes stale.",
    painPoints: [
      "Business hours, service areas, or contact information are out of date on one or more platforms, and nobody's checking.",
      "Messages and reviews sit unanswered for days because ownership of the inbox isn't clearly assigned.",
      "Platform algorithm and feature changes go unnoticed until they've already affected visibility.",
    ],
    deliverables: [
      {
        title: "Profile accuracy audits",
        description: "Hours, service areas, contact details, and categories checked and corrected across every active platform on a monthly cycle.",
      },
      {
        title: "Inbox and review monitoring",
        description: "Messages and reviews checked and responded to on a documented same-day or next-business-day standard.",
      },
      {
        title: "Platform change monitoring",
        description: "Algorithm and feature updates across major platforms tracked, with any needed adjustments made promptly.",
      },
      {
        title: "Access and security management",
        description: "Admin access, login credentials, and permissions kept organized and secure as staff or ownership changes.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Inventory every active profile",
        description: "We catalog every platform, directory, and profile currently associated with the business, active or dormant.",
      },
      {
        step: "02",
        title: "Correct and standardize information",
        description: "Business details are corrected and standardized across every profile so nothing conflicts.",
      },
      {
        step: "03",
        title: "Establish monitoring routines",
        description: "Daily or next-business-day standards are set for messages, reviews, and platform notifications.",
      },
      {
        step: "04",
        title: "Report and maintain",
        description: "A monthly summary confirms every profile is current, secure, and responsive.",
      },
    ],
    stat: { value: "Next-business-day", label: "Standard response window for messages and reviews, documented" },
    faqs: [
      {
        q: "How is this different from Social Media Marketing?",
        a: "SMM is about creating and posting content. Platform Handling is the operational layer underneath — accuracy, access, monitoring, and response — that keeps every profile functioning correctly.",
      },
      {
        q: "Which platforms are typically included?",
        a: "Facebook, Instagram, Google Business Profile, and relevant directories like Nextdoor, Angi, or Yelp, scoped to what's active for your business.",
      },
      {
        q: "Who owns the account credentials?",
        a: "You do. We work within a documented access structure that keeps you in control of every account while we handle the daily administration.",
      },
    ],
  },
  {
    slug: "graphic-design",
    name: "Design",
    category: "Social & Content",
    icon: "palette",
    tagline: "Visuals consistent enough to be recognized, not just seen.",
    summary:
      "Graphic design support for everything a contractor brand needs to look consistent — social graphics, ad creative, print materials, and sales collateral.",
    painPoints: [
      "Marketing materials look like they came from five different businesses because they were made by five different people over the years.",
      "There's no design system, so every new flyer, post, or truck wrap starts from a blank page.",
      "Design requests pile up because there's no dedicated resource to handle them consistently.",
    ],
    deliverables: [
      {
        title: "Brand-consistent template system",
        description: "Templates for social posts, ads, and print materials built inside your brand guide, so new assets stay consistent by default.",
      },
      {
        title: "Campaign and seasonal creative",
        description: "Design support for specific campaigns, promotions, and seasonal offers as they come up.",
      },
      {
        title: "Sales and field collateral",
        description: "Estimate templates, leave-behinds, door hangers, and truck or yard-sign graphics designed to match the digital brand.",
      },
      {
        title: "Documented brand guide",
        description: "If one doesn't exist yet, we build the foundational guide — colors, type, logo usage — everything else is built on.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit existing brand assets",
        description: "We collect and review every logo file, past design, and brand asset currently in use.",
      },
      {
        step: "02",
        title: "Build or confirm the brand system",
        description: "A documented guide for color, type, and logo usage is built or confirmed before new design work starts.",
      },
      {
        step: "03",
        title: "Produce templated and campaign assets",
        description: "Recurring assets move to templates; one-off campaign work is designed against the same guide.",
      },
      {
        step: "04",
        title: "Maintain consistency over time",
        description: "New requests are checked against the brand guide before they ship, so consistency holds as the volume of assets grows.",
      },
    ],
    stat: { value: "One", label: "Documented brand guide governing every asset we produce" },
    faqs: [
      {
        q: "Do you design logos from scratch?",
        a: "Yes, as a scoped project for businesses that need one, or a refresh for an existing mark that's aged out.",
      },
      {
        q: "Can you match our existing brand exactly?",
        a: "Yes — we work from an existing brand guide when one exists, or reverse-document one from current materials before producing anything new.",
      },
      {
        q: "Does this cover website design too?",
        a: "Website design and build run through our dedicated Website Design service, using the same brand system this team maintains.",
      },
    ],
  },
  {
    slug: "photo-video-editing",
    name: "Editing",
    category: "Social & Content",
    icon: "sliders",
    tagline: "Raw job-site footage, turned into content that sells.",
    summary:
      "Photo and video editing that turns raw job-site footage and photos into publish-ready content for the site, social, and ads.",
    painPoints: [
      "There's a phone full of job-site photos and clips that never turn into finished, usable content.",
      "Past video content looks unpolished in ways that undercut the quality of the actual work being marketed.",
      "There's no consistent process for turning a finished job into a before-and-after post or case study.",
    ],
    deliverables: [
      {
        title: "Photo editing and curation",
        description: "Job-site photos color-corrected, cropped, and curated into a usable library organized by service and project.",
      },
      {
        title: "Video editing for every platform",
        description: "Raw footage cut into platform-specific formats — vertical for Reels and TikTok, horizontal for YouTube and the website.",
      },
      {
        title: "Before-and-after and case study assembly",
        description: "Finished jobs assembled into before-and-after content and short case studies ready to publish.",
      },
      {
        title: "Captioning and accessibility",
        description: "Captions added to every video by default, supporting both accessibility and platform search.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Set up a simple capture workflow",
        description: "We give your crew a lightweight, repeatable way to capture usable photos and footage on-site without slowing down the job.",
      },
      {
        step: "02",
        title: "Collect and organize raw content",
        description: "Footage and photos are collected on a regular cadence and organized by service and project.",
      },
      {
        step: "03",
        title: "Edit for each destination",
        description: "Content is edited specifically for where it's going — website, social, ads — rather than one generic cut reused everywhere.",
      },
      {
        step: "04",
        title: "Deliver on a documented schedule",
        description: "Finished content is delivered against the shared content calendar, ready to publish, not sitting in a queue.",
      },
    ],
    stat: { value: "Captioned", label: "Every video shipped with captions, by default, every time" },
    faqs: [
      {
        q: "What equipment do we need on-site?",
        a: "In most cases, a modern smartphone is enough. We provide a simple shot list and guidance so your crew can capture usable footage without additional gear.",
      },
      {
        q: "How fast is turnaround on edited content?",
        a: "Standard turnaround is documented in your content calendar and typically runs five to seven business days per batch, faster for time-sensitive campaigns.",
      },
      {
        q: "Do you also handle the filming itself?",
        a: "Our core model works from crew-captured footage to keep costs down. On-site production can be scoped separately for specific campaigns.",
      },
    ],
  },
  {
    slug: "lead-nurturing",
    name: "Lead Nurturing",
    category: "Conversion",
    icon: "funnel",
    tagline: "Every lead followed up, every time, on a system, not memory.",
    summary:
      "Automated and templated follow-up systems that make sure a lead who isn't ready today doesn't disappear before they're ready to book.",
    painPoints: [
      "Leads that don't book on the first call or form fill just disappear, with no follow-up system catching them.",
      "Estimate requests sit for days before anyone responds, and the job goes to whoever called back first.",
      "There's no visibility into how many past leads are still open, warm, or worth a second outreach.",
    ],
    deliverables: [
      {
        title: "Automated follow-up sequences",
        description: "Email and text sequences triggered by lead source and behavior, so no inquiry goes untouched.",
      },
      {
        title: "Speed-to-lead response system",
        description: "Immediate acknowledgment set up for every new lead, since response time is one of the strongest predictors of booking rate.",
      },
      {
        title: "CRM and pipeline organization",
        description: "Leads tracked through a documented pipeline stage by stage, so nothing falls through without visibility.",
      },
      {
        title: "Monthly pipeline reporting",
        description: "A report on lead volume, follow-up performance, and where leads are stalling in the pipeline.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit the current follow-up process",
        description: "We review how leads are currently captured, assigned, and followed up on, and identify the gaps.",
      },
      {
        step: "02",
        title: "Build the pipeline and sequences",
        description: "A documented pipeline and automated sequence are built around your sales process, not a generic template.",
      },
      {
        step: "03",
        title: "Implement and connect systems",
        description: "The system is connected to your existing forms, calls, and CRM or set up fresh if none exists.",
      },
      {
        step: "04",
        title: "Report and refine",
        description: "Pipeline performance is reviewed monthly, and sequences are adjusted based on where leads actually convert or stall.",
      },
    ],
    stat: { value: "Immediate", label: "Acknowledgment sent the moment a new lead comes in, every time" },
    faqs: [
      {
        q: "Do we need a CRM already in place?",
        a: "No — we can implement a CRM as part of this engagement, or connect into an existing one like HubSpot, Jobber, or ServiceTitan.",
      },
      {
        q: "How is this different from just hiring an office admin?",
        a: "This runs as a documented, always-on system rather than depending on one person's availability. It works alongside your team, not instead of them.",
      },
      {
        q: "Does this work for emergency and non-emergency leads differently?",
        a: "Yes — sequences are built by lead type, since a 2 a.m. plumbing emergency and a spring landscaping quote request need very different response timing and messaging.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories: Service["category"][] = [
  "Foundation",
  "Paid Advertising",
  "Search & AI Visibility",
  "Social & Content",
  "Conversion",
];
