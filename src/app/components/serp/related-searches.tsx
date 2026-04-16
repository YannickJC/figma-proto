import { MagnifyingGlass } from "@phosphor-icons/react";
import { useI18n } from "../../i18n/i18n-context";

export function RelatedSearches({ queries }: { queries: string[] }) {
  const { locale } = useI18n();
  const title =
    locale === "de"
      ? "Ähnliche Suchanfragen"
      : locale === "fr"
        ? "Recherches similaires"
        : "Related searches";

  return (
    <div className="w-full px-4 py-4">
      <p
        className="text-foreground mb-3"
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: "16px",
          fontWeight: "var(--font-weight-semibold)" as any,
          lineHeight: "1.2",
        }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-[12px]">
        {queries.map((query) => (
          <button
            key={query}
            onClick={() => {
              /* Trigger search with query */
            }}
            className="flex gap-[12px] items-center p-[12px] rounded-[12px] bg-muted hover:bg-border transition-colors w-full"
          >
            <MagnifyingGlass size={20} className="text-foreground shrink-0" />
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "14px",
                fontWeight: "var(--font-weight-regular)" as any,
                lineHeight: "1.3",
                color: "var(--foreground)",
              }}
            >
              {query}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}