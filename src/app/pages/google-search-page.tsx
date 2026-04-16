import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { I18nProvider, useI18n } from "../i18n/i18n-context";
import {
  MagnifyingGlass,
  Microphone,
  ArrowLeft,
  X,
  DotsThreeVertical,
  Clock,
  ArrowUpLeft,
  Camera,
} from "@phosphor-icons/react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Screen = "home" | "suggestions" | "serp";

// ─── Google Logo ──────────────────────────────────────────────────────────────

function GoogleLogo({ size = "large" }: { size?: "large" | "small" }) {
  const fontSize = size === "large" ? 48 : 22;
  const style: React.CSSProperties = {
    fontFamily: "var(--font-hanken)",
    fontSize,
    fontWeight: 700,
    letterSpacing: "-0.5px",
    lineHeight: 1,
    userSelect: "none",
  };
  return (
    <span style={style}>
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

// ─── Status Bar ───────────────────────────────────────────────────────────────

function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? "#202124" : "#000";
  return (
    <div
      className="flex items-center justify-between px-5"
      style={{ height: 44, paddingTop: 4 }}
    >
      <span style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 600, color }}>
        9:41
      </span>
      <div className="flex items-center gap-[5px]">
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill={color} />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" fill={color} />
          <rect x="9" y="3" width="3" height="9" rx="0.5" fill={color} />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill={color} fillOpacity={0.3} />
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill={color} />
          <path d="M2.75 6.25A7.4 7.4 0 0 1 8 4c2.05 0 3.9.83 5.25 2.17" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M0.5 3.75A10.9 10.9 0 0 1 8 1c2.95 0 5.63 1.16 7.5 3.04" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity={0.4} />
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={color} strokeOpacity={0.35} />
          <rect x="2" y="2" width="17" height="8" rx="2" fill={color} />
          <path d="M22.5 4v4a2 2 0 0 0 0-4z" fill={color} fillOpacity={0.4} />
        </svg>
      </div>
    </div>
  );
}

// ─── Favicon ──────────────────────────────────────────────────────────────────

function Favicon({
  letter,
  bg,
  textColor = "#fff",
  size = 28,
}: {
  letter: string;
  bg: string;
  textColor?: string;
  size?: number;
}) {
  return (
    <div
      className="flex items-center justify-center rounded-[4px] shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        fontFamily: "var(--font-geist)",
        fontSize: size * 0.42,
        fontWeight: 700,
        color: textColor,
        letterSpacing: "-0.5px",
      }}
    >
      {letter}
    </div>
  );
}

// ─── Screen 1 — Home ─────────────────────────────────────────────────────────

