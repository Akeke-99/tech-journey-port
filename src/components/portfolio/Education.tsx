import { education } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Reveal as="section" className="mb-28 sm:mb-32">
      <div id="education" className="max-w-2xl scroll-mt-24">
        <div className="mb-12 border-b border-border pb-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">06 / THE ROAD SO FAR</p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Education</h2>
        </div>
        <ol className="relative space-y-12 border-l border-border pl-8">
          {education.map((item) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[37px] top-1 size-4 rounded-full border-2 bg-background ${
                  item.current ? "border-accent" : "border-border"
                }`}
              />
              <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
              <p
                className={`mt-1 font-mono text-sm ${
                  item.current ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {item.place} · {item.period}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
