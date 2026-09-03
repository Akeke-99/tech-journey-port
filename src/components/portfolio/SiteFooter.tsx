import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-8">
      <div className="flex flex-col gap-6 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold tracking-tight">{profile.name}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            B.Tech CSE Student
          </p>
        </div>
        <div className="flex flex-wrap gap-5 font-mono text-[11px] uppercase text-muted-foreground">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.links.email}`} className="hover:text-accent">
            Email
          </a>
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="hover:text-accent">
            Resume
          </a>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
