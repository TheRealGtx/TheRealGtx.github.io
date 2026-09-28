import { useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { site } from "@/config/site";

export type Lang = "en" | "it";

type LegalPageProps = {
  title: Record<Lang, string>;
  content: Record<Lang, ReactNode>;
};

const labels = {
  en: { updated: "Last updated", locale: "en-GB" },
  it: { updated: "Ultimo aggiornamento", locale: "it-IT" },
};

// Legal pages are available in English (the site's language) and in Italian;
// the choice is kept in the URL (?lang=it) so each version can be linked directly.
const LegalPage = ({ title, content }: LegalPageProps) => {
  const [params, setParams] = useSearchParams();
  const lang: Lang = params.get("lang") === "it" ? "it" : "en";

  useEffect(() => {
    document.title = `${title[lang]} – ${site.name}`;
  }, [title, lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updated = new Date(site.legalUpdated).toLocaleDateString(labels[lang].locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main id="main" tabIndex={-1} className="page flex-1 py-14 focus:outline-none" lang={lang}>
        <div className="flex justify-end mb-6">
          <div role="group" aria-label="Language / Lingua" className="inline-flex rounded-md border border-border text-sm overflow-hidden">
            {(["en", "it"] as const).map((l) => (
              <button
                key={l}
                lang={l}
                onClick={() => setParams(l === "en" ? {} : { lang: l }, { replace: true })}
                aria-pressed={lang === l}
                className={`px-3 py-1 ${lang === l ? "bg-foreground text-background font-bold" : "hover:bg-secondary"}`}
              >
                {l === "en" ? "English" : "Italiano"}
              </button>
            ))}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-2">{title[lang]}</h1>
        <p className="meta mb-10">
          {labels[lang].updated}: {updated}
        </p>
        <div className="prose-legal">{content[lang]}</div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
