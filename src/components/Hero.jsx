export default function Hero() {
  return (
    <section className="px-[6vw] pt-24 pb-20 border-b border-line">
      <div className="text-accent text-xs tracking-[0.15em] uppercase mb-5 font-mono">
        // REC · Goa, India
      </div>
      <h1 className="font-display text-[clamp(48px,8vw,96px)] leading-[0.95] max-w-4xl">
        Stories, shot
        <br />
        and edited.
        <br />
        <span className="text-muted">Systems, sold and shipped.</span>
      </h1>
      <p className="text-muted max-w-lg mt-6 text-base leading-relaxed">
        Video editor and videographer running a growth agency on the side — I
        capture and cut the frame, then build the funnel that sells it.
      </p>
    </section>
  )
}
