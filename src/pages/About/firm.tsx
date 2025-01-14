import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const stats = [
  { number: '1000+', label: 'Professionals' },
  { number: '20+', label: 'Years of Excellence' },
  { number: '50+', label: 'Global Offices' },
  { number: '95%', label: 'Client Satisfaction' }
];

export default function OurFirm() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Our Firm"
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
            Our Firm
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            A legacy of excellence in professional services, driving innovation and transformation across industries
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                We are a leading professional services firm, committed to delivering exceptional value to our clients 
                through innovative solutions and deep industry expertise. Our global network of professionals brings 
                together diverse perspectives and experiences to solve complex challenges.
              </p>
              <p className="text-gray-600 mb-6">
                With a focus on excellence and integrity, we partner with organizations across industries to drive 
                sustainable growth and create lasting impact. Our collaborative approach and commitment to innovation 
                enable us to deliver tailored solutions that address our clients' most pressing needs.
              </p>
              <div className="flex space-x-4">
                <a
                  href="/about/our-history"
                  className="inline-flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                >
                  <span>Our History</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
                <a
                  href="/about/our-values"
                  className="inline-flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
                >
                  <span>Our Values</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a dynamic team driving innovation and excellence in professional services
          </p>
          <a
            href="/careers"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Explore Careers</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}