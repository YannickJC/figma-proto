import { CaretRight } from "@phosphor-icons/react";
import type { LocationLink } from "../../data/mock-jobs";
import { useI18n } from "../../i18n/i18n-context";

export function LocationLinks({
  locations,
  title,
}: {
  locations: LocationLink[];
  title: string;
}) {
  const { locale } = useI18n();
  const jobsLabel = locale === "de" ? "Stellen" : locale === "fr" ? "emplois" : "jobs";

  return (
    <div className="w-full rounded-[8px]">
      <div className="flex flex-col gap-[16px] items-center px-[12px] py-[16px] w-full">
        <p
          className="w-full text-foreground"
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: "16px",
            fontWeight: "var(--font-weight-semibold)" as any,
            lineHeight: "1.2",
          }}
        >
          {title}
        </p>
        <div className="flex flex-col gap-[12px] w-full">
          {locations.map((loc) => (
            <button
              key={loc.flagId}
              className="w-full bg-muted rounded-[12px] flex items-center gap-[12px] p-[12px] transition-colors hover:bg-border"
              onClick={() => {
                /* Trigger search with new location */
              }}
            >
              {/* Flag placeholder */}
              <div className="size-[20px] rounded-[2px] bg-border shrink-0 overflow-hidden" />
              <span
                className="flex-1 text-left text-foreground"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: "14px",
                  fontWeight: "var(--font-weight-regular)" as any,
                  lineHeight: "1.3",
                }}
              >
                {loc.name}
              </span>
              <div className="flex gap-[8px] items-center">
                <span
                  className="text-foreground whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: "12px",
                    fontWeight: "var(--font-weight-regular)" as any,
                    lineHeight: "1.4",
                  }}
                >
                  {loc.jobCount} {jobsLabel}
                </span>
                <CaretRight
                  size={16}
                  className="text-muted-foreground"
                  weight="bold"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
