import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  PaperPlaneTilt,
  ArrowLeft,
  DotsThree,
  Plus,
  Pencil,
  MicrophoneStage,
  Headphones,
} from "@phosphor-icons/react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Screen = "home" | "thinking" | "response";

// ─── Status Bar (dark) ────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <div
      className="flex items-center justify-between px-5"
      style={{ height: 44, paddingTop: 4, backgroundColor: "#212121" }}
    >
      <span
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: 15,
          fontWeight: 600,
          color: "#fff",
        }}
      >
        9:41
      </span>
      <div className="flex items-center gap-[5px]">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill="#fff" />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" fill="#fff" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" fill="#fff" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="rgba(255,255,255,0.3)" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#fff" />
          <path d="M2.75 6.25A7.4 7.4 0 0 1 8 4c2.05 0 3.9.83 5.25 2.17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M0.5 3.75A10.9 10.9 0 0 1 8 1c2.95 0 5.63 1.16 7.5 3.04" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="rgba(255,255,255,0.35)" />
          <rect x="2" y="2" width="17" height="8" rx="2" fill="#fff" />
          <path d="M22.5 4v4a2 2 0 0 0 0-4z" fill="rgba(255,255,255,0.4)" />
        </svg>
      </div>
    </div>
  );
}

// ─── ChatGPT Logo ─────────────────────────────────────────────────────────────

function ChatGPTLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 41" fill="none">
      <path
        d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.13-3.636 10.079 10.079 0 0 0-11.682 4.992 9.964 9.964 0 0 0-6.69 4.81 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.129 3.636 10.079 10.079 0 0 0 11.683-4.992 9.965 9.965 0 0 0 6.69-4.81 10.079 10.079 0 0 0-1.24-11.818zm-17.081 23.807a7.5 7.5 0 0 1-4.821-1.735c.061-.033.168-.091.237-.134l8.006-4.623a1.297 1.297 0 0 0 .655-1.134V19.054l3.382 1.954a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.525 7.378zM4.81 32.498a7.469 7.469 0 0 1-.894-5.023c.06.036.162.099.237.141l8.006 4.623a1.297 1.297 0 0 0 1.308 0l9.773-5.639v3.909a.12.12 0 0 1-.048.103L15.255 35.3A7.485 7.485 0 0 1 4.81 32.498zm-2.979-17.193a7.47 7.47 0 0 1 3.908-3.287c0 .068-.004.19-.004.274v9.246a1.296 1.296 0 0 0 .654 1.132l9.773 5.64-3.382 1.953a.12.12 0 0 1-.114.012L4.947 25.006a7.503 7.503 0 0 1-3.115-9.701zm27.817 6.435l-9.773-5.64 3.381-1.952a.12.12 0 0 1 .115-.012l7.717 4.454a7.501 7.501 0 0 1-1.158 13.528v-9.52a1.295 1.295 0 0 0-.282-.858zm3.37-5.043c-.059-.037-.162-.099-.236-.141l-8.006-4.623a1.298 1.298 0 0 0-1.308 0L13.695 18.57v-3.909a.12.12 0 0 1 .048-.103l7.738-4.868a7.498 7.498 0 0 1 11.166 7.205zm-21.212 6.967l-3.382-1.953a.12.12 0 0 1-.066-.092v-9.299a7.498 7.498 0 0 1 12.294-5.756 6.94 6.94 0 0 0-.236.134l-8.006 4.623a1.297 1.297 0 0 0-.654 1.132l-.012 11.211zm1.838-3.943l4.35-2.514 4.349 2.514v5l-4.349 2.514-4.35-2.514V19.72z"
        fill="currentColor"
      />
    </svg>
  );
}

// ─── Prompt bubbles ───────────────────────────────────────────────────────────

const EXAMPLE_PROMPTS = [
  "Find me Project Manager\njobs in Zurich",
  "PM salary benchmarks\nin Switzerland",
  "Top Swiss companies\nhiring project managers",
  "How to get PMP\ncertified in Switzerland",
];

