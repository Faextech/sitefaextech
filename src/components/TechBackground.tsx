interface TechBackgroundProps {
  variant?: "hero" | "section";
  className?: string;
}

export default function TechBackground({
  variant = "section",
  className = "",
}: TechBackgroundProps) {
  if (variant === "hero") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-faex-blue/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-faex-orange/8 blur-[100px]" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-faex-blue/5 blur-[80px]" />

        {/* Circuit lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0570e8" stopOpacity="0" />
              <stop offset="50%" stopColor="#0570e8" stopOpacity="1" />
              <stop offset="100%" stopColor="#f58220" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="30%" x2="90%" y2="30%" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="4 6" className="animate-dash" />
          <line x1="5%" y1="60%" x2="70%" y2="60%" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="4 6" className="animate-dash" />
          <line x1="30%" y1="10%" x2="30%" y2="90%" stroke="#0570e8" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 6" />
          <circle cx="10%" cy="30%" r="3" fill="#0570e8" className="animate-pulse-node" />
          <circle cx="90%" cy="30%" r="3" fill="#f58220" className="animate-pulse-node" />
          <circle cx="30%" cy="60%" r="3" fill="#0570e8" className="animate-pulse-node" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="bg-grid-light absolute inset-0 opacity-40" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-faex-blue/5 blur-[80px]" />
    </div>
  );
}
