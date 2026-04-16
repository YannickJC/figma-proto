import { useState, useRef, useEffect } from "react";
import { CircleHalf, Globe, Check } from "@phosphor-icons/react";
import { useI18n } from "../../i18n/i18n-context";
import svgPaths from "../../../imports/svg-j8cxa24jid";

// ─── Logo ────────────────────────────────────────────────────────────────────
function FooterLogo() {
  return (
    <div style={{ width: 121, height: 40, position: "relative", flexShrink: 0 }}>
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        fill="none"
        viewBox="0 0 121 40"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Re-use the logo paths at their natural proportions */}
        <g transform="translate(4.84, 5.77) scale(1)">
          <path d={svgPaths.p16b6a900} fill="var(--foreground)" />
          <path d={svgPaths.p2483e9f0} fill="var(--foreground)" />
          <path d={svgPaths.p1d46ff00} fill="var(--foreground)" />
          <path d={svgPaths.p24890500} fill="var(--foreground)" />
          <path d={svgPaths.p247a500} fill="var(--foreground)" />
          <path d={svgPaths.p1ca4d850} fill="var(--foreground)" />
          <path d={svgPaths.pe2f7880} fill="var(--foreground)" />
          <path d={svgPaths.p19436e80} fill="#99FF00" />
          <path d={svgPaths.p36dab480} fill="var(--foreground)" />
          <path d={svgPaths.p16231980} fill="var(--foreground)" />
          <path d={svgPaths.p18c07a00} fill="var(--foreground)" />
        </g>
      </svg>
    </div>
  );
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────
interface DropdownProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Dropdown({ open, onClose, children }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        bottom: "calc(100% + 6px)",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "var(--background)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        minWidth: 160,
        zIndex: 50,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

// ─── Dropdown Option ──────────────────────────────────────────────────────────
function DropdownOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "12px 16px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-geist)",
        fontSize: "14px",
        fontWeight: selected
          ? "var(--font-weight-semibold)"
          : "var(--font-weight-regular)",
        color: "var(--foreground)",
        textAlign: "left",
        gap: 8,
      }}
      className="hover:bg-muted transition-colors"
    >
      {label}
      {selected && <Check size={14} weight="bold" />}
    </button>
  );
}

// ─── Icon Button ──────────────────────────────────────────────────────────────
function IconButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 40,
        padding: "0 12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        borderRadius: 12,
        flexShrink: 0,
      }}
      className="hover:bg-border transition-colors"
    >
      {icon}
      <span
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: "16px",
          fontWeight: "var(--font-weight-regular)" as any,
          lineHeight: "1.3",
          color: "var(--foreground)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </button>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div style={{ width: "100%", height: 1, backgroundColor: "var(--border)", flexShrink: 0 }} />
  );
}

// ─── Footer Links ─────────────────────────────────────────────────────────────
const LINK_KEYS = [
  { key: "terms", translationKey: "footer.termsOfUse" as const, href: "#" },
  { key: "privacy", translationKey: "footer.dataPrivacy" as const, href: "#" },
  { key: "legal", translationKey: "footer.legalNotice" as const, href: "#" },
  { key: "cookies", translationKey: "footer.cookieSettings" as const, href: "#" },
  { key: "contact", translationKey: "footer.contact" as const, href: "#" },
];

// ─── Main Export ──────────────────────────────────────────────────────────────
export function SerpFooter() {
  const { t, locale, setLocale, locales } = useI18n();
  const [themeOpen, setThemeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Theme state — persisted on <html> element via "dark" class
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  function applyTheme(t: "light" | "dark") {
    setTheme(t);
    if (t === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setThemeOpen(false);
  }

  const currentLang = locales.find((l) => l.code === locale)?.label ?? "English";

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "var(--muted)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          padding: 16,
        }}
      >
        {/* Logo */}
        <FooterLogo />

        {/* Divider */}
        <Divider />

        {/* Icon Buttons Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            width: "100%",
          }}
        >
          {/* Theme button */}
          <div style={{ position: "relative" }}>
            <IconButton
              icon={<CircleHalf size={20} weight="fill" style={{ color: "var(--foreground)", flexShrink: 0 }} />}
              label={t("footer.changeTheme")}
              onClick={() => { setThemeOpen((v) => !v); setLangOpen(false); }}
            />
            <Dropdown open={themeOpen} onClose={() => setThemeOpen(false)}>
              <DropdownOption
                label={t("footer.themeLight")}
                selected={theme === "light"}
                onClick={() => applyTheme("light")}
              />
              <DropdownOption
                label={t("footer.themeDark")}
                selected={theme === "dark"}
                onClick={() => applyTheme("dark")}
              />
            </Dropdown>
          </div>

          {/* Language button */}
          <div style={{ position: "relative" }}>
            <IconButton
              icon={<Globe size={20} style={{ color: "var(--foreground)", flexShrink: 0 }} />}
              label={currentLang}
              onClick={() => { setLangOpen((v) => !v); setThemeOpen(false); }}
            />
            <Dropdown open={langOpen} onClose={() => setLangOpen(false)}>
              {locales.map((l) => (
                <DropdownOption
                  key={l.code}
                  label={l.label}
                  selected={locale === l.code}
                  onClick={() => { setLocale(l.code); setLangOpen(false); }}
                />
              ))}
            </Dropdown>
          </div>
        </div>

        {/* Divider */}
        <Divider />

        {/* Text links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            paddingTop: 12,
            paddingBottom: 12,
            width: "100%",
          }}
        >
          {LINK_KEYS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                padding: "4px 8px",
                borderRadius: 12,
                textDecoration: "none",
                fontFamily: "var(--font-geist)",
                fontSize: "14px",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "1.3",
                color: "var(--foreground)",
                whiteSpace: "nowrap",
              }}
              className="hover:bg-border transition-colors"
            >
              {t(link.translationKey)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            padding: "4px 8px",
            borderRadius: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "14px",
              fontWeight: "var(--font-weight-regular)" as any,
              lineHeight: "1.3",
              color: "var(--foreground)",
              whiteSpace: "nowrap",
            }}
          >
            {t("footer.copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
}
