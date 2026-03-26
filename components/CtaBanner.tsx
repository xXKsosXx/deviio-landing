const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.lumileo.deviio";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-blue-dark to-blue py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="reveal font-[var(--font-cabinet)] text-3xl sm:text-4xl lg:text-[56px] font-bold text-white leading-tight mb-6">
          Prêt à simplifier
          <br />
          votre facturation ?
        </h2>
        <p className="reveal text-white/70 text-lg mb-8 max-w-xl mx-auto">
          Rejoignez les artisans qui ont déjà adopté Deviio.
        </p>
        <a
          href={PLAY_STORE}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-blue shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
        >
          Télécharger Deviio
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
