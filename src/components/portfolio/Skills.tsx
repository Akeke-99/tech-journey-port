import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <Reveal as="section" className="mb-28 sm:mb-32">
      <div
        id="skills"
        className="scroll-mt-24 rounded-xl border border-border bg-surface p-6 sm:p-8"
      >
        <div className="mb-10 border-b border-border pb-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">02 / WHAT I KNOW</p>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Tools, Languages &amp; Foundations</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase">{group.category}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent/50"
                    />
                    <span>
                      {item.name}
                      {item.level && (
                        <span className="ml-2 font-mono text-[10px] uppercase text-accent">
                          {item.level}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
