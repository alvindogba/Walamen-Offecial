import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const opportunities = [
  {
    title: 'Technology & Digital',
    description: 'Lead innovation and digital transformation initiatives',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    title: 'Consulting',
    description: 'Drive strategic change and business transformation',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
  },
  {
    title: 'Industry Solutions',
    description: 'Develop and implement industry-specific solutions',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  }
];

export default function Experienced() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Experienced Professionals"
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
            Experienced Professionals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Take your career to the next level with opportunities that match your expertise and ambitions
          </motion.p>
        </div>
      </div>

      {/* Opportunities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-12">Career Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <a
                  href={`/careers/experienced/${opportunity.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-secondary group-hover:text-primary transition-colors"
                >
                  <span>View Opportunities</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Why Join Us"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why Join Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Career Growth</h3>
                  <p className="text-gray-600">
                    Opportunities for advancement and professional development
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Work with cutting-edge technologies and methodologies
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Global Impact</h3>
                  <p className="text-gray-600">
                    Make a difference on a global scale
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Work-Life Balance</h3>
                  <p className="text-gray-600">
                    Flexible work arrangements and comprehensive benefits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our current opportunities and take the next step in your career
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