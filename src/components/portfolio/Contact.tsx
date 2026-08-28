import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const isPlaceholder = (value: string) => value.startsWith("[");

const cards = [
  { label: "GitHub", detail: profile.links.github, href: profile.links.github, note: "Code & projects" },
  { label: "LinkedIn", detail: profile.links.linkedin, href: profile.links.linkedin, note: "Professional profile" },
  { label: "Email", detail: profile.links.email, href: `mailto:${profile.links.email}`, note: "Get in touch" },
  { label: "Resume", detail: "Download PDF", href: profile.links.resume, note: "Full background" },
];

export function Contact() {
  return (
    <Reveal as="section" className="mb-24">
      <div id="contact" className="scroll-mt-24 border-t border-border pt-16">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground underline decoration-accent/30 decoration-2 underline-offset-4">
          Connect with me
        </p>
        <h2 className="max-w-[18ch] text-3xl font-extrabold tracking-tighter sm:text-4xl">
          Open to internships, projects and conversations.
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const inactive = isPlaceholder(card.href);
            const content = (
              <>
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {card.label}
                </p>
                <p className="mt-2 break-words text-sm font-medium">{card.detail}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.note}</p>
              </>
            );

            return (
              <li key={card.label}>
                {inactive ? (
                  <div className="block h-full rounded-lg border border-border border-dashed bg-surface p-5 opacity-60">
                    {content}
                  </div>
                ) : (
                  <a
                    href={card.href}
                    className="block h-full rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-muted/40"
                  >
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}
