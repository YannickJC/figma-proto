import { X, MagnifyingGlass, MapPin, SlidersHorizontal, PencilSimple } from "@phosphor-icons/react";
import { useI18n } from "../i18n/i18n-context";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { JobTitleModal } from "./job-title-modal";
import { LocationModal } from "./location-modal";
import { FiltersModal, FiltersState, DEFAULT_FILTERS, countActiveFilters } from "./filters-modal";

interface Props {
  open: boolean;
  onClose: () => void;
  initialQuery?: string;
  initialLocations?: string[];
  initialFilters?: FiltersState;
  onSearch?: (query: string, locations: string[], filters: FiltersState) => void;
}

export function SearchDrawer({
  open,
  onClose,
  initialQuery = "",
  initialLocations = [],
  initialFilters = DEFAULT_FILTERS,
  onSearch,
}: Props) {
  const { t } = useI18n();

  const [query, setQuery] = useState(initialQuery);
  const [locations, setLocations] = useState<string[]>(initialLocations);
  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  useEffect(() => { setQuery(initialQuery); }, [initialQuery]);
  useEffect(() => { setLocations(initialLocations); }, [initialLocations]);
  useEffect(() => { setFilters(initialFilters); }, [initialFilters]);

  const [jobTitleModalOpen, setJobTitleModalOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);

  const filterCount = countActiveFilters(filters);

  const queryLabel = query?.trim() || t("search.placeholder.title");
  const locationsLabel =
    locations.length > 0
      ? locations.join(", ")
      : t("search.placeholder.location");
  const filtersLabel =
    filterCount > 0
      ? `+${filterCount} ${t("search.filters")}`
      : t("search.noFilters");

  function handleEditQuery() {
    setJobTitleModalOpen(true);
  }

  function handleJobTitleSelect(value: string) {
    setQuery(value);
    onSearch?.(value, locations, filters);
  }

  function handleEditLocation() {
    setLocationModalOpen(true);
  }

  function handleLocationsSelect(next: string[]) {
    setLocations(next);
    onSearch?.(query, next, filters);
  }

  function handleEditFilters() {
    setFiltersModalOpen(true);
  }

  function handleFiltersApply(next: FiltersState) {
    setFilters(next);
    onSearch?.(query, locations, next);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-foreground/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Drawer */}
            <motion.div
              className="fixed inset-x-0 bottom-0 z-50 flex flex-col overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px 16px 0 0",
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between"
                style={{ padding: "12px 16px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "1.3",
                    color: "#020617",
                  }}
                >
                  {t("search.filtersTitle")}
                </span>
                <button
                  onClick={onClose}
                  aria-label={t("menu.close")}
                  className="flex items-center justify-center overflow-hidden rounded-[12px]"
                  style={{ width: 40, height: 40 }}
                >
                  <X size={20} weight="regular" color="#020617" />
                </button>
              </div>

              {/* Rows */}
              <div style={{ padding: "0 16px 32px 16px" }}>
                {/* Row: Search */}
                <button
                  onClick={handleEditQuery}
                  className="flex items-center justify-between w-full text-left"
                  style={{ paddingTop: 24, paddingBottom: 24 }}
                >
                  <div className="flex items-center gap-[8px]">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "#f1f5f9",
                        borderRadius: 8,
                        padding: 8,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <MagnifyingGlass size={24} color="#475569" />
                    </div>
                    <div
                      className="flex flex-col"
                      style={{ fontFamily: "var(--font-geist)", fontWeight: "400", gap: 2 }}
                    >
                      <span style={{ fontSize: 14, lineHeight: "1.3", color: "#475569" }}>
                        {t("search.searchingFor")}
                      </span>
                      <span style={{ fontSize: 16, lineHeight: "1.3", color: "#020617" }}>
                        {queryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40 }}>
                    <PencilSimple size={20} color="#020617" />
                  </div>
                </button>

                {/* Divider */}
                <div style={{ height: 1, backgroundColor: "#E2E8F0" }} />

                {/* Row: Location */}
                <button
                  onClick={handleEditLocation}
                  className="flex items-center justify-between w-full text-left"
                  style={{ paddingTop: 24, paddingBottom: 24 }}
                >
                  <div className="flex items-center gap-[8px]">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "#f1f5f9",
                        borderRadius: 8,
                        padding: 8,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <MapPin size={24} color="#64748B" />
                    </div>
                    <div
                      className="flex flex-col"
                      style={{ fontFamily: "var(--font-geist)", fontWeight: "400", gap: 2 }}
                    >
                      <span style={{ fontSize: 14, lineHeight: "1.3", color: "#475569" }}>
                        {t("search.locations")}
                      </span>
                      <span style={{ fontSize: 16, lineHeight: "1.3", color: "#020617" }}>
                        {locationsLabel}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40 }}>
                    <PencilSimple size={20} color="#020617" />
                  </div>
                </button>

                {/* Divider */}
                <div style={{ height: 1, backgroundColor: "#E2E8F0" }} />

                {/* Row: Filters */}
                <button
                  onClick={handleEditFilters}
                  className="flex items-center justify-between w-full text-left"
                  style={{ paddingTop: 24, paddingBottom: 24 }}
                >
                  <div className="flex items-center gap-[8px]">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "#f1f5f9",
                        borderRadius: 8,
                        padding: 8,
                        width: 40,
                        height: 40,
                      }}
                    >
                      <SlidersHorizontal size={24} color={filterCount > 0 ? "#020617" : "#64748B"} />
                    </div>
                    <div
                      className="flex flex-col"
                      style={{ fontFamily: "var(--font-geist)", fontWeight: "400", gap: 2 }}
                    >
                      <span style={{ fontSize: 14, lineHeight: "1.3", color: "#475569" }}>
                        {t("search.filtersLabel")}
                      </span>
                      <span style={{ fontSize: 16, lineHeight: "1.3", color: "#020617" }}>
                        {filtersLabel}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40 }}>
                    <PencilSimple size={20} color="#020617" />
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Job Title Modal */}
      <JobTitleModal
        open={jobTitleModalOpen}
        onClose={() => setJobTitleModalOpen(false)}
        initialValue={query}
        onSelect={handleJobTitleSelect}
      />

      {/* Location Modal */}
      <LocationModal
        open={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        initialTags={locations}
        onSelect={handleLocationsSelect}
      />

      {/* Filters Modal */}
      <FiltersModal
        open={filtersModalOpen}
        onClose={() => setFiltersModalOpen(false)}
        initialFilters={filters}
        onApply={handleFiltersApply}
      />
    </>
  );
}