import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { FaLaptopCode, FaDocker, FaPython, FaJava, FaAws } from "react-icons/fa";

const skills = [
  { name: "C#", icon: FaLaptopCode, level: "Proficient" },
  { name: "Python", icon: FaPython , level: "Proficient" },
  { name: "SQL", icon: Database, level: "Proficient" },
  { name: "Java", icon: FaJava , level: "Familiar" },
  { name: "Docker", icon: FaDocker , level: "Familiar" },
  { name: "AWS", icon: FaAws, level: "Familiar" },
];

const levels = [
  { level: "Proficient" },
  { level: "Familiar" },
  //{ level: "Expert" },
]

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
              Telecommunications in high school, driven by curiosity, a choice
              I have never regretted. That same curiosity continues to motivate
              me today, as I am currently studying Computer Science at the
              University of Bologna.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since March 2025, I have been working as a freelance full-stack
              software developer, a role that has allowed me to learn new skills
              and provided many opportunities for professional growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="font-medium">Technical skills</span>
              </div>
            </div>

            {levels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{level.level}</span>
                  </div>
                </div>

                 <div className="flex flex-wrap gap-3">
                    {skills.filter(skill => skill.level === level.level).map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <skill.icon className="w-5 h-5 text-primary" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                          </div>
                        );
                      })}
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
