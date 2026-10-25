export function SculptureFallback() {
  return (
    <div className="relative w-full h-full min-h-[340px] flex items-center justify-center p-6 select-none">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        {/* Outer orbital hairline */}
        <div className="absolute inset-0 rounded-full border border-[#DDD5C7] opacity-60 animate-[spin_40s_linear_infinite]" />
        
        {/* Angled bronze ellipse */}
        <div
          className="absolute inset-4 rounded-full border border-[#A77A52]/40"
          style={{ transform: 'rotate(32deg) scaleX(0.7)' }}
        />

        {/* Champagne gold orbital ring */}
        <div
          className="absolute inset-10 rounded-full border-2 border-[#C4A36B]/60 shadow-[0_0_40px_rgba(196,163,107,0.15)] animate-[spin_24s_linear_infinite_reverse]"
          style={{ transform: 'rotate(-25deg) scaleY(0.65)' }}
        />

        {/* Central geometric porcelain core simulation */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-tr from-[#F0E9DC] via-[#FAF7F0] to-[#FFFDF9] border border-[#DDD5C7] shadow-xl flex items-center justify-center rotate-45 transform">
          <div className="w-12 h-12 rounded-lg border border-[#C4A36B]/50 flex items-center justify-center">
            <span className="font-mono text-[9px] text-[#A77A52] tracking-widest uppercase">
              TOTEM
            </span>
          </div>
        </div>

        {/* Studio catalog tag overlay */}
        <div className="absolute -bottom-4 right-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8B857A]">
          [SCULPTURE // ATELIER-01]
        </div>
      </div>
    </div>
  );
}
