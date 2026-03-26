import Image from "next/image";

const BASE_URL = "https://deviio-webhook.vercel.app/api";

const legal = [
  { label: "Politique de confidentialité", href: `${BASE_URL}/privacy` },
  { label: "Mentions légales", href: `${BASE_URL}/mentions-legales` },
  { label: "CGU", href: `${BASE_URL}/cgu` },
  { label: "Supprimer mon compte", href: `${BASE_URL}/delete-account` },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Deviio"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-[var(--font-cabinet)] text-lg font-extrabold text-white">
                Deviio
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              L&apos;application de facturation mobile-first pour les artisans
              et auto-entrepreneurs français.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Légal</h4>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contact@deviio.app"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  contact@deviio.app
                </a>
              </li>
              <li>
                <a
                  href="https://deviio.app"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  deviio.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; 2026 Deviio by Lumileo SASU. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
