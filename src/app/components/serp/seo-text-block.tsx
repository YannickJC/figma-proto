import { useState } from "react";
import { useI18n } from "../../i18n/i18n-context";

interface SeoTextBlockProps {
  text: React.ReactNode;
  maxLines?: number;
}

export function SeoTextBlock({ text, maxLines = 6 }: SeoTextBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useI18n();

  const showMoreLabel = t("seo.showMore");
  const showLessLabel = t("seo.showLess");

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden"
        style={
          !expanded
            ? {
                maxHeight: `${maxLines * 1.3 * 14}px`,
              }
            : undefined
        }
      >
        <div
          className="[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:opacity-70"
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: "14px",
            fontWeight: "var(--font-weight-regular)" as any,
            lineHeight: "1.3",
            color: "var(--muted-foreground)",
          }}
        >
          {text}
        </div>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: "14px",
          fontWeight: "var(--font-weight-semibold)" as any,
          lineHeight: "1.3",
          color: "var(--secondary)",
        }}
        className="mt-1"
      >
        {!expanded ? `...${showMoreLabel}` : showLessLabel}
      </button>
    </div>
  );
}