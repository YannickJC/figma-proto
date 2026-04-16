import { useParams, Link } from "react-router";
import { useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  FileText,
  MapPin,
  Wallet,
  Tag,
  Globe,
  Sparkle,
  House,
  ArrowsLeftRight,
  Image,
  Train,
  GraduationCap,
  Medal,
  PiggyBank,
  ClockCountdown,
  Ticket,
  Phone,
  EnvelopeSimple,
  UsersFour,
  Briefcase,
  PuzzlePiece,
  PresentationChart,
  Toolbox,
  ListChecks,
  Diamond,
  DotsThreeVertical,
  BookmarkSimple,
  CaretRight,
} from "@phosphor-icons/react";
import { useI18n } from "../i18n/i18n-context";
import {
  MOCK_JOBS,
  MOCK_JOB_DETAILS,
  createDefaultDetail,
  type JobAd,
  type JobDetailData,
  type BenefitItem,
} from "../data/mock-jobs";
import { CompanyAvatar } from "../components/ui/company-avatar";

const MAP_IMAGE = "https://images.unsplash.com/photo-1647868505411-730f123685cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxadXJpY2glMjBjaXR5JTIwYWVyaWFsJTIwc3RyZWV0JTIwbWFwfGVufDF8fHx8MTc3NjI2Mzg0NXww&ixlib=rb-4.1.0&q=80&w=1080";

// ── Section heading style ────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-geist)",
        fontWeight: "var(--font-weight-semibold)",
        fontSize: 18,
        color: "#333",
        lineHeight: 1.3,
      }}
    >
      {children}
    </p>
  );
}

// ── Thin divider ─────────────────────────────────────────────────────────────
function Divider({ opacity = 0.4 }: { opacity?: number }) {
  return <div style={{ height: 1, background: "#1E293B", opacity, width: "100%" }} />;
}

// ── Sparkle tag (lime highlight) ─────────────────────────────────────────────
function SparkleTag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        background: "var(--highlight-tag-bg)",
        borderRadius: 12,
        padding: "4px 8px",
        fontFamily: "var(--font-geist)",
        fontWeight: "var(--font-weight-semibold)",
        fontSize: 12,
        color: "var(--foreground)",
        whiteSpace: "nowrap",
      }}
    >
      <Sparkle size={12} weight="fill" />
      {label}
    </span>
  );
}

// ── Icon box (muted square for location section) ─────────────────────────────
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        background: "var(--muted)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

// ── Benefit icon renderer ────────────────────────────────────────────────────
function BenefitIcon({ iconName }: { iconName: string }) {
  const props = { size: 20, color: "var(--foreground)" };
  switch (iconName) {
    case "Image":       return <Image {...props} />;
    case "House":       return <House {...props} />;
    case "Train":       return <Train {...props} />;
    case "GraduationCap": return <GraduationCap {...props} />;
    case "Medal":       return <Medal {...props} />;
    case "PiggyBank":   return <PiggyBank {...props} />;
    case "ClockCountdown": return <ClockCountdown {...props} />;
    case "Ticket":      return <Ticket {...props} />;
    default:            return <Diamond {...props} />;
  }
}

// ── Breadcrumb bar ───────────────────────────────────────────────────────────
function BreadcrumbBar({ job }: { job: JobAd }) {
  const crumbs = [
    { label: "Jobs", href: "/app/jobs" },
    { label: "Project Manager", href: "/app/jobs" },
    { label: job.locations[0], href: "/app/jobs" },
    { label: job.companyName, href: "#" },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "8px 16px",
        minHeight: 44,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {crumbs.map((crumb, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          {i > 0 && <CaretRight size={12} color="var(--muted-foreground)" />}
          <Link
            to={crumb.href}
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 14,
              color: i === crumbs.length - 1 ? "var(--foreground)" : "var(--muted-foreground)",
              textDecoration: "none",
            }}
          >
            {crumb.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

// ── Job header (avatar + name + more button) ─────────────────────────────────
function JobHeader({ job }: { job: JobAd; detail: JobDetailData }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
      {/* Avatar */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 8,
          border: "1px solid var(--border)",
          background: "var(--card)",
          flexShrink: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CompanyAvatar companyName={job.companyName} domain={job.companyDomain} size={64} borderRadius={8} />
      </div>
      {/* Company name */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontFamily: "var(--font-geist)",
            fontWeight: "var(--font-weight-semibold)",
            fontSize: 16,
            color: "var(--foreground)",
            lineHeight: 1.3,
          }}
        >
          {job.companyName}
        </p>
      </div>
      {/* More options button */}
      <button
        aria-label="More options"
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          border: "none",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        <DotsThreeVertical size={20} color="var(--foreground)" />
      </button>
    </div>
  );
}

// ── Job title ────────────────────────────────────────────────────────────────
function JobTitle({ title }: { title: string }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-geist)",
        fontWeight: "var(--font-weight-semibold)",
        fontSize: 20,
        color: "#333",
        lineHeight: 1.3,
        width: "100%",
      }}
    >
      {title}
    </p>
  );
}

