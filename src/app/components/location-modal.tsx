import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import { useI18n } from "../i18n/i18n-context";
import svgPaths from "../../imports/svg-75wa1j7xro";

// ─── Animated number counter ──────────────────────────────────────────────────

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

type LocationType = "canton" | "city";

interface Suggestion {
  id: string;
  name: string;
  type: LocationType;
}

// ─── Static suggestion pool ───────────────────────────────────────────────────
// More entries than shown at once so removed items are replaced seamlessly.

const SUGGESTION_POOL: Suggestion[] = [
  { id: "ge-canton", name: "Canton of Geneva", type: "canton" },
  { id: "zh-canton", name: "Canton of Zurich", type: "canton" },
  { id: "geneva", name: "Geneva", type: "city" },
  { id: "zurich", name: "Zürich", type: "city" },
  { id: "bs-canton", name: "Canton of Basel", type: "canton" },
  { id: "bern-canton", name: "Canton of Bern", type: "canton" },
  { id: "lausanne", name: "Lausanne", type: "city" },
  { id: "basel", name: "Basel", type: "city" },
  { id: "bern", name: "Bern", type: "city" },
  { id: "luzern", name: "Lucerne", type: "city" },
  { id: "vs-canton", name: "Canton of Valais", type: "canton" },
  { id: "winterthur", name: "Winterthur", type: "city" },
];

const MAX_VISIBLE_SUGGESTIONS = 4;
const BASE_JOB_COUNT = 12450;