function HomeScreen({ onSearchTap }: { onSearchTap: () => void }) {
  const trending = [
    "project manager jobs zurich",
    "senior project manager switzerland",
    "it project manager zürich",
    "agile project manager salary switzerland",
    "pmp certification jobs zurich",
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <StatusBar />

      {/* Top bar */}
      <div className="flex items-center justify-end px-4 pt-1 pb-2 gap-3">
        <span
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 13,
            color: "#202124",
          }}
        >
          Gmail
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 13,
            color: "#202124",
          }}
        >
          Images
        </span>
        {/* Avatar */}
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: 32,
            height: 32,
            background: "linear-gradient(135deg, #EA4335 0%, #FBBC05 100%)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            A
          </span>
        </div>
      </div>

      {/* Logo + search */}
      <div className="flex-1 flex flex-col items-center pt-16 px-4">
        <GoogleLogo size="large" />

        {/* Search bar */}
        <button
          onClick={onSearchTap}
          className="w-full mt-8 flex items-center gap-3 rounded-full bg-white"
          style={{
            height: 52,
            paddingLeft: 20,
            paddingRight: 16,
            border: "1px solid #dfe1e5",
            boxShadow: "0 1px 6px rgba(32,33,36,0.1)",
            maxWidth: 460,
          }}
        >
          <MagnifyingGlass size={20} color="#9aa0a6" weight="regular" />
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 16,
              color: "#202124",
              flex: 1,
              textAlign: "left",
            }}
          >
            Search or type URL
          </span>
          <div className="flex items-center gap-3">
            <Microphone size={20} color="#4285F4" weight="regular" />
            <Camera size={20} color="#34A853" weight="regular" />
          </div>
        </button>

        {/* Google Search / I'm Feeling Lucky */}
        <div className="flex gap-3 mt-6">
          <button
            className="rounded-[4px] px-4"
            style={{
              height: 36,
              backgroundColor: "#f8f9fa",
              border: "1px solid #f8f9fa",
              fontFamily: "var(--font-geist)",
              fontSize: 14,
              color: "#3c4043",
            }}
          >
            Google Search
          </button>
          <button
            className="rounded-[4px] px-4"
            style={{
              height: 36,
              backgroundColor: "#f8f9fa",
              border: "1px solid #f8f9fa",
              fontFamily: "var(--font-geist)",
              fontSize: 14,
              color: "#3c4043",
            }}
          >
            I'm Feeling Lucky
          </button>
        </div>

        {/* Trending searches */}
        <div className="w-full mt-10" style={{ maxWidth: 460 }}>
          <div
            className="flex items-center gap-2 mb-3"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 13,
              color: "#70757a",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#70757a">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
            Trending searches
          </div>
          {trending.map((item, i) => (
            <button
              key={i}
              onClick={onSearchTap}
              className="w-full flex items-center gap-3 py-3"
              style={{
                borderTop: i === 0 ? "1px solid #e8eaed" : "none",
                borderBottom: "1px solid #e8eaed",
              }}
            >
              <MagnifyingGlass size={16} color="#9aa0a6" weight="regular" />
              <span
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: 14,
                  color: "#202124",
                }}
              >
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex flex-col items-center pb-6 pt-4"
        style={{ borderTop: "1px solid #e8eaed" }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 13,
            color: "#70757a",
          }}
        >
          Switzerland
        </span>
        <div className="flex gap-6 mt-3">
          {["Advertising", "Business", "About", "Privacy", "Terms"].map((link) => (
            <span
              key={link}
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 12,
                color: "#70757a",
              }}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Screen 2 — Suggestions ───────────────────────────────────────────────────

const FULL_QUERY = "project manager jobs zurich";

const SUGGESTIONS = [
  { text: "project manager jobs zurich", isRecent: false },
  { text: "project manager jobs in switzerland", isRecent: true },
  { text: "senior project manager zürich", isRecent: true },
  { text: "project manager salary switzerland", isRecent: false },
  { text: "it project manager jobs zurich", isRecent: false },
  { text: "agile project manager switzerland", isRecent: false },
];

function SuggestionsScreen({
  onBack,
  onSelect,
}: {
  onBack: () => void;
  onSelect: () => void;
}) {
  const [typed, setTyped] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Typing animation
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(FULL_QUERY.slice(0, i));
      if (i >= FULL_QUERY.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const showSuggestions = typed.length >= 3;

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <StatusBar />

      {/* Search bar row */}
      <div className="flex items-center gap-2 px-3 py-2">
        <button
          onClick={onBack}
          className="flex items-center justify-center rounded-full"
          style={{ width: 40, height: 40 }}
        >
          <ArrowLeft size={22} color="#202124" weight="regular" />
        </button>

        <div
          className="flex-1 flex items-center gap-2 rounded-full"
          style={{
            height: 44,
            paddingLeft: 16,
            paddingRight: 8,
            border: "1px solid #dfe1e5",
            boxShadow: "0 1px 6px rgba(32,33,36,0.1)",
          }}
        >
          <input
            ref={inputRef}
            value={typed}
            readOnly
            className="flex-1 bg-transparent outline-none border-none"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 15,
              color: "#202124",
              caretColor: "#202124",
            }}
          />
          <div className="flex items-center gap-2">
            {typed && (
              <button
                onClick={() => setTyped("")}
                className="flex items-center justify-center"
                style={{ width: 28, height: 28 }}
              >
                <X size={16} color="#9aa0a6" weight="regular" />
              </button>
            )}
            <Microphone size={20} color="#4285F4" weight="regular" />
          </div>
        </div>

        <button
          className="flex items-center justify-center"
          style={{ width: 40, height: 40 }}
        >
          <GoogleLogo size="small" />
        </button>
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: "#e8eaed" }} />

      {/* Suggestions list */}
      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {SUGGESTIONS.map((s, i) => {
              const matchEnd = typed.length;
              const beforeMatch = s.text.slice(0, matchEnd);
              const afterMatch = s.text.slice(matchEnd);

              return (
                <button
                  key={i}
                  onClick={onSelect}
                  className="w-full flex items-center gap-4 px-4 active:bg-gray-50"
                  style={{
                    height: 52,
                    borderBottom: "1px solid #f1f3f4",
                    backgroundColor:
                      s.text === FULL_QUERY ? "#f8f9fa" : "transparent",
                  }}
                >
                  {s.isRecent ? (
                    <Clock size={18} color="#9aa0a6" weight="regular" />
                  ) : (
                    <MagnifyingGlass size={18} color="#9aa0a6" weight="regular" />
                  )}
                  <span
                    className="flex-1 text-left"
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontSize: 15,
                      color: "#202124",
                    }}
                  >
                    <span style={{ fontWeight: 400 }}>{beforeMatch}</span>
                    <span style={{ fontWeight: 700 }}>{afterMatch}</span>
                  </span>
                  {s.text.startsWith(typed) && (
                    <ArrowUpLeft size={16} color="#9aa0a6" weight="regular" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Screen 3 — SERP ──────────────────────────────────────────────────────────

const COMPETITOR_RESULTS = [
  {
    id: "linkedin",
    faviconLetter: "in",
    faviconBg: "#0A66C2",
    domain: "linkedin.com › jobs › project-manager-switzerland",
    title: "Project Manager Jobs in Switzerland – LinkedIn",
    snippet:
      "4,120 Project Manager jobs available in Switzerland. New listings added daily. See salaries, compare reviews, easily apply, and get hired.",
  },
  {
    id: "indeed",
    faviconLetter: "I",
    faviconBg: "#003A9B",
    domain: "indeed.com › jobs › project-manager › zurich",
    title: "Project Manager Jobs in Zurich | Indeed.com",
    snippet:
      "1,203 Project Manager jobs in Zurich on Indeed.com. Apply to Project Manager, Senior Project Manager, IT Project Manager and more!",
  },
  {
    id: "jobs.ch",
    faviconLetter: "J",
    faviconBg: "#E8001A",
    domain: "jobs.ch › en › jobs › project-manager › zurich",
    title: "Project Manager Jobs in Zürich – jobs.ch",
    snippet:
      "Finden Sie aktuelle Project Manager Stellen in Zürich auf jobs.ch. Jetzt bewerben und den nächsten Karriereschritt machen.",
  },
  {
    id: "glassdoor",
    faviconLetter: "G",
    faviconBg: "#0CAA41",
    domain: "glassdoor.ch › Job › project-manager-zurich",
    title: "Project Manager Jobs & Salaries in Zurich | Glassdoor",
    snippet:
      "1,540 Project Manager jobs in Zurich. Search job openings, see if they fit — company salaries, reviews, and more posted by employees.",
  },
];

function SerpResult({
  faviconLetter,
  faviconBg,
  domain,
  title,
  snippet,
  onClick,
  isJobScout = false,
}: {
  faviconLetter: string;
  faviconBg: string;
  domain: string;
  title: string;
  snippet: string;
  onClick?: () => void;
  isJobScout?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left px-4 py-4 active:bg-gray-50"
      style={{
        borderBottom: "1px solid #e8eaed",
        backgroundColor: isJobScout ? "#f0fff0" : "transparent",
        display: "block",
      }}
      whileTap={isJobScout ? { scale: 0.99 } : {}}
    >
      {/* Source row */}
      <div className="flex items-center gap-2 mb-2">
        <Favicon letter={faviconLetter} bg={faviconBg} size={26} />
        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 12,
              color: "#202124",
              fontWeight: 500,
            }}
          >
            {domain.split(" › ")[0]}
          </span>
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 11,
              color: "#70757a",
            }}
          >
            {domain}
          </span>
        </div>
        {isJobScout && (
          <div
            className="ml-auto rounded-full px-2 flex items-center"
            style={{
              height: 20,
              backgroundColor: "#99ff00",
              fontFamily: "var(--font-geist)",
              fontSize: 10,
              fontWeight: 600,
              color: "#020617",
            }}
          >
            #1
          </div>
        )}
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: 18,
          color: "#1a0dab",
          lineHeight: 1.3,
          marginBottom: 4,
        }}
      >
        {title}
      </div>

      {/* Snippet */}
      <div
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: 13,
          color: "#4d5156",
          lineHeight: 1.5,
        }}
      >
        {snippet}
      </div>

      {isJobScout && (
        <div
          className="mt-2 inline-flex items-center gap-1 rounded-full px-3"
          style={{
            height: 28,
            backgroundColor: "#020617",
            fontFamily: "var(--font-geist)",
            fontSize: 12,
            fontWeight: 500,
            color: "#99ff00",
          }}
        >
          Open JobScout24 →
        </div>
      )}
    </motion.button>
  );
}

