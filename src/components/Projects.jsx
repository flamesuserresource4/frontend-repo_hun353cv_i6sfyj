import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DevConnect',
    desc: 'A markdown-editor blog platform with real-time notifications.',
    tech: ['Next.js', 'Node.js', 'WebSockets', 'MongoDB'],
    role: 'Architected microservice backend, integrated Nginx reverse proxy, deployed with Docker/Kubernetes.',
    outcome: 'Reduced page load time by 40% and handled 10k+ users/month.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    links: { live: '#', github: '#' },
  },
  {
    title: 'FleetOps',
    desc: 'IoT-enabled fleet monitoring system with real-time dashboards.',
    tech: ['React', 'FastAPI', 'TimescaleDB', 'MQTT'],
    role: 'Designed time-series pipeline, implemented RBAC and alerting.',
    outcome: 'Supported 50k+ messages/min with <200ms alert latency.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    links: { live: '#', github: '#' },
  },
  {
    title: 'ShopSwift',
    desc: 'Headless e-commerce with personalized recommendations.',
    tech: ['Remix', 'Express', 'PostgreSQL', 'Redis'],
    role: 'Implemented microservices, caching, and CI/CD.',
    outcome: 'Increased conversion by 18% via latency and UX improvements.',
    image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop',
    links: { live: '#', github: '#' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Projects
        </motion.h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-700">{p.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="text-xs rounded-full bg-blue-50 text-blue-700 px-2 py-1 border border-blue-100">{t}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-600"><span className="font-medium text-gray-800">Role:</span> {p.role}</p>
                <p className="mt-1 text-sm text-gray-600"><span className="font-medium text-gray-800">Outcome:</span> {p.outcome}</p>
                <div className="mt-4 flex gap-3">
                  <a href={p.links.live} className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-medium">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.links.github} className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
