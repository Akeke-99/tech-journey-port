import { achievements, certifications } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <Reveal as="section" className="mb-28 sm:mb-32">
      <div id="achievements" className="scroll-mt-24">
        <h2 className="mb-12 font-mono text-2xl font-extrabold uppercase tracking-tight underline decoration-accent/30 decoration-4 underline-offset-8">
          Certifications &amp; Achievements
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <li
                  key={`${cert.name}-${i}`}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent/40"
                >
                  <span className="text-sm font-medium">{cert.name}</span>
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li
                  key={`${item.name}-${i}`}
                  className="rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent/40"
                >
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase text-muted-foreground">
                    {item.context}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
