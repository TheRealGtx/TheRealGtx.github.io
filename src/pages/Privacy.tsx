import { Link } from "react-router-dom";
import LegalPage from "@/components/LegalPage";
import { site } from "@/config/site";

const ext = { target: "_blank", rel: "noopener noreferrer" };
const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

const providers = {
  github: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
  emailjs: "https://www.emailjs.com/legal/privacy-policy/",
  google: "https://policies.google.com/privacy",
};

const en = (
  <>
    <p>
      Information on the processing of personal data pursuant to Articles 13 and 14 of Regulation (EU)
      2016/679 (&ldquo;GDPR&rdquo;) for visitors of this website and for anyone who contacts me through the
      contact form or by email.
    </p>

    <h2>1. Data controller</h2>
    <p>
      {site.name}, self-employed professional, VAT no. (P.IVA) {site.vatNumber}
      {site.taxCode && <>, tax code {site.taxCode}</>}, based in {site.location}.
      <br />
      Email: {mail}
      {site.pec && <> · PEC: <a href={`mailto:${site.pec}`}>{site.pec}</a></>}
    </p>

    <h2>2. Data processed</h2>
    <ul>
      <li>
        <strong>Browsing data.</strong> This website is hosted on GitHub Pages. Like any web server,
        GitHub's infrastructure automatically logs some technical data (IP address, date and time of the
        request, requested page, browser user agent) to operate and secure the service. I have no access
        to these logs and do not use them.
      </li>
      <li>
        <strong>Data you provide.</strong> Name, email address and message content submitted through the
        contact form, or the data contained in an email sent directly to my address.
      </li>
    </ul>
    <p>
      This website does not use analytics tools, profiling cookies or any tracking system. For details on
      the technical storage used in your browser, see the <Link to="/cookie-policy">Cookie Policy</Link>.
    </p>

    <h2>3. Purposes and legal basis</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Purpose</th>
          <th scope="col">Legal basis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Replying to requests sent via the form or by email, including assessing a possible professional collaboration</td>
          <td>Steps taken at the request of the data subject prior to entering into a contract (Art. 6(1)(b) GDPR) and legitimate interest in replying to messages received (Art. 6(1)(f) GDPR)</td>
        </tr>
        <tr>
          <td>Operation and security of the website</td>
          <td>Legitimate interest of the controller (Art. 6(1)(f) GDPR)</td>
        </tr>
        <tr>
          <td>Compliance with tax and accounting obligations, if the contact leads to a professional relationship</td>
          <td>Legal obligation (Art. 6(1)(c) GDPR)</td>
        </tr>
      </tbody>
    </table>
    <p>
      Providing the data in the form is optional, but without it I cannot reply to your request. The data
      is not used for newsletters or marketing communications and is not subject to automated
      decision-making.
    </p>

    <h2>4. Recipients and transfers outside the EU</h2>
    <p>The data may be processed, as processors or independent controllers, by the following providers:</p>
    <ul>
      <li>
        <strong>GitHub, Inc.</strong> (USA) – website hosting via GitHub Pages.{" "}
        <a href={providers.github} {...ext}>GitHub privacy statement</a>
      </li>
      <li>
        <strong>EmailJS Pte. Ltd.</strong> (Singapore, servers in the USA) – forwarding of messages sent
        through the contact form to my email address.{" "}
        <a href={providers.emailjs} {...ext}>EmailJS privacy policy</a>
      </li>
      <li>
        <strong>Google LLC</strong> (USA) – provider of the mailbox (Gmail) where I receive messages.{" "}
        <a href={providers.google} {...ext}>Google privacy policy</a>
      </li>
    </ul>
    <p>
      Transfers outside the EU take place on the basis of the European Commission's adequacy decision for
      the EU-U.S. Data Privacy Framework, for providers certified under it, or of the Standard Contractual
      Clauses adopted by the Commission (Art. 46 GDPR). The data is not disclosed or sold to third parties
      for their own purposes.
    </p>

    <h2>5. Retention</h2>
    <ul>
      <li>
        Messages and related contact details: for as long as needed to handle the request and in any case
        no longer than 24 months after the last exchange, unless a professional relationship arises.
      </li>
      <li>
        If a professional relationship arises: for its duration and, for tax and accounting records, for
        10 years as required by Italian law (Art. 2220 of the Civil Code).
      </li>
      <li>Browsing data: according to the retention periods set by GitHub in its privacy statement.</li>
    </ul>

    <h2>6. Your rights</h2>
    <p>At any time you can exercise the rights granted by Articles 15–22 GDPR, in particular to:</p>
    <ul>
      <li>access your data and obtain a copy of it;</li>
      <li>request its rectification or erasure;</li>
      <li>request the restriction of processing;</li>
      <li>object to processing based on legitimate interest;</li>
      <li>receive your data in a structured format (portability).</li>
    </ul>
    <p>
      To exercise them, just write to {mail}. You also have the right to lodge a complaint with the Italian
      Data Protection Authority, the Garante per la protezione dei dati personali (
      <a href="https://www.garanteprivacy.it/home_en" {...ext}>www.garanteprivacy.it</a>), or with the
      supervisory authority of your country of residence.
    </p>

    <h2>7. Changes</h2>
    <p>This policy may be updated over time. The date of the latest revision is shown at the top of the page.</p>
  </>
);

