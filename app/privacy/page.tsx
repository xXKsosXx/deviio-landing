export const metadata = {
  title: 'Politique de confidentialité — Deviio',
}

export default function Privacy() {
  return (
    <main style={{fontFamily:'system-ui',maxWidth:'800px',margin:'80px auto',padding:'0 24px',lineHeight:'1.7',color:'#1a1a1a'}}>
      <h1 style={{fontSize:'32px',marginBottom:'8px'}}>Politique de confidentialité</h1>
      <p><em>Dernière mise à jour : 30 mars 2026</em></p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>1. Éditeur</h2>
      <p>Lumileo SASU — Bouquet, 30580, France.<br/>Contact : <a href="mailto:contact@deviio.app" style={{color:'#004ac6'}}>contact@deviio.app</a></p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>2. Données collectées</h2>
      <p>Deviio collecte : adresse e-mail, nom, nom d&apos;entreprise, SIRET, adresse professionnelle, logo d&apos;entreprise, documents (devis et factures) et informations clients.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>3. Finalité</h2>
      <p>Ces données sont utilisées uniquement pour le fonctionnement de l&apos;application : création de compte, génération de documents, envoi d&apos;emails transactionnels.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>4. Hébergement</h2>
      <p>Données hébergées sur Supabase (EU West — Irlande) et Vercel (EU). Aucune donnée n&apos;est partagée avec des tiers à des fins publicitaires.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>5. Vos droits (RGPD)</h2>
      <p>Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression. Contact : <a href="mailto:contact@deviio.app" style={{color:'#004ac6'}}>contact@deviio.app</a> ou <a href="https://deviio-webhook.vercel.app/api/delete-account" style={{color:'#004ac6'}}>formulaire de suppression</a>.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>6. Cookies</h2>
      <p>Deviio n&apos;utilise pas de cookies publicitaires ou de tracking.</p>

      <p style={{marginTop:'60px'}}><a href="/" style={{color:'#004ac6'}}>← Retour à l&apos;accueil</a></p>
    </main>
  )
}
