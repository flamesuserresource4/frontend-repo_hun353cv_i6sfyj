import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'Microservices', 'Flutter', 'BLoC', 'Redux'
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          About
        </motion.h2>
        <div className="mt-6 grid gap-10 md:grid-cols-3">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-2 text-gray-700 leading-relaxed"
          >
            With 3+ years of experience in designing, building and deploying full-stack applications, I focus on scalable architectures, DevOps automation and delightful user experiences. I thrive in collaborative environments and care deeply about performance and accessibility.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=""
          >
            <h3 className="font-semibold text-gray-900">Skills & Tech</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-800">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Soft skills: efficient, detail-oriented, collaborative.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
