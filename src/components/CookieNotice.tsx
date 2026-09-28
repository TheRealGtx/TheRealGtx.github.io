import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// The site only uses technical storage (theme preference and this notice's state),
// which does not require consent under the Garante Privacy guidelines of 10 June 2021.
// If analytics or third-party embeds are ever added, this must become a real consent
// banner that blocks them until the user opts in.
const STORAGE_KEY = "cookie-notice-v1";
const OPEN_EVENT = "open-cookie-notice";

export const openCookieNotice = () => window.dispatchEvent(new Event(OPEN_EVENT));

const readAck = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "ack";
  } catch {
    return false;
  }
};

const CookieNotice = () => {
  const [open, setOpen] = useState(() => !readAck());

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "ack");
    } catch {
      // Storage unavailable: the notice will simply show again next visit
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-md border border-border bg-card shadow-lg p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm leading-relaxed flex-1">
          This website uses only <strong>technical storage</strong> needed for it to work (e.g. remembering the
          light/dark theme). No profiling or analytics cookies are used.{" "}
          <Link to="/cookie-policy" className="link" onClick={() => setOpen(false)}>
            Cookie policy
          </Link>
        </p>
        <button onClick={dismiss} className="btn-primary self-start sm:self-auto">
          Got it
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;
