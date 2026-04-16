import { useState, useCallback, useEffect, useRef } from "react";
import { useOutletContext } from "react-router";
import { useI18n } from "../i18n/i18n-context";
import { BreadcrumbNav } from "../components/serp/breadcrumb-nav";
import { SeoTextBlock } from "../components/serp/seo-text-block";
import { JobCard } from "../components/serp/job-card";
import { JobCardSkeleton } from "../components/serp/job-card-skeleton";
import { LocationLinks } from "../components/serp/location-links";
import { MarketInsight } from "../components/serp/market-insight";
import { RelatedSearches } from "../components/serp/related-searches";
import { SerpFooter } from "../components/serp/serp-footer";
import {
  MOCK_JOBS,
  MOCK_LOCATIONS,
  MOCK_RELATED_SEARCHES,
  MOCK_BREADCRUMBS,
} from "../data/mock-jobs";
import { Plus } from "@phosphor-icons/react";
import { FiltersState, computeJobCount } from "../components/filters-modal";

// ─── Skeleton list — shown for all 3 card groups while isSearching ────────────
function SkeletonGroup({ count }: { count: number }) {
  return (
    <div className="flex flex-col w-full">
      {Array.from({ length: count }).map((_, i) => (
        <JobCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function SerpPage() {
  const { t } = useI18n();
  const { isSearching, searchQuery, searchLocations, filters } = useOutletContext<{
    openSearch: () => void;
    isSearching: boolean;
    searchQuery: string;
    searchLocations: string[];
    filters: FiltersState;
  }>();
  const [visibleExtra, setVisibleExtra] = useState(0);

  // ── Reset scroll & update document.title on every new search ──────────────
  const prevIsSearching = useRef(false);
  useEffect(() => {
    if (isSearching && !prevIsSearching.current) {
      window.scrollTo(0, 0);
    }
    prevIsSearching.current = isSearching;
  }, [isSearching]);

  // Build dynamic heading string — always use the template so location updates too
  const filteredCount = computeJobCount(filters);
  const formattedCount = filteredCount.toLocaleString();
  const query = searchQuery || "Project Manager";
  const location =
    searchLocations.length > 0
      ? searchLocations.join(", ")
      : "Zurich, Switzerland";

  const serpHeading = t("serp.title.results")
    .replace("{count}", formattedCount)
    .replace("{query}", query)
    .replace("{location}", location);

  // Sync document.title
  useEffect(() => {
    document.title = `${serpHeading} · JobScout24`;
  }, [serpHeading]);

  // Groups: 10, 5, 5 — plus extras via "see more" (always use full MOCK_JOBS)
  const group1 = MOCK_JOBS.slice(0, 10);
  const group2 = MOCK_JOBS.slice(10, 15);
  const group3 = MOCK_JOBS.slice(15, 20);

  // "See more" loads 10 more (clone from existing data for demo)
  const extraJobs = Array.from({ length: visibleExtra }, (_, i) => ({
    ...MOCK_JOBS[i % MOCK_JOBS.length],
    id: `extra-${i}`,
  }));

  const handleSeeMore = useCallback(() => {
    setVisibleExtra((prev) => prev + 10);
  }, []);

  const locationTitle = t("serp.locationTitle");

  return (
    <div className="flex flex-col w-full">
      {/* ===== BREADCRUMB ===== */}
      <div className="px-4">
        <BreadcrumbNav items={MOCK_BREADCRUMBS} />
      </div>

      {/* ===== SERP TITLE ===== */}
      <div className="px-4 pb-2">
        <p
          className="text-foreground"
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: "18px",
            fontWeight: "var(--font-weight-semibold)" as any,
            lineHeight: "1.3",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {serpHeading}
        </p>
      </div>

      {/* ===== SEO TEXT BLOCK ===== */}
      <div className="px-4 pb-4">
        <SeoTextBlock
          text={t("serp.seoText")}
        />
      </div>

      {/* ===== JOB ADS GROUP 1 (10 ads) ===== */}
      <div className="flex flex-col w-full">
        {isSearching ? (
          <SkeletonGroup count={10} />
        ) : (
          group1.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>

      {/* ===== SEO LOCATION LINKS ===== */}
      <div className="px-4 py-4">
        <LocationLinks locations={MOCK_LOCATIONS} title={locationTitle} />
      </div>

      {/* ===== JOB ADS GROUP 2 (5 ads) ===== */}
      <div className="flex flex-col w-full">
        {isSearching ? (
          <SkeletonGroup count={5} />
        ) : (
          group2.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>

      {/* ===== MARKET INSIGHT BLOCK (383px fixed) ===== */}
      <div className="px-4 py-4">
        <MarketInsight title={t("serp.insight.salary.title")}>
          <p className="mb-2" style={{ lineHeight: "1.3" }}>
            {t("serp.insight.salary.text")}
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span style={{ fontWeight: "var(--font-weight-semibold)" as any }}>
                {t("serp.insight.salary.junior")}
              </span>
              : Supports delivery planning, risk logs and reporting
            </li>
            <li>
              <span style={{ fontWeight: "var(--font-weight-semibold)" as any }}>
                {t("serp.insight.salary.mid")}
              </span>
              : Owns full project lifecycle, budget and stakeholder management
            </li>
            <li>
              <span style={{ fontWeight: "var(--font-weight-semibold)" as any }}>
                {t("serp.insight.salary.senior")}
              </span>
              : Strategic portfolio oversight and C-level sponsorship
            </li>
          </ul>
          <p className="mt-2" style={{ lineHeight: "1.3" }}>
            {t("serp.insight.salary.footer")}
          </p>
        </MarketInsight>
      </div>

      {/* ===== JOB ADS GROUP 3 (5 ads) ===== */}
      <div className="flex flex-col w-full">
        {isSearching ? (
          <SkeletonGroup count={5} />
        ) : (
          group3.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>

      {/* ===== EXTRA LOADED ADS ===== */}
      {extraJobs.length > 0 && (
        <div className="flex flex-col w-full">
          {extraJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {/* ===== SEE MORE ADS BUTTON ===== */}
      <div className="px-4 py-4">
        <button
          onClick={handleSeeMore}
          className="relative w-full flex items-center justify-center overflow-hidden transition-opacity active:opacity-70"
          style={{
            borderRadius: 12,
            backgroundColor: "var(--background)",
            padding: "16px 24px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontWeight: "var(--font-weight-semibold)" as any,
              fontSize: "16px",
              lineHeight: "1.3",
              color: "var(--foreground)",
              whiteSpace: "nowrap",
            }}
          >
            {t("serp.seeMore")}
          </span>
          {/* Border overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-[-1px] pointer-events-none"
            style={{
              borderRadius: 13,
              border: "1px solid var(--border)",
            }}
          />
        </button>
      </div>

      {/* ===== RELATED SEARCHES ===== */}
      <RelatedSearches queries={MOCK_RELATED_SEARCHES} />

      {/* ===== ADDITIONAL MARKET INSIGHT BLOCKS (2) ===== */}
      <div className="px-4 py-2">
        <MarketInsight title={t("serp.insight.industries.title")}>
          <p style={{ lineHeight: "1.3" }}>
            {t("serp.insight.industries.text")}
          </p>
        </MarketInsight>
      </div>

      <div className="px-4 py-2 mb-4">
        <MarketInsight title={t("serp.insight.skills.title")}>
          <p style={{ lineHeight: "1.3" }}>
            {t("serp.insight.skills.text")}
          </p>
        </MarketInsight>
      </div>

      {/* ===== FOOTER ===== */}
      <SerpFooter />
    </div>
  );
}