const it = (
  <>
    <p>
      Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento (UE)
      2016/679 (&laquo;GDPR&raquo;) per chi visita questo sito e per chi mi contatta tramite il modulo
      o via email.
    </p>

    <h2>1. Titolare del trattamento</h2>
    <p>
      {site.name}, libero professionista, P.IVA {site.vatNumber}
      {site.taxCode && <>, C.F. {site.taxCode}</>}, con sede a {site.location}.
      <br />
      Email: {mail}
      {site.pec && <> · PEC: <a href={`mailto:${site.pec}`}>{site.pec}</a></>}
    </p>

    <h2>2. Dati trattati</h2>
    <ul>
      <li>
        <strong>Dati di navigazione.</strong> Il sito è ospitato su GitHub Pages. Come ogni server web,
        l'infrastruttura di GitHub registra automaticamente alcuni dati tecnici (indirizzo IP, data e ora
        della richiesta, pagina richiesta, user agent del browser) per garantire il funzionamento e la
        sicurezza del servizio. Io non ho accesso a questi log e non li utilizzo.
      </li>
      <li>
        <strong>Dati forniti volontariamente.</strong> Nome, indirizzo email e contenuto del messaggio
        inviati tramite il modulo di contatto, oppure i dati contenuti in un'email inviata direttamente
        al mio indirizzo.
      </li>
    </ul>
    <p>
      Il sito non utilizza strumenti di analisi statistica, cookie di profilazione né sistemi di
      tracciamento. Per i dettagli sull'archiviazione tecnica nel browser si veda la{" "}
      <Link to="/cookie-policy?lang=it">Cookie Policy</Link>.
    </p>

    <h2>3. Finalità e base giuridica</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Finalità</th>
          <th scope="col">Base giuridica</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rispondere alle richieste inviate tramite modulo o email, anche per valutare una collaborazione professionale</td>
          <td>Esecuzione di misure precontrattuali adottate su richiesta dell'interessato (art. 6.1.b GDPR) e legittimo interesse a rispondere alle comunicazioni ricevute (art. 6.1.f GDPR)</td>
        </tr>
        <tr>
          <td>Funzionamento e sicurezza del sito</td>
          <td>Legittimo interesse del titolare (art. 6.1.f GDPR)</td>
        </tr>
        <tr>
          <td>Adempimento di obblighi fiscali e contabili, qualora dal contatto nasca un rapporto professionale</td>
          <td>Obbligo di legge (art. 6.1.c GDPR)</td>
        </tr>
      </tbody>
    </table>
    <p>
      Il conferimento dei dati del modulo è facoltativo, ma senza di essi non è possibile rispondere alla
      richiesta. I dati non sono usati per invio di newsletter o comunicazioni promozionali e non sono
      oggetto di processi decisionali automatizzati.
    </p>

    <h2>4. Destinatari e trasferimenti extra UE</h2>
    <p>I dati possono essere trattati, in qualità di responsabili o autonomi titolari, dai seguenti fornitori:</p>
    <ul>
      <li>
        <strong>GitHub, Inc.</strong> (USA) – hosting del sito tramite GitHub Pages.{" "}
        <a href={providers.github} {...ext}>Informativa di GitHub</a>
      </li>
      <li>
        <strong>EmailJS Pte. Ltd.</strong> (Singapore, server in USA) – inoltro dei messaggi inviati dal
        modulo di contatto al mio indirizzo email.{" "}
        <a href={providers.emailjs} {...ext}>Informativa di EmailJS</a>
      </li>
      <li>
        <strong>Google LLC</strong> (USA) – fornitore della casella di posta elettronica (Gmail) in cui
        ricevo i messaggi.{" "}
        <a href={`${providers.google}?hl=it`} {...ext}>Informativa di Google</a>
      </li>
    </ul>
    <p>
      I trasferimenti verso Paesi extra UE avvengono sulla base della decisione di adeguatezza della
      Commissione europea relativa all'EU-U.S. Data Privacy Framework, per i fornitori che vi aderiscono,
      oppure delle Clausole Contrattuali Standard approvate dalla Commissione (art. 46 GDPR).
      I dati non vengono diffusi né ceduti a terzi per finalità proprie.
    </p>

    <h2>5. Conservazione</h2>
    <ul>
      <li>
        Messaggi e relativi dati di contatto: per il tempo necessario a gestire la richiesta e comunque
        non oltre 24 mesi dall'ultimo scambio, salvo che nasca un rapporto professionale.
      </li>
      <li>
        In caso di rapporto professionale: per la durata del rapporto e, per i documenti fiscali e
        contabili, per 10 anni come previsto dalla legge (art. 2220 c.c.).
      </li>
      <li>Dati di navigazione: secondo i tempi stabiliti da GitHub nella propria informativa.</li>
    </ul>

    <h2>6. Diritti dell'interessato</h2>
    <p>In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15–22 GDPR, in particolare:</p>
    <ul>
      <li>accedere ai tuoi dati e ottenerne copia;</li>
      <li>chiederne la rettifica o la cancellazione;</li>
      <li>chiedere la limitazione del trattamento;</li>
      <li>opporti al trattamento basato sul legittimo interesse;</li>
      <li>ricevere i dati in un formato strutturato (portabilità).</li>
    </ul>
    <p>
      Per esercitarli è sufficiente scrivere a {mail}. Hai inoltre il diritto di proporre reclamo al
      Garante per la protezione dei dati personali (
      <a href="https://www.garanteprivacy.it" {...ext}>www.garanteprivacy.it</a>).
    </p>

    <h2>7. Modifiche</h2>
    <p>
      Questa informativa può essere aggiornata nel tempo. La data dell'ultima revisione è indicata in
      cima alla pagina.
    </p>
  </>
);

const Privacy = () => (
  <LegalPage title={{ en: "Privacy Policy", it: "Privacy Policy" }} content={{ en, it }} />
);

export default Privacy;
