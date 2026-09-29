export default function Technical() {
  return (
    <section id="technical" className="px-[6vw] py-10 border-b border-line">
      <div className="flex items-center gap-5 mb-12">
        <span className="font-mono text-accent text-sm border border-accent rounded px-2.5 py-1">
          00:02
        </span>
        <h2 className="font-display text-[clamp(28px,4vw,44px)]">Technical work</h2>
        <span className="ml-auto text-muted text-xs uppercase tracking-widest">
          Cybersecurity · React Native · DSA
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-line rounded-md overflow-hidden hover:border-accent2 transition-colors">
          <div className="aspect-video bg-surface2">
            <img
              src="/images/ctf-win.jpeg"
              alt="CTF competition win — Cyber Siege, PCCE Techyon 2K25"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="text-[11px] uppercase tracking-widest text-accent2 mb-2.5">
              Cybersecurity
            </div>
            <h3 className="text-[17px] font-semibold mb-2.5">CTF competition — PCCE</h3>
            <div className="flex justify-between border-t border-line mt-4 pt-3.5 text-sm text-muted">
              <span>Result</span>
              <b className="text-ink font-semibold">3rd place</b>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-line rounded-md overflow-hidden hover:border-accent2 transition-colors">
          <div className="aspect-video bg-surface2">
            <img
              src="/images/vigil-screenshot.png"
              alt="Vigil app screenshots — today, month, year and log views"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="text-[11px] uppercase tracking-widest text-accent2 mb-2.5">
              React Native
            </div>
            <h3 className="text-[17px] font-semibold mb-2.5">Vigil — sleep & day tracker</h3>
            <div className="flex justify-between border-t border-line mt-4 pt-3.5 text-sm text-muted">
              <span>Stack</span>
              <b className="text-ink font-semibold">React Native</b>
            </div>
          </div>
        </div>

        <a
          href="https://leetcode.com/u/anshbalve23/"
          target="_blank"
          rel="noreferrer"
          className="bg-surface border border-line rounded-md overflow-hidden hover:border-accent2 transition-colors block"
        >
          <div className="aspect-video bg-surface2 flex flex-col justify-center px-8 py-6 relative overflow-hidden">
            <span className="absolute top-4 right-5 font-mono text-[10px] tracking-widest text-muted uppercase">
              LeetCode
            </span>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[64px] leading-none text-accent">36</span>
              <span className="text-muted text-sm">/ 4068 solved</span>
            </div>
            <div className="mt-5 h-1 w-full bg-line rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: "0.9%" }} />
            </div>
            <div className="mt-4 flex gap-5 font-mono text-[11px] text-muted uppercase tracking-widest">
              <span>Easy · Med · Hard</span>
            </div>
          </div>
          <div className="p-6">
            <div className="text-[11px] uppercase tracking-widest text-accent2 mb-2.5">
              Programming
            </div>
            <h3 className="text-[17px] font-semibold mb-2.5">LeetCode profile</h3>
            <div className="flex justify-between border-t border-line mt-4 pt-3.5 text-sm text-muted">
              <span>View</span>
              <b className="text-ink font-semibold">leetcode.com/u/anshbalve23 ↗</b>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
