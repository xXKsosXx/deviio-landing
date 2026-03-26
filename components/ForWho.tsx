const metiers = [
  "Plombier",
  "Électricien",
  "Peintre",
  "Menuisier",
  "Maçon",
  "Freelance",
  "Auto-entrepreneur",
  "Chauffagiste",
  "Couvreur",
];

export default function ForWho() {
  return (
    <section className="bg-blue-pale py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="reveal font-[var(--font-cabinet)] text-3xl sm:text-4xl font-bold text-ink text-center mb-4">
          Pour qui ?
        </h2>
        <p className="reveal text-ink-muted text-center mb-12 max-w-2xl mx-auto">
          Deviio est conçu pour tous les professionnels du terrain.
        </p>

        {/* Métiers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {metiers.map((m) => (
            <div
              key={m}
              className="reveal flex items-center gap-3 bg-white rounded-xl px-5 py-4 border-l-4 border-blue hover:translate-x-1 transition-transform cursor-default"
            >
              <span className="text-blue font-semibold">{m}</span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="reveal max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <svg
            className="h-8 w-8 text-blue/20 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <blockquote className="text-lg text-ink leading-relaxed mb-4">
            &ldquo;Avant Deviio, je faisais mes devis sur Word le soir en
            rentrant. Maintenant, je les envoie directement chez le client.
            J&apos;ai gagné un temps fou.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-light flex items-center justify-center text-blue font-bold text-sm">
              MD
            </div>
            <div>
              <p className="font-semibold text-ink text-sm">Marc D.</p>
              <p className="text-xs text-ink-faint">Plombier — Lyon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
