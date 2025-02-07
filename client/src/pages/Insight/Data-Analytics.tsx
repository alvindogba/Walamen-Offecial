import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function DataAnalytics() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="Data Analytics"
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
              INSIGHTS | DATA & ANALYTICS
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Unlocking Data Potential
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Data Strategy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Data-Driven Strategy</h2>
              <p className="text-gray-600 text-lg mb-6">
                Transform your business through data-driven insights and advanced analytics capabilities.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Data strategy development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Advanced analytics implementation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Predictive modeling</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Data Strategy"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Analytics Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Descriptive Analytics",
                description: "Understanding what happened through data",
                icon: "📊"
              },
              {
                title: "Predictive Analytics",
                description: "Forecasting future trends and behaviors",
                icon: "🔮"
              },
              {
                title: "Prescriptive Analytics",
                description: "Recommending actions based on insights",
                icon: "🎯"
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
                <h3 className="text-xl font-bold text-primary mb-2">Data Collection</h3>
                <p className="text-gray-600">Gathering and organizing relevant data</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Analysis</h3>
                <p className="text-gray-600">Applying advanced analytics techniques</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Insights</h3>
                <p className="text-gray-600">Extracting actionable insights</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Action</h3>
                <p className="text-gray-600">Implementing data-driven decisions</p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Implementation Framework"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Data into Insights</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to unlock the full potential of your data
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