const SERP_TABS = ["All", "Images", "Jobs", "News", "Shopping"];

function SerpScreen({
  onBack,
  onJobScoutClick,
}: {
  onBack: () => void;
  onJobScoutClick: () => void;
}) {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-white overflow-y-auto">
      <StatusBar />

      {/* Search bar */}
      <div className="flex items-center gap-2 px-3 py-2">
        <button
          onClick={onBack}
          className="flex items-center justify-center rounded-full shrink-0"
          style={{ width: 36, height: 36 }}
        >
          <ArrowLeft size={20} color="#202124" weight="regular" />
        </button>

        <div
          className="flex-1 flex items-center gap-2 rounded-full"
          style={{
            height: 44,
            paddingLeft: 14,
            paddingRight: 10,
            border: "1px solid #dfe1e5",
            boxShadow: "0 1px 6px rgba(32,33,36,0.1)",
          }}
        >
          <span
            className="flex-1 truncate"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 14,
              color: "#202124",
            }}
          >
            {FULL_QUERY}
          </span>
          <div className="flex items-center gap-1">
            <X size={16} color="#9aa0a6" weight="regular" />
            <div style={{ width: 1, height: 20, backgroundColor: "#e8eaed", margin: "0 4px" }} />
            <Microphone size={18} color="#4285F4" weight="regular" />
          </div>
        </div>

        <button
          className="flex items-center justify-center shrink-0"
          style={{ width: 36, height: 36 }}
        >
          <DotsThreeVertical size={20} color="#202124" weight="bold" />
        </button>
      </div>

      {/* Tabs */}
      <div
        className="flex overflow-x-auto"
        style={{
          borderBottom: "1px solid #e8eaed",
          paddingLeft: 12,
          gap: 0,
          scrollbarWidth: "none",
        }}
      >
        {SERP_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="shrink-0 px-3 flex items-center"
            style={{
              height: 44,
              fontFamily: "var(--font-geist)",
              fontSize: 13,
              color: activeTab === tab ? "#1a73e8" : "#70757a",
              borderBottom: activeTab === tab ? "3px solid #1a73e8" : "3px solid transparent",
              fontWeight: activeTab === tab ? 600 : 400,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Loading shimmer or results */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-4 pt-4 flex flex-col gap-4"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-sm bg-gray-200 animate-pulse" />
                  <div className="w-32 h-3 rounded bg-gray-200 animate-pulse" />
                </div>
                <div className="w-3/4 h-5 rounded bg-gray-200 animate-pulse" />
                <div className="w-full h-3 rounded bg-gray-200 animate-pulse" />
                <div className="w-2/3 h-3 rounded bg-gray-200 animate-pulse" />
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {/* Meta info */}
            <div
              className="px-4 py-2"
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 12,
                color: "#70757a",
              }}
            >
              About 1,230,000 results (0.43 seconds)
            </div>

            {/* JobScout24 — first result (highlighted) */}
            <SerpResult
              faviconLetter="JS"
              faviconBg="#020617"
              domain="jobscout24.ch › jobs › project-manager › switzerland"
              title={t("google.flow.jobscout.title")}
              snippet={t("google.flow.jobscout.snippet")}
              onClick={onJobScoutClick}
              isJobScout
            />

            {/* People also ask */}
            <div className="px-4 py-3" style={{ borderBottom: "1px solid #e8eaed" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#202124",
                  marginBottom: 8,
                }}
              >
                People also ask
              </div>
              {[
                "What is the average Project Manager salary in Switzerland?",
                "Is PMP certification required for jobs in Zurich?",
                "Which industries hire most Project Managers in Switzerland?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3"
                  style={{ borderTop: "1px solid #e8eaed" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontSize: 14,
                      color: "#202124",
                      flex: 1,
                      paddingRight: 8,
                    }}
                  >
                    {q}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#70757a">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Competitor results */}
            {COMPETITOR_RESULTS.map((r) => (
              <SerpResult
                key={r.id}
                faviconLetter={r.faviconLetter}
                faviconBg={r.faviconBg}
                domain={r.domain}
                title={r.title}
                snippet={r.snippet}
              />
            ))}

            {/* Related searches */}
            <div className="px-4 py-4" style={{ borderTop: "1px solid #e8eaed" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#202124",
                  marginBottom: 12,
                }}
              >
                Related searches
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "IT project manager zurich",
                  "Agile project manager CH",
                  "Scrum master jobs",
                  "Program manager switzerland",
                  "PMP jobs zurich",
                  "Senior PM zürich",
                ].map((s, i) => (
                  <div
                    key={i}
                    className="rounded-full px-3 flex items-center"
                    style={{
                      height: 32,
                      border: "1px solid #dfe1e5",
                      fontFamily: "var(--font-geist)",
                      fontSize: 13,
                      color: "#202124",
                      backgroundColor: "#f8f9fa",
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Google footer */}
            <div
              className="flex flex-col items-center py-6 gap-2"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <GoogleLogo size="small" />
              <div className="flex gap-4 mt-2 flex-wrap justify-center px-4">
                {["Help", "Send feedback", "Privacy", "Terms"].map((l) => (
                  <span
                    key={l}
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontSize: 12,
                      color: "#70757a",
                    }}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main orchestrator ────────────────────────────────────────────────────────

function GoogleSearchContent() {
  const [screen, setScreen] = useState<Screen>("home");
  const navigate = useNavigate();

  const slideVariants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-30%", opacity: 0 },
  };

  const transition = { duration: 0.28, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] };

  return (
    <div
      className="w-full min-h-dvh overflow-hidden bg-white"
      style={{ maxWidth: 430, margin: "0 auto", position: "relative" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {screen === "home" && (
          <motion.div
            key="home"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <HomeScreen onSearchTap={() => setScreen("suggestions")} />
          </motion.div>
        )}

        {screen === "suggestions" && (
          <motion.div
            key="suggestions"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <SuggestionsScreen
              onBack={() => setScreen("home")}
              onSelect={() => setScreen("serp")}
            />
          </motion.div>
        )}

        {screen === "serp" && (
          <motion.div
            key="serp"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <SerpScreen
              onBack={() => setScreen("suggestions")}
              onJobScoutClick={() => navigate("/app?q=project+manager&loc=Zurich")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Export (wraps its own I18nProvider) ─────────────────────────────────────

export function GoogleSearchPage() {
  return (
    <I18nProvider>
      <div className="min-h-dvh bg-white" style={{ fontFamily: "var(--font-geist)" }}>
        <GoogleSearchContent />
      </div>
    </I18nProvider>
  );
}