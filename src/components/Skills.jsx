import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('All Skills');

  const skillCategories = {
    'All Skills': [
      'Python', 'Go', 'TensorFlow', 'PyTorch', 'JAX', 'Flax', 'LangChain', 'MCP', 
      'LangGraph', 'vLLM', 'TensorRT', 'FAISS', 'Qdrant', 'Pinecone', 'Docker', 
      'Kubernetes', 'MLflow', 'DVC', 'ONNX', 'Git', 'Jenkins', 'MySQL', 'FastAPI', 
      'Scikit-Learn', 'Transformers', 'PEFT'
    ],
    'AI/ML/DL': [
      'TensorFlow', 'PyTorch', 'JAX', 'Flax', 'Scikit-Learn', 'Transformers'
    ],
    'Python Libs': [
      'LangChain', 'MCP', 'LangGraph', 'vLLM', 'TensorRT', 'PEFT', 'FastAPI', 
      'Pandas', 'NumPy', 'OpenCV', 'Selenium'
    ],
    'Cloud': [
      'Docker', 'Kubernetes', 'MLflow', 'DVC', 'Jenkins', 'AWS', 'Azure'
    ],
    'Databases': [
      'MySQL', 'PostgreSQL', 'MongoDB', 'FAISS', 'Qdrant', 'Pinecone', 'Redis'
    ],
    'Languages': [
      'Python', 'Go', 'JavaScript', 'C/C++', 'SQL'
    ],
  };

  const categories = Object.keys(skillCategories);
  const displayedSkills = skillCategories[selectedCategory];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Skills</h2>
          <p className="text-gray-400">Technologies and tools I work with</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-white shadow-lg shadow-neon-cyan/30'
                  : 'bg-dark-secondary border border-neon-blue/20 text-gray-400 hover:border-neon-cyan/50 hover:text-neon-cyan'
              }`}
            >
              <span className="mr-2">{category}</span>
              <span className="text-xs opacity-70">
                {skillCategories[category].length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-glass p-4 rounded-lg text-center hover:border-neon-cyan/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl mb-2">
                {getSkillEmoji(skill)}
              </div>
              <p className="text-white text-sm font-medium group-hover:text-neon-cyan transition-colors">
                {skill}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Showing <span className="text-neon-cyan font-semibold">{displayedSkills.length}</span> {selectedCategory}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to get emoji for skills
const getSkillEmoji = (skill) => {
  const emojiMap = {
    'Python': '🐍',
    'Go': '🔷',
    'TensorFlow': '🧠',
    'PyTorch': '🔥',
    'JAX': '⚡',
    'Flax': '🌸',
    'LangChain': '🔗',
    'MCP': '🤖',
    'LangGraph': '📊',
    'vLLM': '💬',
    'TensorRT': '🚀',
    'FAISS': '🔍',
    'Qdrant': '💾',
    'Pinecone': '🌲',
    'Docker': '🐳',
    'Kubernetes': '☸️',
    'MLflow': '📈',
    'DVC': '📦',
    'ONNX': '🔄',
    'Git': '🔀',
    'Jenkins': '🔧',
    'MySQL': '🗄️',
    'FastAPI': '⚡',
    'Scikit-Learn': '🧪',
    'Transformers': '🤗',
    'PEFT': '🎯',
    'Pandas': '🐼',
    'NumPy': '🔢',
    'OpenCV': '👁️',
    'Selenium': '🕷️',
    'AWS': '☁️',
    'Azure': '☁️',
    'PostgreSQL': '🐘',
    'MongoDB': '🍃',
    'Redis': '🔴',
    'JavaScript': '💛',
    'C/C++': '⚙️',
    'SQL': '📊',
  };
  return emojiMap[skill] || '🔧';
};

export default Skills;