// ── Key facts grid ───────────────────────────────────────────────────────────
function KeyFactsGrid({ job, detail }: { job: JobAd; detail: JobDetailData }) {
  const iconColor = "var(--foreground)";
  const facts = [
    { icon: <Clock size={20} color={iconColor} />, label: detail.workload },
    { icon: <FileText size={20} color={iconColor} />, label: detail.contractType },
    { icon: <MapPin size={20} color={iconColor} />, label: job.locations[0] },
    { icon: <Wallet size={20} color={iconColor} />, label: detail.salaryRange },
    { icon: <Tag size={20} color={iconColor} />, label: detail.category },
    {
      icon: <Globe size={20} color={iconColor} />,
      label: detail.languageRequirements.map((l) => l.lang.slice(0, 2).toUpperCase()).join(" · "),
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px 8px",
        width: "100%",
      }}
    >
      {facts.map((fact, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          <div style={{ flexShrink: 0, marginTop: 1 }}>{fact.icon}</div>
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 14,
              color: "var(--foreground)",
              lineHeight: 1.3,
            }}
          >
            {fact.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Post info ────────────────────────────────────────────────────────────────
function PostInfo({ job, detail, t }: { job: JobAd; detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}>
      <span style={{ fontFamily: "var(--font-geist)", fontSize: 12, color: "var(--muted-foreground)" }}>
        {t("job.detail.posted")} {job.postedAgo}
      </span>
      <span style={{ fontFamily: "var(--font-geist)", fontSize: 12, color: "var(--muted-foreground)" }}>·</span>
      {detail.activelyRecruiting && (
        <span style={{ fontFamily: "var(--font-geist)", fontSize: 12, color: "#067537" }}>
          {t("job.detail.activelyRecruiting")}
        </span>
      )}
    </div>
  );
}

// ── AI Summary card ──────────────────────────────────────────────────────────
function AiSummaryCard({ detail, t }: { detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
      {/* Card */}
      <div
        style={{
          background: "var(--highlight-tag-bg)",
          borderRadius: 8,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* "Job summary" tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            background: "#9f0",
            borderRadius: 12,
            padding: "4px 8px",
            alignSelf: "flex-start",
          }}
        >
          <Sparkle size={16} weight="fill" color="var(--foreground)" />
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontWeight: "var(--font-weight-semibold)",
              fontSize: 12,
              color: "var(--foreground)",
            }}
          >
            {t("job.detail.jobSummary")}
          </span>
        </div>

        {/* Summary text */}
        <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3, margin: 0 }}>
          {detail.aiSummary}
        </p>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
          {/* Required Skills */}
          <Divider />
          <AiSection
            icon={<Toolbox size={20} color="var(--foreground)" />}
            heading={t("job.detail.requiredSkills")}
            items={detail.aiSkills}
          />
          <Divider />
          {/* Key Responsibilities */}
          <AiSection
            icon={<ListChecks size={20} color="var(--foreground)" />}
            heading={t("job.detail.responsibilities")}
            items={detail.aiResponsibilities}
          />
          <Divider />
          {/* Key Benefits */}
          <AiSection
            icon={<Diamond size={20} color="var(--foreground)" />}
            heading={t("job.detail.keyBenefits")}
            items={detail.aiBenefits}
          />
        </div>
      </div>

      {/* Disclaimer */}
      <p
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: 12,
          color: "var(--muted-foreground)",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {t("job.detail.aiDisclaimer")}
      </p>
    </div>
  );
}

