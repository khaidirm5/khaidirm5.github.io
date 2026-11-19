import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { StatusBadge, Chip, card, btnGhost } from "@/components/ui";
import { projects, getProject, visibleLinks } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: `${p.title} | Khaidir Maulana`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <a href="/#projects" className="text-sm text-muted hover:text-fg">Back to projects</a>
        <div className="mt-6"><StatusBadge status={p.status} note={p.statusNote} /></div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">{p.title}</h1>
        <p className="mt-4 text-lg text-muted">{p.summary}</p>
        <dl className={`${card} mt-8 grid gap-4 text-sm sm:grid-cols-2`}>
          <div><dt className="text-muted">Type</dt><dd>{p.type}</dd></div>
          <div><dt className="text-muted">Role</dt><dd>{p.role}</dd></div>
          <div><dt className="text-muted">Year</dt><dd>{p.year}</dd></div>
          <div><dt className="text-muted">Category</dt><dd>{p.category}</dd></div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>

        {p.sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            {s.body && <p className="mt-3 leading-relaxed text-muted">{s.body}</p>}
            {s.items && <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>}
          </section>
        ))}

        {p.results && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Testing results</h2>
            <div className="mt-3 overflow-x-auto"><table className="w-full text-left text-sm">
              <tbody>{p.results.map((r) => (
                <tr key={r.metric} className="border-b border-line"><th className="py-3 pr-4 font-normal text-muted">{r.metric}</th><td className="py-3">{r.value}</td></tr>
              ))}</tbody>
            </table></div>
            {p.resultsNote && <p className="mt-3 text-sm text-muted">{p.resultsNote}</p>}
          </section>
        )}

        {visibleLinks(p).length > 0 && <div className="mt-12 flex gap-3">{visibleLinks(p).map((l) => <a key={l.href} className={btnGhost} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}</div>}
      </main>
    </>
  );
}
