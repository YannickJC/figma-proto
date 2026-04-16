import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, MagnifyingGlass, Robot, Briefcase } from "@phosphor-icons/react";

// ─── Entry card ───────────────────────────────────────────────────────────────

interface EntryCardProps {
  index: number;
  label: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  accentColor: string;
  bgFrom: string;
  bgTo: string;
  borderColor: string;
  onClick: () => void;
}

function EntryCard({
  index,
  label,
  description,
  icon,
  badge,
  badgeBg,
  badgeColor,
  accentColor,
  bgFrom,
  bgTo,
  borderColor,
  onClick,
}: EntryCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left rounded-3xl p-5 flex items-center gap-5 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        border: `1px solid ${borderColor}`,
        minHeight: 96,
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icon container */}
      <div
        className="flex items-center justify-center rounded-2xl shrink-0"
        style={{
          width: 52,
          height: 52,
          backgroundColor: "rgba(255,255,255,0.1)",
          color: accentColor,
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            style={{
              fontFamily: "var(--font-hanken)",
              fontSize: 17,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            {label}
          </span>
          <span
            className="rounded-full px-2 flex items-center shrink-0"
            style={{
              height: 18,
              backgroundColor: badgeBg,
              fontFamily: "var(--font-geist)",
              fontSize: 10,
              fontWeight: 700,
              color: badgeColor,
              letterSpacing: "0.03em",
            }}
          >
            {badge}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 13,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.4,
            display: "block",
          }}
        >
          {description}
        </span>
      </div>

      {/* Arrow */}
      <div
        className="flex items-center justify-center rounded-full shrink-0"
        style={{
          width: 32,
          height: 32,
          backgroundColor: "rgba(255,255,255,0.12)",
        }}
      >
        <ArrowRight size={16} color="#fff" weight="bold" />
      </div>
    </motion.button>
  );
}

// ─── Decorative Google-style G ────────────────────────────────────────────────

function GoogleG({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// ─── ChatGPT Logo inline ──────────────────────────────────────────────────────

function ChatGPTIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 41" fill="currentColor">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.13-3.636 10.079 10.079 0 0 0-11.682 4.992 9.964 9.964 0 0 0-6.69 4.81 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.129 3.636 10.079 10.079 0 0 0 11.683-4.992 9.965 9.965 0 0 0 6.69-4.81 10.079 10.079 0 0 0-1.24-11.818zm-17.081 23.807a7.5 7.5 0 0 1-4.821-1.735c.061-.033.168-.091.237-.134l8.006-4.623a1.297 1.297 0 0 0 .655-1.134V19.054l3.382 1.954a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.525 7.378zM4.81 32.498a7.469 7.469 0 0 1-.894-5.023c.06.036.162.099.237.141l8.006 4.623a1.297 1.297 0 0 0 1.308 0l9.773-5.639v3.909a.12.12 0 0 1-.048.103L15.255 35.3A7.485 7.485 0 0 1 4.81 32.498zm-2.979-17.193a7.47 7.47 0 0 1 3.908-3.287c0 .068-.004.19-.004.274v9.246a1.296 1.296 0 0 0 .654 1.132l9.773 5.64-3.382 1.953a.12.12 0 0 1-.114.012L4.947 25.006a7.503 7.503 0 0 1-3.115-9.701zm27.817 6.435l-9.773-5.64 3.381-1.952a.12.12 0 0 1 .115-.012l7.717 4.454a7.501 7.501 0 0 1-1.158 13.528v-9.52a1.295 1.295 0 0 0-.282-.858zm3.37-5.043c-.059-.037-.162-.099-.236-.141l-8.006-4.623a1.298 1.298 0 0 0-1.308 0L13.695 18.57v-3.909a.12.12 0 0 1 .048-.103l7.738-4.868a7.498 7.498 0 0 1 11.166 7.205zm-21.212 6.967l-3.382-1.953a.12.12 0 0 1-.066-.092v-9.299a7.498 7.498 0 0 1 12.294-5.756 6.94 6.94 0 0 0-.236.134l-8.006 4.623a1.297 1.297 0 0 0-.654 1.132l-.012 11.211zm1.838-3.943l4.35-2.514 4.349 2.514v5l-4.349 2.514-4.35-2.514V19.72z" />
    </svg>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function LauncherPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-dvh flex flex-col items-center justify-center px-5 py-10"
      style={{
        background: "linear-gradient(160deg, #0a0f1e 0%, #0f1a2e 50%, #0d1420 100%)",
        fontFamily: "var(--font-geist)",
      }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Logo mark */}
        <div
          className="flex items-center justify-center rounded-2xl mb-5"
          style={{
            width: 64,
            height: 64,
            backgroundColor: "#99ff00",
          }}
        >
          <Briefcase size={30} color="#020617" weight="bold" />
        </div>

        {/* Brand */}
        <h1
          style={{
            fontFamily: "var(--font-hanken)",
            fontSize: 28,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.5px",
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          JobScout
          <span style={{ color: "#99ff00" }}>24</span>
        </h1>

        {/* Eyebrow */}
        <div
          className="flex items-center gap-2 rounded-full px-4"
          style={{
            height: 28,
            backgroundColor: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            className="rounded-full"
            style={{ width: 6, height: 6, backgroundColor: "#99ff00" }}
          />
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 12,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.08em",
            }}
          >
            PROTOTYPE · CHOOSE YOUR ENTRY POINT
          </span>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="w-full flex flex-col gap-4" style={{ maxWidth: 420 }}>
        {/* Card 1 — App */}
        <EntryCard
          index={0}
          label="Start on the App"
          description="Land directly on the job search results page"
          icon={<MagnifyingGlass size={26} weight="bold" />}
          badge="DIRECT"
          badgeBg="rgba(153,255,0,0.25)"
          badgeColor="#99ff00"
          accentColor="#99ff00"
          bgFrom="#1a2a0a"
          bgTo="#0f1a06"
          borderColor="rgba(153,255,0,0.2)"
          onClick={() => navigate("/app")}
        />

        {/* Card 2 — Google */}
        <EntryCard
          index={1}
          label="Start on Google"
          description="Simulate an organic SEO discovery flow"
          icon={<GoogleG size={26} />}
          badge="SEO"
          badgeBg="rgba(66,133,244,0.25)"
          badgeColor="#4285F4"
          accentColor="#fff"
          bgFrom="#0d1a2e"
          bgTo="#091222"
          borderColor="rgba(66,133,244,0.2)"
          onClick={() => navigate("/google")}
        />

        {/* Card 3 — ChatGPT */}
        <EntryCard
          index={2}
          label="Start on ChatGPT"
          description="See how AI assistants recommend JobScout24"
          icon={<ChatGPTIcon size={26} />}
          badge="AI"
          badgeBg="rgba(255,255,255,0.12)"
          badgeColor="rgba(255,255,255,0.8)"
          accentColor="#10a37f"
          bgFrom="#0d1f1c"
          bgTo="#091512"
          borderColor="rgba(16,163,127,0.25)"
          onClick={() => navigate("/chatgpt")}
        />
      </div>

      {/* Footer note */}
      <motion.p
        className="mt-10 text-center"
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: 12,
          color: "rgba(255,255,255,0.2)",
          maxWidth: 280,
          lineHeight: 1.6,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        All flows lead to the same prototype. This page is for stakeholder presentation only.
      </motion.p>
    </div>
  );
}
