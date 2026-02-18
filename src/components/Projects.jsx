import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Autonomous Research Agent',
      description: 'Architected deep research agent leveraging MCP framework and LangChain, orchestrating LLaMA 3.1 (8B) for autonomous research synthesis.',
      impact: 'Reduced research time by 60%, synthesized 50+ reports, processed 500+ sources with 85% relevance',
      tech: ['MCP', 'LangChain', 'LLaMA 3.1', 'Python'],
      github: 'https://github.com/sanepunk/MCPAgent',
      demo: null,
    },
    {
      title: 'Medical Triage Chatbot',
      description: 'Retrieval-augmented generation (RAG) system powered by LangChain for medical diagnostics.',
      impact: '76% diagnostic precision on 100+ patient scenarios',
      tech: ['LangChain', 'RAG', 'Python', 'FAISS'],
      github: null,
      demo: null,
    },
    {
      title: 'High-Performance ML Package',
      description: 'Created open-source Python package "jackofalltrades" utilizing JAX JIT compilation for accelerated ML prototyping.',
      impact: '35% faster than scikit-learn, 5643+ downloads, 4.2/5.0 rating from 45+ users',
      tech: ['JAX', 'Python', 'JIT', 'NumPy'],
      github: 'https://github.com/sanepunk/jackofalltrades',
      demo: 'https://pypi.org/project/jackofalltrades/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-glass p-6 rounded-2xl hover:border-neon-cyan transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <Code2 className="text-neon-cyan" size={32} />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4 p-3 bg-neon-blue/5 border border-neon-blue/20 rounded-lg">
                <p className="text-neon-cyan text-sm font-semibold">Impact:</p>
                <p className="text-gray-300 text-sm">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-cyan text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
