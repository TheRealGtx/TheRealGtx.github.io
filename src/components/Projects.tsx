import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GiChicken } from "react-icons/gi";
import { FaSchool, FaReceipt } from "react-icons/fa";



const projects = [
  {
    name: "CrossyRoad",
    description: "Faithful recreation of the mobile game Crossy Road applying object-oriented design principles. Developed for the course of Object Oriented Programming, final evaluation 30L",
    url: "https://github.com/TheRealGtx/OOP25-crossy-road",
    icon: GiChicken,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Classmate",
    description: "RESTful API backend for a school-oriented social platform allowing students to upload and share lesson notes",
    url: "https://github.com/TheRealGtx/Classmate",
    icon: FaSchool,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Receipt splitter",
    description: "[Under development]. A website that allows users to split fairly their bills. Scope of the prject is to experiment with Docker, AWS app runner and CI/CD pipelines",
    url: "https://github.com/TheRealGtx/receipt-splitter",
    icon: FaReceipt,
    color: "from-purple-400 to-purple-600",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{"// Projects"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Personal <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of some of my open source projects. Additional business projects are confidential.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass-card hover-glow p-6 rounded-xl relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${link.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color}`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
                <p className="text-muted-foreground text-sm">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
