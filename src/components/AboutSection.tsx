import { motion } from "framer-motion";
import { Cpu, Database, Globe, Layers, Sparkles, Zap } from "lucide-react";

const skills = [
  { name: "C#", icon: Layers, level: 75 },
  { name: "Python", icon: Globe, level: 75 },
  { name: "SQL", icon: Zap, level: 70 },
  { name: "Java", icon: Cpu, level: 65 },
  { name: "Docker", icon: Database, level: 60 },
  { name: "AWS", icon: Sparkles, level: 55 },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{"// About Me"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Computer science student, part time full stack software developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              At the age of 14, I chose to study Information Technology and
              Telecommunications in high school,driven by curiosity, a choice
              I have never regretted. That same curiosity continues to motivate
              me today, as I am currently studying Computer Science at the
              University of Bologna.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since March 2025, I have been working as a freelance full-stack
              software developer, a role that has allowed me to learn new skills
              and provided many opportunities for professional growth.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["C#", "Java", "SQL", "Python", "AWS", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-card rounded-full text-sm font-mono text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
