import { profile } from "@/data/portfolio";
import portraitAsset from "@/assets/portrait.png.asset.json";

export function Hero() {
  return (
    <section id="home" className="mb-28 scroll-mt-24 sm:mb-32">
      <div className="mb-6 inline-block rounded-full border border-accent/25 bg-accent/5 px-3 py-1">
        <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-accent">
          {profile.availability}
        </span>
      </div>

      <h1 className="animate-reveal mb-6 text-balance text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
        {profile.name}
      </h1>
      <p className="animate-reveal mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {profile.role}
      </p>

      <div className="animate-reveal grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <p className="max-w-[45ch] text-pretty text-lg font-medium leading-relaxed sm:text-xl">
            {profile.heroIntro}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              View My Projects <span className="opacity-50">→</span>
            </a>
            <a
              href={profile.links.resume}
              className="inline-flex items-center rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-5 font-mono text-xs text-muted-foreground">
            <a href={profile.links.github} className="hover:text-foreground">
              GITHUB <span className="opacity-30">/</span>
            </a>
            <a href={profile.links.linkedin} className="hover:text-foreground">
              LINKEDIN <span className="opacity-30">/</span>
            </a>
          </div>
        </div>

        <div className="order-last md:order-none">
          <img
            src={portraitAsset.url}
            alt="Keziah Kayina professional portrait"
            className="w-full max-w-sm rounded-sm object-cover md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
