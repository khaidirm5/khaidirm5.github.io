import { profile } from "@/data/profile";
import { btnPrimary } from "./ui";
import { hasCv } from "@/lib/cv";

const links = ["About", "Expertise", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const cv = hasCv();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/#home" className="font-semibold tracking-tight">{profile.name}</a>
        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l}><a className="hover:text-fg" href={`/#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {cv && <a href={profile.cvPath} download className={`${btnPrimary} hidden sm:inline-flex`}>Download CV</a>}
          <details className="relative md:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-xl border border-line px-4 text-sm">Menu</summary>
            <ul className="absolute right-0 mt-2 w-48 rounded-2xl border border-line bg-card p-2 text-sm">
              {links.map((l) => (
                <li key={l}><a className="block rounded-lg px-3 py-3 hover:bg-bg2" href={`/#${l.toLowerCase()}`}>{l}</a></li>
              ))}
              {cv && <li><a className="block rounded-lg px-3 py-3 text-accent" href={profile.cvPath} download>Download CV</a></li>}
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
