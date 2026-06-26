import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAllResearch, setShowAllResearch] = useState(false);
  const [showAllOther, setShowAllOther] = useState(false);

  const researchProjects = [
    {
      title: 'Autonomous Research Agent',
      description: 'Architected deep research agent leveraging MCP framework and LangChain, orchestrating LLaMA 3.1 (8B) for autonomous research synthesis and structured reporting.',
      metrics: 'Synthesized 50+ research reports automatically, reducing research time by 60% and processing 500+ academic sources with 85% relevance accuracy',
      tech: ['MCP', 'LangChain', 'LLaMA 3.1', 'Python'],
      github: 'https://github.com/sanepunk/MCPAgent',
      demo: null,
    },
    {
      title: 'High-Performance ML Package',
      description: 'Created open-source Python package "jackofalltrades" utilizing JAX Just-In-Time (JIT) compilation and parallelization for accelerated machine learning prototyping.',
      metrics: 'Reduced training time by 35% over scikit-learn across 10+ ML algorithms. Generated 6973 downloads on PyPI with 4.2/5.0 average rating from 45+ users',
      tech: ['JAX', 'Python', 'JIT', 'NumPy', 'PyPI'],
      github: 'https://github.com/sanepunk/jackofalltrades',
      demo: 'https://pypi.org/project/jackofalltrades/',
    },
    {
      title: 'Reinforcement Learning Algorithms',
      description: 'Collection of Deep RL algorithm implementations including REINFORCE, UCB, and Policy Gradients using JAX/Flax for high-performance computing and experimentation.',
      metrics: 'Includes REINFORCE with Mixture of Experts variant for CartPole environment, Multi-Armed Bandit algorithms, and modular framework for benchmarking',
      tech: ['JAX', 'Flax', 'Gymnax', 'Optax', 'Python'],
      github: 'https://github.com/sanepunk/RL',
      demo: null,
    },
    {
      title: 'Medical Triage Chatbot',
      description: 'Retrieval-augmented generation (RAG) system powered by LangChain for medical diagnostics and patient triage.',
      metrics: 'Achieved 76% diagnostic precision across 100+ diverse patient scenarios',
      tech: ['LangChain', 'RAG', 'FAISS', 'Python'],
      github: null,
      demo: null,
    },
    {
      title: 'CrewAI Report Generator with MCP Tools',
      description: 'Multi-agent report generation system using CrewAI framework with MCP integration. Orchestrates Senior Research Analyst and Content Writer agents for autonomous research and content creation.',
      metrics: 'Enables collaborative AI agents with MCP tools for enhanced capabilities including weather data, crypto data, web search, and ML predictions',
      tech: ['CrewAI', 'MCP', 'LangChain', 'Streamlit', 'Python'],
      github: 'https://github.com/sanepunk/Crew-Agent',
      demo: null,
    },
  ];

  const otherProjects = [
    {
      title: 'Trading API Client',
      description: 'Authored Go client library for trading API with secure authentication and real-time market data processing.',
      metrics: 'Improved performance by 34% vs Python implementation',
      tech: ['Go', 'WebSocket', 'REST API', 'Concurrency'],
      github: null,
      demo: null,
    },
    {
      title: 'Vector Recommendation Engine',
      description: 'Developed vector-based recommendation system using embedding models for e-commerce product recommendations.',
      metrics: 'Achieved 87% accuracy, reducing customer decision time by 40%',
      tech: ['Python', 'Embeddings', 'FAISS', 'Scikit-learn'],
      github: null,
      demo: null,
    },
    {
      title: 'Healthcare API Backend',
      description: 'Built FastAPI backend for healthcare systems managing patient records with optimized performance.',
      metrics: 'Manages 200+ patient records with 10% latency reduction',
      tech: ['FastAPI', 'Python', 'PostgreSQL', 'Docker'],
      github: null,
      demo: null,
    },
  ];

  const displayedResearch = showAllResearch ? researchProjects : researchProjects.slice(0, 3);
  const displayedOther = showAllOther ? otherProjects : otherProjects.slice(0, 3);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glass p-6 rounded-xl hover:border-neon-cyan/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors flex-1">
          {project.title}
        </h3>
        <div className="flex gap-2 ml-4">
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

      <p className="text-gray-300 mb-3 text-sm leading-relaxed">
        {project.description}
      </p>

      <p className="text-gray-400 text-xs mb-4 italic">
        {project.metrics}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-md text-neon-cyan text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Research Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Research Projects</h2>
          <p className="text-gray-400 mb-8">Core research work in AI and Machine Learning</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {displayedResearch.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {researchProjects.length > 3 && (
            <button
              onClick={() => setShowAllResearch(!showAllResearch)}
              className="mx-auto flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors font-medium"
            >
              {showAllResearch ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More Projects <ChevronDown size={20} />
                </>
              )}
            </button>
          )}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">Other Projects</h2>
          <p className="text-gray-400 mb-8">Additional engineering and development work</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {displayedOther.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {otherProjects.length > 3 && (
            <button
              onClick={() => setShowAllOther(!showAllOther)}
              className="mx-auto flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors font-medium"
            >
              {showAllOther ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More Projects <ChevronDown size={20} />
                </>
              )}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
