/**
 * StickySearchButton
 * Floating pill fixed to bottom-center. Two states driven by CSS classes:
 *   - default  : w-248 h-54 px-22  — two lines (bold label + muted subtitle)
 *   - .compact : w-172 h-44 px-16  — single line only
 * All sizing + line-2 visibility transition simultaneously at 380ms ease-in-out.
 * Compact is triggered by 60px of cumulative downward scroll;
 * expanded is restored immediately on any upward scroll.
 */

import { useEffect, useRef, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useI18n } from "../i18n/i18n-context";

// ─── constants ────────────────────────────────────────────────────────────────
const SCROLL_THRESHOLD = 60; // px of cumulative downward delta before compact
const DURATION = "380ms";
const EASING = "ease-in-out";
const T = `${DURATION} ${EASING}`;

// ─── CSS injected once (class-driven, no inline overrides for animated props) ─
const CSS = `
.ssb-pill {
  /* expanded defaults */
  width: 248px;
  height: 54px;
  padding-left:  22px;
  padding-right: 22px;
  transition:
    width        ${T},
    height       ${T},
    padding-left ${T},
    padding-right ${T};
}
.ssb-pill.compact {
  width: 172px;
  height: 44px;
  padding-left:  16px;
  padding-right: 16px;
}

/* Line-2 hidden by default; shown via .has-sub when NOT compact */
.ssb-sub {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height ${T},
    opacity    ${T};
}
.ssb-pill:not(.compact) .ssb-sub.has-sub {
  max-height: 18px; /* 12px × 1.4 line-height ≈ 17px */
  opacity: 1;
}
`;

// ─── props ───────────────────────────────────────────────────────────────────
interface Props {
  onClick: () => void;
  query?: string;
  locations?: string[];
  filterCount?: number;
}

// ─── component ───────────────────────────────────────────────────────────────
export function StickySearchButton({
  onClick,
  query,
  locations = [],
  filterCount = 0,
}: Props) {
  const { t } = useI18n();
  const [isCompact, setIsCompact] = useState(false);

  // ── scroll logic ──────────────────────────────────────────────────────────
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const accum = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;

      if (delta > 0) {
        // scrolling down — accumulate
        accum.current += delta;
        if (accum.current >= SCROLL_THRESHOLD) setIsCompact(true);
      } else if (delta < 0) {
        // scrolling up — expand immediately, reset counter
        accum.current = 0;
        setIsCompact(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── content ───────────────────────────────────────────────────────────────
  const hasQuery     = Boolean(query?.trim());
  const hasLocations = locations.length > 0;
  const hasFilters   = filterCount > 0;
  const showSub      = hasLocations || hasFilters;

  const line1 = isCompact
    ? t("search.button.modify")
    : hasQuery
      ? query!.trim()
      : t("search.button.allJobs");

  const filterLabel =
    filterCount === 1
      ? t("search.button.filterSingular")
      : t("search.button.filterPlural", { count: filterCount });

  const subParts: string[] = [];
  if (hasLocations) subParts.push(locations.join(", "));
  if (hasFilters)   subParts.push(filterLabel);
  const line2 = subParts.join(" · ");

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Inject CSS once — React dedupes style tags */}
      <style>{CSS}</style>

      {/* Fixed wrapper: full-width, bottom-anchored, pointer-events off so
          page content underneath remains interactive */}
      <div
        className="fixed bottom-0 left-0 right-0 z-30 flex justify-center items-end pointer-events-none md:hidden"
        style={{
          paddingBottom: "calc(28px + env(safe-area-inset-bottom))",
          /* Soft fade so button feels floating, not abrupt */
          background:
            "linear-gradient(to top, var(--color-background,#020617) 0 40%, transparent 100%)",
          paddingTop: 56,
        }}
      >
        {/* ── PILL BUTTON ────────────────────────────────────────────────── */}
        <button
          onClick={onClick}
          aria-label={line1}
          /* CSS class is the single source of truth for compact state */
          className={`ssb-pill pointer-events-auto relative flex items-center gap-3 rounded-full overflow-hidden cursor-pointer select-none active:scale-[0.97]${isCompact ? " compact" : ""}`}
          style={{
            backgroundColor: "#020617",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.08), 0 8px 24px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.30)",
          }}
        >
          {/* Inner top-edge highlight (glass effect) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[inherit]"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)" }}
          />

          {/* Icon */}
          <MagnifyingGlass
            size={18}
            weight="bold"
            className="relative z-[1] shrink-0 text-white"
          />

          {/* Text column */}
          <div className="relative z-[1] flex flex-col items-start min-w-0 flex-1">
            {/* Line 1 — bold, always visible */}
            <span
              className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-white text-left"
              style={{
                fontFamily:   "var(--font-geist)",
                fontSize:     14,
                fontWeight:   400,
                lineHeight:   "1.3",
              }}
            >
              {line1}
            </span>

            {/* Line 2 — muted subtitle, collapses via CSS class */}
            <div
              className={`ssb-sub w-full flex items-center gap-[4px]${showSub ? " has-sub" : ""}`}
              style={{
                fontFamily: "var(--font-geist)",
                fontSize:   12,
                fontWeight: 400,
                lineHeight: "1.4",
                color:      "#94a3b8",
              }}
            >
              {/* Locations — truncates with ellipsis */}
              {hasLocations && (
                <span className="shrink min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-left">
                  {locations.join(", ")}
                </span>
              )}
              {/* Filter count — always fully visible, never truncated */}
              {hasFilters && (
                <span className="shrink-0 whitespace-nowrap">
                  {filterLabel}
                </span>
              )}
            </div>
          </div>
        </button>
      </div>
    </>
  );
}