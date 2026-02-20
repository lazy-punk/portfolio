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
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-gray-400">
            Let's build intelligent systems that scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary/50 border border-neon-blue/20 rounded-lg focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary/50 border border-neon-blue/20 rounded-lg focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-secondary/50 border border-neon-blue/20 rounded-lg focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500 resize-none transition-colors"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="card-glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              
              <div className="space-y-3">
                <a
                  href="https://github.com/sanepunk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-neon-blue/5 border border-neon-blue/20 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <Github className="text-neon-cyan" size={20} />
                  <div>
                    <p className="text-white font-semibold text-sm">GitHub</p>
                    <p className="text-gray-400 text-xs">@sanepunk</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ojas-patil-exe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-neon-blue/5 border border-neon-blue/20 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <Linkedin className="text-neon-cyan" size={20} />
                  <div>
                    <p className="text-white font-semibold text-sm">LinkedIn</p>
                    <p className="text-gray-400 text-xs">Ojas Patil</p>
                  </div>
                </a>

                <a
                  href="mailto:patil.ojas.250202@gmail.com"
                  className="flex items-center gap-3 p-3 bg-neon-blue/5 border border-neon-blue/20 rounded-lg hover:border-neon-cyan hover:bg-neon-blue/10 transition-all duration-300 cursor-pointer"
                >
                  <Mail className="text-neon-cyan" size={20} />
                  <div>
                    <p className="text-white font-semibold text-sm">Email</p>
                    <p className="text-gray-400 text-xs">patil.ojas.250202@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 pt-8 border-t border-neon-blue/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              © 2026 Ojas Patil. Built with React, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-neon-cyan font-medium">
              Let's build intelligent systems that scale.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
