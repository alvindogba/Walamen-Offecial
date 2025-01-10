import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Curriculum Development & Training Programs', link: '/services/curriculum-development' },
  { title: 'Healthcare Consulting & Operational Efficiency', link: '/services/healthcare' },
  { title: 'Project Management & Construction Engineering', link: '/services/construction' },
  { title: 'Sustainable Farming Solutions & Agri-Tech', link: '/services/agri-tech' },
  { title: 'IT Consulting & Digital Transformation', link: '/services/it' },
  { title: 'Financial Advisory & Investment Strategy', link: '/services/financial' }
];

export default function FocusAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          {/* Section title with underline */}
          <div className="relative mb-6">
            <div className="w-12 h-0.5 bg-secondary absolute -top-3"></div>
            <h2 className="text-sm font-medium text-[#333333] uppercase tracking-wider">
              SERVICES
            </h2>
          </div>

          {/* Main heading */}
          <h3 className="text-4xl font-light text-[#2A2A2A] mb-4">
            Versatile advisory service offerings
          </h3>

          <p className="text-[#757575] text-lg mb-8">
          Our in-depth knowledge of various industries enables us to customize our services to meet your unique requirements.          </p>

          {/* All Services Link */}
          <Link
            to="/services"
            className="inline-flex items-center space-x-3 text-secondary group"
          >
            <span>All Services</span>
            <div className="w-8 h-8 rounded-full border-2 border-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group flex items-center justify-between py-6 border-b border-gray-200"
            >
              <span className="text-xl text-[#2A2A2A] group-hover:text-secondary transition-colors">
                {service.title}
              </span>
              <ArrowRightIcon className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-[#e63a47] rounded-xl py-12 px-2 md:px-12 flex items-center justify-between">
          <div className="text-white max-w-2xl">
            <h4 className="text-2xl font-light mb-2">
              Receive Walatech insights and event invitations on topics relevant to your business and role.
            </h4>
          </div>
          <Link
            to="/subscribe"
            className="inline-flex items-center space-x-3 text-white group"
          >
            <span>Subscribe</span>
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0088CC] transition-all">
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}