const skills = [
  { level: "Proficient", items: ["C#", ".NET", "Blazor", "Python", "SQL", "HTML5", "CSS3", "Git"] },
  { level: "Familiar", items: ["Java", "C", "JavaScript", "Assembly", "Docker", "AWS"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About me</h2>

      <div className="space-y-4 leading-relaxed">
        <p>
          Computer science student, part time full stack software developer.
        </p>
        <p>
          At the age of 14, I chose to study Information Technology and
          Telecommunications in high school, driven by curiosity, a choice
          I have never regretted. That same curiosity continues to motivate
          me today, as I am currently studying Computer Science at the
          University of Bologna.
        </p>
        <p>
          Since March 2025, I have been working as a freelance full-stack
          software developer, a role that has allowed me to learn new skills
          and provided many opportunities for professional growth.
        </p>
      </div>

      <h3 className="font-bold text-lg mt-10 mb-4">Technical skills</h3>
      <dl className="grid grid-cols-[7rem_1fr] gap-y-3">
        {skills.map(({ level, items }) => (
          <div key={level} className="contents">
            <dt className="meta pt-0.5">{level}</dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="rounded border border-border bg-card px-2.5 py-0.5 text-sm">
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default AboutSection;