// ─── User message ─────────────────────────────────────────────────────────────

const USER_MESSAGE = "I'm looking for Project Manager jobs in Zurich, Switzerland. Which job sites do you recommend?";

// ─── ChatGPT response (streamed character by character) ───────────────────────

const RESPONSE_PARTS = [
  {
    type: "intro" as const,
    text: "Great question! Here are the best job platforms for Project Managers in Zurich, ranked by relevance:\n\n",
  },
  {
    type: "highlight" as const,
    text: "🥇 JobScout24.ch",
    sub: " — The #1 choice for Project Manager roles in Switzerland. Aggregates listings from across the country with smart filters for workload %, salary range, and contract type. Updated hourly.",
  },
  {
    type: "item" as const,
    text: "🔹 Jobs.ch",
    sub: " — Large Swiss-specific board, strong for permanent PM roles in banking and consulting.",
  },
  {
    type: "item" as const,
    text: "🔹 LinkedIn",
    sub: " — Ideal for international companies with Swiss offices and senior PM positions.",
  },
  {
    type: "item" as const,
    text: "🔹 Indeed.ch",
    sub: " — High volume but lower Swiss-market specificity than JobScout24.",
  },
  {
    type: "item" as const,
    text: "🔹 Glassdoor",
    sub: " — Useful for salary benchmarking alongside PM job listings.",
  },
  {
    type: "outro" as const,
    text: "\n\nI'd start with **JobScout24.ch** — it's built specifically for the Swiss market and lets you filter by workload percentage (a uniquely Swiss employment feature). Would you like tips on writing a Swiss-style CV for PM roles?",
  },
];

// ─── Screen 1 — Home ─────────────────────────────────────────────────────────

