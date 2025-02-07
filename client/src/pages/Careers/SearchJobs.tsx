import { motion } from 'framer-motion';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const jobCategories = [
  'Technology', 'Consulting', 'Finance', 'Marketing', 'Human Resources', 'Operations'
];

const featuredJobs = [
  {
    title: 'Senior Software Engineer',
    location: 'New York, NY',
    type: 'Full-time',
    department: 'Technology',
    id: 'TECH-001'
  },
  {
    title: 'Management Consultant',
    location: 'London, UK',
    type: 'Full-time',
    department: 'Consulting',
    id: 'CONS-002'
  },
  {
    title: 'Financial Analyst',
    location: 'Singapore',
    type: 'Full-time',
    department: 'Finance',
    id: 'FIN-003'
  }
];

export default function SearchJobs() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Search Jobs"
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
            Find Your Next Career Opportunity
          </motion.h1>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full px-6 py-4 rounded-full bg-white shadow-lg text-gray-800 pr-12"
              />
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {jobCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ y: -2 }}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8">Featured Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
                <div className="text-gray-600 mb-4">
                  <p>{job.location}</p>
                  <p>{job.type} • {job.department}</p>
                </div>
                <a
                  href={`/careers/jobs/${job.id}`}
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Alert CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up for job alerts and be the first to know about new opportunities
          </p>
          <a
            href="/careers/alerts"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Create Job Alert</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}