"use client";

interface WaveTransitionProps {
  direction?: "top" | "bottom";
}

export default function WaveTransition({
  direction = "bottom",
}: WaveTransitionProps) {

  const isTop = direction === "top";

  return (
    <div className={`relative w-full overflow-hidden ${
      isTop ? "rotate-180 -mb-1" : "-mt-1"
    }`}>
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[150px] md:h-[220px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,190C320,280 640,120 960,190C1280,260 1440,120 1440,190V320H0Z"
          fill="#37393b"
          fillOpacity="0.3"
        />

        <path
          d="M0,220C480,320 960,140 1440,220V320H0Z"
          fill="#93C5FD"
          fillOpacity="0.5"
        />

        <path
          d="M0,260C480,360 960,180 1440,260V320H0Z"
          fill="#b5c7df"
        />
      </svg>
    </div>
  );
}