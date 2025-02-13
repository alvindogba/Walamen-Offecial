import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import bootcamp from "../assets/images/Education.jpg";
import { useLoading } from "../LoadContext"; // Import the global loading context
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles

export default function FeaturedInsights() {
  const { loading } = useLoading(); // Get loading state from context

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with orange accent */}
        <div className="mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-0.5 bg-secondary"></div>
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              {loading ? <Skeleton width={120} /> : "NEWS & INSIGHTS"}
            </h2>
          </div>
        </div>

        {/* Main Feature */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl h-full">
              {loading ? (
                <Skeleton
                  height={350}
                  width="100%"
                  className="block" // Ensure skeleton is displayed as a block element
                />
              ) : (
                <img
                  src={bootcamp}
                  alt="Bootcamp"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              {loading ? (
                <Skeleton width="80%" height={32} />
              ) : (
                "A New Era of Learning: Bootcamps for the Future"
              )}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              {loading ? (
                <Skeleton count={3} width="100%" />
              ) : (
                "Our consultancy is committed to providing cutting-edge educational opportunities, and we’re excited about the rise of bootcamps. These intensive, 6-9 month programs offer a flexible, fast way to gain industry-specific skills. They’ve become a valuable alternative to traditional education, delivering practical skills that are immediately applicable to the workforce."
              )}
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              {loading ? (
                <Skeleton count={3} width="100%" />
              ) : (
                "We support practical education models like bootcamps and invite you to join this learning revolution. The skills you gain today shape your future—don’t miss out. Take the leap, invest in yourself, and let us guide you on this exciting journey."
              )}
            </p>

            {loading ? (
              <Skeleton width={150} height={40} borderRadius={20} />
            ) : (
              <Link
                to="/articles/news/insight"
                className="inline-flex items-center space-x-3 border border-secondary rounded-full px-6 py-2.5 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 w-fit group"
              >
                <span className="font-medium">Read More</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}