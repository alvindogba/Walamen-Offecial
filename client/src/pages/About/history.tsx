import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const timeline = [
  {
    year: '2003',
    title: 'Foundation',
    description: 'Established with a vision to transform professional services'
  },
  {
    year: '2008',
    title: 'Global Expansion',
    description: 'Expanded operations to key international markets'
  },
  {
    year: '2013',
    title: 'Digital Innovation',
    description: 'Launched innovative digital transformation services'
  },
  {
    year: '2018',
    title: 'Sustainability Focus',
    description: 'Introduced comprehensive sustainability consulting'
  },
  {
    year: '2023',
    title: 'Future Forward',
    description: 'Continuing to lead industry innovation and excellence'
  }
];

export default function OurHistory() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Our History"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-medium mb-4"
          >
            ABOUT US
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our History
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Two decades of excellence, innovation, and transformative impact
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[200px_1fr] gap-8"
              >
                <div className="text-right md:border-r border-secondary pr-8 py-4">
                  <div className="text-4xl font-bold text-secondary">{item.year}</div>
                </div>
                <div className="py-4">
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Legacy</h2>
              <p className="text-gray-600 mb-6">
                From our founding to the present day, we have maintained an unwavering commitment to excellence 
                and innovation. Our journey has been marked by continuous growth, strategic expansion, and a 
                dedication to delivering exceptional value to our clients.
              </p>
              <p className="text-gray-600 mb-6">
                Through economic cycles and market transformations, we have adapted and evolved while staying 
                true to our core values and mission. Our history is a testament to our resilience, innovation, 
                and commitment to making a lasting impact.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                alt="Legacy"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Be Part of Our Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in shaping the next chapter of our story
          </p>
          <a
            href="/careers"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Explore Opportunities</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}