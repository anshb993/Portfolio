const items = [
  {
    cat: 'Motion graphics',
    title: 'Motion graphics edit',
    sub: 'Animated / typographic edit',
    youtubeId: 'czdcEFuVXiE',
  },
  {
    cat: 'Talking head',
    title: 'Interview / podcast cut',
    sub: 'In progress',
    subClass: 'text-accent',
    youtubeId: 'Y-Ezd9HlXew',
  },
]

// Drive links kept breaking, so these now point at public/images/ instead —
// drop the actual files there with these exact names, or update the paths.
const designs = [
  {
    title: 'Fight Club design',
    src: '/images/fight-club-design.png',
  },
  {
    title: 'Quotes design',
    src: '/images/quotes-design.png',
  },
]

export default function Creative() {
  return (
    <section id="creative" className="px-[6vw] py-20 border-b border-line">
      <div className="flex items-baseline gap-5 mb-12">
        <span className="font-mono text-accent text-sm border border-accent rounded px-2.5 py-1">
          00:00
        </span>
        <h2 className="font-display text-[clamp(28px,4vw,44px)]">Creative reel</h2>
        <span className="ml-auto text-muted text-xs uppercase tracking-widest">
          Video editing & videography
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-surface border border-line rounded-md overflow-hidden hover:border-accent transition-colors"
          >
            <div className="aspect-[9/16] bg-surface2 max-h-[500px] mx-auto">
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={item.title}
              />
            </div>
            <div className="px-4.5 pt-4 pb-5">
              <div className="text-[11px] uppercase tracking-widest text-accent mb-1.5">
                {item.cat}
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <div className={`text-sm mt-1 ${item.subClass || 'text-muted'}`}>
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="text-xs uppercase tracking-widest text-muted mb-6">
          Design work
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designs.map((d) => (
            <div
              key={d.title}
              className="bg-surface border border-line rounded-md overflow-hidden hover:border-accent transition-colors"
            >
              <div className="aspect-video bg-surface2">
                <img
                  src={d.src}
                  alt={d.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4.5 pt-4 pb-5">
                <h3 className="text-base font-semibold">{d.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
