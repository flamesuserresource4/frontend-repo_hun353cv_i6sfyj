import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <p className="text-gray-700">Let’s build something great together.</p>
            <div className="mt-4 grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className=""
          >
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Connect</h3>
              <div className="mt-4 flex flex-col gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900">
                  <Mail size={18} /> you@example.com
                </a>
                <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900">
                  <Github size={18} /> github.com/yourname
                </a>
                <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-800 hover:text-gray-900">
                  <Linkedin size={18} /> linkedin.com/in/yourname
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
