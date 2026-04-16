import { X, MagnifyingGlass, Info, XCircle } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/i18n-context";
import svgPaths from "../../imports/svg-pthxqtu3uz";

interface Props {
  open: boolean;
  onClose: () => void;
  initialValue?: string;
  onSelect: (value: string) => void;
}

// Popular searches are example/demo data — labels are i18n'd
const POPULAR_SEARCH_KEYS = [
  "jobTitle.modal.popular.1",
  "jobTitle.modal.popular.2",
  "jobTitle.modal.popular.3",
  "jobTitle.modal.popular.4",
] as const;

export function JobTitleModal({ open, onClose, initialValue = "", onSelect }: Props) {
  const { t } = useI18n();
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync value when modal opens with a new initialValue
  useEffect(() => {
    if (open) {
      setValue(initialValue);
      // Small delay so the slide-in animation starts before keyboard pops
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSelect(search: string) {
    onSelect(search);
    onClose();
  }

  function handleClear() {
    setValue("");
    inputRef.current?.focus();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
          style={{ backgroundColor: "#ffffff" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          {/* Header */}
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
              {t("jobTitle.modal.title")}
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

          {/* Divider */}
          <div
            className="shrink-0"
            style={{ height: 1, backgroundColor: "#CBD5E1" }}
          />

          {/* Body — scrollable */}
          <div
            className="flex flex-col gap-4 overflow-y-auto flex-1"
            style={{ padding: "16px 16px 0 16px" }}
          >
            {/* Search input */}
            <div
              className="flex items-center gap-2 w-full shrink-0 rounded-[8px]"
              style={{
                backgroundColor: "#f1f5f9",
                minHeight: 48,
                paddingLeft: 12,
                paddingRight: 4,
                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && value.trim()) {
                    handleSelect(value.trim());
                  }
                }}
                className="flex-1 min-w-0 bg-transparent outline-none"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "1.3",
                  color: "#020617",
                }}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
              {value && (
                <button
                  onClick={handleClear}
                  aria-label={t("menu.close")}
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 40, height: 40 }}
                >
                  {/* XCircle via Figma SVG paths */}
                  <div className="relative shrink-0" style={{ width: 24, height: 24 }}>
                    <svg
                      className="absolute block inset-0 size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <path d={svgPaths.p313fc700} fill="#020617" />
                    </svg>
                  </div>
                </button>
              )}
            </div>

            {/* Info box */}
            <div
              className="flex gap-3 items-start rounded-[8px] shrink-0 w-full"
              style={{ backgroundColor: "#EEF5FF", padding: 12 }}
            >
              {/* Info icon via Figma SVG paths */}
              <div className="shrink-0 mt-px" style={{ width: 20, height: 20, position: "relative" }}>
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16.25 16.25"
                >
                  <path d={svgPaths.p15b115f0} fill="#1736B6" />
                </svg>
              </div>
              <div className="flex flex-col" style={{ gap: 4 }}>
                <span
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "1.3",
                    color: "#1736B6",
                  }}
                >
                  {t("jobTitle.modal.infoTitle")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "1.3",
                    color: "#1736B6",
                  }}
                >
                  {t("jobTitle.modal.infoText")}
                </span>
              </div>
            </div>

            {/* Popular searches */}
            <div
              className="flex flex-col w-full shrink-0"
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
                {t("jobTitle.modal.popularSearches")}
              </span>
              <div className="flex flex-col" style={{ gap: 8 }}>
                {POPULAR_SEARCH_KEYS.map((key) => {
                  const search = t(key);
                  return (
                  <button
                    key={key}
                    onClick={() => handleSelect(search)}
                    className="flex items-center gap-3 w-full text-left rounded-full"
                    style={{ paddingTop: 12, paddingBottom: 12 }}
                  >
                    {/* MagnifyingGlass via Figma SVG paths */}
                    <div className="shrink-0 relative" style={{ width: 20, height: 20 }}>
                      <svg
                        className="absolute block inset-0 size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 16.2676 16.2676"
                      >
                        <path d={svgPaths.p397dcfc0} fill="#020617" />
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
                      {search}
                    </span>
                  </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Sticky CTA ──────────────────────────────────────────────────── */}
          <div
            data-slot="sticky-cta"
            className="shrink-0 bg-background w-full"
            style={{
              borderTop: "1px solid var(--border)",
              padding: 16,
              paddingBottom: "max(16px, env(safe-area-inset-bottom))",
            }}
          >
            <button
              type="button"
              onClick={() => {
                handleSelect(value.trim() || initialValue);
              }}
              data-slot="search-button"
              className="flex items-center justify-center gap-[8px] w-full rounded-[12px] overflow-hidden focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] active:scale-[0.98] transition-transform motion-reduce:transition-none"
              style={{
                backgroundColor: "var(--primary)",
                height: 48,
              }}
            >
              {/* Search icon */}
              <div className="relative shrink-0 overflow-clip" style={{ width: 20, height: 20 }}>
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16.2676 16.2676"
                >
                  <path d={svgPaths.p397dcfc0} fill="var(--foreground)" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-geist)",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "1.3",
                  color: "var(--foreground)",
                }}
              >
                {t("jobTitle.modal.search")}
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
