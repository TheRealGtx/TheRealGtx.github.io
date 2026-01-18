import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Deevloper",
    company: "Freelance",
    period: "March 2025 - Present",
    description: "Full-stack development of enterprise management systems, primarily for the private healthcare industry.",
  },
  {
    type: "work",
    title: "Internship",
    company: "Neri S.p.A",
    period: "May 2023 - June 2023",
    description: "High school internship: developed internal management software for the production phase and assisted employees.",
  },
];

const education = [
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "University of Bologna",
    period: "2024 - Present",
    description: "Currently in my second year, with a focus on programming and algorithm implementation.",
  },
  {
    type: "education",
    title: "High school diploma",
    company: "ITT Blaise Pascal",
    period: "2019 - 2024",
    description: "Computer skills in software and web development, IT device management, network and database administration. Final grade: 97/100",
  },
];

// const certifications = [
//   "AWS Solutions Architect Professional",
//   "Google Cloud Professional Developer",
//   "Kubernetes Administrator (CKA)",
// ];

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/GiulianoManzi_CV.pdf';
  link.download = 'GiulianoManzi_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CVSection = () => {
  return (
    <section id="cv" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{"// Experience"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 glass-card hover-glow rounded-lg font-medium transition-all"
          >
            <Download className="w-5 h-5 text-primary" />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card hover-glow p-6 rounded-xl relative"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-l-xl" />
                  <span className="font-mono text-primary text-sm">{exp.period}</span>
                  <h4 className="text-xl font-semibold mt-2">{exp.title}</h4>
                  <p className="text-muted-foreground mt-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card hover-glow p-6 rounded-xl relative"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20 rounded-l-xl" />
                    <span className="font-mono text-primary text-sm">{edu.period}</span>
                    <h4 className="text-xl font-semibold mt-2">{edu.title}</h4>
                    <p className="text-muted-foreground mt-1">{edu.company}</p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card hover-glow p-4 rounded-lg flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
