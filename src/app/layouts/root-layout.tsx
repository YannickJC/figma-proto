import { Outlet } from "react-router";
import { Header } from "../components/header";
import { StickySearchButton } from "../components/sticky-search-button";
import { MenuModal } from "../components/menu-modal";
import { SearchDrawer } from "../components/search-drawer";
import { useState, useRef } from "react";
import { useSearchParams, useMatch } from "react-router";
import { I18nProvider } from "../i18n/i18n-context";
import { FiltersState, DEFAULT_FILTERS, countActiveFilters } from "../components/filters-modal";

export function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [searchLocations, setSearchLocations] = useState<string[]>(
    searchParams.get("loc") ? [searchParams.get("loc")!] : []
  );
  const [filters, setFilters] = useState<FiltersState>(DEFAULT_FILTERS);

  const isJobDetailPage = !!useMatch("/app/jobs/:id");

  const handleSearch = (q: string, locs: string[], newFilters: FiltersState) => {
    setSearchQuery(q);
    setSearchLocations(locs);
    setFilters(newFilters);
    setSearchOpen(false);

    // Trigger skeleton loading state
    setIsSearching(true);
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => setIsSearching(false), 900);
  };

  return (
    <I18nProvider>
      <div className="min-h-dvh flex flex-col bg-background text-foreground" style={{ fontFamily: "var(--font-geist)" }}>
        <Header onMenuOpen={() => setMenuOpen(true)} />

        <main className="flex-1 pb-20">
          <Outlet context={{ openSearch: () => setSearchOpen(true), isSearching, searchQuery, searchLocations, filters }} />
        </main>

        {!isJobDetailPage && (
          <StickySearchButton
            onClick={() => setSearchOpen(true)}
            query={searchQuery}
            locations={searchLocations}
            filterCount={countActiveFilters(filters)}
          />
        )}

        <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />

        <SearchDrawer
          open={searchOpen}
          onClose={() => setSearchOpen(false)}
          initialQuery={searchQuery}
          initialLocations={searchLocations}
          initialFilters={filters}
          onSearch={handleSearch}
        />
      </div>
    </I18nProvider>
  );
}