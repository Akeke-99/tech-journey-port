import { certifications } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <Reveal as="section" className="mb-28 sm:mb-32">
      <div id="certifications" className="scroll-mt-24">
        <div className="mb-12 border-b border-border pb-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">05 / PROOF OF WORK</p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Certifications &amp; Milestones</h2>
        </div>

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
    </Reveal>
  );
}
