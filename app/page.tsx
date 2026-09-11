import { ArrowUpRight, FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Contours } from "@/components/site/contours";
import { Reveal, RevealObserver } from "@/components/site/reveal";
import { Bullet, Section, Tag } from "@/components/site/section";
import { education, experience, hackathons, highlights, profile, projects, skills } from "@/lib/resume";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <RevealObserver />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#08090a]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-zinc-100">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.04] font-mono text-[11px] text-teal-300">
              CN
            </span>
            {profile.name}
          </a>
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 md:block"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-100 transition-colors hover:border-teal-300/40 hover:bg-teal-300/[0.06]"
            >
              <FileDown className="h-3.5 w-3.5" />
              Résumé
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="relative flex min-h-[min(92vh,860px)] flex-col justify-center pb-16 pt-32">
          <div className="pointer-events-none absolute inset-x-[-40vw] -top-10 bottom-0 -z-10 [mask-image:radial-gradient(ellipse_60%_70%_at_75%_25%,black,transparent)] md:inset-x-[-20vw]">
            <Contours className="h-full w-full" />
          </div>
          <div className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-300" />
              </span>
              Associate Software Developer at Triona
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 text-5xl font-semibold tracking-[-0.035em] text-zinc-50 sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-2xl font-medium tracking-tight text-zinc-500 sm:text-3xl">{profile.role}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/25 hover:bg-white/[0.04]"
              >
                <FileDown className="h-4 w-4" />
                Download résumé
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-lg p-2.5 text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-zinc-100"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-lg p-2.5 text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-zinc-100"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 flex items-center gap-2 font-mono text-xs text-zinc-500">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location} · 60.17° N, 24.94° E
            </p>
          </Reveal>
        </section>

        {/* Highlights */}
        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.05} className="bg-[#0b0c0e] p-5 md:p-6">
              <p className="text-2xl font-semibold tracking-tight text-teal-300 md:text-3xl">{h.value}</p>
              <p className="mt-2 text-sm leading-snug text-zinc-400">{h.label}</p>
            </Reveal>
          ))}
        </section>

        <div className="h-16 md:h-24" />

        <Section id="about" index="01" title="About">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-zinc-300">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <dl className="mt-10 grid gap-6 border-t border-white/[0.06] pt-8 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">Languages</dt>
                <dd className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-300">
                  {profile.languages.map((l) => (
                    <span key={l.name}>
                      {l.name} <span className="text-zinc-500">· {l.level}</span>
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">Outside of work</dt>
                <dd className="mt-3 text-sm text-zinc-300">{profile.interests.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
        </Section>

        <Section id="experience" index="02" title="Experience">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <article className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-50">{job.role}</h3>
                    <p className="mt-1 text-zinc-400">
                      {job.company} <span className="text-zinc-600">·</span> {job.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-zinc-500">{job.period}</p>
                </div>
                <ul className="mt-6 space-y-3 leading-relaxed text-zinc-300">
                  {job.points.map((p) => (
                    <Bullet key={p}>{p}</Bullet>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </Section>

        <Section id="projects" index="03" title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => {
              const body = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold tracking-tight text-zinc-50">{p.name}</h3>
                      <p className="mt-1 text-xs text-zinc-500">{p.tagline}</p>
                    </div>
                    {p.href && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300" />
                    )}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </>
              );
              const card =
                "group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors";
              return (
                <Reveal
                  key={p.name}
                  delay={(i % 2) * 0.05}
                  className={i === projects.length - 1 && projects.length % 2 === 1 ? "sm:col-span-2" : undefined}
                >
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${card} hover:border-teal-300/30 hover:bg-white/[0.035]`}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className={card}>{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <h3 className="mt-16 font-mono text-xs uppercase tracking-wider text-zinc-500">Hackathons & competitions</h3>
            <ul className="mt-4 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {hackathons.map((h) => (
                <li key={h.name} className="grid grid-cols-[56px_1fr] gap-4 py-5">
                  <span className="font-mono text-sm text-zinc-500">{h.year}</span>
                  <div>
                    <p className="font-medium text-zinc-100">{h.name}</p>
                    <p className="mt-1 text-sm text-zinc-400">{h.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <Section id="education" index="04" title="Education">
          <div className="relative space-y-10 border-l border-white/[0.08] pl-6">
            {education.map((e) => (
              <Reveal key={e.school}>
                <div className="relative">
                  <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full border border-teal-300/70 bg-[#08090a]" />
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-50">{e.school}</h3>
                    <p className="shrink-0 font-mono text-xs text-zinc-500">{e.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{e.degree}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
                    {e.points.map((p) => (
                      <Bullet key={p}>{p}</Bullet>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="skills" index="05" title="Skills">
          <div className="divide-y divide-white/[0.06]">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.03}>
                <div className="grid gap-3 py-5 first:pt-0 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <p className="text-sm text-zinc-500">{s.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" index="06" title="Contact">
          <Reveal>
            <h3 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
              Let&apos;s build something together.
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
              Whether it&apos;s a role, a collaboration or an open-source project, email is the fastest way to reach me.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-teal-300 underline decoration-teal-300/30 underline-offset-8 transition-colors hover:decoration-teal-300"
            >
              {profile.email}
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: profile.github, label: "GitHub", icon: Github },
                { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
                { href: profile.resume, label: "Résumé (PDF)", icon: FileDown },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-zinc-50"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-6 py-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono">{profile.location}</p>
        </div>
      </footer>
    </div>
  );
}
