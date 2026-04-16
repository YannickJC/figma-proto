import { useI18n } from "../i18n/i18n-context";
import { Link } from "react-router";
import { House } from "@phosphor-icons/react";

export function NotFoundPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <h2>{t("common.notFound")}</h2>
      <p className="text-muted-foreground mt-2">{t("common.notFound.description")}</p>
      <Link
        to="/app"
        className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg"
        style={{ fontWeight: "var(--font-weight-semibold)" as any }}
      >
        <House size={18} />
        {t("nav.home")}
      </Link>
    </div>
  );
}