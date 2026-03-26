const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.lumileo.deviio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-light px-4 py-1.5 text-sm font-semibold text-orange">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Conforme e-facture 2026
            </span>

            <h1 className="font-[var(--font-cabinet)] text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-ink tracking-tight">
              Vos devis & factures en{" "}
              <span className="gradient-text">2 minutes</span>
              <br />
              depuis votre mobile
            </h1>

            <p className="text-lg text-ink-muted max-w-lg leading-relaxed">
              L&apos;application de facturation pensée pour les artisans et
              auto-entrepreneurs. Simple, rapide, conforme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange/25 hover:shadow-orange/40 hover:scale-[1.02] transition-all"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Télécharger gratuitement
              </a>
            </div>

            <p className="text-sm text-ink-faint">
              5 documents gratuits par mois — sans carte bancaire
            </p>
          </div>

          {/* Right column: Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[560px] bg-blue-dark rounded-[44px] border-[8px] border-slate-700 shadow-2xl overflow-hidden">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-2xl z-10" />

              {/* Fake app screen */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-dark to-blue p-5 pt-10">
                <div className="space-y-4">
                  <p className="text-white/70 text-xs font-medium">
                    Tableau de bord
                  </p>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                    <p className="text-white/60 text-xs">
                      Chiffre d&apos;affaires
                    </p>
                    <p className="text-white text-3xl font-bold mt-1">
                      5 900 €
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                      <p className="text-white/60 text-xs">Devis actifs</p>
                      <p className="text-white text-xl font-bold">2</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                      <p className="text-white/60 text-xs">Factures</p>
                      <p className="text-white text-xl font-bold">3</p>
                    </div>
                  </div>
                  {/* SCREENSHOT ICI — Remplacer ce bloc par une vraie capture d'écran */}
                  <div className="bg-white/5 rounded-xl p-3 mt-2">
                    <p className="text-white/40 text-xs text-center">
                      Aperçu de l&apos;application
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="animate-float absolute -left-4 top-24 bg-white rounded-2xl shadow-xl p-4 w-48 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink">
                    Facture envoyée
                  </p>
                  <p className="text-xs text-ink-faint">Il y a 2 min</p>
                </div>
              </div>
            </div>

            <div className="animate-float-delay absolute -right-4 bottom-32 bg-white rounded-2xl shadow-xl p-4 w-44 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-light flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink">
                    Devis accepté
                  </p>
                  <p className="text-xs text-ink-faint">850 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post-it e-facture */}
      <div
        className="absolute bottom-8 right-8 rotate-2 bg-yellow-300 shadow-xl rounded-sm p-4 w-44 hidden lg:block"
        style={{
          boxShadow: "4px 4px 0px rgba(0,0,0,0.15)",
          fontFamily: "var(--font-cabinet)",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-600 font-black text-lg">&#10003;</span>
          <span className="font-black text-sm text-gray-900 uppercase tracking-tight">
            Prêt pour
          </span>
        </div>
        <p className="font-black text-gray-900 text-lg leading-tight">
          E-facture
          <br />
          2026
        </p>
        <p className="text-xs text-gray-600 mt-2 leading-snug">
          Obligatoire pour toutes les entreprises françaises
        </p>
      </div>
    </section>
  );
}
