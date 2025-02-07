import { motion } from 'framer-motion';

const awards = [
  {
    year: '2023',
    title: 'Innovation Excellence Award',
    organization: 'Global Tech Forum'
  },
  {
    year: '2023',
    title: 'Sustainability Leadership',
    organization: 'Green Business Alliance'
  },
  {
    year: '2022',
    title: 'Best Digital Transformation',
    organization: 'Digital Impact Awards'
  }
];

export default function Awards() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary text-center mb-12"
        >
          Recognition & Awards
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-secondary font-bold mb-2">{award.year}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{award.title}</h3>
              <p className="text-gray">{award.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}