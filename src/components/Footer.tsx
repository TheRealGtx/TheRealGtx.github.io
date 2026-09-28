import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { site } from "@/config/site";
import { openCookieNotice } from "@/components/CookieNotice";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-8">
      <div className="page py-10 text-sm text-muted-foreground space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
          <div className="space-y-1">
            <p className="font-bold text-foreground">{site.name}</p>
            <p>Software developer · {site.location}</p>
            <p>P.IVA {site.vatNumber}</p>
            {site.taxCode && <p>C.F. {site.taxCode}</p>}
            {site.pec && <p>PEC {site.pec}</p>}
          </div>

          <div className="flex items-center gap-2 -ml-2 sm:ml-0">
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="p-2 hover:text-foreground">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="p-2 hover:text-foreground">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-5 border-t border-border">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Legal">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-foreground">Cookie Policy</Link>
            <button onClick={openCookieNotice} className="hover:text-foreground">Cookie settings</button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