function computeLocationJobCount(tagCount: number): number {
  if (tagCount === 0) return BASE_JOB_COUNT;
  const count = Math.round(BASE_JOB_COUNT * Math.pow(0.62, tagCount) / 10) * 10;
  return Math.max(count, 100);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface TagProps {
  label: string;
  onRemove: () => void;
}

function Tag({ label, onRemove }: TagProps) {
  return (
    <div
      className="bg-white flex items-center gap-[8px] shrink-0 rounded-[8px]"
      style={{
        height: 40,
        paddingLeft: 12,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        border: "1px solid #cbd5e1",
      }}
    >
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
      <button
        onClick={onRemove}
        className="flex items-center justify-center shrink-0"
        style={{ width: 16, height: 16 }}
        aria-label={`Remove ${label}`}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10.0006 10.0006"
        >
          <path d={svgPaths.p2662980} fill="#020617" />
        </svg>
      </button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface Props {
  open: boolean;
  onClose: () => void;
  initialTags?: string[];
  onSelect: (locations: string[]) => void;
}

export function LocationModal({ open, onClose, initialTags = [], onSelect }: Props) {
  const { t } = useI18n();

  const [tags, setTags] = useState<string[]>(initialTags);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync tags when modal opens
  useEffect(() => {
    if (open) {
      setTags(initialTags);
      setInputValue("");
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Suggestions = pool entries not already selected, limited to MAX_VISIBLE_SUGGESTIONS
  const visibleSuggestions = SUGGESTION_POOL.filter(
    (s) => !tags.includes(s.name)
  ).slice(0, MAX_VISIBLE_SUGGESTIONS);

  function addTag(name: string) {
    if (!name.trim() || tags.includes(name.trim())) return;
    const next = [...tags, name.trim()];
    setTags(next);
    onSelect(next);
  }

  function removeTag(name: string) {
    const next = tags.filter((t) => t !== name);
    setTags(next);
    onSelect(next);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue.trim());
      setInputValue("");
    }
    // Backspace on empty input removes the last tag
    if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  }

  function handleSuggestionClick(suggestion: Suggestion) {
    addTag(suggestion.name);
    // Keep focus on the input after selecting
    setTimeout(() => inputRef.current?.focus(), 0);
  }

  const jobCount = computeLocationJobCount(tags.length);
  const [labelBefore, labelAfter] = t("location.modal.seeJobs").split("{count}");

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
              {t("location.modal.title")}
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

          {/* ── Divider ─────────────────────────────────────────────────────── */}
          <div className="shrink-0" style={{ height: 1, backgroundColor: "#CBD5E1" }} />

          {/* ── Scrollable body ──────────────────────────────────────────────── */}
          <div
            className="flex flex-col gap-4 overflow-y-auto flex-1"
            style={{ padding: "16px 16px 0 16px" }}
          >
            {/* Tag input area */}
            <div
              className="flex flex-col gap-1 w-full shrink-0"
            >
              <div
                className="flex flex-row flex-wrap items-center gap-2 w-full rounded-[12px] cursor-text"
                style={{
                  backgroundColor: "#f1f5f9",
                  minHeight: 48,
                  padding: 8,
                }}
                onClick={() => inputRef.current?.focus()}
              >
                {/* Existing tags */}
                {tags.map((tag) => (
                  <Tag key={tag} label={tag} onRemove={() => removeTag(tag)} />
                ))}

                {/* Text input */}
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={() => {
                    if (inputValue.trim()) {
                      addTag(inputValue.trim());
                      setInputValue("");
                    }
                  }}
                  placeholder={tags.length === 0 ? t("location.modal.placeholder") : ""}
                  className="flex-1 min-w-[120px] bg-transparent outline-none"
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "1.3",
                    color: inputValue.length > 0 ? "#020617" : "#64748b",
                    minHeight: 32,
                  }}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
              </div>

              {/* Helper text */}
              {inputValue.length > 0 && (
                <span
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "1.3",
                    color: "#64748b",
                    paddingLeft: 4,
                  }}
                >
                  {t("location.modal.pressEnter")}
                </span>
              )}
            </div>

            {/* Suggestions */}
            {visibleSuggestions.length > 0 && (
              <div
                className="flex flex-col w-full"
                style={{ gap: 12, paddingTop: 4, paddingBottom: 4, paddingLeft: 4 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "1.3",
                    color: "#475569",
                  }}
                >
                  {t("location.modal.suggestions")}
                </span>

                <div className="flex flex-col w-full" style={{ gap: 8 }}>
                  <AnimatePresence initial={false}>
                    {visibleSuggestions.map((suggestion) => (
                      <motion.button
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="flex items-center justify-between w-full text-left rounded-full"
                        style={{ paddingTop: 12, paddingBottom: 12 }}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                      >
                        {/* Left: pin icon + name */}
                        <div className="flex items-center gap-[8px]">
                          <div
                            className="relative shrink-0 overflow-clip"
                            style={{ width: 20, height: 20 }}
                          >
                            <svg
                              className="absolute block inset-0 size-full"
                              fill="none"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 13.75 17.4998"
                            >
                              <path d={svgPaths.p38861980} fill="#020617" />
                            </svg>
                          </div>
                          <span
                            style={{
                              fontFamily: "var(--font-geist)",
                              fontWeight: 400,
                              fontSize: 16,
                              lineHeight: "1.3",
                              color: "#020617",
                            }}
                          >
                            {suggestion.name}
                          </span>
                        </div>

                        {/* Right: type badge */}
                        <span
                          style={{
                            fontFamily: "var(--font-geist)",
                            fontWeight: 400,
                            fontSize: 14,
                            lineHeight: "1.3",
                            color: "#64748b",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {suggestion.type === "canton"
                            ? t("location.modal.canton")
                            : t("location.modal.city")}
                        </span>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>

          {/* ── Sticky CTA ──────────────────────────────────────────────────── */}
          <div
            className="shrink-0 bg-white w-full"
            style={{
              borderTop: "1px solid #e2e8f0",
              padding: 16,
              paddingBottom: "max(16px, env(safe-area-inset-bottom))",
            }}
          >
            <button
              onClick={() => {
                onSelect(tags);
                onClose();
              }}
              className="flex items-center justify-center gap-[8px] w-full rounded-[12px] overflow-hidden"
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
                  gap: "0.3em",
                }}
              >
                {labelBefore.trim()}
                <AnimatedNumber value={jobCount} />
                {labelAfter.trim()}
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}