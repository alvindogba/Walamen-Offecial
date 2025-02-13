import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import DigitalTransformation from '../assets/images/Digital.jpg';
import { useLoading } from '../LoadContext'; // Import the global loading context
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles
import { useEffect } from 'react'; // Import useEffect for simulating loading

export default function TrendingSection() {
  const { loading, setLoading } = useLoading(); // Get loading state and setter from context

  // Simulate loading for 5 seconds
  useEffect(() => {
    setLoading(true); // Set loading to true when the component mounts
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds
    }, 8000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [setLoading]);

  return (
    <section className="py-20 bg-[#f1f5f8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-0.5 bg-secondary"></div>
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              {loading ? <Skeleton width={120} /> : "TRENDING NOW"}
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Large Card */}
          <Link to="/articles/trending/now1" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                {loading ? (
                  <Skeleton height="100%" width="100%" className="block" />
                ) : (
                  <img
                    src={DigitalTransformation}
                    alt="digital transformation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-primary mb-8">
                  {loading ? (
                    <Skeleton width="80%" height={32} />
                  ) : (
                    "Digital Transformation: Shaping the Future of Work"
                  )}
                </h3>
                <div className="flex justify-end">
                  {loading ? (
                    <Skeleton width={150} height={40} borderRadius={20} />
                  ) : (
                    <button className="inline-flex items-center space-x-3 bg-secondary text-white rounded-full px-6 py-2.5 hover:bg-red-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Link>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Top Card */}
            <Link to="/articles/trending/now2" className="group flex-1">
              <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-medium text-primary">
                  {loading ? (
                    <Skeleton width="70%" height={32} />
                  ) : (
                    "Rise of the Gig and Remote Economy"
                  )}
                </h3>
                <p className="text-gray-600 mt-4">
                  {loading ? (
                    <Skeleton count={3} width="100%" />
                  ) : (
                    "The gig economy and remote work have transformed the way we work and live. This article explores the impact on businesses, employees, and the economy as a whole."
                  )}
                </p>
                <div className="flex justify-end mt-8">
                  {loading ? (
                    <Skeleton width={150} height={40} borderRadius={20} />
                  ) : (
                    <button className="inline-flex items-center space-x-3 bg-secondary text-white rounded-full px-6 py-2.5 hover:bg-red-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </Link>

            {/* Bottom Card */}
            <Link to="/articles/trending/now3" className="group flex-1">
              <div className="bg-primary rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-medium text-white">
                  {loading ? (
                    <Skeleton width="70%" height={32} />
                  ) : (
                    "Emerging Markets on the Rise"
                  )}
                </h3>
                <p className="text-gray-200 mt-4">
                  {loading ? (
                    <Skeleton count={3} width="100%" />
                  ) : (
                    "The emerging markets are set to grow significantly in the coming years. This article explores the key trends and opportunities in these dynamic regions."
                  )}
                </p>
                <div className="flex justify-end mt-8">
                  {loading ? (
                    <Skeleton width={150} height={40} borderRadius={20} />
                  ) : (
                    <button className="inline-flex items-center space-x-3 bg-secondary text-white rounded-full px-6 py-2.5 hover:bg-red-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}