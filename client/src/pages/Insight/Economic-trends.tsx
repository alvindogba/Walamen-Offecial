import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function EconomicTrends() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
            alt="Economic Trends"
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
              INSIGHTS | ECONOMIC TRENDS
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Navigating Economic Change
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Market Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Market Dynamics</h2>
              <p className="text-gray-600 text-lg mb-6">
                Understanding current economic trends and their impact on business strategy and growth opportunities.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Global market analysis</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Industry-specific impacts</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span>Growth opportunities</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
                alt="Market Overview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Key Economic Trends</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Economy",
                description: "Impact of digital transformation on economic growth",
                icon: "💻"
              },
              {
                title: "Sustainable Finance",
                description: "Growing importance of ESG in investment decisions",
                icon: "🌱"
              },
              {
                title: "Global Trade",
                description: "Evolving international trade relationships and policies",
                icon: "🌐"
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

      {/* Strategic Planning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12">Strategic Planning</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Risk Assessment</h3>
                <p className="text-gray-600">Identify and evaluate potential economic risks</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Opportunity Analysis</h3>
                <p className="text-gray-600">Discover growth opportunities in changing markets</p>
              </div>
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Resource Allocation</h3>
                <p className="text-gray-600">Optimize resource distribution for maximum impact</p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                alt="Strategic Planning"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Ahead of Economic Trends</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to position your business for success in a changing economy
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