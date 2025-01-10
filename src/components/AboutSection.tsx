import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Walatech at a glance</h2>
            <p className="text-gray mb-8">
              Dedicated, hands-on service, deep industry expertise, and the power of innovative solutions
              — that's what clients get when they choose the Walatech team. We're committed to driving
              sustainable transformation across industries.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">20+</div>
                <div className="text-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-gray">Projects Completed</div>
              </div>
            </div>
            <div className="space-y-4">
              <Link to="/about" className="flex items-center space-x-2 text-primary hover:text-secondary">
                <span>Our People</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link to="/about" className="flex items-center space-x-2 text-primary hover:text-secondary">
                <span>More About Us</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link to="/careers" className="flex items-center space-x-2 text-primary hover:text-secondary">
                <span>Explore Careers</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Early Careers</h3>
                  <p className="text-gray text-sm mb-4">Take your first career steps with us</p>
                  <Link to="/careers/early" className="btn btn-secondary inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Experienced</h3>
                  <p className="text-gray text-sm mb-4">Move your career forward</p>
                  <Link to="/careers/experienced" className="btn btn-secondary inline-flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}