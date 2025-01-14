import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const pillars = [
  {
    title: 'Client Success',
    description: 'Delivering exceptional value and driving transformative outcomes'
  },
  {
    title: 'Innovation Leadership',
    description: 'Pioneering solutions that shape the future of business'
  },
  {
    title: 'Sustainable Impact',
    description: 'Creating lasting positive change for our communities'
  },
  {
    title: 'People Development',
    description: 'Nurturing talent and fostering professional growth'
  }
];

export default function OurMission() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Our Mission"
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
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Empowering organizations to thrive in an evolving world through innovative solutions and exceptional service
          </motion.p>
        </div>
      </div>

      {/* Mission Statement Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Purpose</h2>
            <p className="text-xl text-gray-600">
              We are dedicated to helping organizations navigate complexity, drive innovation, and achieve 
              sustainable growth. Through our expertise, integrity, and commitment to excellence, we create 
              lasting value for our clients, people, and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                alt="Our Vision"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                To be the most trusted and respected professional services firm, recognized globally for:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span className="text-gray-600">Delivering exceptional client value</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span className="text-gray-600">Attracting and developing top talent</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span className="text-gray-600">Driving innovation and thought leadership</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span className="text-gray-600">Creating positive societal impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a team dedicated to making a difference
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