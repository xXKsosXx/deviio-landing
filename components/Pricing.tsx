const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.lumileo.deviio";

const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    period: "/mois",
    badge: null,
    features: [
      "5 documents par mois",
      "Devis & factures PDF",
      "Gestion clients",
      "Mentions légales auto",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "7,99 €",
    period: "/mois",
    badge: "LE CHOIX DES PROS",
    features: [
      "Documents illimités",
      "Devis & factures PDF",
      "Gestion clients avancée",
      "Tableau de bord complet",
      "Devis → Facture en 1 tap",
      "Conforme e-facture 2026",
      "Support prioritaire",
    ],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-blue-pale py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="reveal font-[var(--font-cabinet)] text-3xl sm:text-4xl font-bold text-ink text-center mb-4">
          Des tarifs simples
        </h2>
        <p className="reveal text-ink-muted text-center mb-12 max-w-2xl mx-auto">
          Commencez gratuitement, passez Pro quand vous êtes prêt.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal rounded-3xl p-8 ${
                plan.highlight
                  ? "bg-white border-2 border-blue shadow-xl shadow-blue/10 relative"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-orange px-4 py-1 text-xs font-bold text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-[var(--font-cabinet)] text-xl font-bold text-ink mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-ink">
                  {plan.price}
                </span>
                <span className="text-ink-muted text-sm">{plan.period}</span>
              </div>
              {plan.highlight && (
                <p className="text-sm text-blue font-medium mb-4">
                  Ou 69 €/an — 2 mois offerts
                </p>
              )}
              {!plan.highlight && <div className="mb-4" />}

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                    <svg
                      className="h-5 w-5 text-blue shrink-0 mt-0.5"
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
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center rounded-full px-6 py-3 font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-blue text-white hover:bg-blue-dark shadow-lg shadow-blue/25"
                    : "bg-blue-pale text-blue hover:bg-blue-light"
                }`}
              >
                Télécharger
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
