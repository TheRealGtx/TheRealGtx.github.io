import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { site } from "@/config/site";

const emptyForm = { name: "", email: "", message: "", privacy: false };

const ContactSection = () => {
  const [formState, setFormState] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS is not configured: set the VITE_EMAILJS_* variables (see .env.example).");
      setStatus({ type: "error", text: "The contact form is not available right now." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          reply_to: formState.email,
          message: formState.message,
        },
        { publicKey: VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus({ type: "success", text: "Message sent successfully! I'll get back to you as soon as possible." });
      setFormState(emptyForm);
    } catch (error) {
      // EmailJS rejects with { status, text } explaining what went wrong
      const reason = error instanceof EmailJSResponseStatus ? `${error.status} ${error.text}` : String(error);
      console.error("EmailJS Error:", reason);
      setStatus({ type: "error", text: "Failed to send message." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title mb-3">Contact</h2>
      <p className="text-muted-foreground mb-8">
        Feel free to contact me for any information. I'm always open to discussing new projects, ideas, or opportunities.
      </p>

      <div className="grid md:grid-cols-[1fr_1.6fr] gap-10">
        <div className="space-y-5">
          <div>
            <p className="meta mb-1">Email</p>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 link break-all">
              <Mail size={16} className="shrink-0" aria-hidden="true" /> {site.email}
            </a>
          </div>
          <div>
            <p className="meta mb-1">Location</p>
            <p className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> {site.location}
            </p>
          </div>
          <div>
            <p className="meta mb-1">Response time</p>
            <p>Usually within 24 hours</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-1.5">Name</label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="field"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1.5">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="field"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-1.5">Message</label>
            <textarea
              id="message"
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="field resize-y"
              placeholder="Leave your message here..."
              required
            />
          </div>

          <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={formState.privacy}
              onChange={(e) => setFormState({ ...formState, privacy: e.target.checked })}
              className="mt-0.5 h-4 w-4 accent-[hsl(var(--primary))]"
              required
            />
            <span>
              I have read the <Link to="/privacy" className="link">privacy policy</Link> and agree to my
              data being used to reply to this message.
            </span>
          </label>

          <button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? "Sending..." : <>Send message <Send size={16} aria-hidden="true" /></>}
          </button>

          <div role="status" aria-live="polite">
            {status && (
              <p className={status.type === "error" ? "text-destructive" : "text-foreground"}>
                {status.text}
                {status.type === "error" && (
                  <>
                    {" "}Please write to me directly at{" "}
                    <a href={`mailto:${site.email}`} className="link">{site.email}</a>.
                  </>
                )}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
