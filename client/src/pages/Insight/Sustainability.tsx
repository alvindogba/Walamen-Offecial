import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Sustainability() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
            alt="Sustainability"
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
              INSIGHTS | SUSTAINABILITY
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Building a greener future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Implementing sustainable practices in modern business for long-term success
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Sustainability has become a critical factor in business success, driving innovation and creating 
                competitive advantages while contributing to environmental preservation.
              </p>

              <h2>Sustainable Business Practices</h2>
              <p>
                Key areas for implementing sustainable practices:
              </p>
              <ul>
                <li>Energy efficiency and renewable sources</li>
                <li>Waste reduction and recycling</li>
                <li>Sustainable supply chain management</li>
                <li>Green product development</li>
              </ul>

              <h2>Business Benefits</h2>
              <p>
                Advantages of sustainable business practices:
              </p>
              <ul>
                <li>Cost reduction through efficiency</li>
                <li>Enhanced brand reputation</li>
                <li>Regulatory compliance</li>
                <li>Market differentiation</li>
              </ul>

              <h2>Implementation Strategy</h2>
              <p>
                Steps for sustainable transformation:
              </p>
              <ul>
                <li>Sustainability assessment</li>
                <li>Goal setting and metrics</li>
                <li>Employee engagement</li>
                <li>Progress monitoring</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  alt="Author"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Emma Williams</div>
                  <div className="text-gray-600">Sustainability Director</div>
                </div>
              </div>
              <p className="text-gray-600">
                Leading sustainability initiatives with expertise in environmental management and corporate responsibility.
              </p>
            </div>

            {/* Related Insights */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6">Related Insights</h3>
              <div className="space-y-6">
                <a href="/insights/post-election" className="block group">
                  <div className="text-sm text-gray-500 mb-2">Post-Election Roadmap</div>
                  <div className="font-medium group-hover:text-secondary transition-colors">
                    What's next for my business?
                  </div>
                </a>
                <a href="/insights/digital-trends" className="block group">
                  <div className="text-sm text-gray-500 mb-2">Digital Innovation</div>
                  <div className="font-medium group-hover:text-secondary transition-colors">
                    Transform your business digitally
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Sustainability Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create a sustainable future for your business
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Get Started</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}