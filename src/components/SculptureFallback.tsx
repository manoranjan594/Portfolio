export function SculptureFallback() {
  return (
    <div className="relative w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[620px] flex items-center justify-center p-6 select-none">
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
        {/* Soft Emerald-Sage Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-[#174D38]/40 blur-3xl pointer-events-none" />
        <div className="absolute inset-8 rounded-full bg-[#D5F2A3]/10 blur-2xl pointer-events-none" />

        {/* Outer Orbiting Champagne Gold Loop */}
        <div className="absolute inset-0 rounded-full border border-[#C7A66A]/40 animate-[spin_35s_linear_infinite]" />
        
        {/* Interlocking Angled Champagne Gold Ring */}
        <div
          className="absolute inset-6 rounded-full border-2 border-[#C7A66A]/70"
          style={{ transform: 'rotate(35deg) scaleX(0.85)' }}
        />

        {/* Counter-rotating Inner Platinum-Chrome Ring */}
        <div
          className="absolute inset-12 rounded-full border border-white/30 animate-[spin_20s_linear_infinite_reverse]"
          style={{ transform: 'rotate(-25deg) scaleY(0.88)' }}
        />

        {/* Central Luminous Emerald Glass Core */}
        <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#1A583E] via-[#174D38] to-[#0A2016] border border-[#D5F2A3]/40 shadow-[0_0_50px_rgba(23,77,56,0.6)] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D5F2A3]/30 to-white/20 border border-white/40 blur-[1px]" />
          <div className="absolute w-4 h-4 rounded-full bg-[#D5F2A3] blur-xs animate-ping opacity-75" />
        </div>
      </div>
    </div>
  );
}
