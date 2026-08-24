import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { sections } from "@/data/portfolio";

export function SiteNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 font-mono text-[11px] uppercase tracking-tight"
      >
        <a href="#home" className="flex items-center gap-2 rounded-sm">
          <span className="font-bold text-accent">[N]</span>
          <span className="hidden sm:inline">Portfolio v1.0</span>
        </a>

        <ul className="hidden gap-6 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`transition-colors hover:text-accent ${
                  active === s.id
                    ? "text-accent underline decoration-accent/50 underline-offset-[6px]"
                    : "text-muted-foreground"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-sm p-1 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-5xl px-6 py-3">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-mono text-xs uppercase tracking-tight ${
                    active === s.id ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
