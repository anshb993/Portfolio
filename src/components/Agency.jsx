const cases = [
  {
    cat: 'Experience',
    title: 'Sales experience',
    desc: 'Cold outreach, discovery calls, objection handling, and closing — running full sales cycles for local appointment-based businesses.',
    statLabel: 'Approach',
    statValue: 'Discovery → close',
  },
  {
    cat: 'Agency',
    title: 'What ScaleUpSky has done so far',
    desc: 'GBP optimization, websites, SEO/AEO/GEO, WhatsApp AI automation, and Meta Ads — for dental clinics, and now expanding into real estate.',
    statLabel: 'Result',
    statValue: 'First client testimonials',
  },
  {
    cat: 'Pharma client',
    title: 'Marketplace website + automated appointment booking',
    desc: 'Built a marketplace site for a client to sell pharmaceuticals online, plus an automated online appointment booking system.',
    statLabel: 'Delivered',
    statValue: 'Website + booking automation',
  },
]

export default function Agency() {
  return (
    <section id="agency" className="px-[6vw] py-20 border-b border-line">
      <div className="flex items-baseline gap-5 mb-12">
        <span className="font-mono text-accent text-sm border border-accent rounded px-2.5 py-1">
          00:01
        </span>
        <h2 className="font-display text-[clamp(28px,4vw,44px)]">Agency & sales</h2>
        <span className="ml-auto text-muted text-xs uppercase tracking-widest">
          ScaleUpSky
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((c) => (
          <div
            key={c.title}
            className="bg-surface border border-line rounded-md p-6 hover:border-accent2 transition-colors"
          >
            <div className="text-[11px] uppercase tracking-widest text-accent2 mb-2.5">
              {c.cat}
            </div>
            <h3 className="text-[17px] font-semibold mb-2.5">{c.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{c.desc}</p>
            <div className="flex justify-between border-t border-line mt-4 pt-3.5 text-sm text-muted">
              <span>{c.statLabel}</span>
              <b className="text-ink font-semibold">{c.statValue}</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
