import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Go', level: 85 },
      ],
    },
    {
      category: 'ML/AI Frameworks',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 90 },
        { name: 'JAX', level: 85 },
        { name: 'Flax', level: 80 },
        { name: 'LangChain', level: 90 },
        { name: 'MCP', level: 85 },
        { name: 'LangGraph', level: 85 },
        { name: 'vLLM', level: 80 },
        { name: 'TensorRT', level: 75 },
        { name: 'FAISS', level: 85 },
        { name: 'Qdrant', level: 80 },
        { name: 'Pinecone', level: 80 },
      ],
    },
    {
      category: 'Tools & Infrastructure',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'MLflow', level: 80 },
        { name: 'DVC', level: 75 },
        { name: 'ONNX', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'Jenkins', level: 70 },
        { name: 'MySQL', level: 80 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div key={catIndex} variants={itemVariants}>
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="card-glass p-4 rounded-lg"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-neon-cyan">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.05 }}
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full"
                        style={{ boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
