import imgImage31 from "figma:asset/7406c8fab537223de5b161a30153f3e2aff277b2.png";
import imgImage32 from "figma:asset/294d09889c6e31702d3ea9bb851702c2fc28d941.png";

export interface JobTag {
  label: string;
  icon: "clock" | "file" | "wallet" | "sparkle" | "tag" | "category";
  highlight?: boolean;
}

export interface JobAd {
  id: string;
  companyName: string;
  companyDomain: string;
  locations: string[];
  jobTitle: string;
  summary: string;
  tags: JobTag[];
  postedAgo: string;
  easyApply: boolean;
  saved: boolean;
  // Filter metadata
  postedDaysAgo: number; // 0 = today, 7 = last week, 30 = last month
  workloadMin: number; // 0-100
  workloadMax: number; // 0-100
  contractType: string; // permanent, temporary, apprenticeship, freelance, internship, sideJob
  language: string; // german, french, english, italian
}

const logos = [imgImage31, imgImage32];

// ─── ChatGPT landing job ──────────────────────────────────────────────────────
export const PM_CHATGPT_JOB_ID = "pm-zurich-chatgpt";

export const MOCK_JOBS: JobAd[] = [
  {
    id: PM_CHATGPT_JOB_ID,
    companyName: "Zurich Insurance Group",
    companyDomain: "zurich.com",
    locations: ["Zürich"],
    jobTitle: "Senior Project Manager – Digital Transformation 100% (f/m/d)",
    summary: "Lead end-to-end digital transformation initiatives across our global business units. You will own project delivery, manage cross-functional stakeholders, and drive agile adoption at scale.",
    tags: [
      { label: "100%", icon: "clock" },
      { label: "Permanent", icon: "file" },
      { label: "110k–140k CHF", icon: "wallet" },
      { label: "Hybrid", icon: "sparkle", highlight: true },
    ],
    postedAgo: "Today",
    easyApply: true,
    saved: false,
    postedDaysAgo: 0,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "1",
    companyName: "UBS",
    companyDomain: "ubs.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Senior Project Manager – IT Infrastructure & Cloud Migration 100%",
    summary: "Drive large-scale cloud migration projects across UBS's global IT landscape. You will coordinate delivery teams, manage budgets up to CHF 20M and report to the CTO office.",
    tags: [
      { label: "100%", icon: "clock" },
      { label: "Permanent", icon: "file" },
      { label: "Finance", icon: "category" },
      { label: "Hybrid", icon: "sparkle", highlight: true },
    ],
    postedAgo: "2 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 2,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "2",
    companyName: "FREITAG lab. ag",
    companyDomain: "freitag.ch",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager E-Commerce Platform Relaunch 80-100% (w/d/m)",
    summary: "Du leitest das Relaunch-Projekt unserer digitalen Verkaufsplattform und koordinierst interne Teams sowie externe Agenturen. Agile Arbeitsmethoden sind für dich selbstverständlich.",
    tags: [
      { label: "80-100%", icon: "clock" },
      { label: "Permanent", icon: "file" },
      { label: "90k–115k", icon: "wallet" },
      { label: "Half-fare train card", icon: "sparkle", highlight: true },
    ],
    postedAgo: "3 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 3,
    workloadMin: 80,
    workloadMax: 100,
    contractType: "permanent",
    language: "german",
  },
  {
    id: "3",
    companyName: "SMG Swiss Marketplace Group",
    companyDomain: "swissmarketplace.group",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "IT Project Manager (f/m/d) | 80-100% | Hybrid | Zürich Switzerland",
    summary: "Welcome to SMG Swiss Marketplace Group! Lead technology projects that power Switzerland's leading online marketplaces, coordinating agile delivery squads from inception to go-live.",
    tags: [
      { label: "80-100%", icon: "clock" },
      { label: "Permanent", icon: "file" },
      { label: "Hybrid", icon: "sparkle", highlight: true },
      { label: "6 weeks holidays", icon: "sparkle", highlight: true },
    ],
    postedAgo: "5 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 5,
    workloadMin: 80,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "4",
    companyName: "ABB",
    companyDomain: "abb.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Global Project Manager – Electrification & Energy Transition",
    summary: "Manage complex, multi-site electrification projects across Europe and APAC. You will lead international delivery teams and act as the primary client interface for ABB's largest accounts.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "On-site", icon: "tag" },
    ],
    postedAgo: "1 week ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 7,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "5",
    companyName: "Nestlé",
    companyDomain: "nestle.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager Product Innovation & Launch – Swiss Market",
    summary: "Coordinate new product development from concept to shelf, working with R&D, marketing and supply chain teams. You will manage project timelines, risks and budgets for CH market launches.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "2 weeks ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 14,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "french",
  },
  {
    id: "6",
    companyName: "Swiss Re",
    companyDomain: "swissre.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager Business Transformation & Regulatory Programmes",
    summary: "Lead strategic transformation initiatives in one of the world's leading reinsurance groups. You'll manage multi-stakeholder programmes aligned with regulatory requirements and Swiss Re's 2030 strategy.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "4 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 4,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "7",
    companyName: "Julius Baer",
    companyDomain: "juliusbaer.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager Digital Banking & Client Experience 80-100%",
    summary: "Drive digital banking projects that elevate the private banking client journey. You'll manage delivery of mobile app features, client portal enhancements and CRM integrations.",
    tags: [
      { label: "80-100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "3 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 3,
    workloadMin: 80,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "8",
    companyName: "Novartis",
    companyDomain: "novartis.com",
    locations: ["Basel", "+ 2 locations"],
    jobTitle: "Agile Project Manager / Scrum Master – Pharma Tech 100%",
    summary: "Join Novartis to lead agile delivery in our global pharmaceutical technology division. You'll coach squads, facilitate ceremonies and remove blockers to accelerate drug development pipelines.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "6 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 6,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "9",
    companyName: "Roche",
    companyDomain: "roche.com",
    locations: ["Basel", "+ 2 locations"],
    jobTitle: "Project Manager IT & Process Excellence – Diagnostics Division",
    summary: "Manage cross-functional IT and process improvement projects within Roche Diagnostics. You'll ensure on-time, on-budget delivery while embedding continuous improvement practices.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "1 week ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 7,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "10",
    companyName: "PwC Switzerland",
    companyDomain: "pwc.ch",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager Consulting – Financial Services 80-100%",
    summary: "Join PwC's project delivery practice to lead client-facing transformation engagements in banking and insurance. You'll manage project governance, stakeholder reporting and change management streams.",
    tags: [
      { label: "80-100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Client-site", icon: "tag" },
    ],
    postedAgo: "2 weeks ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 14,
    workloadMin: 80,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  // Group 2 (5 ads)
  {
    id: "11",
    companyName: "Swisscom",
    companyDomain: "swisscom.ch",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Agile Project Manager – Network Infrastructure Rollout 100%",
    summary: "Lead 5G and fibre rollout projects across Switzerland, coordinating internal engineering squads and external construction partners with full P&L accountability.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "1 day ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 1,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "german",
  },
  {
    id: "12",
    companyName: "PostFinance",
    companyDomain: "postfinance.ch",
    locations: ["Bern", "+ 2 locations"],
    jobTitle: "Project Manager Finance IT – Core Banking Modernisation",
    summary: "Drive the modernisation of PostFinance's core banking systems, managing delivery of complex integration projects with external technology vendors and internal business stakeholders.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "3 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 3,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "german",
  },
  {
    id: "13",
    companyName: "McKinsey & Company",
    companyDomain: "mckinsey.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager / Associate – Strategy & Operations Consulting",
    summary: "Join McKinsey's Zurich office to manage delivery of high-impact strategy and operations engagements for leading Swiss and global clients across financial services, pharma and retail.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "5 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 5,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "14",
    companyName: "Accenture Switzerland",
    companyDomain: "accenture.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Senior Project Manager Digital & Cloud Transformation",
    summary: "Lead cloud and digital transformation engagements for Fortune 500 clients based in Switzerland. You'll manage delivery teams of 10–25 people, oversee project financials and manage C-suite relationships.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Client-site", icon: "tag" },
    ],
    postedAgo: "4 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 4,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "15",
    companyName: "Lindt & Sprüngli",
    companyDomain: "lindt.com",
    locations: ["Kilchberg ZH", "+ 2 locations"],
    jobTitle: "Project Manager Global Operations & Supply Chain 100%",
    summary: "Coordinate global supply chain improvement projects at one of the world's most iconic chocolate brands. You will manage end-to-end project lifecycles from scoping to handover across 4 continents.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "On-site", icon: "tag" },
    ],
    postedAgo: "2 weeks ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 14,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "german",
  },
  // Group 3 (5 ads)
  {
    id: "16",
    companyName: "Migros",
    companyDomain: "migros.ch",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager Digital Retail & Omnichannel 80-100%",
    summary: "Lead digital commerce and omnichannel projects for Switzerland's largest retailer. You'll work with product, tech and marketing teams to deliver an exceptional customer experience across all channels.",
    tags: [
      { label: "80-100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "1 week ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 7,
    workloadMin: 80,
    workloadMax: 100,
    contractType: "permanent",
    language: "german",
  },
  {
    id: "17",
    companyName: "SBB CFF FFS",
    companyDomain: "sbb.ch",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager Rail Infrastructure & Digitalisation 100%",
    summary: "Manage large-scale infrastructure and digitalisation projects for Switzerland's national railway. You'll coordinate engineering, IT and operations teams to deliver projects safely and on schedule.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "On-site", icon: "tag" },
    ],
    postedAgo: "1 month ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 30,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "german",
  },
  {
    id: "18",
    companyName: "Siemens Switzerland",
    companyDomain: "siemens.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager Building Technologies & Smart Infrastructure 80-100%",
    summary: "Lead smart building and infrastructure projects for Swiss clients in the real estate, healthcare and transportation sectors. You'll manage full project lifecycle from tender to commissioning.",
    tags: [
      { label: "80-100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "2 weeks ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 14,
    workloadMin: 80,
    workloadMax: 100,
    contractType: "permanent",
    language: "german",
  },
  {
    id: "19",
    companyName: "Deloitte Switzerland",
    companyDomain: "deloitte.com",
    locations: ["Zürich", "+ 2 locations"],
    jobTitle: "Project Manager Risk & Regulatory Compliance Programmes 100%",
    summary: "Drive delivery of regulatory compliance and risk transformation programmes for Swiss financial institutions. You'll manage complex stakeholder landscapes and ensure projects meet regulatory deadlines.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "3 days ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 3,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "english",
  },
  {
    id: "20",
    companyName: "Helvetia Insurance",
    companyDomain: "helvetia.com",
    locations: ["St. Gallen", "+ 2 locations"],
    jobTitle: "Project Manager Strategic Initiatives & Group Portfolio 100%",
    summary: "Manage a portfolio of strategic projects for Helvetia Group's Swiss and international operations. You'll work directly with C-level sponsors and coordinate multi-disciplinary delivery teams.",
    tags: [
      { label: "100%", icon: "tag" },
      { label: "Permanent", icon: "tag" },
      { label: "Hybrid", icon: "tag" },
    ],
    postedAgo: "1 week ago",
    easyApply: true,
    saved: false,
    postedDaysAgo: 7,
    workloadMin: 100,
    workloadMax: 100,
    contractType: "permanent",
    language: "german",
  },
];

export interface LocationLink {
  name: string;
  jobCount: number;
  flagId: string;
}

export const MOCK_LOCATIONS: LocationLink[] = [
  { name: "Zurich", jobCount: 1847, flagId: "zurich" },
  { name: "Bern", jobCount: 412, flagId: "bern" },
  { name: "Basel", jobCount: 298, flagId: "basel" },
  { name: "Geneva", jobCount: 187, flagId: "geneva" },
];

export const MOCK_RELATED_SEARCHES = [
  "Senior Project Manager Zürich",
  "IT Project Manager Switzerland",
  "Agile Project Manager",
  "Scrum Master Zürich",
  "Program Manager CH",
  "Project Lead Switzerland",
  "PMP Jobs Zürich",
  "PMO Manager",
];

export const MOCK_BREADCRUMBS = [
  { label: "Root", href: "/" },
  { label: "Category1", href: "/jobs" },
  { label: "...", href: "#" },
  { label: "Category3", href: "#" },
];

// ─── Job Detail Extended Data ──────────────────────────────────────────────────

export interface LanguageRequirement {
  lang: string;
  level: string;
}

export interface BenefitItem {
  iconName: string;
  label: string;
  highlighted?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface CareerTip {
  bold: string;
  text: string;
}

export interface DescriptionParagraph {
  type: "heading" | "paragraph" | "bullet";
  text: string;
}

export interface JobDetailData {
  workload: string;
  contractType: string;
  salaryRange: string;
  salaryEstimated: boolean;
  category: string;
  languageRequirements: LanguageRequirement[];
  activelyRecruiting: boolean;
  aiSummary: string;
  aiSkills: string[];
  aiResponsibilities: string[];
  aiBenefits: string[];
  address: string;
  homeofficeDays: string;
  benefits: BenefitItem[];
  descriptionParagraphs: DescriptionParagraph[];
  recruiterName: string;
  recruiterInitials: string;
  recruiterPhone: string;
  companyIndustry: string;
  companySize: string;
  companyJobsCount: number;
  companyAbout: string;
  skills: SkillGroup[];
  careerInsightsTitle: string;
  careerInsightsTips: CareerTip[];
}

export function createDefaultDetail(job: JobAd): JobDetailData {
  const workload = job.tags.find((t) => t.icon === "clock")?.label ?? "100%";
  const salary = job.tags.find((t) => t.icon === "wallet")?.label ?? "Market rate";
  return {
    workload,
    contractType: "Permanent",
    salaryRange: salary,
    salaryEstimated: true,
    category: "Management / Project Management",
    languageRequirements: [
      { lang: "German", level: "Fluent" },
      { lang: "English", level: "Advanced" },
    ],
    activelyRecruiting: false,
    aiSummary: job.summary,
    aiSkills: [
      "5+ years of project management experience in a comparable environment.",
      "Proven agile methodologies expertise (Scrum, SAFe).",
      "Strong communication skills in English and German.",
    ],
    aiResponsibilities: [
      "Lead cross-functional project teams and manage stakeholder expectations.",
      "Define and monitor project scope, timelines and deliverables.",
      "Report on project status and risks to senior management.",
    ],
    aiBenefits: [
      "Competitive salary and comprehensive employee benefits package.",
      "Flexible working arrangements and hybrid model available.",
    ],
    address: `${job.locations[0]}, Switzerland`,
    homeofficeDays: "2 days a week",
    benefits: [
      { iconName: "House", label: "Working from home", highlighted: true },
      { iconName: "GraduationCap", label: "Training & development" },
      { iconName: "ClockCountdown", label: "Flexible working hours" },
      { iconName: "PiggyBank", label: "Employee benefits" },
      { iconName: "Train", label: "Half-fare train pass" },
    ],
    descriptionParagraphs: [
      { type: "paragraph", text: `${job.locations[0]} | Full-time | ${workload} | Permanent` },
      { type: "paragraph", text: `${job.companyName} is a leading organisation committed to innovation and professional excellence. We are looking for a motivated Project Manager to join our team and drive key initiatives forward.` },
      { type: "paragraph", text: job.summary },
      { type: "heading", text: "Your responsibilities" },
      { type: "bullet", text: "Own end-to-end project planning, execution and delivery, ensuring on-time and on-budget completion." },
      { type: "bullet", text: "Lead and coordinate cross-functional teams across multiple departments and locations." },
      { type: "bullet", text: "Define project scope, milestones and deliverables in close collaboration with senior stakeholders." },
      { type: "bullet", text: "Proactively identify, assess and mitigate project risks and issues throughout the project lifecycle." },
      { type: "bullet", text: "Report project status, financials and KPIs to the steering committee and management." },
      { type: "bullet", text: "Continuously improve delivery processes and champion agile working practices within the team." },
      { type: "heading", text: "Your profile" },
      { type: "bullet", text: "5+ years of project management experience, preferably in a relevant industry or consulting environment." },
      { type: "bullet", text: "Strong analytical and structured thinking with the ability to break down complexity into actionable plans." },
      { type: "bullet", text: "Excellent communication and stakeholder management skills at all levels of the organisation." },
      { type: "bullet", text: "Fluent in German and English (written and spoken); additional languages are an advantage." },
      { type: "bullet", text: "PMP, Prince2 or agile certification (e.g. Scrum Master, SAFe) is a plus." },
      { type: "heading", text: "What we offer" },
      { type: "bullet", text: "Competitive salary package commensurate with experience." },
      { type: "bullet", text: "Flexible hybrid working model with 2 days remote per week." },
      { type: "bullet", text: "Comprehensive training and professional development opportunities." },
      { type: "bullet", text: "Modern, centrally located offices with excellent public transport connections." },
      { type: "bullet", text: "Supportive, inclusive team culture with regular team events." },
    ],
    recruiterName: "Sarah Müller",
    recruiterInitials: "SM",
    recruiterPhone: "+41 44 000 00 00",
    companyIndustry: "Management & Consulting",
    companySize: "1,000–10,000 employees",
    companyJobsCount: 12,
    companyAbout: `${job.companyName} is a leading organisation with a strong track record of innovation, quality and employee development. We foster an inclusive, collaborative culture where talented professionals can grow their careers and make a real impact.\n\nWith operations across Switzerland and internationally, we combine global reach with local expertise to serve our clients and stakeholders at the highest level.`,
    skills: [
      { category: "Core skills", items: ["Project Management", "Agile / Scrum", "Stakeholder Management", "Risk Management"] },
      { category: "Nice to have", items: ["PMP Certification", "Change Management", "Data Analysis", "Budget Controlling"] },
    ],
    careerInsightsTitle: `Top 2 application tips for Project Manager at ${job.companyName}`,
    careerInsightsTips: [
      {
        bold: "Quantify your project impact",
        text: "Include specific metrics: budget sizes managed, team sizes, delivery timelines and measurable KPI outcomes. Swiss employers value precision and evidence-based achievements.",
      },
      {
        bold: "Highlight relevant industry experience",
        text: "Specifically mention domain expertise relevant to the role. Swiss companies value sector knowledge alongside general project management skills.",
      },
    ],
  };
}

export const MOCK_JOB_DETAILS: Record<string, JobDetailData> = {
  "pm-zurich-chatgpt": {
    workload: "100%",
    contractType: "Permanent",
    salaryRange: "110k–140k CHF/year",
    salaryEstimated: false,
    category: "Finance / Banking",
    languageRequirements: [
      { lang: "English", level: "Fluent" },
      { lang: "German", level: "Advanced" },
      { lang: "French", level: "Basic" },
    ],
    activelyRecruiting: true,
    aiSummary:
      "Zurich Insurance Group seeks a Senior Project Manager to lead end-to-end digital transformation initiatives across global business units, driving agile adoption and managing cross-functional teams of 15–30 people in a hybrid work environment.",
    aiSkills: [
      "7+ years of project management experience, ideally in financial services or insurance.",
      "Certified PMP, SAFe or equivalent agile practitioner credential preferred.",
      "Fluent in English (C2); German language skills at B2 or above are a strong advantage.",
    ],
    aiResponsibilities: [
      "Own end-to-end delivery of digital transformation projects across global business units.",
      "Lead cross-functional teams and act as the primary interface to the CTO office and steering committee.",
      "Drive agile adoption and coach team members on Scrum and SAFe practices at scale.",
    ],
    aiBenefits: [
      "Hybrid work model — 2 days remote per week, flexible scheduling.",
      "Generous pension fund contributions and employee share purchase plan.",
    ],
    address: "Mythenquai 2, 8002 Zürich",
    homeofficeDays: "2 days a week",
    benefits: [
      { iconName: "Image", label: "Cantine with lake view", highlighted: true },
      { iconName: "House", label: "Working from home", highlighted: true },
      { iconName: "Train", label: "Half-fare train pass" },
      { iconName: "GraduationCap", label: "Training" },
      { iconName: "GraduationCap", label: "Training budget per employee" },
      { iconName: "Medal", label: "Great Place to Work Award" },
      { iconName: "PiggyBank", label: "Employee discount" },
      { iconName: "ClockCountdown", label: "Flexible working hours" },
      { iconName: "Ticket", label: "REKA checks" },
    ],
    descriptionParagraphs: [
      { type: "paragraph", text: "Zürich | Full-time | 100% | Permanent | Immediate start" },
      {
        type: "paragraph",
        text: "Zurich Insurance Group is one of the world's leading multi-line insurers. With approximately 55,000 employees, we provide a wide range of property and casualty, and life insurance products and services in more than 210 countries and territories. Our purpose is to protect people and inspire them to create a brighter future.",
      },
      {
        type: "paragraph",
        text: "We are looking for a talented Senior Project Manager – Digital Transformation to join our Group Technology & Operations division and take full ownership of complex, enterprise-scale transformation programmes.",
      },
      { type: "heading", text: "Your responsibilities" },
      { type: "bullet", text: "Own end-to-end delivery of digital transformation projects from ideation to go-live across multiple global business units." },
      { type: "bullet", text: "Lead cross-functional delivery teams of 15–30 people, including software engineers, business analysts, UX designers and data scientists." },
      { type: "bullet", text: "Define project scope, goals and deliverables in close collaboration with senior management and key stakeholders." },
      { type: "bullet", text: "Track and report on milestones, deliverables and KPIs; proactively identify and manage risks, issues and dependencies." },
      { type: "bullet", text: "Drive agile adoption across teams, coaching Scrum Masters and Product Owners on SAFe best practices." },
      { type: "bullet", text: "Present programme status to the steering committee and Chief Transformation Officer on a bi-weekly cadence." },
      { type: "heading", text: "Your profile" },
      { type: "bullet", text: "7+ years of project and programme management experience, ideally in financial services, insurance or a large enterprise environment." },
      { type: "bullet", text: "Certified PMP, PgMP, SAFe or equivalent qualification; agile practitioner credentials are highly valued." },
      { type: "bullet", text: "Proven track record of delivering large-scale technology and digital transformation programmes with budgets above CHF 5M." },
      { type: "bullet", text: "Excellent leadership, communication and stakeholder management skills, including at C-suite level." },
      { type: "bullet", text: "Fluent in English (C2 level); German at B2 or above is a strong advantage." },
      { type: "bullet", text: "High degree of resilience and ability to work effectively under pressure in a dynamic, fast-paced environment." },
      { type: "heading", text: "What we offer" },
      { type: "bullet", text: "Competitive salary between 110,000 and 140,000 CHF per year, depending on experience." },
      { type: "bullet", text: "Hybrid working model with 2 days remote work per week." },
      { type: "bullet", text: "5 weeks of annual leave, increasing to 6 weeks after 5 years of service." },
      { type: "bullet", text: "Generous pension fund contributions through Zurich's own pension scheme, well above the legal minimum." },
      { type: "bullet", text: "Annual learning and development budget of CHF 5,000 per employee." },
      { type: "bullet", text: "Half-fare SBB rail pass, REKA holiday checks and employee discount programme." },
      { type: "bullet", text: "Great Place to Work Award winner for three consecutive years." },
    ],
    recruiterName: "Jennifer Chen",
    recruiterInitials: "JC",
    recruiterPhone: "+41 79 000 00 00",
    companyIndustry: "Finance / Insurance",
    companySize: "10,000+ employees",
    companyJobsCount: 47,
    companyAbout:
      "Zurich Insurance Group is a leading multi-line insurer that serves its customers in global and local markets. With about 55,000 employees, we provide a wide range of property and casualty, and life insurance products and services.\n\nIn Switzerland, Zurich is the #1 insurer by premiums written and one of the country's most respected employers. Our Zürich HQ at Mythenquai is home to over 4,000 professionals across technology, finance, actuarial and operations, working together to protect people and inspire a brighter future.",
    skills: [
      { category: "Core skills", items: ["Project Management", "Agile / SAFe", "Stakeholder Management", "Change Management"] },
      { category: "Nice to have", items: ["Insurance domain knowledge", "PMP Certification", "Risk Management", "German language"] },
    ],
    careerInsightsTitle: "Top 2 application tips for Senior Project Manager at Zurich Insurance",
    careerInsightsTips: [
      {
        bold: "Quantify your project impact with precision",
        text: "Include specific metrics: budget sizes managed, team sizes, delivery timelines, and measurable KPI improvements. Swiss insurers value data-driven, evidence-based candidates.",
      },
      {
        bold: "Highlight agile transformation leadership",
        text: "Specifically mention SAFe or Scrum implementations you have led at scale. Zurich Insurance is mid-way through a large-scale agile transformation and actively seeks experienced change agents.",
      },
    ],
  },
};