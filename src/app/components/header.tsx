import { List, User } from "@phosphor-icons/react";
import { useI18n } from "../i18n/i18n-context";

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  const { t } = useI18n();
  return (
    <header
      className="sticky top-0 z-40 bg-background"
      style={{
        borderBottom: "1px solid var(--border)",
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div
        className="flex items-center justify-between py-2 max-w-5xl mx-auto h-[56px]"
        style={{
          paddingLeft: "calc(0.5rem + env(safe-area-inset-left))",
          paddingRight: "calc(0.5rem + env(safe-area-inset-right))",
        }}
      >
        {/* Left: Hamburger */}
        <button
          onClick={onMenuOpen}
          aria-label={t("header.openMenu")}
          className="flex items-center justify-center rounded-[12px] shrink-0"
          style={{ width: 40, height: 40 }}
        >
          <List size={20} weight="regular" color="var(--foreground)" />
        </button>

        {/* Center: Logo */}
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
          {/* "Job" badge with primary lime-green background */}
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

        {/* Right: User icon */}
        <button
          aria-label={t("header.account")}
          className="flex items-center justify-center rounded-[12px] shrink-0"
          style={{ width: 40, height: 40 }}
        >
          <User size={16} weight="regular" color="var(--foreground)" />
        </button>
      </div>
    </header>
  );
}