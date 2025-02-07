import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Clients Worldwide' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '150+', label: 'Expert Consultants' },
  { number: '20+', label: 'Years Experience' }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-gray">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}