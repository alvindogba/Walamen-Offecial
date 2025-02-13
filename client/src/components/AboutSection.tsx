import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useLoading } from '../LoadContext'; // Import the global loading context
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles
import { useEffect } from 'react'; // Import useEffect for simulating loading

export default function AboutSection() {
  const { loading, setLoading } = useLoading(); // Get loading state and setter from context

  // Simulate loading for 5 seconds
  useEffect(() => {
    setLoading(true); // Set loading to true when the component mounts
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [setLoading]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">
              {loading ? <Skeleton width="60%" height={40} /> : 'Walatech at a glance'}
            </h2>
            <p className="text-gray mb-8">
              {loading ? (
                <Skeleton count={3} width="100%" />
              ) : (
                'Dedicated, hands-on service, deep industry expertise, and the power of innovative solutions — that\'s what clients get when they choose the Walatech team. We\'re committed to driving sustainable transformation across industries.'
              )}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {loading
                ? Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className="text-center">
                      <Skeleton width={80} height={40} />
                      <Skeleton width={120} height={20} />
                    </div>
                  ))
                : [
                    { value: '20+', label: 'Years Experience' },
                    { value: '500+', label: 'Projects Completed' },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">{item.value}</div>
                      <div className="text-gray">{item.label}</div>
                    </div>
                  ))}
            </div>
            <div className="space-y-4">
              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} width={150} height={24} />
                  ))
                : [
                    { to: '/about', text: 'Our People' },
                    { to: '/about', text: 'More About Us' },
                    { to: '/careers', text: 'Explore Careers' },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.to}
                      className="flex items-center space-x-2 text-primary hover:text-secondary"
                    >
                      <span>{link.text}</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                  ))}
            </div>
          </motion.div>

          {/* Right side - Image and cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            {loading ? (
              <Skeleton height="100%" width="100%" />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            )}
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                {loading
                  ? Array.from({ length: 2 }).map((_, index) => (
                      <div key={index}>
                        <Skeleton width="60%" height={24} />
                        <Skeleton width="80%" height={16} />
                        <Skeleton width={100} height={32} />
                      </div>
                    ))
                  : [
                      {
                        title: 'Early Careers',
                        description: 'Take your first career steps with us',
                        to: '/careers/early',
                      },
                      {
                        title: 'Experienced',
                        description: 'Move your career forward',
                        to: '/careers/experienced',
                      },
                    ].map((card, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-primary mb-2">{card.title}</h3>
                        <p className="text-gray text-sm mb-4">{card.description}</p>
                        <Link
                          to={card.to}
                          className="btn btn-secondary inline-flex items-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}