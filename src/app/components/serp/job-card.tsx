import { useState } from "react";
import { Heart, Lightning, Clock, FileText, Wallet, Sparkle, Tag } from "@phosphor-icons/react";
import { Link } from "react-router";
import type { JobAd } from "../../data/mock-jobs";
import { useI18n } from "../../i18n/i18n-context";
import { CompanyAvatar } from "../ui/company-avatar";

const tagIconMap = {
  clock: Clock,
  file: FileText,
  wallet: Wallet,
  sparkle: Sparkle,
  tag: Tag,
  category: Tag,
};

export function JobCard({ job }: { job: JobAd }) {
  const [saved, setSaved] = useState(job.saved);
  const { t } = useI18n();

  return (
    <Link
      to={`/app/jobs/${job.id}`}
      className="block w-full relative mx-4 mb-6"
      style={{ borderRadius: "var(--radius-card)", width: "calc(100% - 32px)" }}
    >
      {/* Card surface */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor: "var(--card)",
          borderRadius: "var(--radius-card)",
        }}
      >
        {/* Inner content */}
        <div className="flex flex-col gap-[24px] items-start p-[16px] w-full">

          {/* ── Company Details ── */}
          <div className="flex gap-[16px] items-start w-full">
            {/* Avatar */}
            <div
              style={{
                borderRadius: 8,
                border: "1px solid var(--border)",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <CompanyAvatar
                companyName={job.companyName}
                domain={job.companyDomain}
                size={48}
                borderRadius={8}
              />
            </div>

            {/* Company Info */}
            <div className="flex flex-1 flex-col items-start justify-center min-w-0 self-stretch">
              {/* Company name */}
              <p
                className="truncate w-full text-foreground"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: "14px",
                  fontWeight: "var(--font-weight-semibold)" as any,
                  lineHeight: "1.3",
                }}
              >
                {job.companyName}
              </p>
              {/* Location(s) */}
              <div
                className="flex flex-wrap gap-[2px] items-center w-full whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: "14px",
                  fontWeight: "var(--font-weight-regular)" as any,
                  lineHeight: "1.3",
                  color: "var(--muted-foreground)",
                }}
              >
                {job.locations.map((loc, i) => (
                  <span key={i} className={i > 0 ? "truncate" : ""}>
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Save / Heart button */}
            <div
              className="shrink-0 flex items-center justify-center"
              style={{ width: 40, height: 40, borderRadius: 12 }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSaved(!saved);
                }}
                className="flex items-center justify-center size-full"
                aria-label={t("job.detail.save")}
              >
                <Heart
                  size={20}
                  weight={saved ? "fill" : "regular"}
                  color="var(--foreground)"
                />
              </button>
            </div>
          </div>

          {/* ── Job Details ── */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            {/* Job title — max 2 lines */}
            <p
              className="w-full overflow-hidden text-foreground"
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "16px",
                fontWeight: "var(--font-weight-semibold)" as any,
                lineHeight: "1.2",
                maxHeight: "64px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {job.jobTitle}
            </p>
            {/* Summary — max ~3 lines */}
            <p
              className="w-full overflow-hidden whitespace-pre-wrap"
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "14px",
                fontWeight: "var(--font-weight-regular)" as any,
                lineHeight: "1.3",
                color: "var(--muted-foreground)",
                maxHeight: "58px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {job.summary}
            </p>
          </div>

          {/* ── Tags + Post Info ── */}
          <div className="flex flex-col gap-[16px] items-start w-full">
            {/* Tags row */}
            <div className="flex flex-wrap gap-[12px] items-center py-[2px] w-full">
              {job.tags.map((tag, i) => {
                const IconComponent = tagIconMap[tag.icon];
                return (
                  <div
                    key={i}
                    className="flex gap-[4px] items-center px-[8px] py-[4px] shrink-0"
                    style={{
                      borderRadius: 12,
                      backgroundColor: tag.highlight
                        ? "var(--highlight-tag-bg)"
                        : "var(--muted)",
                    }}
                  >
                    <IconComponent
                      size={16}
                      color="var(--foreground)"
                    />
                    <span
                      className="whitespace-nowrap text-foreground text-center"
                      style={{
                        fontFamily: "var(--font-geist)",
                        fontSize: "12px",
                        fontWeight: "var(--font-weight-regular)" as any,
                        lineHeight: "1.4",
                      }}
                    >
                      {tag.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Post info row */}
            <div className="flex gap-[4px] items-center w-full">
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: "12px",
                  fontWeight: "var(--font-weight-regular)" as any,
                  lineHeight: "1.4",
                  color: "var(--muted-foreground)",
                }}
              >
                {job.postedAgo}
              </span>
              {job.easyApply && (
                <>
                  <span
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontSize: "12px",
                      lineHeight: "1.4",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    ·
                  </span>
                  <div className="flex gap-[2px] items-center">
                    <Lightning size={16} color="var(--foreground)" />
                    <span
                      className="whitespace-nowrap text-foreground"
                      style={{
                        fontFamily: "var(--font-geist)",
                        fontSize: "12px",
                        fontWeight: "var(--font-weight-regular)" as any,
                        lineHeight: "1.4",
                      }}
                    >
                      Easy apply
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card border + shadow overlay (Figma spec) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: "var(--radius-card)",
          border: "1px solid var(--border)",
          boxShadow:
            "0px 0px 0px 1px rgba(255,255,255,0.07), 0px 1px 2px 0px rgba(0,0,0,0.05)",
        }}
      />
    </Link>
  );
}