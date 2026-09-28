import { Download } from "lucide-react";
import { site } from "@/config/site";

type Entry = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const experiences: Entry[] = [
  {
    title: "Software Developer",
    company: "Freelance",
    period: "Mar 2025 – Present",
    description: "Full-stack development of enterprise management systems, primarily for the private healthcare industry. Built and deployed a clinic management platform used across 20+ healthcare facilities.",
  },
  {
    title: "Internship",
    company: "Neri S.p.A",
    period: "May 2023 – Jun 2023",
    description: "High school internship: developed internal management software for the production phase and assisted employees in their daily tasks.",
  },
];

const education: Entry[] = [
  {
    title: "B.S. Computer Science",
    company: "University of Bologna",
    period: "2024 – Present",
    description: "Currently in my second year, with a focus on programming and algorithm implementation.",
  },
  {
    title: "High school diploma",
    company: "ITT Blaise Pascal",
    period: "2019 – 2024",
    description: "Computer skills in software and web development, IT device management, network and database administration. Final grade: 97/100",
  },
];

const Timeline = ({ entries }: { entries: Entry[] }) => (
  <ol className="space-y-8">
    {entries.map((entry) => (
      <li key={entry.title + entry.period} className="grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1">
        <span className="meta pt-1">{entry.period}</span>
        <div>
          <h3 className="text-lg font-bold leading-snug">{entry.title}</h3>
          <p className="text-primary mb-1.5">{entry.company}</p>
          <p className="text-muted-foreground leading-relaxed">{entry.description}</p>
        </div>
      </li>
    ))}
  </ol>
);

const CVSection = () => {
  return (
    <>
      <section id="experience" className="section">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
          <h2 className="section-title mb-0">Experience</h2>
          <a href={site.cv} download="Giuliano Manzi CV.pdf" className="btn-outline">
            <Download size={16} aria-hidden="true" /> Download resume
          </a>
        </div>
        <Timeline entries={experiences} />
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <Timeline entries={education} />
      </section>
    </>
  );
};

export default CVSection;
