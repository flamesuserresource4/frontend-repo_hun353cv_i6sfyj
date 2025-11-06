import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Advanced BLoC state management in Flutter',
    date: 'Sep 12, 2024',
    excerpt:
      'A deep dive into structuring feature modules, optimizing rebuilds, and testing complex BLoC trees in production apps.',
    link: '#',
  },
  {
    title: 'Setting up Nginx reverse proxy on Windows for microservices',
    date: 'Aug 28, 2024',
    excerpt:
      'Step-by-step for running multiple services behind a single entry point with SSL termination and path-based routing.',
    link: '#',
  },
  {
    title: 'Hybrid AES-GCM + RSA encryption CLI tool for .env files',
    date: 'Aug 2, 2024',
    excerpt:
      'How I built a secure pipeline to share environment secrets across teams without exposing raw values in repos.',
    link: '#',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Insights
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              <p className="mt-3 text-gray-700">{post.excerpt}</p>
              <a href={post.link} className="mt-4 inline-block text-blue-700 hover:text-blue-800 font-medium">
                Read more →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
