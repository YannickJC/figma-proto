/**
 * MenuModal
 * Full-screen side drawer that slides in from the LEFT.
 * Layout:
 *   - Header  : Logo + X close button (fixed height, never scrolls)
 *   - Content : Scrollable nav items (flex-1 overflow-y-auto)
 *   - Footer  : Sticky at bottom — language selector + Log in + Create account
 */

import { X, Sparkle, MagnifyingGlass, Heart, Users, PresentationChart, Briefcase, ArrowUpRight, Globe } from "@phosphor-icons/react";
import { useI18n } from "../i18n/i18n-context";
import { AnimatePresence, motion } from "motion/react";
import { useLocation, useNavigate } from "react-router";
import type { Locale } from "../i18n/translations";

interface Props {
  open: boolean;
  onClose: () => void;
}

// ─── Logo (reused from Header) ───────────────────────────────────────────────
function Logo() {
  return (
    <div
      className="flex items-center gap-0 select-none"
      style={{
        fontFamily: "var(--font-hanken)",
        fontWeight: "var(--font-weight-semibold)",
        fontSize: "var(--text-base)",
        color: "var(--foreground)",
        letterSpacing: "-0.01em",
      }}
    >
      <span
        className="inline-flex items-center justify-center"
        style={{
          backgroundColor: "var(--primary)",
          color: "var(--primary-foreground)",
          borderRadius: "6px",
          padding: "1px 5px",
          marginRight: "3px",
          fontWeight: "var(--font-weight-bold)",
          fontSize: "var(--text-base)",
          fontFamily: "var(--font-hanken)",
          lineHeight: 1.4,
        }}
      >
        Job
      </span>
      <span
        style={{
          fontFamily: "var(--font-hanken)",
          fontWeight: "var(--font-weight-semibold)",
          fontSize: "var(--text-base)",
          color: "var(--foreground)",
        }}
      >
        Scout24
      </span>
    </div>
  );
}

// ─── NavItem ─────────────────────────────────────────────────────────────────
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  trailingIcon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, trailingIcon, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 w-full h-12 px-2 py-3 rounded-[12px] active:bg-muted transition-colors text-left cursor-pointer"
      style={{
        color: "var(--foreground)",
        backgroundColor: active ? "var(--bg-brand-subtle, #F7FFE4)" : undefined,
      }}
    >
      <span className="shrink-0 size-5 flex items-center justify-center">
        {icon}
      </span>
      <span
        className="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap"
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-regular)",
          lineHeight: "1.3",
          color: "var(--foreground)",
        }}
      >
        {label}
      </span>
      {trailingIcon && (
        <span className="shrink-0 size-4 flex items-center justify-center">
          {trailingIcon}
        </span>
      )}
    </button>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div
      className="w-full shrink-0"
      style={{ height: 1, backgroundColor: "var(--border)" }}
    />
  );
}

// ─── Component ───────────────────────────────────────────────────────────────
export function MenuModal({ open, onClose }: Props) {
  const { t, locale, setLocale, locales } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  // "Find jobs" is active on SERP (/app, /app/jobs) and job detail (/app/jobs/:id)
  const isFindJobsActive =
    location.pathname === "/app" ||
    location.pathname.startsWith("/app/jobs");

  // "Saved jobs" is active on saved jobs page
  const isSavedJobsActive = location.pathname === "/app/saved-jobs";

  // Locale label for current language
  const currentLocaleLabel = locales.find((l) => l.code === locale)?.label ?? locale.toUpperCase();

  const primaryNavItems: (NavItemProps & { key: string })[] = [
    { key: "forYou", icon: <Sparkle size={20} weight="regular" />, label: t("nav.forYou") },
    { key: "findJobs", icon: <MagnifyingGlass size={20} weight="regular" />, label: t("nav.findJobs"), active: isFindJobsActive },
    { key: "savedJobs", icon: <Heart size={20} weight="regular" />, label: t("nav.savedJobs"), active: isSavedJobsActive, onClick: () => { navigate("/app/saved-jobs"); onClose(); } },
    { key: "referrals", icon: <Users size={20} weight="regular" />, label: t("nav.referrals") },
    { key: "careerInsights", icon: <PresentationChart size={20} weight="regular" />, label: t("nav.careerInsights") },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — tap to close */}
          <motion.div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer — slides in from LEFT */}
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-background"
            style={{ borderRight: "1px solid var(--border)" }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            aria-modal="true"
            role="dialog"
            aria-label={t("app.name")}
          >
            {/* ── HEADER ─────────────────────────────────────────────────── */}
            <div
              className="shrink-0 flex items-center justify-between px-3 py-2 h-14"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <Logo />
              <button
                onClick={onClose}
                aria-label={t("menu.close")}
                className="flex items-center justify-center rounded-[12px] shrink-0 active:bg-muted transition-colors"
                style={{ width: 40, height: 40 }}
              >
                <X size={20} weight="regular" color="var(--foreground)" />
              </button>
            </div>

            {/* ── SCROLLABLE CONTENT ──────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-4 px-4 pt-4">

                {/* Primary nav */}
                <div className="flex flex-col gap-1">
                  {primaryNavItems.map((item) => (
                    <NavItem
                      key={item.key}
                      icon={item.icon}
                      label={item.label}
                      active={item.active}
                      onClick={item.onClick ?? onClose}
                    />
                  ))}
                </div>

                <Divider />

                {/* Recruiters area — external link style */}
                <div className="flex flex-col gap-1">
                  <NavItem
                    icon={<Briefcase size={20} weight="regular" />}
                    label={t("nav.recruitersArea")}
                    trailingIcon={<ArrowUpRight size={16} weight="regular" color="var(--muted-foreground)" />}
                    onClick={onClose}
                  />
                </div>

                <Divider />

              </div>
            </div>

            {/* ── STICKY FOOTER ───────────────────────────────────────────── */}
            <div className="shrink-0 flex flex-col gap-6 p-4">

              {/* Language selector */}
              <div className="flex flex-col gap-4">
                {/* Cycle through locales on click */}
                <button
                  className="flex items-center gap-2 w-fit rounded-[12px] px-2 py-2 active:bg-muted transition-colors"
                  onClick={() => {
                    const idx = locales.findIndex((l) => l.code === locale);
                    const next = locales[(idx + 1) % locales.length];
                    setLocale(next.code as Locale);
                  }}
                  aria-label={t("nav.language")}
                >
                  <Globe size={20} weight="regular" color="var(--foreground)" />
                  <span
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-regular)",
                      lineHeight: "1.3",
                      color: "var(--foreground)",
                    }}
                  >
                    {currentLocaleLabel}
                  </span>
                </button>

                <Divider />
              </div>

              {/* Auth buttons */}
              <div className="flex flex-col gap-4">
                {/* Log in — outlined */}
                <button
                  className="w-full h-12 rounded-[12px] flex items-center justify-center active:bg-muted transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "transparent",
                    color: "var(--foreground)",
                    fontFamily: "var(--font-geist)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "1.3",
                  }}
                  onClick={onClose}
                >
                  {t("nav.login")}
                </button>

                {/* Create an account — dark filled */}
                <button
                  className="w-full h-12 rounded-[12px] flex items-center justify-center active:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "var(--secondary)",
                    color: "var(--secondary-foreground)",
                    fontFamily: "var(--font-geist)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-semibold)",
                    lineHeight: "1.3",
                  }}
                  onClick={onClose}
                >
                  {t("nav.createAccount")}
                </button>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
