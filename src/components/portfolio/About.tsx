import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  const facts = [
    { label: "Degree", value: "B.Tech CSE" },
    { label: "Institution", value: profile.university },
    { label: "Year", value: profile.currentYear },
    { label: "Location", value: profile.location },
  ];

  return (
    <Reveal as="section" className="mb-28 scroll-mt-24 sm:mb-32" >
      <div id="about" className="scroll-mt-24">
        <div className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-mono text-2xl font-extrabold uppercase tracking-tight">
            About <span className="text-accent">[01]</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_300px]">
          <div className="max-w-[62ch] space-y-4 leading-relaxed text-muted-foreground">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="h-fit rounded-lg border border-border bg-surface p-6">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              At a glance
            </p>
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between gap-4 border-b border-border py-2 last:border-0"
              >
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="text-right text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Reveal>
  );
}
