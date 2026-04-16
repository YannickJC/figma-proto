import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CheckSquare, Square, X } from "@phosphor-icons/react";
import { useI18n } from "../i18n/i18n-context";
import svgPaths from "../../imports/svg-75wa1j7xro";

// ─── Animated number counter ──────────────────────────────────────────────────
// Counts from the previous value to the new target using rAF + ease-out,
// replicating the CSS-Tricks "Animating Number Counters" technique in React.

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedNumber({ value, duration = 600 }: { value: number; duration?: number }) {
  const [displayed, setDisplayed] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    if (from === to) return;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setDisplayed(Math.round(from + (to - from) * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    }

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return <>{displayed.toLocaleString()}</>;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FiltersState {
  pubDate: "today" | "last_week" | "last_month" | null;
  workloadMin: number; // 0–100
  workloadMax: number; // 0–100
  contractTypes: string[];
  languages: string[];
}

export const DEFAULT_FILTERS: FiltersState = {
  pubDate: null,
  workloadMin: 0,
  workloadMax: 100,
  contractTypes: [],
  languages: [],
};

export function countActiveFilters(f: FiltersState): number {
  let n = 0;
  if (f.pubDate) n++;
  if (f.workloadMin > 0 || f.workloadMax < 100) n++;
  if (f.contractTypes.length > 0) n++;
  if (f.languages.length > 0) n++;
  return n;
}

// ─── Dynamic job count ────────────────────────────────────────────────────────

const BASE_JOBS = 223;

export function computeJobCount(f: FiltersState): number {
  let count = BASE_JOBS;

  // Publication date
  if (f.pubDate === "today") count = Math.round(count * 0.04);
  else if (f.pubDate === "last_week") count = Math.round(count * 0.28);
  else if (f.pubDate === "last_month") count = Math.round(count * 0.68);

  // Workload range
  const range = f.workloadMax - f.workloadMin;
  if (range < 100) {
    count = Math.round(count * (range / 100 + 0.08));
  }

  // Contract types (OR logic — more selected = slightly more results)
  if (f.contractTypes.length > 0) {
    const factor = Math.min(0.55 + f.contractTypes.length * 0.09, 0.95);
    count = Math.round(count * factor);
  }

  // Languages (OR logic)
  if (f.languages.length > 0) {
    const factor = Math.min(0.45 + f.languages.length * 0.16, 0.95);
    count = Math.round(count * factor);
  }

  // Round to nearest 10 for realism
  count = Math.round(count / 10) * 10;
  return Math.max(count, 10);
}

// ─── Dual range slider ────────────────────────────────────────────────────────

interface DualRangeSliderProps {
  min: number;
  max: number;
  onMinChange: (v: number) => void;
  onMaxChange: (v: number) => void;
}

function DualRangeSlider({ min, max, onMinChange, onMaxChange }: DualRangeSliderProps) {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const [lastActive, setLastActive] = useState<"min" | "max">("max");

  return (
    <div className="relative w-full select-none" style={{ height: 16 }}>
      {/* Track background */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ top: 6, left: 0, right: 0, height: 4, backgroundColor: "#f1f5f9" }}
      />
      {/* Active fill */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: 6,
          height: 4,
          backgroundColor: "#020617",
          left: `${min}%`,
          right: `${100 - max}%`,
        }}
      />
      {/* Min input (transparent, captures events) */}
      <input
        ref={minRef}
        type="range"
        min={0}
        max={100}
        step={10}
        value={min}
        onPointerDown={() => setLastActive("min")}
        onChange={(e) => {
          const v = Math.round(Math.min(Number(e.target.value), max - 10) / 10) * 10;
          onMinChange(v);
        }}
        className="absolute inset-0 w-full h-full cursor-pointer"
        style={{
          opacity: 0,
          zIndex: lastActive === "min" ? 5 : 3,
          WebkitAppearance: "none",
          appearance: "none",
        }}
      />
      {/* Max input (transparent, captures events) */}
      <input
        ref={maxRef}
        type="range"
        min={0}
        max={100}
        step={10}
        value={max}
        onPointerDown={() => setLastActive("max")}
        onChange={(e) => {
          const v = Math.round(Math.max(Number(e.target.value), min + 10) / 10) * 10;
          onMaxChange(v);
        }}
        className="absolute inset-0 w-full h-full cursor-pointer"
        style={{
          opacity: 0,
          zIndex: lastActive === "max" ? 5 : 3,
          WebkitAppearance: "none",
          appearance: "none",
        }}
      />
      {/* Visual thumb — min */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: 0,
          width: 16,
          height: 16,
          backgroundColor: "#ffffff",
          border: "2px solid #020617",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          left: `calc(${min}% - 8px)`,
        }}
      />
      {/* Visual thumb — max */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: 0,
          width: 16,
          height: 16,
          backgroundColor: "#ffffff",
          border: "2px solid #020617",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          left: `calc(${max}% - 8px)`,
        }}
      />
    </div>
  );
}

