"use client";

import { useState } from "react";
import Link from "next/link";
import { COMMUNICATION_TASKS, POLES, deriveAccess, type PoleGroup } from "./poles-data";

const GROUPS: PoleGroup[] = ["Gouvernance", "Sections & ministères", "Transverse"];

function LoginScreen({ onLogin }: { onLogin: (pole: string) => void }) {
  const [pole, setPole] = useState(POLES[0].name);

  return (
    <div className="min-h-screen grid place-items-center px-5">
      <div className="w-full max-w-sm rounded-2xl bg-[#2f1a1e] border border-white/10 p-8">
        <p className="eyebrow mb-2">Espace pôles</p>
        <h1 className="font-heading font-semibold text-2xl mb-6">Connexion</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin(pole);
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm mb-1.5 opacity-80">
              Email
            </label>
            <input
              id="email"
              type="email"
              defaultValue="demo@epehmif.fr"
              className="w-full rounded-[10px] bg-white/5 border border-white/15 px-4 py-2.5 text-[15px] text-on-dark"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1.5 opacity-80">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              defaultValue="demo"
              className="w-full rounded-[10px] bg-white/5 border border-white/15 px-4 py-2.5 text-[15px] text-on-dark"
            />
          </div>
          <div>
            <label htmlFor="pole" className="block text-sm mb-1.5 opacity-80">
              Votre pôle (démonstration)
            </label>
            <select
              id="pole"
              value={pole}
              onChange={(e) => setPole(e.target.value)}
              className="w-full rounded-[10px] bg-white/5 border border-white/15 px-4 py-2.5 text-[15px] text-on-dark"
            >
              {POLES.map((p) => (
                <option key={p.name} value={p.name} className="text-txt">
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-[10px] bg-fill text-on-pri text-[14.5px] font-semibold px-6 py-3 hover:brightness-110"
          >
            Se connecter
          </button>
          <p className="text-xs opacity-50">
            Connexion factice : aucune vérification n&rsquo;est effectuée. À remplacer par une
            vraie authentification.
          </p>
        </form>
      </div>
    </div>
  );
}

function PoleDashboard({
  myPole,
  onOpenPole,
}: {
  myPole: string;
  onOpenPole: (name: string) => void;
}) {
  return (
    <div className="max-w-[1160px] mx-auto px-5 md:px-8 py-12">
      <div
        className="rounded-2xl border border-acc/40 p-6 mb-10"
        style={{ background: "color-mix(in srgb, var(--acc) 20%, var(--dark))" }}
      >
        <p className="text-sm">
          Connecté en tant que pôle <strong>{myPole}</strong>. Les droits d&rsquo;accès aux autres
          pôles dépendent de ce rattachement.
        </p>
      </div>

      {GROUPS.map((group) => (
        <div key={group} className="mb-12">
          <p className="eyebrow mb-4">{group}</p>
          <div
            className="grid gap-[18px]"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
            {POLES.filter((p) => p.group === group).map((pole) => {
              const access = deriveAccess(myPole, pole);
              if (!access.allowed) {
                return (
                  <div
                    key={pole.name}
                    className="rounded-2xl border border-dashed border-white/20 p-6 opacity-62"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-heading font-semibold">{pole.name}</p>
                      <span aria-hidden="true">🔒</span>
                    </div>
                    <p className="text-sm opacity-80">Accès non autorisé</p>
                  </div>
                );
              }
              return (
                <button
                  key={pole.name}
                  type="button"
                  onClick={() => onOpenPole(pole.name)}
                  className="text-left rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-heading font-semibold">{pole.name}</p>
                    <span className="text-xs font-semibold uppercase tracking-wide rounded-full border border-white/25 px-2.5 py-1">
                      {access.role}
                    </span>
                  </div>
                  <p className="text-sm opacity-80">{pole.description}</p>
                  <p className="text-xs opacity-60 mt-3">{pole.members} membres</p>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function PoleInner({ pole, role, onBack }: { pole: (typeof POLES)[number]; role: string; onBack: () => void }) {
  return (
    <div className="max-w-[1160px] mx-auto px-5 md:px-8 py-12">
      <button type="button" onClick={onBack} className="text-sm opacity-70 hover:opacity-100 mb-8">
        ← Tous les pôles
      </button>

      <p className="eyebrow mb-2">{pole.group}</p>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="font-heading font-semibold text-3xl">{pole.name}</h1>
        <span className="text-xs font-semibold uppercase tracking-wide rounded-full border border-white/25 px-2.5 py-1">
          {role}
        </span>
      </div>
      <p className="opacity-80 mb-1">{pole.description}</p>
      <p className="text-sm opacity-60 mb-10">{pole.members} membres</p>

      <div className="grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {pole.hasTasks && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6" style={{ gridColumn: "1 / -1" }}>
            <p className="font-heading font-semibold mb-4">Ce que ce pôle publie sur le site</p>
            <ul className="space-y-3">
              {COMMUNICATION_TASKS.map((t) => (
                <li key={t.label} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium">{t.label}</p>
                    <p className="text-xs opacity-60">{t.detail}</p>
                  </div>
                  {t.href && (
                    <Link href={t.href} className="text-xs text-acc hover:underline shrink-0 ml-4">
                      Voir la page →
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-xs opacity-50 mt-4">
              Manque : outil de publication et circuit de validation avant mise en ligne.
            </p>
          </div>
        )}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="font-heading font-semibold mb-3">Annonces du pôle</p>
          <p className="text-sm opacity-60 mb-4">Aucune annonce pour le moment.</p>
          <button type="button" className="rounded-[10px] bg-fill text-on-pri text-sm font-semibold px-4 py-2.5">
            Rédiger une annonce
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="font-heading font-semibold mb-3">Documents</p>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span className="opacity-80">[À FOURNIR : document]</span>
              <a href="#" className="text-acc hover:underline">
                Ouvrir
              </a>
            </li>
            <li className="flex justify-between">
              <span className="opacity-80">[À FOURNIR : document]</span>
              <a href="#" className="text-acc hover:underline">
                Ouvrir
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="font-heading font-semibold mb-3">Membres</p>
          <p className="text-sm opacity-80">{pole.members} membres</p>
          <p className="text-xs opacity-50 mt-2">Manque : noms et niveau de droits de chacun.</p>
        </div>

        <div
          className="rounded-2xl border border-acc/40 p-6"
          style={{ background: "color-mix(in srgb, var(--acc) 18%, var(--dark))" }}
        >
          <p className="eyebrow mb-2">Prochaine réunion</p>
          <p className="text-sm opacity-90">[À FOURNIR : date et lieu]</p>
        </div>
      </div>
    </div>
  );
}

export default function PolesApp() {
  const [logged, setLogged] = useState(false);
  const [myPole, setMyPole] = useState("Conseil des anciens");
  const [openPoleName, setOpenPoleName] = useState<string | null>(null);

  if (!logged) {
    return (
      <div className="bg-dark text-on-dark min-h-screen">
        <LoginScreen
          onLogin={(pole) => {
            setMyPole(pole);
            setLogged(true);
          }}
        />
      </div>
    );
  }

  const openPole = POLES.find((p) => p.name === openPoleName) ?? null;
  const access = openPole ? deriveAccess(myPole, openPole) : null;

  return (
    <div className="bg-dark text-on-dark min-h-screen">
      <header className="border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 h-[66px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-[9px] bg-fill text-on-pri font-heading font-semibold">
              E
            </span>
            <span className="font-heading font-semibold text-[15px]">Espace pôles</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setLogged(false);
              setOpenPoleName(null);
            }}
            className="text-sm opacity-70 hover:opacity-100"
          >
            Se déconnecter
          </button>
        </div>
      </header>

      {openPole && access?.allowed ? (
        <PoleInner pole={openPole} role={access.role ?? ""} onBack={() => setOpenPoleName(null)} />
      ) : (
        <PoleDashboard myPole={myPole} onOpenPole={setOpenPoleName} />
      )}
    </div>
  );
}
