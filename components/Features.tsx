const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: "Envoi PDF instantané",
    desc: "Envoyez vos devis et factures en PDF par email ou WhatsApp en un tap.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Gestion clients",
    desc: "Ajoutez vos clients une fois, retrouvez-les sur tous vos documents.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Tableau de bord",
    desc: "Visualisez votre chiffre d'affaires, vos devis en attente et vos factures.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Devis → Facture",
    desc: "Transformez un devis accepté en facture d'un seul tap. Zéro ressaisie.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="reveal font-[var(--font-cabinet)] text-3xl sm:text-4xl font-bold text-ink text-center mb-4">
          Tout ce qu&apos;il vous faut
        </h2>
        <p className="reveal text-ink-muted text-center mb-12 max-w-2xl mx-auto">
          Créez, envoyez et suivez vos documents depuis votre poche.
        </p>

        {/* Large featured card */}
        <div className="reveal mb-8 rounded-3xl bg-gradient-to-br from-blue to-blue-dark p-8 sm:p-10 text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold mb-4">
            Conformes e-facture 2026
          </span>
          <h3 className="font-[var(--font-cabinet)] text-2xl sm:text-3xl font-bold mb-2">
            Devis &amp; factures professionnels
          </h3>
          <p className="text-white/70 max-w-lg">
            Mentions légales obligatoires, numérotation automatique, calculs TVA
            — tout est géré pour que vos documents soient conformes.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:border-blue-light transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-blue-pale flex items-center justify-center text-blue mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
