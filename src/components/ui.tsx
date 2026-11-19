import type { Status } from "@/data/projects";

export const card = "rounded-2xl border border-line bg-card p-6";

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
      <h2 className="mb-10 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

const tone: Record<Status, string> = {
  Completed: "border-emerald-400/40 text-emerald-300",
  "Work in Progress": "border-accent2/40 text-accent2",
  "Development on Hold": "border-amber-400/40 text-amber-300",
  "Academic Prototype": "border-accent/50 text-accent",
  Archived: "border-line text-muted",
};

export function StatusBadge({ status, note }: { status: Status; note?: string }) {
  return <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${tone[status]}`}>{note ? `${status} — ${note}` : status}</span>;
}

export function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-lg border border-line bg-bg2 px-2.5 py-1 text-sm text-muted">{children}</span>;
}

export const btn = "inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-medium transition-colors";
export const btnPrimary = `${btn} bg-accent text-bg hover:bg-accent2`;
export const btnGhost = `${btn} border border-line hover:border-accent2 hover:text-accent2`;
