import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Education',
    image: '/images/education.jpg',
    description: 'Transforming learning through technology'
  },
  {
    title: 'Healthcare',
    image: '/images/healthcare.jpg',
    description: 'Innovative solutions for better patient care'
  },
  {
    title: 'Engineering',
    image: '/images/engineering.jpg',
    description: 'Building the future of infrastructure'
  }
];

export default function Industries() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Industries We Serve
          </motion.h1>
          <p className="text-xl">Expertise across diverse sectors</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-75"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-white">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}