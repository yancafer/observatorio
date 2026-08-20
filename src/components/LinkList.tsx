import { links } from "@/data/links";

export function LinkList() {
  return (
    <nav className="mt-10 flex w-full flex-col gap-4">
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up group flex items-center gap-4 rounded-2xl border border-accent-gold/30 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-gold/70 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(201,161,90,0.25)] active:translate-y-0"
          style={{ animationDelay: `${0.45 + i * 0.15}s` }}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-gold/40 text-accent-gold transition-all duration-300 group-hover:scale-110 group-hover:text-foreground">
            {link.icon}
          </span>
          <span className="text-base font-medium text-foreground">{link.label}</span>
        </a>
      ))}
    </nav>
  );
}
