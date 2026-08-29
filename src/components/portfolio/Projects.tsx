import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h4 className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </h4>
      <p className="text-sm leading-relaxed">{value}</p>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const flipped = index % 2 === 1;

  return (
    <Reveal as="article" className="group">
      <div
        className={`grid gap-8 md:gap-12 ${
          flipped ? "md:grid-cols-[360px_1fr]" : "md:grid-cols-[1fr_360px]"
        }`}
      >
        <div className={`space-y-8 ${flipped ? "md:order-2" : ""}`}>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {String(index + 1).padStart(2, "0")} — {project.category}
            </p>
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
              {project.title}
            </h3>
            <p className="max-w-[55ch] text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-muted px-2 py-1 font-mono text-[10px] font-medium uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 border-y border-border py-8 sm:grid-cols-2">
            <Field label="The Problem" value={project.problem} />
            <Field label="The Result" value={project.result} />
          </div>

          <div className="rounded-lg bg-muted/60 p-6">
            <h4 className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Key Learning
            </h4>
            <p className="text-sm italic leading-relaxed">{project.learning}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              View Project <span className="opacity-50">→</span>
            </button>
          </div>
        </div>

        {project.image && (
          <div className={flipped ? "md:order-1" : ""}>
            <img
              src={project.image}
              alt={project.imageAlt}
              width={800}
              height={1000}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg border border-border object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1"
            />
          </div>
        )}
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="mb-28 scroll-mt-24 sm:mb-32">
      <div className="mb-12 flex items-baseline justify-between border-b border-border pb-4">
        <h2 className="font-mono text-2xl font-extrabold uppercase tracking-tight">
          Projects{" "}
          <span className="text-accent">
            [{String(projects.length).padStart(2, "0")}]
          </span>
        </h2>
        <span className="font-mono text-[10px] uppercase text-muted-foreground">
          Selected work
        </span>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onOpen={() => setOpenProject(project)}
          />
        ))}
      </div>

      <Dialog
        open={openProject !== null}
        onOpenChange={(open) => !open && setOpenProject(null)}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {openProject && (
            <>
              <DialogHeader>
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {openProject.category}
                </p>
                <DialogTitle className="text-2xl font-extrabold tracking-tight">
                  {openProject.title}
                </DialogTitle>
                <DialogDescription className="text-left">
                  {openProject.summary}
                </DialogDescription>
              </DialogHeader>

              {openProject.image && (
                <img
                  src={openProject.image}
                  alt={openProject.imageAlt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-md border border-border object-cover"
                />
              )}

              <div className="space-y-6">
                <Field label="Problem" value={openProject.problem} />
                <Field label="Technology" value={openProject.technology} />
                <Field label="Result" value={openProject.result} />
                <Field label="Learning" value={openProject.learning} />
                <Field label="My Role" value={openProject.role} />
                <Field label="Skills Demonstrated" value={openProject.skills} />
              </div>

              <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                {openProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-muted px-2 py-1 font-mono text-[10px] font-medium uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
