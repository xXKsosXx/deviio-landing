export const metadata = {
  title: 'Conditions générales d\'utilisation — Deviio',
}

export default function CGU() {
  return (
    <main style={{fontFamily:'system-ui',maxWidth:'800px',margin:'80px auto',padding:'0 24px',lineHeight:'1.7',color:'#1a1a1a'}}>
      <h1 style={{fontSize:'32px',marginBottom:'8px'}}>Conditions générales d&apos;utilisation</h1>
      <p><em>Dernière mise à jour : 30 mars 2026</em></p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>1. Objet</h2>
      <p>Les présentes CGU régissent l&apos;utilisation de l&apos;application mobile Deviio, éditée par Lumileo SASU.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>2. Accès au service</h2>
      <p>Deviio est accessible sur Android et iOS. L&apos;inscription nécessite une adresse e-mail valide. L&apos;utilisateur est responsable de la confidentialité de ses identifiants.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>3. Services proposés</h2>
      <p>Deviio permet de créer des devis et factures, gérer un fichier client, suivre les paiements et envoyer des documents par e-mail.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>4. Responsabilité</h2>
      <p>Lumileo SASU s&apos;efforce d&apos;assurer la disponibilité du service mais ne garantit pas une accessibilité permanente. L&apos;utilisateur reste seul responsable de l&apos;exactitude des données saisies.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>5. Tarification</h2>
      <p>L&apos;application propose un plan gratuit et des plans payants. Les tarifs sont affichés dans l&apos;application et peuvent évoluer avec un préavis de 30 jours.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>6. Résiliation</h2>
      <p>L&apos;utilisateur peut supprimer son compte à tout moment via le <a href="https://deviio-webhook.vercel.app/api/delete-account" style={{color:'#004ac6'}}>formulaire de suppression</a> ou en contactant <a href="mailto:contact@deviio.app" style={{color:'#004ac6'}}>contact@deviio.app</a>.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>7. Droit applicable</h2>
      <p>Les présentes CGU sont soumises au droit français. Tout litige sera porté devant les tribunaux compétents de Nîmes.</p>

      <p style={{marginTop:'60px'}}><a href="/" style={{color:'#004ac6'}}>← Retour à l&apos;accueil</a></p>
    </main>
  )
}
