import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import ojasImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle Gradient Background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 p-1">
                <img 
                  src={ojasImage} 
                  alt="Ojas Patil" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-green-500/20 rounded-full border-4 border-dark-bg flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="text-white">Ojas Patil</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-neon-cyan mb-6 font-medium">
              AI Engineer & Machine Learning Researcher
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Building AI that actually works! Currently deep into{' '}
              <span className="text-neon-blue font-semibold">production-ready ML systems</span> and{' '}
              <span className="text-neon-cyan font-semibold">autonomous AI agents</span>, with hands-on
              experience taking AI projects from wild ideas to real products.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="mailto:patil.ojas.250202@gmail.com"
                className="p-3 bg-neon-blue/10 border border-neon-blue/30 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/20 transition-all duration-300"
                title="Email"
              >
                <Mail className="text-neon-cyan" size={24} />
              </a>
              <a
                href="https://github.com/sanepunk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neon-blue/10 border border-neon-blue/30 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/20 transition-all duration-300"
                title="GitHub"
              >
                <Github className="text-neon-cyan" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ojas-patil-exe/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neon-blue/10 border border-neon-blue/30 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/20 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="text-neon-cyan" size={24} />
              </a>
              <a
                href="/OjasPatilResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neon-blue/10 border border-neon-blue/30 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/20 transition-all duration-300"
                title="Resume/CV"
              >
                <FileText className="text-neon-cyan" size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-neon-blue/50 text-neon-cyan font-semibold rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-neon-cyan/50" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
