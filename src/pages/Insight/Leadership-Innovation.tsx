import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function LeadershipInnovation() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Leadership & Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary font-medium mb-4"
            >
              INSIGHTS | LEADERSHIP & INNOVATION
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Leading Through Innovation
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Leadership Principles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Modern Leadership</h2>
              <p className="text-gray-600 text-lg mb-6">
                Effective leadership in today's rapidly changing business environment requires a combination of 
                traditional wisdom and innovative thinking.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Adaptive leadership strategies</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Innovation culture development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Team empowerment</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Modern Leadership"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Framework Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Innovation Framework</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Thinking",
                description: "Human-centered approach to problem solving",
                icon: "🎯"
              },
              {
                title: "Agile Leadership",
                description: "Flexible and adaptive management practices",
                icon: "🔄"
              },
              {
                title: "Cultural Innovation",
                description: "Building an environment that fosters creativity",
                icon: "🌟"
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Development Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Leadership Development</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Vision & Strategy</h3>
                <p className="text-gray-600">Developing and communicating clear direction</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Team Building</h3>
                <p className="text-gray-600">Creating high-performing, innovative teams</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Change Management</h3>
                <p className="text-gray-600">Leading successful organizational transformation</p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                alt="Leadership Development"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Develop Your Leadership Potential</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to enhance your leadership capabilities and drive innovation
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Get Started</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}