export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-[6vw] py-14 flex flex-col md:flex-row items-center justify-between gap-5"
    >
      <div className="font-display text-2xl">LET'S TALK</div>
      <div className="flex gap-6 text-sm">
        <a
          href="https://wa.me/919371061901"
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-accent"
        >
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/ansh.balve/"
          target="_blank"
          rel="noreferrer"
          className="text-muted hover:text-accent"
        >
          Instagram
        </a>
        <a
          href="mailto:anshbalve23@gmail.com"
          className="text-muted hover:text-accent"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
