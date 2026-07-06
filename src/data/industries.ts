import type { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    pluralName: "HVAC Contractors",
    icon: "wind",
    summary:
      "Marketing built around HVAC's two real demand cycles: planned replacement season and no-notice emergency breakdowns.",
    challenges: [
      "Emergency 'no heat' and 'no AC' searches spike without warning and need to convert in minutes, not days.",
      "Planned system replacement is a high-ticket, considered purchase competing against three other quotes.",
      "Maintenance plan and membership renewals are easy to let lapse without a documented follow-up system.",
    ],
    approach: [
      {
        title: "Split campaigns by urgency",
        description:
          "Emergency repair and planned replacement searches get separate campaigns, landing pages, and messaging, since a homeowner in each situation needs a different answer.",
      },
      {
        title: "Own the local map pack for repair terms",
        description:
          "SEO and Google Business Profile work is weighted toward the highest-intent local repair and 'near me' searches first.",
      },
      {
        title: "Nurture the maintenance plan pipeline",
        description:
          "Automated follow-up keeps membership renewals and seasonal tune-up reminders from falling through.",
      },
    ],
    stats: [
      { value: "2", label: "Distinct demand cycles built into every HVAC campaign structure" },
      { value: "24/7", label: "Emergency landing pages designed to convert on mobile, day or night" },
    ],
    featuredServices: ["local-service-ads", "google-ads", "seo", "lead-nurturing"],
    faqs: [
      {
        q: "Do you separate residential and commercial HVAC campaigns?",
        a: "Yes — the buyer, sales cycle, and keywords are different enough that we build them as separate campaign structures from the start.",
      },
      {
        q: "How do you handle seasonal demand swings?",
        a: "Budget and content calendars are planned around the shoulder seasons for system replacement and the peak weeks for emergency repair, documented ahead of time rather than reacted to.",
      },
    ],
  },
  {
    slug: "electrician",
    name: "Electrician",
    pluralName: "Electrical Contractors",
    icon: "bolt",
    summary:
      "Marketing that separates urgent electrical safety calls from planned panel upgrades, EV charger installs, and remodel wiring work.",
    challenges: [
      "Safety-driven searches like 'sparking outlet' or 'no power' need an immediate, trustworthy response.",
      "Panel upgrades and EV charger installs are growing categories that need dedicated content, not an afterthought page.",
      "Licensing and certification credentials aren't prominent enough to build trust before the first call.",
    ],
    approach: [
      {
        title: "Lead with licensing and safety credibility",
        description:
          "License numbers, certifications, and insurance are surfaced early on every page, since trust is the primary barrier for electrical work.",
      },
      {
        title: "Dedicated pages for growth categories",
        description:
          "EV charger installation and panel upgrades get their own SEO and ad campaigns, separate from general repair.",
      },
      {
        title: "Fast-response paid coverage for safety calls",
        description: "LSAs and Google Ads are weighted to capture urgent, safety-related searches at the top of results.",
      },
    ],
    stats: [
      { value: "3", label: "Core campaign tracks: emergency, panel/EV, and general electrical work" },
      { value: "Licensed", label: "Credential and certification proof placed above the fold, every page" },
    ],
    featuredServices: ["local-service-ads", "seo", "website-design", "google-ads"],
    faqs: [
      {
        q: "Can you help us compete for EV charger installation demand specifically?",
        a: "Yes — this is one of the fastest-growing search categories in the trade and we build dedicated pages and campaigns for it rather than folding it into general services.",
      },
      {
        q: "How do you handle multi-state or multi-license service areas?",
        a: "Service area and licensing information is structured page by page so each location shows the correct credentials for that jurisdiction.",
      },
    ],
  },
  {
    slug: "flooring",
    name: "Flooring",
    pluralName: "Flooring Companies",
    icon: "layers",
    summary:
      "Visual, portfolio-led marketing for a category where homeowners shop by material, style, and finished-project photos before they call.",
    challenges: [
      "Flooring is a highly visual purchase, and a site or social presence without strong project photography loses the sale before the call.",
      "Homeowners compare material options — hardwood, LVP, tile, carpet — and need content that helps them choose, not just a quote form.",
      "Showroom or in-home consultation booking is often clunky compared to a simple call-to-book flow.",
    ],
    approach: [
      {
        title: "Build a real project portfolio",
        description:
          "Editing and Design services turn finished jobs into a browsable, material-organized portfolio across the site and social.",
      },
      {
        title: "Content built around material comparison searches",
        description: "SEO content answers the specific 'hardwood vs. LVP' and cost-comparison questions homeowners research before buying.",
      },
      {
        title: "Simplify consultation booking",
        description: "Website Design work removes friction from booking an in-home or showroom consultation.",
      },
    ],
    stats: [
      { value: "Portfolio-led", label: "Every flooring site organized around real, finished project photography" },
      { value: "1", label: "Simple, direct path to booking a consultation, on every page" },
    ],
    featuredServices: ["website-design", "photo-video-editing", "seo", "meta-ads"],
    faqs: [
      {
        q: "We don't have great project photos yet. Is that a problem?",
        a: "It's the most common starting point. We set up a simple capture workflow through our Editing service so upcoming jobs start building a usable portfolio immediately.",
      },
      {
        q: "Do you handle showroom-based businesses differently from install-only companies?",
        a: "Yes — showroom businesses get local map and 'near me' visibility work weighted more heavily; install-only companies weight toward project portfolio and service-area SEO.",
      },
    ],
  },
  {
    slug: "home-inspection",
    name: "Home Inspection",
    pluralName: "Home Inspection Companies",
    icon: "houseSearch",
    summary:
      "Marketing built around real estate referral relationships and the tight turnaround homebuyers and agents expect.",
    challenges: [
      "Much of the referral volume comes through real estate agents, not direct homeowner search, and needs its own strategy.",
      "Booking windows are tight — buyers often need an inspection scheduled within days of an accepted offer.",
      "Report samples and credentials matter more here than in most trades, since trust is being extended to a one-time transaction.",
    ],
    approach: [
      {
        title: "Build content for the agent referral channel",
        description: "Content and outreach materials designed to be shared by agents, not just found by homeowners searching directly.",
      },
      {
        title: "Remove booking friction",
        description: "Website Design prioritizes fast, simple scheduling given the compressed closing timelines this industry runs on.",
      },
      {
        title: "Surface sample reports and credentials",
        description: "Certification, licensing, and sample report content placed prominently to build trust in a single-transaction relationship.",
      },
    ],
    stats: [
      { value: "Agent-ready", label: "Referral materials built specifically for real estate agent sharing" },
      { value: "Fast-track", label: "Booking flow designed around compressed closing timelines" },
    ],
    featuredServices: ["website-design", "seo", "content-strategy", "graphic-design"],
    faqs: [
      {
        q: "Can you help us build relationships with real estate agents directly?",
        a: "We build the content and materials — one-pagers, referral pages, co-brandable assets — that support agent outreach. Direct relationship-building is best driven by your team.",
      },
      {
        q: "Does SEO matter for a referral-driven business?",
        a: "Yes, for the portion of buyers who search for an inspector directly rather than relying solely on an agent recommendation — that share is meaningful and growing.",
      },
    ],
  },
  {
    slug: "lawn-care",
    name: "Lawn Care",
    pluralName: "Lawn & Landscaping Companies",
    icon: "leaf",
    summary:
      "Seasonal marketing rhythm built around recurring service subscriptions, not one-off jobs.",
    challenges: [
      "Demand is heavily seasonal, and budget planned like a year-round trade wastes spend in the off months.",
      "Recurring service plans need a retention and renewal system, not just new-customer acquisition.",
      "Landscaping design and installation work needs different proof — portfolio photography — than routine mowing and treatment plans.",
    ],
    approach: [
      {
        title: "Plan the budget calendar by season",
        description: "Paid spend is weighted toward the pre-season sign-up window rather than spread evenly across a year with real seasonality.",
      },
      {
        title: "Nurture recurring plan renewals",
        description: "Lead Nurturing sequences target plan renewal and upsell timing specific to the local growing season.",
      },
      {
        title: "Separate portfolio content for design work",
        description: "Landscaping design and installation get dedicated visual content, distinct from recurring maintenance service pages.",
      },
    ],
    stats: [
      { value: "Season-mapped", label: "Ad and content calendar planned against your specific growing season" },
      { value: "Recurring", label: "Renewal nurture sequences built for subscription-style service plans" },
    ],
    featuredServices: ["google-ads", "lead-nurturing", "social-media-marketing", "seo"],
    faqs: [
      {
        q: "How do you handle the off-season?",
        a: "Budget shifts toward brand-building content, review generation, and early pre-season sign-up campaigns rather than running full acquisition spend year-round.",
      },
      {
        q: "Do you work with companies that only do design and installation, not maintenance?",
        a: "Yes — the strategy shifts toward portfolio-led marketing similar to our approach for flooring and remodeling, rather than a subscription renewal model.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    pluralName: "Plumbing Contractors",
    icon: "wrench",
    summary:
      "Marketing that treats a burst pipe at 2 a.m. and a planned bathroom remodel as two entirely different sales processes.",
    challenges: [
      "Emergency searches — burst pipes, no hot water, sewer backups — need to convert in minutes on a mobile device.",
      "Planned work like repiping or fixture installation is a considered purchase that needs different proof and pacing.",
      "Response time is a competitive advantage that often isn't communicated clearly anywhere on the site.",
    ],
    approach: [
      {
        title: "Build a true 24/7 emergency funnel",
        description: "A dedicated emergency page, campaign, and phone-first flow built to convert a panicked, mobile searcher fast.",
      },
      {
        title: "Separate planned work into its own funnel",
        description: "Repiping, water heater replacement, and remodel plumbing get their own pages, pacing, and proof points.",
      },
      {
        title: "Make response time a visible differentiator",
        description: "Guaranteed response windows and real availability are surfaced clearly, not buried in the About page.",
      },
    ],
    stats: [
      { value: "2", label: "Separate funnels: true emergency response and planned project work" },
      { value: "Mobile-first", label: "Emergency pages built and tested for a phone screen first" },
    ],
    featuredServices: ["local-service-ads", "google-ads", "website-design", "lead-nurturing"],
    faqs: [
      {
        q: "How fast can an emergency campaign go live?",
        a: "LSA and Google Ads emergency campaigns can typically launch within one to two weeks once licensing and service-area details are confirmed.",
      },
      {
        q: "Do you help with review generation? Reviews seem critical for plumbers.",
        a: "Yes — review volume and response are core to Local Service Ads ranking and general trust, and we build a request workflow as part of your LSA and SMM engagement.",
      },
    ],
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    pluralName: "Remodeling Contractors",
    icon: "hammer",
    summary:
      "Long-consideration, high-ticket marketing built around portfolio credibility and a nurture cycle that can run for months.",
    challenges: [
      "Remodeling projects often take weeks or months from first inquiry to signed contract, and leads go cold without structured follow-up.",
      "Homeowners are comparing portfolios and past project quality as much as price.",
      "Budget ranges and process expectations are rarely communicated clearly upfront, creating friction before the first meeting.",
    ],
    approach: [
      {
        title: "Build a long-cycle nurture sequence",
        description: "Lead Nurturing sequences are built for a multi-week or multi-month consideration window, not a same-day follow-up template.",
      },
      {
        title: "Lead with portfolio and process transparency",
        description: "Design and Editing services turn past projects into detailed case studies, paired with clear process and budget-range content.",
      },
      {
        title: "Target both search and social discovery",
        description: "SEO captures active searchers; Meta Ads reach homeowners browsing renovation inspiration before they've started searching directly.",
      },
    ],
    stats: [
      { value: "Multi-touch", label: "Nurture sequences built for consideration windows measured in months" },
      { value: "Portfolio-first", label: "Every remodeling engagement starts with a documented project case study plan" },
    ],
    featuredServices: ["lead-nurturing", "meta-ads", "photo-video-editing", "content-strategy"],
    faqs: [
      {
        q: "How do you keep long-cycle leads warm without being pushy?",
        a: "Sequences are built around useful content — budget guides, process explainers, portfolio updates — rather than repeated 'checking in' messages.",
      },
      {
        q: "Can you help us communicate pricing without scaring off leads?",
        a: "Yes — Content Strategy work typically includes budget-range framing that sets realistic expectations while still inviting a conversation.",
      },
    ],
  },
  {
    slug: "restoration",
    name: "Restoration",
    pluralName: "Restoration Companies",
    icon: "shieldCheck",
    summary:
      "Crisis-response marketing built for water, fire, and storm damage calls where speed and insurance clarity decide the job.",
    challenges: [
      "Restoration calls are almost always urgent and often happening at the worst moment in a homeowner's week.",
      "Insurance claim navigation is a major point of confusion homeowners need help with immediately.",
      "Storm events create sudden, extreme demand spikes that a normal always-on budget isn't built to absorb.",
    ],
    approach: [
      {
        title: "Build a true 24/7 response funnel",
        description: "Emergency-first landing pages, click-to-call flows, and always-on paid coverage built for the moment disaster strikes.",
      },
      {
        title: "Lead with insurance-process clarity",
        description: "Content explains the insurance claim process clearly, positioning your team as the guide, not just the crew.",
      },
      {
        title: "Build a storm-surge response plan",
        description: "A documented plan to flex budget and messaging quickly when a storm event creates a sudden local demand spike.",
      },
    ],
    stats: [
      { value: "24/7", label: "Emergency response funnel live and monitored around the clock" },
      { value: "Storm-ready", label: "A documented surge plan ready before the next major weather event" },
    ],
    featuredServices: ["local-service-ads", "google-ads", "website-design", "seo"],
    faqs: [
      {
        q: "How do you handle sudden storm-driven demand spikes?",
        a: "We build a documented surge plan in advance — budget thresholds, messaging, and service-area priorities — so response is fast when a storm hits rather than improvised after the fact.",
      },
      {
        q: "Do you help explain the insurance process to homeowners?",
        a: "Yes — AEO and content work is built specifically around the insurance questions homeowners search for during a claim.",
      },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    pluralName: "Roofing Contractors",
    icon: "home",
    summary:
      "Storm-aware marketing that treats insurance-driven claims and out-of-pocket replacement as two distinct sales motions.",
    challenges: [
      "Storm-driven insurance claim leads spike suddenly and disappear just as fast, straining a flat, always-on budget.",
      "Out-of-pocket roof replacement is a high-ticket, considered purchase that competes hard on trust and material options.",
      "Drone and aerial project photography is common in the category now, and a site without it looks behind.",
    ],
    approach: [
      {
        title: "Plan for storm-driven demand separately",
        description: "A flexible budget and messaging plan ready to activate quickly around storm events, in addition to steady-state campaigns.",
      },
      {
        title: "Build trust for the out-of-pocket buyer",
        description: "Material options, warranty information, and portfolio photography built out for the homeowner paying without an insurance claim.",
      },
      {
        title: "Use aerial and drone content",
        description: "Editing and Design services incorporate drone footage and photography into a modern, credible project portfolio.",
      },
    ],
    stats: [
      { value: "2", label: "Distinct buyer paths: insurance claim and out-of-pocket replacement" },
      { value: "Storm-ready", label: "Budget and messaging plan ready to activate fast around weather events" },
    ],
    featuredServices: ["google-ads", "seo", "photo-video-editing", "local-service-ads"],
    faqs: [
      {
        q: "Do you help with insurance-claim-driven roofing leads specifically?",
        a: "Yes — messaging and content are built to address the insurance claim process directly, alongside standard replacement and repair campaigns.",
      },
      {
        q: "Can you incorporate drone footage into our marketing?",
        a: "Yes — if you're already capturing drone footage we'll build it into the site and social portfolio; if not, we can advise on a simple capture approach.",
      },
    ],
  },
  {
    slug: "solar",
    name: "Solar",
    pluralName: "Solar Installers",
    icon: "sun",
    summary:
      "Education-led marketing for a high-ticket, high-skepticism purchase that lives and dies on trust and clear numbers.",
    challenges: [
      "Solar has a well-earned reputation for aggressive sales tactics, and marketing that feels pushy hurts conversion rather than helping it.",
      "Homeowners need real payback-period and savings education before they'll take a consultation seriously.",
      "Financing and incentive information changes often and needs to be current, not outdated on the site for months.",
    ],
    approach: [
      {
        title: "Lead with education, not pressure",
        description: "Content and ad messaging built around honest payback-period and savings information, avoiding the hard-sell tone the category is known for.",
      },
      {
        title: "Answer the AI and search questions directly",
        description: "AEO and GEO work targets the specific savings, incentive, and 'is solar worth it' questions homeowners now ask search engines and AI assistants.",
      },
      {
        title: "Keep financing and incentive content current",
        description: "A documented content review cadence keeps financing options and incentive information accurate as programs change.",
      },
    ],
    stats: [
      { value: "Education-first", label: "Messaging built around real numbers, not high-pressure claims" },
      { value: "Kept current", label: "Financing and incentive content reviewed on a documented schedule" },
    ],
    featuredServices: ["aeo", "geo", "content-strategy", "meta-ads"],
    faqs: [
      {
        q: "How do you help us stand out from solar sales reputations we're not part of?",
        a: "Through direct, transparent content and a tone that avoids the pressure tactics associated with the category — consistent with our own brand standard against unqualified claims.",
      },
      {
        q: "Do you keep up with changing incentive programs?",
        a: "We build a documented content review cycle so incentive and financing pages get checked and updated on a set schedule rather than going stale.",
      },
    ],
  },
  {
    slug: "painting",
    name: "Painting",
    pluralName: "Painting Contractors",
    icon: "roller",
    summary:
      "Visual, portfolio-driven marketing for interior and exterior painting, built around before-and-after proof and fast, simple estimates.",
    challenges: [
      "Painting is judged heavily on finished-project photos, and thin or inconsistent portfolio content undercuts trust.",
      "Estimate requests are often lost to whichever competitor responds and books a walkthrough first.",
      "Interior and exterior work, and residential versus commercial, need different messaging and often different seasons.",
    ],
    approach: [
      {
        title: "Build a strong before-and-after portfolio",
        description: "Editing and Design services turn finished jobs into consistent before-and-after content across the site and social.",
      },
      {
        title: "Speed up estimate response",
        description: "Lead Nurturing ensures every estimate request gets an immediate acknowledgment and fast walkthrough scheduling.",
      },
      {
        title: "Separate residential and commercial messaging",
        description: "Distinct pages and campaigns for residential repaints, new construction, and commercial contracts.",
      },
    ],
    stats: [
      { value: "Before/after", label: "Portfolio format built into every painting site and social presence" },
      { value: "Fast", label: "Estimate response speed treated as a core competitive advantage" },
    ],
    featuredServices: ["photo-video-editing", "lead-nurturing", "website-design", "social-media-marketing"],
    faqs: [
      {
        q: "We mostly get word-of-mouth referrals. Is digital marketing still worth it?",
        a: "Referral-driven businesses often see the biggest lift from a strong website and portfolio, since referred homeowners still check online before calling.",
      },
      {
        q: "Do you handle both residential and commercial painting marketing?",
        a: "Yes, built as separate tracks — commercial work typically needs different proof points (licensing, bonding, past commercial clients) than residential repaints.",
      },
    ],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    pluralName: "Pest Control Companies",
    icon: "bug",
    summary:
      "Marketing built around recurring treatment plans, seasonal pest spikes, and the trust needed to let a technician into someone's home.",
    challenges: [
      "Seasonal pest activity creates sudden local search spikes that need fast, flexible budget response.",
      "Recurring treatment plans need a renewal and retention system, similar in structure to a subscription business.",
      "Trust and professionalism signals matter more here than in most trades, since the service happens inside the home.",
    ],
    approach: [
      {
        title: "Track seasonal pest search trends",
        description: "Paid and SEO campaigns are weighted toward the specific pests spiking locally by season, rather than treated as one flat category.",
      },
      {
        title: "Build a recurring plan renewal system",
        description: "Lead Nurturing sequences handle plan renewal and re-treatment reminders on a documented schedule.",
      },
      {
        title: "Lead with technician trust signals",
        description: "Licensing, background-check, and uniform/branding consistency are surfaced clearly, since homeowners are inviting someone into their home.",
      },
    ],
    stats: [
      { value: "Seasonal", label: "Campaigns weighted to the specific pests spiking in your area, by month" },
      { value: "Recurring", label: "Renewal nurture sequences built for subscription-style treatment plans" },
    ],
    featuredServices: ["google-ads", "seo", "lead-nurturing", "local-service-ads"],
    faqs: [
      {
        q: "How do you handle sudden seasonal pest spikes, like a mosquito or ant surge?",
        a: "Search and social listening inform quick campaign and content adjustments so budget shifts toward what's actually spiking locally that month.",
      },
      {
        q: "Do you help with recurring service plan retention?",
        a: "Yes — this runs through our Lead Nurturing service, built around your specific treatment plan renewal cycle.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
