import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function DigitalTransformation() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Digital Transformation"
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
              INSIGHTS | DIGITAL TRANSFORMATION
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Accelerating Digital Evolution
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The Digital Imperative</h2>
              <p className="text-gray-600 text-lg mb-6">
                In today's rapidly evolving business landscape, digital transformation isn't just an option—it's a necessity for survival and growth.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Accelerated adoption of digital technologies</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Enhanced customer experience through digital channels</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Data-driven decision making</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="Digital Transformation Overview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Key Areas of Digital Transformation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Experience",
                description: "Reimagining customer interactions through digital touchpoints",
                icon: "🎯"
              },
              {
                title: "Operational Efficiency",
                description: "Streamlining processes with digital tools and automation",
                icon: "⚡"
              },
              {
                title: "Business Model Innovation",
                description: "Creating new value propositions through digital capabilities",
                icon: "💡"
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

      {/* Implementation Framework Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Implementation Framework</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Assessment</h3>
                <p className="text-gray-600">Evaluate current digital maturity and identify opportunities</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Strategy</h3>
                <p className="text-gray-600">Develop a comprehensive digital transformation roadmap</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Execution</h3>
                <p className="text-gray-600">Implement solutions and manage change effectively</p> 
                </div>
                </div>
                <div>
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                  alt="Digital Transformation Framework"
                  className="w-full h-full object-cover rounded-lg"
                />
                </div>
                </div>
                </div>
                </section>
                </div>
                );
                }