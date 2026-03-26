const metiers = [
  "Plombiers",
  "Électriciens",
  "Peintres",
  "Menuisiers",
  "Maçons",
  "Freelances",
];

export default function SocialProof() {
  return (
    <section className="bg-white border-y border-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="text-sm text-ink-faint font-medium">
            Utilisé par :
          </span>
          {metiers.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted"
            >
              <span className="h-2 w-2 rounded-full bg-blue" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