function AiSection({
  icon,
  heading,
  items,
}: {
  icon: React.ReactNode;
  heading: string;
  items: string[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20px 1fr",
        columnGap: 8,
        rowGap: 8,
      }}
    >
      {/* Icon */}
      <div style={{ paddingTop: 2 }}>{icon}</div>
      {/* Heading */}
      <p
        style={{
          fontFamily: "var(--font-geist)",
          fontWeight: "var(--font-weight-semibold)",
          fontSize: 16,
          color: "var(--foreground)",
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {heading}
      </p>
      {/* Bullet list spans both columns */}
      <div style={{ gridColumn: "1 / -1", paddingLeft: 4, display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex" }}>
            <span style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3 }}>
              • &nbsp;{item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Work location section ────────────────────────────────────────────────────
function WorkLocationSection({ job, detail, t }: { job: JobAd; detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
      <SectionHeading>{t("job.detail.workLocation")}</SectionHeading>

      {/* Address row */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <IconBox>
          <MapPin size={24} color="var(--muted-foreground)" />
        </IconBox>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.3 }}>
            {t("job.detail.location")}
          </span>
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3 }}>
            {detail.address}
          </span>
        </div>
      </div>

      {/* Homeoffice row */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <IconBox>
          <House size={24} color="var(--muted-foreground)" />
        </IconBox>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.3 }}>
            {t("job.detail.homeoffice")}
          </span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3 }}>
              {detail.homeofficeDays}
            </span>
            <SparkleTag label="Hybrid" />
          </div>
        </div>
      </div>

      {/* Commute row */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <IconBox>
          <ArrowsLeftRight size={24} color="var(--muted-foreground)" />
        </IconBox>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.3 }}>
            {t("job.detail.commuteTime")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 16,
              color: "var(--foreground)",
              textDecoration: "underline",
              cursor: "pointer",
              lineHeight: 1.3,
            }}
          >
            {t("job.detail.commuteCalculate")}
          </span>
        </div>
      </div>

      {/* Map image */}
      <div
        style={{
          width: "100%",
          height: 180,
          borderRadius: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={MAP_IMAGE}
          alt="Map"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* See all jobs link */}
      <div style={{ paddingLeft: 8 }}>
        <button
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--foreground)", lineHeight: 1.3 }}>
            {t("job.detail.seeAllJobsIn").replace("{location}", job.locations[0])}
          </span>
          <div style={{ height: 1, background: "var(--foreground)", width: "100%", marginTop: 1 }} />
        </button>
      </div>
    </div>
  );
}

