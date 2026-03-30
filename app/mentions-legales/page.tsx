export const metadata = {
  title: 'Mentions légales — Deviio',
}

export default function MentionsLegales() {
  return (
    <main style={{fontFamily:'system-ui',maxWidth:'800px',margin:'80px auto',padding:'0 24px',lineHeight:'1.7',color:'#1a1a1a'}}>
      <h1 style={{fontSize:'32px',marginBottom:'8px'}}>Mentions légales</h1>
      <p><em>Dernière mise à jour : 30 mars 2026</em></p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>1. Éditeur du site</h2>
      <p>
        Lumileo SASU<br/>
        Siège social : Bouquet, 30580, France<br/>
        SIRET : en cours d&apos;immatriculation<br/>
        Contact : <a href="mailto:contact@deviio.app" style={{color:'#004ac6'}}>contact@deviio.app</a>
      </p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>2. Directeur de la publication</h2>
      <p>Le représentant légal de Lumileo SASU.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>3. Hébergement</h2>
      <p>
        Vercel Inc.<br/>
        440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br/>
        Site : <a href="https://vercel.com" style={{color:'#004ac6'}}>vercel.com</a>
      </p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>4. Propriété intellectuelle</h2>
      <p>L&apos;ensemble du contenu du site (textes, images, logo) est la propriété exclusive de Lumileo SASU. Toute reproduction est interdite sans autorisation préalable.</p>

      <h2 style={{fontSize:'20px',marginTop:'40px'}}>5. Données personnelles</h2>
      <p>Consultez notre <a href="/privacy" style={{color:'#004ac6'}}>Politique de confidentialité</a> pour en savoir plus sur le traitement de vos données.</p>

      <p style={{marginTop:'60px'}}><a href="/" style={{color:'#004ac6'}}>← Retour à l&apos;accueil</a></p>
    </main>
  )
}
