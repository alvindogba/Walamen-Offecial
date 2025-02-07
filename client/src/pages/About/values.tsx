import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const values = [
  {
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do',
    icon: '🌟'
  },
  {
    title: 'Integrity',
    description: 'Maintaining unwavering ethical standards and transparency',
    icon: '🤝'
  },
  {
    title: 'Innovation',
    description: 'Embracing change and driving transformation',
    icon: '💡'
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve exceptional results',
    icon: '🤲'
  },
  {
    title: 'Impact',
    description: 'Creating lasting positive change for our clients and communities',
    icon: '🎯'
  },
  {
    title: 'Diversity',
    description: 'Embracing different perspectives and experiences',
    icon: '🌈'
  }
];

export default function OurValues() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Our Values"
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
            Our Values
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            The principles that guide us in delivering excellence and creating lasting impact
          </motion.p>
        </div>
      </div>

      {/* Values Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Living Our Values</h2>
              <p className="text-gray-600 mb-6">
                Our values are more than words – they are the foundation of our culture and guide every 
                decision we make. They shape how we work with our clients, collaborate with our colleagues, 
                and engage with our communities.
              </p>
              <p className="text-gray-600 mb-6">
                Through these principles, we create an environment that fosters innovation, encourages 
                collaboration, and delivers exceptional results for our clients while making a positive 
                impact on society.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Team Values"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Our Values?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join a team that's committed to making a difference
          </p>
          <a
            href="/careers"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Join Our Team</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}