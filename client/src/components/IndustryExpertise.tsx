import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useLoading } from '../LoadContext'; // Import the global loading context
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles
import { useEffect } from 'react'; // Import useEffect for simulating loading

const industries = [
  { title: 'Education', link: '/industries/education' },
  { title: 'Agriculture', link: '/industries/agriculture' },
  { title: 'Building Construction', link: '/industries/building-construction' },
  { title: 'Leadership Training', link: '/insights/leadership-innovation' },
  { title: 'Procurement Management', link: '/industries/logistics-infrastructure' },
  { title: 'Sustainability', link: '/insights/sustainability' },
];

export default function IndustryExpertise() {
  const { loading, setLoading } = useLoading(); // Get loading state and setter from context

  // Simulate loading for 5 seconds
  useEffect(() => {
    setLoading(true); // Set loading to true when the component mounts
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds
    }, 10000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [setLoading]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side - Image */}
          <div className="relative h-[600px] overflow-hidden rounded-xl">
            {loading ? (
              <Skeleton height="100%" width="100%" className="block" />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80"
                alt="Modern mall interior"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Section title with underline */}
            <div className="relative">
              <div className="w-12 h-0.5 bg-secondary absolute -top-3"></div>
              <h2 className="text-sm font-medium text-[#333333] uppercase tracking-wider">
                {loading ? <Skeleton width={120} /> : 'The Future of Data and Analytics'}
              </h2>
            </div>

            {/* Main heading */}
            <h3 className="text-4xl font-bold text-[#2A2A2A]">
              {loading ? <Skeleton width="80%" height={40} /> : 'Real-Time Analytics'}
            </h3>

            {/* Description */}
            <p className="text-[#757575] text-lg">
              {loading ? (
                <Skeleton count={3} width="100%" />
              ) : (
                'Our Organizations are making data accessible to non-technical teams through intuitive tools and dashboards. This democratization of data ensures that insights are not confined to IT departments but are leveraged across the entire business and industries.'
              )}
            </p>

            {/* Learn More button and navigation */}
            <div className="flex items-center justify-between">
              {loading ? (
                <Skeleton width={150} height={40} borderRadius={20} />
              ) : (
                <Link
                  to="/articles/data/analytics"
                  className="inline-flex items-center space-x-3 text-secondary hover:text-white hover:bg-secondary px-6 py-2.5 rounded-full border-2 border-secondary transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                  <Skeleton height="100%" width="100%" className="block" />
                </div>
              ))
            : industries.map((industry) => (
                <Link
                  key={industry.title}
                  to={industry.link}
                  className="group relative h-24 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e63a47] to-gray-700 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300"></div>
                  <div className="relative h-full flex items-center justify-center px-4 text-center">
                    <h5 className="text-white text-sm font-medium">{industry.title}</h5>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}