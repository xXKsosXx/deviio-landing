const rows = [
  { label: "Mobile-first", deviio: true, pennylane: false, indy: false },
  { label: "Prix mensuel", deviio: "7,99 €", pennylane: "24 €", indy: "16 €" },
  { label: "Fait pour artisans", deviio: true, pennylane: false, indy: false },
  { label: "Devis en 2 min", deviio: true, pennylane: false, indy: false },
  { label: "Sans formation", deviio: true, pennylane: false, indy: true },
  { label: "Conforme e-facture 2026", deviio: true, pennylane: true, indy: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium">{value}</span>;
  }
  return value ? (
    <svg className="h-5 w-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="h-5 w-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Compare() {
  return (
    <section id="compare" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="reveal font-[var(--font-cabinet)] text-3xl sm:text-4xl font-bold text-ink text-center mb-4">
          Pourquoi Deviio ?
        </h2>
        <p className="reveal text-ink-muted text-center mb-12 max-w-2xl mx-auto">
          Comparez et choisissez la solution qui vous correspond.
        </p>

        <div className="reveal overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 pr-4 text-sm font-medium text-ink-faint">
                  Fonctionnalité
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1 bg-blue rounded-xl px-4 py-2">
                    <span className="text-sm font-bold text-white">Deviio</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center text-sm font-medium text-ink-muted">
                  Pennylane
                </th>
                <th className="py-4 px-4 text-center text-sm font-medium text-ink-muted">
                  Indy
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-gray-100">
                  <td className="py-4 pr-4 text-sm font-medium text-ink">
                    {r.label}
                  </td>
                  <td className="py-4 px-4 text-center bg-blue-pale/50">
                    <Cell value={r.deviio} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Cell value={r.pennylane} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Cell value={r.indy} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
