import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const programs = [
  {
    title: 'Summer Internship',
    description: 'Gain hands-on experience working on real projects',
    duration: '10-12 weeks'
  },
  {
    title: 'Graduate Program',
    description: 'Start your career with structured training and mentorship',
    duration: '2 years'
  },
  {
    title: 'Co-op Program',
    description: 'Alternate between work terms and academic studies',
    duration: 'Varies'
  }
];

export default function Students() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Student Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Start Your Career Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Launch your career with hands-on experience, mentorship, and opportunities for growth
          </motion.p>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-12">Student Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="text-sm text-gray-500 mb-6">Duration: {program.duration}</p>
                <a
                  href={`/careers/students/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Your Development</h2>
              <p className="text-gray-600 mb-6">
                Our student programs are designed to provide you with the skills, experience, and network 
                you need to launch a successful career. Through structured training, mentorship, and 
                hands-on project work, you'll gain valuable experience while making meaningful contributions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span className="text-gray-600">Structured training and development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span className="text-gray-600">Mentorship from industry experts</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span className="text-gray-600">Real project experience</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="w-5 h-5 text-secondary mt-1 mr-2" />
                  <span className="text-gray-600">Networking opportunities</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Student Development"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our current opportunities and take the first step in your career
          </p>
          <a
            href="/careers/students/apply"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Apply Now</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}