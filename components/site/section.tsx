import { Reveal } from "./reveal";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/[0.06] py-20 md:py-28">
      <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <div className="self-start md:sticky md:top-28">
          <Reveal>
            <p className="font-mono text-xs text-teal-300/80">{index}</p>
            <h2 className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">{title}</h2>
          </Reveal>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] leading-none text-zinc-300">
      {children}
    </span>
  );
}

export function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-2.5 before:bg-teal-300/60">
      {children}
    </li>
  );
}
