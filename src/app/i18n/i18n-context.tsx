import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Locale, type TranslationKey } from "./translations";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  locales: { code: Locale; label: string }[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

const LOCALE_STORAGE_KEY = "js24-locale";

const availableLocales: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Fran\u00E7ais" },
  { code: "de", label: "Deutsch" },
];

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && (stored === "en" || stored === "fr" || stored === "de")) {
      return stored;
    }
  } catch {}
  const browserLang = navigator.language.slice(0, 2);
  if (browserLang === "fr" || browserLang === "de") return browserLang;
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(LOCALE_STORAGE_KEY, l); } catch {}
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>) => {
      let str = translations[locale][key] ?? translations.en[key] ?? key;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          str = str.replace(`{${k}}`, String(v));
        });
      }
      return str;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, locales: availableLocales }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fallback for components rendered outside the provider (e.g. error boundaries)
    return {
      locale: "en" as Locale,
      setLocale: () => {},
      t: (key: TranslationKey, params?: Record<string, string | number>) => {
        let str = translations.en[key] ?? key;
        if (params) {
          Object.entries(params).forEach(([k, v]) => {
            str = str.replace(`{${k}}`, String(v));
          });
        }
        return str;
      },
      locales: availableLocales,
    };
  }
  return ctx;
}