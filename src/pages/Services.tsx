import { motion } from 'framer-motion';

const services = [
  {
    title: 'Digital Transformation',
    description: 'Enabling businesses to evolve with cutting-edge technologies.',
    icon: '🚀'
  },
  {
    title: 'Sustainability Solutions',
    description: 'Innovative practices for a greener tomorrow.',
    icon: '🌱'
  },
  {
    title: 'Data Analytics',
    description: 'Transform data into actionable insights.',
    icon: '📊'
  }
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
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
              <p className="text-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}