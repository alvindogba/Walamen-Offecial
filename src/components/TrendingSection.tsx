import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import DigitalTransformation from '../assets/images/Digital.jpg';
export default function TrendingSection() {
  return (
    <section className="py-20 bg-[#f1f5f8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-0.5 bg-secondary"></div>
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider">TRENDING NOW</h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Large Card */}
          <Link to="/insights/healthcare" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={DigitalTransformation}
                  alt="digital transformation"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-primary mb-8">
                Digital Transformation: Shaping the Future of Work                </h3>
                <div className="flex justify-end">
                  <button className="inline-flex items-center space-x-3 bg-secondary text-white rounded-full px-6 py-2.5 hover:bg-red-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </Link>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Top Card */}
            <Link to="/insights/gig-economy" className="group flex-1">
              <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-medium text-primary">
                Rise of the Gig and Remote Economy
                </h3>
                <p className="text-gray-600 mt-4">
                The gig economy and remote work have transformed the way we work and live. This article explores the impact on businesses, employees, and the economy as a whole.
                </p>
                <div className="flex justify-end mt-8">
                  <button className="inline-flex items-center space-x-3 bg-secondary text-white rounded-full px-6 py-2.5 hover:bg-red-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Link>

            {/* Bottom Card */}
            <Link to="/insights/emerging-markets" className="group flex-1">
              <div className="bg-primary rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-medium text-white">
                Emerging Markets on the Rise
                </h3>
                <p className="text-gray-200 mt-4">
                The emerging markets are set to grow significantly in the coming years. This article explores the key trends and opportunities in these dynamic regions.
                </p>
                <div className="flex justify-end mt-8">
                  <button className="inline-flex items-center space-x-3 bg-secondary text-white rounded-full px-6 py-2.5 hover:bg-red-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}