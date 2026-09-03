import { Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/portrait.jpg";

const socials = [
  { label: "GitHub", href: profile.links.github, icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.links.email}`, icon: Mail },
];

export function Hero() {
  return (
    <section id="home" className="mb-28 scroll-mt-24 sm:mb-32">
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          00 / INTRO
        </span>
        <span className="h-px w-10 bg-border" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {profile.availability}
        </span>
      </div>

      <h1 className="animate-reveal mb-5 max-w-[11ch] text-balance text-6xl font-extrabold leading-[0.9] tracking-[-0.055em] sm:text-8xl lg:text-[8.5rem]">
        {profile.name}
      </h1>

      <p className="animate-reveal mb-10 max-w-[34rem] font-mono text-sm uppercase leading-relaxed tracking-[0.12em] text-muted-foreground sm:text-base">
        {profile.role}
      </p>

      <div className="animate-reveal grid items-end gap-10 md:grid-cols-[1fr_0.72fr]">
        <div className="space-y-7">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              A working philosophy
            </p>
            <p className="max-w-[19ch] text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl">
              I BUILD TO UNDERSTAND.
            </p>
          </div>

          <p className="max-w-[48ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.heroIntro}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-accent"
            >
              View My Projects <ArrowDownRight className="size-4" />
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 pt-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="group inline-flex items-center gap-3 pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="relative flex h-8 w-4 justify-center overflow-hidden">
              <span className="absolute top-0 h-8 w-px bg-border transition-colors group-hover:bg-accent" />
              <span className="absolute top-1 h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-[scroll-dot_1.8s_ease-in-out_infinite]" />
            </span>
            Scroll to explore
          </a>
        </div>

        <div className="order-last flex w-full justify-center md:order-none md:justify-end">
          <img
            src={portrait}
            alt="Keziah Kayina professional portrait"
            className="aspect-square w-full max-w-sm rounded-full border border-border object-cover grayscale-[15%]"
          />
        </div>
      </div>
    </section>
  );
}