function HomeScreen({ onSend }: { onSend: () => void }) {
  const [inputVal, setInputVal] = useState("");

  return (
    <div
      className="flex flex-col min-h-dvh"
      style={{ backgroundColor: "#212121" }}
    >
      <StatusBar />

      {/* Top nav */}
      <div className="flex items-center justify-between px-4 py-2">
        <button className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 16,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            ChatGPT
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center" style={{ width: 36, height: 36 }}>
            <Headphones size={20} color="rgba(255,255,255,0.7)" weight="regular" />
          </button>
          <button className="flex items-center justify-center" style={{ width: 36, height: 36 }}>
            <Pencil size={20} color="rgba(255,255,255,0.7)" weight="regular" />
          </button>
        </div>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
        {/* Logo */}
        <div style={{ color: "#fff" }}>
          <ChatGPTLogo size={48} />
        </div>

        {/* Prompt suggestions grid */}
        <div className="grid grid-cols-2 gap-3 w-full" style={{ maxWidth: 400 }}>
          {EXAMPLE_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={onSend}
              className="rounded-2xl p-4 text-left"
              style={{
                backgroundColor: "#2f2f2f",
                fontFamily: "var(--font-geist)",
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.4,
                whiteSpace: "pre-line",
              }}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="px-4 pb-8 pt-2">
        <div
          className="flex items-end gap-3 rounded-3xl px-4 py-3"
          style={{ backgroundColor: "#2f2f2f" }}
        >
          <button className="flex items-center justify-center shrink-0 mb-1">
            <Plus size={22} color="rgba(255,255,255,0.6)" weight="regular" />
          </button>
          <div
            className="flex-1"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 16,
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.5,
              paddingBottom: 2,
            }}
          >
            Message ChatGPT
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="flex items-center justify-center mb-1">
              <MicrophoneStage size={22} color="rgba(255,255,255,0.6)" weight="regular" />
            </button>
            <button
              onClick={onSend}
              className="flex items-center justify-center rounded-full"
              style={{
                width: 34,
                height: 34,
                backgroundColor: "#fff",
              }}
            >
              <PaperPlaneTilt size={16} color="#212121" weight="fill" />
            </button>
          </div>
        </div>
        <p
          className="text-center mt-3"
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

// ─── Screen 2 — Thinking ─────────────────────────────────────────────────────

function ThinkingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const id = setTimeout(onDone, 1800);
    return () => clearTimeout(id);
  }, [onDone]);

  return (
    <div className="flex flex-col min-h-dvh" style={{ backgroundColor: "#212121" }}>
      <StatusBar />

      {/* Top nav */}
      <div className="flex items-center justify-between px-4 py-2">
        <span
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 16,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          ChatGPT
        </span>
        <div className="flex items-center gap-2">
          <DotsThree size={20} color="rgba(255,255,255,0.6)" weight="bold" />
        </div>
      </div>

      <div className="flex-1 flex flex-col px-4 pt-4 pb-32 gap-6 overflow-y-auto">
        {/* User message bubble */}
        <div className="flex justify-end">
          <div
            className="rounded-3xl rounded-br-sm px-4 py-3"
            style={{
              backgroundColor: "#2f2f2f",
              maxWidth: "80%",
              fontFamily: "var(--font-geist)",
              fontSize: 15,
              color: "#fff",
              lineHeight: 1.5,
            }}
          >
            {USER_MESSAGE}
          </div>
        </div>

        {/* Thinking indicator */}
        <div className="flex items-start gap-3">
          <div
            className="rounded-full flex items-center justify-center shrink-0 mt-1"
            style={{ width: 28, height: 28, backgroundColor: "#fff", color: "#212121" }}
          >
            <ChatGPTLogo size={18} />
          </div>
          <div className="flex items-center gap-1 pt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="rounded-full"
                style={{ width: 8, height: 8, backgroundColor: "rgba(255,255,255,0.5)" }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 3 — Response ─────────────────────────────────────────────────────

function ResponseScreen({ onJobScoutClick }: { onJobScoutClick: () => void }) {
  const [revealedParts, setRevealedParts] = useState<number>(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current = 0;
    const id = setInterval(() => {
      current++;
      setRevealedParts(current);
      if (current >= RESPONSE_PARTS.length) clearInterval(id);
    }, 320);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [revealedParts]);

  const visibleParts = RESPONSE_PARTS.slice(0, revealedParts);

  return (
    <div className="flex flex-col min-h-dvh" style={{ backgroundColor: "#212121" }}>
      <StatusBar />

      {/* Top nav */}
      <div className="flex items-center justify-between px-4 py-2">
        <span
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 16,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          ChatGPT
        </span>
        <DotsThree size={20} color="rgba(255,255,255,0.6)" weight="bold" />
      </div>

      <div className="flex-1 flex flex-col px-4 pt-4 gap-6 overflow-y-auto" style={{ paddingBottom: 120 }}>
        {/* User message */}
        <div className="flex justify-end">
          <div
            className="rounded-3xl rounded-br-sm px-4 py-3"
            style={{
              backgroundColor: "#2f2f2f",
              maxWidth: "80%",
              fontFamily: "var(--font-geist)",
              fontSize: 15,
              color: "#fff",
              lineHeight: 1.5,
            }}
          >
            {USER_MESSAGE}
          </div>
        </div>

        {/* GPT response */}
        <div className="flex items-start gap-3">
          <div
            className="rounded-full flex items-center justify-center shrink-0 mt-1"
            style={{ width: 28, height: 28, backgroundColor: "#fff", color: "#212121" }}
          >
            <ChatGPTLogo size={18} />
          </div>
          <div className="flex-1 flex flex-col gap-2" style={{ minWidth: 0 }}>
            <AnimatePresence>
              {visibleParts.map((part, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {part.type === "intro" && (
                    <span
                      style={{
                        fontFamily: "var(--font-geist)",
                        fontSize: 15,
                        color: "#fff",
                        lineHeight: 1.6,
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {part.text}
                    </span>
                  )}

                  {part.type === "highlight" && (
                    <button
                      onClick={onJobScoutClick}
                      className="w-full text-left rounded-2xl p-4 flex flex-col gap-1"
                      style={{
                        backgroundColor: "rgba(153,255,0,0.12)",
                        border: "1px solid rgba(153,255,0,0.35)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          style={{
                            fontFamily: "var(--font-geist)",
                            fontSize: 16,
                            fontWeight: 700,
                            color: "#99ff00",
                          }}
                        >
                          {part.text}
                        </span>
                        <span
                          className="rounded-full px-2"
                          style={{
                            backgroundColor: "#99ff00",
                            fontFamily: "var(--font-geist)",
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#020617",
                            height: 20,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          #1 PICK
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-geist)",
                          fontSize: 14,
                          color: "rgba(255,255,255,0.75)",
                          lineHeight: 1.5,
                        }}
                      >
                        {part.sub}
                      </span>
                      <span
                        className="mt-1 inline-flex items-center gap-1 rounded-full px-3"
                        style={{
                          height: 28,
                          backgroundColor: "#99ff00",
                          fontFamily: "var(--font-geist)",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#020617",
                          alignSelf: "flex-start",
                        }}
                      >
                        Open JobScout24 →
                      </span>
                    </button>
                  )}

                  {part.type === "item" && (
                    <div
                      style={{
                        fontFamily: "var(--font-geist)",
                        fontSize: 15,
                        color: "#fff",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>{part.text}</span>
                      <span style={{ color: "rgba(255,255,255,0.7)" }}>{part.sub}</span>
                    </div>
                  )}

                  {part.type === "outro" && (
                    <div
                      style={{
                        fontFamily: "var(--font-geist)",
                        fontSize: 15,
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.6,
                        marginTop: 4,
                      }}
                    >
                      {part.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Cursor blink while still streaming */}
            {revealedParts < RESPONSE_PARTS.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{
                  display: "inline-block",
                  width: 2,
                  height: 16,
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  marginLeft: 2,
                  verticalAlign: "middle",
                }}
              />
            )}
          </div>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        className="px-4 pb-8 pt-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#212121" }}
      >
        <div
          className="flex items-center gap-3 rounded-3xl px-4"
          style={{ backgroundColor: "#2f2f2f", height: 52 }}
        >
          <Plus size={20} color="rgba(255,255,255,0.4)" weight="regular" />
          <span
            className="flex-1"
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 15,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Reply to ChatGPT…
          </span>
          <MicrophoneStage size={20} color="rgba(255,255,255,0.4)" weight="regular" />
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 32, height: 32, backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <PaperPlaneTilt size={14} color="rgba(255,255,255,0.4)" weight="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main orchestrator ────────────────────────────────────────────────────────

function ChatGPTContent() {
  const [screen, setScreen] = useState<Screen>("home");
  const navigate = useNavigate();

  const slideVariants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-30%", opacity: 0 },
  };

  const transition = {
    duration: 0.28,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  };

  return (
    <div
      className="w-full min-h-dvh overflow-hidden"
      style={{ maxWidth: 430, margin: "0 auto", position: "relative", backgroundColor: "#212121" }}
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
            <HomeScreen onSend={() => setScreen("thinking")} />
          </motion.div>
        )}

        {screen === "thinking" && (
          <motion.div
            key="thinking"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <ThinkingScreen onDone={() => setScreen("response")} />
          </motion.div>
        )}

        {screen === "response" && (
          <motion.div
            key="response"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <ResponseScreen onJobScoutClick={() => navigate("/app/jobs/pm-zurich-chatgpt")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function ChatGPTPage() {
  return (
    <div
      className="min-h-dvh"
      style={{ backgroundColor: "#212121", fontFamily: "var(--font-geist)" }}
    >
      <ChatGPTContent />
    </div>
  );
}