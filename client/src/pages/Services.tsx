import { motion } from 'framer-motion';
import {BookOpenText, FolderTree} from "lucide-react"

const services = [
  {
    title: 'Educational Transformation & Training Programs',
    description: 'Innovative solutions for the education sector.',
    icon: {BookOpenText}
  },
  {
    title: 'Project Management & Construction Engineering',
    description: 'Innovative practices for a greener tomorrow.',
    icon: {FolderTree}
  },
  {
    title: 'Real Estate Development & Management',
    description: 'Sustainable solutions for the future.',
    icon: {FolderTree}
  },
  {
    title: 'Agricultural Development & Management',
    description: 'Innovative practices for a greener tomorrow.',
    icon: {FolderTree}
  },
  {
    title: 'Social Sector Development & Management',
    description: 'Sustainable solutions for the future.',
    icon: {FolderTree}
  },
  {
    title: 'Logistics & Infrastructure Development',
    description: 'Innovative practices for a greener tomorrow.',
    icon: {FolderTree}
  },
  {
    title: 'Technology & Innovation',
    description: 'Sustainable solutions for the future.',
    icon: {FolderTree}
  },
  {
    title: 'Building & Construction',
    description: 'Innovative practices for a greener tomorrow.',
    icon: {FolderTree}
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl">Comprehensive solutions for your business needs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
              <p className="text-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}