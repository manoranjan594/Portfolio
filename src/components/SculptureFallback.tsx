export function SculptureFallback() {
  return (
    <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] flex items-center justify-center p-6 select-none">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Outer technical orbital ring */}
        <div className="absolute inset-0 rounded-full border border-[#262B33] opacity-60 animate-[spin_60s_linear_infinite]" />
        
        {/* Concentric angled titanium ring */}
        <div
          className="absolute inset-6 rounded-full border border-[#262B33]"
          style={{ transform: 'rotate(45deg) scaleX(0.75)' }}
        />

        {/* Electric blue subtle focal ring */}
        <div
          className="absolute inset-12 rounded-full border border-[#8AA9FF]/30 shadow-[0_0_30px_rgba(138,169,255,0.08)]"
          style={{ transform: 'rotate(-30deg) scaleY(0.7)' }}
        />

        {/* Central precision monolith */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-lg bg-gradient-to-br from-[#1C1F24] via-[#14161A] to-[#090A0C] border border-[#262B33] shadow-2xl flex items-center justify-center rotate-45 transform">
          <div className="w-10 h-10 rounded border border-[#8AA9FF]/40 flex items-center justify-center">
            <span className="font-mono text-[10px] text-[#8AA9FF] font-semibold tracking-widest uppercase">
              3D
            </span>
          </div>
        </div>

        {/* Bottom specification badge */}
        <div className="absolute -bottom-2 right-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[#9298A2]">
          TITANIUM MONOLITH
        </div>
      </div>
    </div>
  );
}
