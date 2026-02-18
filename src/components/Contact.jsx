import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's build intelligent systems that scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-neon-blue/30 rounded-lg focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary border border-neon-blue/30 rounded-lg focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-secondary border border-neon-blue/30 rounded-lg focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500 resize-none transition-colors"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="text-neon-cyan" />
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always interested in hearing about new opportunities, exciting projects, 
                and innovative ideas in AI and Machine Learning. Whether you want to collaborate 
                or just say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="https://github.com/sanepunk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-neon-blue/5 border border-neon-blue/20 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <Github className="text-neon-cyan" size={24} />
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <p className="text-gray-400 text-sm">@sanepunk</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ojas-patil-exe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-neon-blue/5 border border-neon-blue/20 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <Linkedin className="text-neon-cyan" size={24} />
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-400 text-sm">Ojas Patil</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl text-center">
              <Mail className="text-neon-cyan mx-auto mb-4" size={32} />
              <p className="text-gray-400 text-sm">Preferred Contact Method</p>
              <p className="text-white font-semibold text-lg mt-2">
                Via LinkedIn or GitHub
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-neon-blue/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2026 Ojas Patil. Built with React, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-neon-cyan font-semibold text-lg glow-text">
              Let's build intelligent systems that scale.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
