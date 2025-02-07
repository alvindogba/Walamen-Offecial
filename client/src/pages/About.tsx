import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About Walatech
          </motion.h1>
          <p className="text-xl">Pioneering digital transformation across industries</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-gray mb-8">
              At Walatech, we're committed to driving innovation and sustainable growth
              across industries. Our mission is to empower organizations with cutting-edge
              solutions that transform challenges into opportunities.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                <div className="text-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-gray">Projects Completed</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-96"
          >
            <img
              src="/images/about-team.jpg"
              alt="Our Team"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}