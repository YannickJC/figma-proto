/**
 * CompanyAvatar
 * Tries to load the company logo via Clearbit's free logo API.
 * If the request fails (404, network error, CORS), falls back gracefully
 * to a coloured square showing the first letter of the company name.
 */

import { useState } from "react";

// Deterministic palette – one colour per letter group
const PALETTE = [
  { bg: "#EEF2FF", fg: "#3730A3" }, // indigo  (A, B)
  { bg: "#FFF7ED", fg: "#C2410C" }, // orange  (C, D)
  { bg: "#F0FDF4", fg: "#15803D" }, // green   (E, F)
  { bg: "#FFF1F2", fg: "#BE123C" }, // rose    (G, H)
  { bg: "#F0F9FF", fg: "#0369A1" }, // sky     (I, J)
  { bg: "#FDF4FF", fg: "#7E22CE" }, // purple  (K, L)
  { bg: "#ECFDF5", fg: "#047857" }, // emerald (M, N)
  { bg: "#FFFBEB", fg: "#B45309" }, // amber   (O, P)
  { bg: "#F8FAFC", fg: "#475569" }, // slate   (Q, R)
  { bg: "#FFF5F5", fg: "#C53030" }, // red     (S, T)
  { bg: "#EBF8FF", fg: "#2B6CB0" }, // blue    (U, V)
  { bg: "#F0FFF4", fg: "#276749" }, // teal    (W, X)
  { bg: "#FFFFF0", fg: "#975A16" }, // yellow  (Y, Z)
];

function getColor(name: string) {
  const code = (name.trim().toUpperCase().charCodeAt(0) || 65) - 65;
  return PALETTE[Math.floor(code / 2) % PALETTE.length];
}

interface Props {
  companyName: string;
  domain?: string;
  size?: number;
  borderRadius?: number;
}

export function CompanyAvatar({ companyName, domain, size = 48, borderRadius = 8 }: Props) {
  const [failed, setFailed] = useState(false);

  const initial = companyName.trim()[0]?.toUpperCase() ?? "?";
  const { bg, fg } = getColor(companyName);
  const logoUrl = domain ? `https://logo.clearbit.com/${domain}` : null;
  const showLogo = !!logoUrl && !failed;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius,
        backgroundColor: showLogo ? "var(--background)" : bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {showLogo ? (
        <img
          src={logoUrl!}
          alt={companyName}
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: 6,
          }}
        />
      ) : (
        <span
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: Math.round(size * 0.42),
            fontWeight: 700,
            color: fg,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {initial}
        </span>
      )}
    </div>
  );
}
