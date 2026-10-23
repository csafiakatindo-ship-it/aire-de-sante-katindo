import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import { domains } from "@/lib/domains";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CSA Fiakatindo — Portail d'information publique" },
      { name: "description", content: "Services de santé de proximité : soins, prévention, vaccination, nutrition et suivi communautaire." },
      { property: "og:title", content: "CSA Fiakatindo — Portail santé" },
      { property: "og:description", content: "Soins, prévention, promotion et suivi communautaire." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(1);
  const list = domains.filter((d) => (d.title + d.intro).toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">+</span>
            <span className="font-display text-lg">CSA Fiakatindo</span>
          </div>
          <a href="#domaines" className="text-sm font-semibold text-primary">Nos services</a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">Portail officiel d'information publique</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">La santé, au plus près de chaque famille.</h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">Services de santé de proximité, prévention, promotion et suivi communautaire.</p>
          <div className="mt-8 flex gap-8">
            <Stat v="13" l="Domaines" /><Stat v="7j/7" l="Urgences" /><Stat v="RECO" l="Relais actifs" />
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="Agent de santé pesant un bébé" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-card px-4 py-3 shadow-soft">
            <p className="text-xs text-muted-foreground">Prochaine séance</p>
            <p className="font-semibold">Vaccination de routine</p>
          </div>
        </div>
      </section>

      <section id="domaines" className="bg-secondary py-14">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-display text-3xl md:text-4xl">Nos domaines d'activités</h2>
          <p className="mt-2 text-muted-foreground">Touchez un domaine pour voir les protocoles et le suivi.</p>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher : vaccination, nutrition…" className="mt-6 w-full rounded-full border border-input bg-card px-5 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <div className="mt-6 space-y-3">
            {list.map((d) => {
              const isOpen = open === d.n;
              return (
                <article key={d.n} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button onClick={() => setOpen(isOpen ? null : d.n)} className="flex w-full items-center gap-4 p-4 text-left">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-2xl">{d.icon}</span>
                    <span className="flex-1">
                      <span className="text-xs font-semibold text-primary">{String(d.n).padStart(2, "0")}</span>
                      <span className="block font-semibold leading-snug">{d.title}</span>
                    </span>
                    <span className={`text-2xl text-muted-foreground transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-4 pb-5 pt-4">
                      <p className="text-muted-foreground">{d.intro}</p>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">{d.sheet}</p>
                      <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                        {d.items.map(([k, v]) => (
                          <li key={k} className="rounded-xl bg-secondary p-3">
                            <p className="font-semibold">{k}</p>
                            <p className="text-sm text-muted-foreground">{v}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
            {list.length === 0 && <p className="text-muted-foreground">Aucun domaine trouvé.</p>}
          </div>
        </div>
      </section>

      <footer className="bg-primary py-10 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-display text-2xl">CSA Fiakatindo</p>
          <p className="mt-1 opacity-80">Centre de santé — au service de la communauté.</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-primary">{v}</p>
      <p className="text-xs text-muted-foreground">{l}</p>
    </div>
  );
}
