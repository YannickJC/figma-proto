const shimmerKeyframes = `
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
`;

// Height breakdown matching the real JobCard:
//   padding top 16 + company row 48 + gap 24
//   + title (3 lines ~58px) + gap 8 + summary (3 lines ~55px)
//   + gap 24 + tags 26 + gap 16 + posted row 17 + padding bottom 16
//   ≈ 308px

export function JobCardSkeleton() {
  return (
    <>
      <style>{shimmerKeyframes}</style>
      <div
        className="relative mx-4 mb-6"
        style={{
          width: "calc(100% - 32px)",
          height: 308,
          borderRadius: "var(--radius-card)",
          background:
            "linear-gradient(90deg, var(--border) 25%, color-mix(in srgb, var(--border) 60%, var(--background)) 50%, var(--border) 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.6s ease-in-out infinite",
        }}
      />
    </>
  );
}