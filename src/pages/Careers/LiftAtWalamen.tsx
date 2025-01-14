import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const culture = [
  {
    title: 'Innovation',
    description: 'Foster creativity and embrace new ideas',
    icon: '💡'
  },
  {
    title: 'Collaboration',
    description: 'Work together to achieve exceptional results',
    icon: '🤝'
  },
  {
    title: 'Growth',
    description: 'Continuous learning and development',
    icon: '📈'
  },
  {
    title: 'Balance',
    description: 'Support work-life harmony',
    icon: '⚖️'
  }
];

const benefits = [
  'Comprehensive Healthcare',
  'Professional Development',
  'Flexible Work Arrangements',
  'Wellness Programs',
  'Global Opportunities',
  'Recognition Programs'
];

export default function LifeAtWalamen() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
            alt="Life at Walamen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Life at Walamen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Experience a culture of innovation, collaboration, and continuous growth
          </motion.p>
        </div>
      </div>

      {/* Culture Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-12">Our Culture</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Benefits & Rewards</h2>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                    <span className="text-gray-600">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Benefits"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Employee Stories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-12">Employee Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&q=80`}
                    alt={`Employee Story ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Employee Story {index + 1}</h3>
                <p className="text-gray-600 mb-4">
                  Discover how our employees are making an impact and growing their careers at Walamen.
                </p>
                <a
                  href={`/careers/stories/${index + 1}`}
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a dynamic team making a difference
          </p>
          <a
            href="/careers/search"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>View Open Positions</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}