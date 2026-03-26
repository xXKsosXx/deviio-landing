const problems = [
  {
    title: "Logiciels de bureau",
    desc: "Complexes, chers, pas adaptés au terrain",
    bad: true,
  },
  {
    title: "Excel / Word",
    desc: "Pas conforme, erreurs de calcul, pas pro",
    bad: true,
  },
  {
    title: "Deviio",
    desc: "Mobile, rapide, conforme, fait pour vous",
    bad: false,
  },
];

export default function Problem() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="reveal font-[var(--font-cabinet)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Vous méritez mieux
        </h2>
        <p className="reveal text-ink-faint text-center mb-12 max-w-2xl mx-auto">
          Les solutions classiques ne sont pas faites pour les artisans sur le
          terrain.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className={`reveal rounded-2xl p-6 ${
                p.bad
                  ? "bg-white/5 border border-white/10"
                  : "bg-blue border border-blue-dark"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {p.bad ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
                    <svg
                      className="h-4 w-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                    <svg
                      className="h-4 w-4 text-green-400"
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
                  </span>
                )}
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
              </div>
              <p className={p.bad ? "text-white/60 text-sm" : "text-white/80 text-sm"}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