// ── Salary section ───────────────────────────────────────────────────────────
function SalarySection({ detail, t }: { detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
      <SectionHeading>{t("job.detail.salary")}</SectionHeading>

      {/* Wallet row */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <IconBox>
          <Wallet size={24} color="var(--muted-foreground)" />
        </IconBox>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.3 }}>
            {detail.salaryEstimated ? t("job.detail.salaryEstimated") : t("job.detail.salary")}
          </span>
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3 }}>
            {detail.salaryRange}
          </span>
        </div>
      </div>

      {/* Info box */}
      {detail.salaryEstimated && (
        <div
          style={{
            background: "var(--insight-bg)",
            borderRadius: 8,
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontWeight: "var(--font-weight-semibold)",
              fontSize: 14,
              color: "var(--insight-tag-color)",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {t("job.detail.salaryInfo.title")}
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 14,
              color: "var(--insight-tag-color)",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {t("job.detail.salaryInfo.text")}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Benefits section ─────────────────────────────────────────────────────────
function BenefitsSection({ detail, t }: { detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
      <SectionHeading>{t("job.detail.benefits")}</SectionHeading>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {detail.benefits.map((benefit: BenefitItem, i: number) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <BenefitIcon iconName={benefit.iconName} />
            <span style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3 }}>
              {benefit.label}
            </span>
            {benefit.highlighted && (
              <div
                style={{
                  width: 16,
                  height: 16,
                  background: "var(--highlight-tag-bg)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Sparkle size={10} weight="fill" color="var(--foreground)" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* See more button */}
      <button
        style={{
          height: 40,
          borderRadius: 12,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontFamily: "var(--font-geist)",
          fontSize: 16,
          color: "var(--foreground)",
          padding: "0 12px",
          alignSelf: "flex-start",
          textDecoration: "underline",
        }}
      >
        {t("job.detail.seeMoreBenefits")}
      </button>
    </div>
  );
}

// ── Languages section ────────────────────────────────────────────────────────
function LanguagesSection({ detail, t }: { detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
      <SectionHeading>{t("job.detail.languages")}</SectionHeading>

      <div
        style={{
          background: "var(--muted)",
          borderRadius: 8,
          padding: "12px 8px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: 12,
          rowGap: 12,
        }}
      >
        {/* Headers */}
        <span style={{ fontFamily: "var(--font-geist)", fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.4 }}>
          {t("job.detail.langCol")}
        </span>
        <span style={{ fontFamily: "var(--font-geist)", fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.4 }}>
          {t("job.detail.levelCol")}
        </span>

        {/* Rows — use flatMap to avoid fragment-with-key issues */}
        {detail.languageRequirements.flatMap((lr, i) => [
          <div key={`div-${i}`} style={{ gridColumn: "1 / -1", height: 1, background: "#F1F5F9" }} />,
          <span
            key={`lang-${i}`}
            style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3 }}
          >
            {lr.lang}
          </span>,
          <span
            key={`level-${i}`}
            style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3 }}
          >
            {lr.level}
          </span>,
        ])}
      </div>
    </div>
  );
}

// ── Description section ──────────────────────────────────────────────────────
function DescriptionSection({ detail, t }: { detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
      <SectionHeading>{t("job.detail.description")}</SectionHeading>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {detail.descriptionParagraphs.map((para, i) => {
          if (para.type === "heading") {
            return (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-geist)",
                  fontWeight: "var(--font-weight-semibold)",
                  fontSize: 16,
                  color: "var(--foreground)",
                  lineHeight: 1.3,
                  marginTop: 8,
                  marginBottom: 0,
                }}
              >
                {para.text}
              </p>
            );
          }
          if (para.type === "bullet") {
            return (
              <div key={i} style={{ display: "flex", paddingLeft: 4 }}>
                <span style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--foreground)", lineHeight: 1.3 }}>
                  {"• "}{para.text}
                </span>
              </div>
            );
          }
          return (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 16,
                color: "var(--foreground)",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              {para.text}
            </p>
          );
        })}
      </div>

      {/* Recruiter card */}
      <div
        style={{
          background: "var(--muted)",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div style={{ padding: 12, display: "flex", gap: 16, alignItems: "flex-start" }}>
          {/* Avatar circle */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "var(--secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              border: "1px solid var(--border)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: "var(--font-weight-semibold)",
                fontSize: 24,
                color: "var(--secondary-foreground)",
                lineHeight: 1,
              }}
            >
              {detail.recruiterInitials}
            </span>
          </div>
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: "var(--font-weight-semibold)",
                fontSize: 16,
                color: "var(--foreground)",
                lineHeight: 1.3,
              }}
            >
              {detail.recruiterName}
            </span>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Phone size={20} color="var(--foreground)" />
              <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--foreground)", lineHeight: 1.3 }}>
                {detail.recruiterPhone}
              </span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <EnvelopeSimple size={20} color="var(--foreground)" />
              <span
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: 14,
                  color: "var(--foreground)",
                  lineHeight: 1.3,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Write an email
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Company info section ─────────────────────────────────────────────────────
function CompanyInfoSection({ job, detail, t }: { job: JobAd; detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
      <SectionHeading>{t("job.detail.companyInfo")}</SectionHeading>

      {/* Company header */}
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "var(--card)",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <CompanyAvatar companyName={job.companyName} domain={job.companyDomain} size={64} borderRadius={8} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontWeight: "var(--font-weight-semibold)",
              fontSize: 16,
              color: "var(--foreground)",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {job.companyName}
          </p>
          <p style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.3, margin: 0 }}>
            {job.locations[0]}
          </p>
        </div>
      </div>

      {/* Meta rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Tag size={20} color="var(--foreground)" />
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--foreground)", lineHeight: 1.3 }}>
            {detail.companyIndustry}
          </span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <UsersFour size={20} color="var(--foreground)" />
          <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--foreground)", lineHeight: 1.3 }}>
            {detail.companySize}
          </span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Briefcase size={20} color="var(--foreground)" />
          <button
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--foreground)", lineHeight: 1.3 }}>
              {t("job.detail.offersOnline").replace("{count}", String(detail.companyJobsCount))}
            </span>
            <div style={{ height: 1, background: "var(--foreground)", width: "100%", marginTop: 1 }} />
          </button>
        </div>
      </div>

      {/* About text */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {detail.companyAbout.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 16,
              color: "var(--foreground)",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

// ── Skills section ───────────────────────────────────────────────────────────
function SkillsSection({ detail, t }: { detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
      <SectionHeading>{t("job.detail.skills")}</SectionHeading>

      {detail.skills.map((group, gi) => (
        <div key={gi} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <PuzzlePiece size={20} color="var(--foreground)" />
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 16,
                color: "var(--foreground)",
                lineHeight: 1.3,
              }}
            >
              {group.category}
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 8px" }}>
            {group.items.map((item, ii) => (
              <button
                key={ii}
                style={{
                  background: "transparent",
                  border: "none",
                  padding: "10px 0",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--foreground)", lineHeight: 1.3 }}>
                  {item}
                </span>
                <div style={{ height: 1, background: "var(--foreground)", width: "100%", marginTop: 1 }} />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Career insights card ─────────────────────────────────────────────────────
function CareerInsightsCard({ detail, t }: { detail: JobDetailData; t: (key: any) => string }) {
  return (
    <div
      style={{
        background: "var(--insight-bg)",
        borderRadius: 16,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            background: "var(--insight-tag-bg)",
            borderRadius: 12,
            padding: "4px 8px",
            alignSelf: "flex-start",
          }}
        >
          <PresentationChart size={16} color="var(--insight-tag-color)" />
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 12,
              color: "var(--insight-tag-color)",
              lineHeight: 1.4,
            }}
          >
            {t("job.detail.careerInsightsTag")}
          </span>
        </div>

        {/* Title */}
        <p
          style={{
            fontFamily: "var(--font-geist)",
            fontWeight: "var(--font-weight-semibold)",
            fontSize: 16,
            color: "var(--foreground)",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {detail.careerInsightsTitle}
        </p>

        {/* Tips */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {detail.careerInsightsTips.map((tip, i) => (
            <div key={i}>
              <p
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: 14,
                  color: "#111",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                <strong>{tip.bold}</strong>
                <br />
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Similar job card (compact) ───────────────────────────────────────────────
function SimilarJobCard({ job }: { job: JobAd }) {
  return (
    <Link
      to={`/app/jobs/${job.id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          width: 220,
          minWidth: 220,
          borderRadius: 12,
          border: "1px solid var(--border)",
          background: "var(--card)",
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          cursor: "pointer",
        }}
      >
        {/* Company row */}
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          <CompanyAvatar companyName={job.companyName} domain={job.companyDomain} size={40} borderRadius={8} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: "var(--font-weight-semibold)",
                fontSize: 14,
                color: "var(--foreground)",
                lineHeight: 1.3,
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {job.companyName}
            </p>
            <p
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 12,
                color: "var(--muted-foreground)",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              {job.locations[0]}
            </p>
          </div>
        </div>

        {/* Job title */}
        <p
          style={{
            fontFamily: "var(--font-geist)",
            fontWeight: "var(--font-weight-semibold)",
            fontSize: 14,
            color: "var(--foreground)",
            lineHeight: 1.3,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {job.jobTitle}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {job.tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 12,
                color: "var(--muted-foreground)",
                background: "var(--muted)",
                borderRadius: 8,
                padding: "2px 8px",
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Posted */}
        <p
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 12,
            color: "var(--muted-foreground)",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {job.postedAgo}
        </p>
      </div>
    </Link>
  );
}

// ── Similar jobs section ─────────────────────────────────────────────────────
function SimilarJobsSection({ jobs, t }: { jobs: JobAd[]; t: (key: any) => string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
      <SectionHeading>{t("job.detail.similarJobs")}</SectionHeading>
      <div
        style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          paddingBottom: 8,
          marginLeft: -16,
          marginRight: -16,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        {jobs.map((job) => (
          <SimilarJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

// ── Sticky bottom CTA ────────────────────────────────────────────────────────
function StickyBottomCTA({ t }: { t: (key: any) => string }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
        padding: "12px 16px",
        display: "flex",
        gap: 8,
        zIndex: 50,
        // Safe area inset for notched devices
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {/* Save button */}
      <button
        style={{
          height: 48,
          borderRadius: 12,
          border: "1.5px solid var(--foreground)",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          padding: "0 16px",
          cursor: "pointer",
          fontFamily: "var(--font-geist)",
          fontSize: 16,
          color: "var(--foreground)",
          flexShrink: 0,
        }}
      >
        <BookmarkSimple size={20} />
        {t("job.detail.save")}
      </button>

      {/* Apply button */}
      <button
        style={{
          flex: 1,
          height: 48,
          borderRadius: 12,
          border: "none",
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          fontFamily: "var(--font-geist)",
          fontWeight: "var(--font-weight-semibold)",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        {t("job.detail.apply")}
      </button>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const job = MOCK_JOBS.find((j) => j.id === id);
  const detail = id ? (MOCK_JOB_DETAILS[id] ?? (job ? createDefaultDetail(job) : null)) : null;

  if (!job || !detail) {
    return (
      <div style={{ padding: 24, textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, color: "var(--muted-foreground)" }}>
          {t("common.notFound")}
        </p>
        <Link
          to="/app/jobs"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginTop: 16,
            color: "var(--foreground)",
            fontFamily: "var(--font-geist)",
            fontSize: 14,
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={16} />
          {t("job.detail.back")}
        </Link>
      </div>
    );
  }

  const similarJobs = MOCK_JOBS.filter((j) => j.id !== id).slice(0, 4);

  return (
    <div
      style={{
        background: "var(--background)",
        minHeight: "100vh",
        paddingBottom: 96,
      }}
    >
      {/* Breadcrumb */}
      <BreadcrumbBar job={job} />

      {/* Main content */}
      <div
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          display: "flex",
          flexDirection: "column",
          gap: 32,
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {/* Job header */}
        <JobHeader job={job} detail={detail} />

        {/* Job title */}
        <JobTitle title={job.jobTitle} />

        {/* Key facts */}
        <KeyFactsGrid job={job} detail={detail} />

        {/* Post info */}
        <PostInfo job={job} detail={detail} t={t} />

        {/* AI Summary */}
        <AiSummaryCard detail={detail} t={t} />

        {/* Work location */}
        <div>
          <Divider opacity={0.2} />
          <div style={{ marginTop: 32 }}>
            <WorkLocationSection job={job} detail={detail} t={t} />
          </div>
        </div>

        {/* Salary */}
        <div>
          <Divider opacity={0.2} />
          <div style={{ marginTop: 32 }}>
            <SalarySection detail={detail} t={t} />
          </div>
        </div>

        {/* Benefits */}
        <div>
          <Divider opacity={0.2} />
          <div style={{ marginTop: 32 }}>
            <BenefitsSection detail={detail} t={t} />
          </div>
        </div>

        {/* Languages */}
        <div>
          <Divider opacity={0.2} />
          <div style={{ marginTop: 32 }}>
            <LanguagesSection detail={detail} t={t} />
          </div>
        </div>

        {/* Description */}
        <div>
          <Divider opacity={0.2} />
          <div style={{ marginTop: 32 }}>
            <DescriptionSection detail={detail} t={t} />
          </div>
        </div>

        {/* Company info */}
        <div>
          <Divider opacity={0.2} />
          <div style={{ marginTop: 32 }}>
            <CompanyInfoSection job={job} detail={detail} t={t} />
          </div>
        </div>

        {/* Skills */}
        <div>
          <Divider opacity={0.2} />
          <div style={{ marginTop: 32 }}>
            <SkillsSection detail={detail} t={t} />
          </div>
        </div>

        {/* Career insights */}
        <CareerInsightsCard detail={detail} t={t} />

        {/* Similar jobs */}
        <SimilarJobsSection jobs={similarJobs} t={t} />
      </div>

      {/* Sticky CTA */}
      <StickyBottomCTA t={t} />
    </div>
  );
}