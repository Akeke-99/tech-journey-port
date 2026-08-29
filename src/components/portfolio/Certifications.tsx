import { certifications } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <Reveal as="section" className="mb-28 sm:mb-32">
      <div id="certifications" className="scroll-mt-24">
        <h2 className="mb-12 font-mono text-2xl font-extrabold uppercase tracking-tight underline decoration-accent/30 decoration-4 underline-offset-8">
          Certifications
        </h2>

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
