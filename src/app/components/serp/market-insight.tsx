import { PresentationChart } from "@phosphor-icons/react";
import { useI18n } from "../../i18n/i18n-context";

interface MarketInsightProps {
  title: string;
  children: React.ReactNode;
}

export function MarketInsight({ title, children }: MarketInsightProps) {
  const { t } = useI18n();
  return (
    <div
      className="w-full rounded-[var(--radius-card)] overflow-hidden"
      style={{
        backgroundColor: "var(--insight-bg)",
        maxHeight: "383px",
      }}
    >
      <div className="flex flex-col gap-[16px] items-start p-[16px] w-full max-h-[383px] overflow-hidden">
        {/* Career insights tag */}
        <div
          className="flex gap-[4px] items-center px-[8px] py-[4px] rounded-[12px]"
          style={{ backgroundColor: "var(--insight-tag-bg)" }}
        >
          <PresentationChart size={16} style={{ color: "var(--insight-tag-color)" }} />
          <span
            className="whitespace-nowrap"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "12px",
              fontWeight: "var(--font-weight-regular)" as any,
              lineHeight: "1.4",
              color: "var(--insight-tag-color)",
            }}
          >
            {t("serp.careerInsights")}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[8px] w-full">
          <p
            className="text-foreground"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "16px",
              fontWeight: "var(--font-weight-semibold)" as any,
              lineHeight: "1.3",
            }}
          >
            {title}
          </p>
          <div
            className="overflow-hidden"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "14px",
              fontWeight: "var(--font-weight-regular)" as any,
              lineHeight: "1.3",
              color: "var(--foreground)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}