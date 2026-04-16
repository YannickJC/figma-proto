import { useState } from "react";
import { useI18n } from "../i18n/i18n-context";
import { JobCard } from "../components/serp/job-card";
import { MOCK_JOBS } from "../data/mock-jobs";
import { Heart, BookmarkSimple } from "@phosphor-icons/react";

// ─── Saved Jobs Page ──────────────────────────────────────────────────────────

export function SavedJobsPage() {
  const { t } = useI18n();

  // Simulate saved jobs — pick a few from mock data and mark as saved
  const [savedJobs] = useState(() =>
    MOCK_JOBS.slice(0, 4).map((job) => ({ ...job, saved: true }))
  );

  const hasSavedJobs = savedJobs.length > 0;

  return (
    <div data-slot="saved-jobs-page" className="flex flex-col min-h-dvh">
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div
        className="flex items-center gap-3 px-4"
        style={{ paddingTop: 16, paddingBottom: 12 }}
      >
        <div
          className="flex items-center justify-center shrink-0 rounded-full"
          style={{
            width: 40,
            height: 40,
            backgroundColor: "var(--muted)",
          }}
        >
          <Heart size={20} weight="fill" color="var(--foreground)" />
        </div>
        <div className="flex flex-col">
          <h1
            style={{
              fontFamily: "var(--font-hanken)",
              fontWeight: "var(--font-weight-semibold)" as any,
              fontSize: "var(--text-xl)",
              lineHeight: 1.3,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            {t("nav.savedJobs")}
          </h1>
          {hasSavedJobs && (
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "var(--text-sm)",
                color: "var(--muted-foreground)",
                lineHeight: 1.4,
              }}
            >
              {t("saved.subtitle").replace("{count}", String(savedJobs.length))}
            </span>
          )}
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div
        className="shrink-0"
        style={{ height: 1, backgroundColor: "var(--border)" }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      {hasSavedJobs ? (
        <div className="flex flex-col w-full pt-4 pb-8">
          {savedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div
          data-slot="saved-jobs-empty"
          className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center"
        >
          <div
            className="flex items-center justify-center rounded-full mb-4"
            style={{
              width: 64,
              height: 64,
              backgroundColor: "var(--muted)",
            }}
          >
            <BookmarkSimple size={24} weight="regular" color="var(--muted-foreground)" />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-hanken)",
              fontWeight: "var(--font-weight-semibold)" as any,
              fontSize: "var(--text-xl)",
              color: "var(--foreground)",
              margin: 0,
              marginBottom: 8,
            }}
          >
            {t("saved.empty.title")}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "var(--text-base)",
              color: "var(--muted-foreground)",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 280,
            }}
          >
            {t("saved.empty.description")}
          </p>
        </div>
      )}
    </div>
  );
}