// ─── Chip (contract type / language) ─────────────────────────────────────────

interface ChipProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

function Chip({ label, selected, onToggle }: ChipProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-[8px] relative rounded-[12px] shrink-0"
      style={{ padding: 12 }}
    >
      {/* Border overlay */}
      <div
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        style={{
          border: `1px solid ${selected ? "#020617" : "#e2e8f0"}`,
        }}
      />
      {/* Icon */}
      <div className="relative shrink-0" style={{ width: 24, height: 24 }}>
        {selected ? (
          <CheckSquare size={24} weight="fill" color="#020617" />
        ) : (
          <Square size={24} weight="regular" color="#64748b" />
        )}
      </div>
      {/* Label */}
      <span
        style={{
          fontFamily: "var(--font-geist)",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "1.3",
          color: "#020617",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </button>
  );
}

// ─── Section divider ──────────────────────────────────────────────────────────

function SectionDivider() {
  return <div style={{ height: 1, backgroundColor: "#f1f5f9" }} />;
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[16px] w-full" style={{ paddingTop: 4, paddingBottom: 4 }}>
      <span
        style={{
          fontFamily: "var(--font-geist)",
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "1.2",
          color: "#020617",
        }}
      >
        {title}
      </span>
      {children}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface Props {
  open: boolean;
  onClose: () => void;
  initialFilters?: FiltersState;
  onApply: (filters: FiltersState) => void;
}

export function FiltersModal({ open, onClose, initialFilters = DEFAULT_FILTERS, onApply }: Props) {
  const { t } = useI18n();

  const [pubDate, setPubDate] = useState<FiltersState["pubDate"]>(initialFilters.pubDate);
  const [workloadMin, setWorkloadMin] = useState(initialFilters.workloadMin);
  const [workloadMax, setWorkloadMax] = useState(initialFilters.workloadMax);
  const [contractTypes, setContractTypes] = useState<string[]>(initialFilters.contractTypes);
  const [languages, setLanguages] = useState<string[]>(initialFilters.languages);

  // Sync state when modal opens
  useEffect(() => {
    if (open) {
      setPubDate(initialFilters.pubDate);
      setWorkloadMin(initialFilters.workloadMin);
      setWorkloadMax(initialFilters.workloadMax);
      setContractTypes(initialFilters.contractTypes);
      setLanguages(initialFilters.languages);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentFilters: FiltersState = { pubDate, workloadMin, workloadMax, contractTypes, languages };
  const jobCount = computeJobCount(currentFilters);
  const [labelBefore, labelAfter] = t("filters.modal.seeJobs").split("{count}");

  // Publication date radio-toggle
  function togglePubDate(value: FiltersState["pubDate"]) {
    setPubDate((prev) => (prev === value ? null : value));
  }

  // Contract type multi-select
  function toggleContractType(value: string) {
    setContractTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  // Language multi-select
  function toggleLanguage(value: string) {
    setLanguages((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function handleClearAll() {
    setPubDate(null);
    setWorkloadMin(0);
    setWorkloadMax(100);
    setContractTypes([]);
    setLanguages([]);
  }

  function handleApply() {
    onApply(currentFilters);
    onClose();
  }

  // Publication date option style
  function pubDateOptionStyle(value: FiltersState["pubDate"]) {
    const isSelected = pubDate === value;
    return {
      flex: "1 0 0",
      backgroundColor: isSelected ? "#f8fafc" : "transparent",
      border: isSelected ? "1px solid #020617" : "none",
      borderRadius: 8,
      padding: "12px 16px",
      cursor: "pointer",
      fontFamily: "var(--font-geist)" as const,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "1.3",
      color: "#020617",
      whiteSpace: "nowrap" as const,
      textAlign: "center" as const,
      position: "relative" as const,
    };
  }

  const contractOptions = [
    { key: "permanent", label: t("filters.modal.permanent") },
    { key: "temporary", label: t("filters.modal.temporary") },
    { key: "apprenticeship", label: t("filters.modal.apprenticeship") },
    { key: "freelance", label: t("filters.modal.freelance") },
    { key: "internship", label: t("filters.modal.internship") },
    { key: "sideJob", label: t("filters.modal.sideJob") },
  ];

  const languageOptions = [
    { key: "german", label: t("filters.modal.german") },
    { key: "french", label: t("filters.modal.french") },
    { key: "english", label: t("filters.modal.english") },
    { key: "italian", label: t("filters.modal.italian") },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-x-0 top-0 z-[100] flex flex-col overflow-hidden"
          style={{ backgroundColor: "#ffffff", height: "100dvh" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div
            className="flex items-center justify-between shrink-0"
            style={{ padding: "12px 16px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontWeight: 600,
                fontSize: 18,
                lineHeight: "1.3",
                color: "#020617",
              }}
            >
              {t("filters.modal.title")}
            </span>
            <button
              onClick={onClose}
              aria-label={t("menu.close")}
              className="flex items-center justify-center overflow-hidden rounded-[12px] shrink-0"
              style={{ width: 40, height: 40 }}
            >
              <X size={20} weight="regular" color="var(--foreground)" />
            </button>
          </div>

          {/* ── Header divider ───────────────────────────────────────────────── */}
          <div className="shrink-0" style={{ height: 1, backgroundColor: "#CBD5E1" }} />

          {/* ── Scrollable body ──────────────────────────────────────────────── */}
          <div
            className="flex flex-col gap-[24px] overflow-y-auto flex-1"
            style={{ padding: "24px 16px 0 16px" }}
          >
            {/* Section 1 — Publication date */}
            <Section title={t("filters.modal.publicationDate")}>
              {/* Segmented selector */}
              <div
                className="relative w-full rounded-[12px]"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #cbd5e1",
                }}
              >
                <div className="flex items-center w-full" style={{ padding: 8, gap: 8 }}>
                  {/* Today */}
                  <button
                    onClick={() => togglePubDate("today")}
                    style={pubDateOptionStyle("today")}
                  >
                    {t("filters.modal.today")}
                  </button>

                  {/* Separator */}
                  <div style={{ width: 1, height: 24, backgroundColor: "#e2e8f0", flexShrink: 0 }} />

                  {/* Last week */}
                  <button
                    onClick={() => togglePubDate("last_week")}
                    style={pubDateOptionStyle("last_week")}
                  >
                    {t("filters.modal.lastWeek")}
                  </button>

                  {/* Separator */}
                  <div style={{ width: 1, height: 24, backgroundColor: "#e2e8f0", flexShrink: 0 }} />

                  {/* Last month */}
                  <button
                    onClick={() => togglePubDate("last_month")}
                    style={pubDateOptionStyle("last_month")}
                  >
                    {t("filters.modal.lastMonth")}
                  </button>
                </div>
              </div>
            </Section>

            <SectionDivider />

            {/* Section 2 — Workload */}
            <Section title={t("filters.modal.workload")}>
              {/* Slider */}
              <div style={{ paddingLeft: 8, paddingRight: 8 }}>
                <DualRangeSlider
                  min={workloadMin}
                  max={workloadMax}
                  onMinChange={setWorkloadMin}
                  onMaxChange={setWorkloadMax}
                />
              </div>

              {/* Min / Max display fields */}
              <div className="flex items-center gap-[16px] w-full">
                {/* Min */}
                <div
                  className="flex-1 flex items-center gap-[4px] rounded-[8px]"
                  style={{
                    minHeight: 48,
                    padding: 12,
                    backgroundColor: "#f1f5f9",
                  }}
                >
                  <input
                    type="number"
                    min={0}
                    max={workloadMax - 10}
                    step={10}
                    value={workloadMin}
                    onChange={(e) => {
                      const raw = Number(e.target.value);
                      const snapped = Math.round(raw / 10) * 10;
                      const clamped = Math.min(Math.max(snapped, 0), workloadMax - 10);
                      setWorkloadMin(clamped);
                    }}
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "1.3",
                      color: "#020617",
                      flex: "1 0 0",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      width: "100%",
                      MozAppearance: "textfield",
                    }}
                    className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "1.3",
                      color: "#64748b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t("filters.modal.minPercent")}
                  </span>
                </div>

                {/* Max */}
                <div
                  className="flex-1 flex items-center gap-[4px] rounded-[8px]"
                  style={{
                    minHeight: 48,
                    padding: 12,
                    backgroundColor: "#f1f5f9",
                  }}
                >
                  <input
                    type="number"
                    min={workloadMin + 10}
                    max={100}
                    step={10}
                    value={workloadMax}
                    onChange={(e) => {
                      const raw = Number(e.target.value);
                      const snapped = Math.round(raw / 10) * 10;
                      const clamped = Math.max(Math.min(snapped, 100), workloadMin + 10);
                      setWorkloadMax(clamped);
                    }}
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "1.3",
                      color: "#020617",
                      flex: "1 0 0",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      width: "100%",
                      MozAppearance: "textfield",
                    }}
                    className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "1.3",
                      color: "#64748b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t("filters.modal.maxPercent")}
                  </span>
                </div>
              </div>
            </Section>

            <SectionDivider />

            {/* Section 3 — Contract type */}
            <Section title={t("filters.modal.contractType")}>
              <div className="flex flex-wrap gap-[12px] w-full">
                {contractOptions.map(({ key, label }) => (
                  <Chip
                    key={key}
                    label={label}
                    selected={contractTypes.includes(key)}
                    onToggle={() => toggleContractType(key)}
                  />
                ))}
              </div>
            </Section>

            <SectionDivider />

            {/* Section 4 — Work language */}
            <Section title={t("filters.modal.workLanguage")}>
              <div className="flex flex-wrap gap-[12px] w-full">
                {languageOptions.map(({ key, label }) => (
                  <Chip
                    key={key}
                    label={label}
                    selected={languages.includes(key)}
                    onToggle={() => toggleLanguage(key)}
                  />
                ))}
              </div>
            </Section>

            {/* Bottom padding so last section isn't flush against CTA */}
            <div style={{ height: 8 }} />
          </div>

          {/* ── Sticky CTA ───────────────────────────────────────────────────── */}
          <div
            className="shrink-0 bg-white w-full flex items-center gap-[16px]"
            style={{
              borderTop: "1px solid #e2e8f0",
              padding: 16,
              paddingBottom: "max(16px, env(safe-area-inset-bottom))",
            }}
          >
            {/* Clear all */}
            <button
              onClick={handleClearAll}
              className="flex items-center justify-center rounded-[12px] shrink-0"
              style={{
                height: 48,
                paddingLeft: 16,
                paddingRight: 16,
                fontFamily: "var(--font-geist)",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "1.3",
                color: "#020617",
                whiteSpace: "nowrap",
              }}
            >
              {t("filters.modal.clearAll")}
            </button>

            {/* See X jobs */}
            <button
              onClick={handleApply}
              className="flex-1 flex items-center justify-center gap-[8px] rounded-[12px] overflow-hidden"
              style={{
                backgroundColor: "#99ff00",
                height: 48,
              }}
            >
              {/* Search icon */}
              <div className="relative shrink-0 overflow-clip" style={{ width: 20, height: 20 }}>
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16.8947 16.8955"
                >
                  <path d={svgPaths.p23f3a1f0} fill="#020617" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-geist)",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.3",
                  color: "#020617",
                  whiteSpace: "nowrap",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>{labelBefore.trim()}</span>
                <AnimatedNumber value={jobCount} />
                <span>{labelAfter.trim()}</span>
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}