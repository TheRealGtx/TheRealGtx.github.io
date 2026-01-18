import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe, FileCode, BookOpen, ExternalLink } from "lucide-react";

const links = [
  {
    name: "GitHub",
    description: "Open source projects & contributions",
    url: "https://github.com/TheRealGtx",
    icon: Github,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "LinkedIn",
    description: "Professional network & experience",
    url: "https://www.linkedin.com/in/giuliano-manzi-80471922b",
    icon: Linkedin,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Portfolio Site",
    description: "Your first impression of me",
    url: "#",
    icon: Globe,
    color: "from-purple-400 to-purple-600",
  },
];

const LinksSection = () => {
  return (
    <section id="links" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{"// Connect"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Me <span className="text-gradient">Online</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's connect across platforms. Follow my work and contributions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {links.map((link, index) => (
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

export default LinksSection;
