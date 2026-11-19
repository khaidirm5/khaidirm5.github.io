import Navbar from "@/components/Navbar";
import { Section, StatusBadge, Chip, card, btnPrimary, btnGhost } from "@/components/ui";
import { profile, education, certifications, languages } from "@/data/profile";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { projects, visibleLinks } from "@/data/projects";
import { hasCv } from "@/lib/cv";

export default function Home() {
  const cv = hasCv();
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="mx-auto max-w-6xl px-5 pt-20 pb-12 md:pt-32">
          <div className="hero-in max-w-3xl">
            <p className="text-muted">{profile.name} · Information Systems graduate · Informatics student · Indonesia</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">{profile.headline}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className={btnPrimary}>Explore my work</a>
              {cv && <a href={profile.cvPath} download className={btnGhost}>Download CV</a>}
              <a href="#contact" className={btnGhost}>Contact me</a>
            </div>
            {profile.available && <p className="mt-6 text-sm text-accent2">Available for professional opportunities</p>}
          </div>
        </section>

        <Section id="about" title="About me">
          <div className="grid gap-6 md:grid-cols-5">
            <div className="space-y-4 leading-relaxed text-muted md:col-span-3">
              {profile.about.map((p) => <p key={p}>{p}</p>)}
            </div>
            <dl className={`${card} md:col-span-2 space-y-3 text-sm`}>
              <div><dt className="text-muted">D3 Sistem Informasi, Universitas Telkom</dt><dd>GPA 3.64</dd></div>
              <div><dt className="text-muted">S1 Informatika, Universitas Telkom</dt><dd>GPA 3.62 (current), target graduation 2027</dd></div>
            </dl>
          </div>
        </Section>

        <Section id="expertise" title="What I work with">
          <div className="grid gap-4 md:grid-cols-4">
            {skills.map((g) => (
              <div key={g.title} className={`${card} ${g.span}`}>
                <h3 className="font-medium">{g.title}</h3>
                {"note" in g && g.note && <p className="mt-2 text-sm text-muted">{g.note}</p>}
                <div className="mt-4 flex flex-wrap gap-2">{g.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-6 border-l border-line pl-6">
            {experience.map((e) => (
              <li key={e.role + e.period} className="relative">
                <span className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
                <div className={card}>
                  <p className="text-sm text-muted">{e.period} · {e.place}</p>
                  <h3 className="mt-1 text-xl font-semibold">{e.role}, {e.org}</h3>
                  <p className="mt-3 text-muted">{e.summary}</p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-accent">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.slug} className={`${card} flex flex-col`}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-muted">{p.category}</p>
                  <StatusBadge status={p.status} note={p.statusNote} />
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a href={`/projects/${p.slug}`} className={btnPrimary}>View details</a>
                  {visibleLinks(p).map((l) => <a key={l.href} href={l.href} className={btnGhost} target="_blank" rel="noreferrer">{l.label}</a>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className={card}>
                <p className="text-sm text-muted">{e.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                <p className="text-muted">{e.school} · GPA {e.gpa}</p>
              </div>
            ))}
          </div>
          <div className={`${card} mt-4 grid gap-6 md:grid-cols-2`}>
            <div><h3 className="font-medium">Certifications</h3><ul className="mt-2 space-y-1 text-muted">{certifications.map((c) => <li key={c}>{c}</li>)}</ul></div>
            <div><h3 className="font-medium">Languages</h3><ul className="mt-2 space-y-1 text-muted">{languages.map((c) => <li key={c}>{c}</li>)}</ul></div>
          </div>
        </Section>

        <Section id="contact" title="Let’s connect and build something meaningful.">
          <p className="-mt-6 mb-8 max-w-xl text-muted">Have an opportunity, project, or collaboration in mind? Feel free to reach out.</p>
          <div className="flex flex-wrap gap-3">
            <a className={btnPrimary} href={`mailto:${profile.email}`}>Email me</a>
            {profile.showWhatsapp && <a className={btnGhost} href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>}
            <a className={btnGhost} href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            {cv && <a className={btnGhost} href={profile.cvPath} download>Download CV</a>}
          </div>
          <p className="mt-6 text-sm text-muted">{[profile.email, profile.showPhone ? profile.phone : null, profile.location].filter(Boolean).join(" · ")}</p>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
