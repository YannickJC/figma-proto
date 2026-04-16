import { Link } from "react-router";
import { useI18n } from "../../i18n/i18n-context";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  const { t } = useI18n();
  return (
    <nav
      className="flex gap-[4px] h-[44px] items-center"
      aria-label={t("nav.breadcrumb")}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-[4px]">
          {i > 0 && (
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: "16px",
                fontWeight: "var(--font-weight-regular)" as any,
                lineHeight: "21px",
                color: "var(--muted-foreground)",
              }}
            >
              /
            </span>
          )}
          <Link
            to={item.href}
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: "14px",
              fontWeight: "var(--font-weight-regular)" as any,
              lineHeight: "1.3",
              color: "var(--muted-foreground)",
            }}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
