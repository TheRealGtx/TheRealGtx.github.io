import { Link } from "react-router-dom";
import LegalPage from "@/components/LegalPage";
import { openCookieNotice } from "@/components/CookieNotice";
import { site } from "@/config/site";

const ext = { target: "_blank", rel: "noopener noreferrer" };
const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

const en = (
  <>
    <p>
      This page describes how this website uses cookies and similar browser storage technologies, in
      accordance with Art. 122 of the Italian Privacy Code (Legislative Decree 196/2003), the ePrivacy
      Directive and the guidelines of the Italian Data Protection Authority of 10 June 2021.
    </p>

    <h2>In short</h2>
    <p>
      This website <strong>does not use profiling cookies, analytics cookies or third-party cookies</strong>.
      Only a few technical items are stored in your browser, needed to provide the features you ask for.
      These do not require your consent.
    </p>

    <h2>Technical storage used</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Purpose</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>theme</code></td>
          <td>localStorage (first party)</td>
          <td>Remembers your choice of light or dark theme</td>
          <td>Until you delete it</td>
        </tr>
        <tr>
          <td><code>cookie-notice-v1</code></td>
          <td>localStorage (first party)</td>
          <td>Remembers that you have read the cookie notice, so it is not shown on every visit</td>
          <td>Until you delete it</td>
        </tr>
      </tbody>
    </table>
    <p>This data stays in your browser only: it is never sent to me or to third parties.</p>

    <h2>Third-party services</h2>
    <p>
      The website is hosted on GitHub Pages and the contact form uses EmailJS to forward messages. Neither
      service sets cookies through this website. Fonts are hosted on the website itself and are not loaded
      from external servers. For how these providers process personal data, see
      the <Link to="/privacy">Privacy Policy</Link>.
    </p>
    <p>
      Links to external websites (GitHub, LinkedIn) lead to pages that apply their own cookie policies,
      independent of this website.
    </p>

    <h2>Managing your preferences</h2>
    <p>
      You can review the cookie notice at any time:{" "}
      <button onClick={openCookieNotice} className="link">open cookie settings</button>. You can also delete
      the data stored by this website, or block it, from your browser settings:
    </p>
    <ul>
      <li><a href="https://support.google.com/chrome/answer/95647?hl=en" {...ext}>Google Chrome</a></li>
      <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" {...ext}>Mozilla Firefox</a></li>
      <li><a href="https://support.apple.com/guide/safari/sfri11471/mac" {...ext}>Safari</a></li>
      <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" {...ext}>Microsoft Edge</a></li>
    </ul>
    <p>Blocking this data does not prevent you from using the website: the theme will simply follow your system setting.</p>

    <h2>Contact</h2>
    <p>For any question: {mail}.</p>
  </>
);

const it = (
  <>
    <p>
      Questa pagina descrive come il sito utilizza cookie e tecnologie simili di archiviazione nel
      browser, ai sensi dell'art. 122 del Codice Privacy (D.Lgs. 196/2003) e delle Linee guida del
      Garante per la protezione dei dati personali del 10 giugno 2021.
    </p>

    <h2>In breve</h2>
    <p>
      Il sito <strong>non utilizza cookie di profilazione, cookie di analisi né cookie di terze parti</strong>.
      Vengono salvate nel browser solo poche informazioni tecniche, necessarie a far funzionare le
      funzionalità richieste dall'utente. Per queste non è richiesto il consenso.
    </p>

    <h2>Archiviazione tecnica utilizzata</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Tipo</th>
          <th scope="col">Finalità</th>
          <th scope="col">Durata</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>theme</code></td>
          <td>localStorage (prima parte)</td>
          <td>Ricorda la scelta del tema chiaro o scuro</td>
          <td>Fino alla cancellazione da parte dell'utente</td>
        </tr>
        <tr>
          <td><code>cookie-notice-v1</code></td>
          <td>localStorage (prima parte)</td>
          <td>Ricorda che l'avviso sui cookie è stato letto, per non mostrarlo a ogni visita</td>
          <td>Fino alla cancellazione da parte dell'utente</td>
        </tr>
      </tbody>
    </table>
    <p>Questi dati restano esclusivamente nel tuo browser: non vengono inviati a me né a terzi.</p>

    <h2>Servizi di terze parti</h2>
    <p>
      Il sito è ospitato su GitHub Pages e il modulo di contatto utilizza EmailJS per inoltrare i
      messaggi. Nessuno dei due servizi installa cookie tramite questo sito. I font sono ospitati
      direttamente sul sito e non vengono caricati da server esterni. Per il trattamento dei dati
      personali da parte di questi fornitori si veda la <Link to="/privacy?lang=it">Privacy Policy</Link>.
    </p>
    <p>
      I link verso siti esterni (GitHub, LinkedIn) portano a pagine che applicano le proprie policy
      sui cookie, indipendenti da questo sito.
    </p>

    <h2>Gestire le preferenze</h2>
    <p>
      Puoi rivedere l'avviso sui cookie in qualsiasi momento:{" "}
      <button onClick={openCookieNotice} className="link">apri le impostazioni cookie</button>.
      Puoi inoltre cancellare i dati salvati dal sito, o bloccarne il salvataggio, dalle impostazioni
      del tuo browser:
    </p>
    <ul>
      <li><a href="https://support.google.com/chrome/answer/95647?hl=it" {...ext}>Google Chrome</a></li>
      <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" {...ext}>Mozilla Firefox</a></li>
      <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" {...ext}>Safari</a></li>
      <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" {...ext}>Microsoft Edge</a></li>
    </ul>
    <p>Bloccare questi dati non impedisce l'uso del sito: il tema tornerà semplicemente a quello di sistema.</p>

    <h2>Contatti</h2>
    <p>Per qualsiasi domanda: {mail}.</p>
  </>
);

const CookiePolicy = () => (
  <LegalPage title={{ en: "Cookie Policy", it: "Cookie Policy" }} content={{ en, it }} />
);

export default CookiePolicy;
