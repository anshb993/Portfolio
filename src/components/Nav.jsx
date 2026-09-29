export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-[6vw] py-7 border-b border-line">
      <div className="font-display text-2xl flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent inline-block" />
        ANSH
      </div>
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-muted">
        <a href="#creative" className="hover:text-ink">Creative</a>
        <a href="#agency" className="hover:text-ink">Agency</a>
        <a href="#technical" className="hover:text-ink">Technical</a>
        <a href="#contact" className="hover:text-ink">Contact</a>
      </div>
    </nav>
  )
}
