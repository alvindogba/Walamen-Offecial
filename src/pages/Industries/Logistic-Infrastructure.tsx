import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Supply Chain Optimization',
    description: 'Streamline your supply chain to improve efficiency and reduce costs.',
    image: 'https://images.unsplash.com/photo-1570446635191-9f9b998778c7?auto=format&fit=crop&q=80',
    link: '/services/logistics/supply-chain-optimization'
  },
  {
    title: 'Warehouse Management',
    description: 'Advanced solutions for seamless warehouse operations.',
    image: 'https://images.unsplash.com/photo-1581091870621-9dfc6a3db5d3?auto=format&fit=crop&q=80',
    link: '/services/logistics/warehouse-management'
  },
  {
    title: 'Transportation Networks',
    description: 'Efficient and reliable transport solutions for your business.',
    image: 'https://images.unsplash.com/photo-1496065187959-7f07bdb1dcd8?auto=format&fit=crop&q=80',
    link: '/services/logistics/transportation-networks'
  },
  {
    title: 'Infrastructure Development',
    description: 'Building resilient infrastructure to support economic growth.',
    image: 'https://images.unsplash.com/photo-1571412527426-2a6b174c9b8e?auto=format&fit=crop&q=80',
    link: '/services/infrastructure/development'
  }
];

const caseStudies = [
  {
    title: 'Optimizing Last-Mile Delivery',
    description: 'Innovative solutions to improve delivery times and customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1581091870621-9dfc6a3db5d3?auto=format&fit=crop&q=80',
    link: '/case-studies/last-mile-delivery'
  },
  {
    title: 'Infrastructure for Urban Growth',
    description: 'Building smarter cities with scalable infrastructure solutions.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
    link: '/case-studies/urban-infrastructure'
  },
  {
    title: 'Global Supply Chain Strategy',
    description: 'Helping businesses navigate the complexities of global logistics.',
    image: 'https://images.unsplash.com/photo-1585825661566-460d2bc2db89?auto=format&fit=crop&q=80',
    link: '/case-studies/global-supply-chain'
  }
];

const partners = [
  {
    name: 'Global Logistics Alliance',
    logo: '/images/partners/logistics-alliance.svg',
    description: 'Pioneering global logistics solutions for a connected world.'
  },
  {
    name: 'Smart Infrastructure Group',
    logo: '/images/partners/infrastructure-group.svg',
    description: 'Innovating smarter and sustainable infrastructure projects.'
  },
  {
    name: 'Freight Forwarding Network',
    logo: '/images/partners/freight-network.svg',
    description: 'Optimizing freight solutions for businesses worldwide.'
  }
];

const insights = [
  {
    title: 'Top Trends in Logistics for 2025',
    date: 'January 2, 2025',
    image: 'https://images.unsplash.com/photo-1571165542823-8019cd18ab6c?auto=format&fit=crop&q=80',
    link: '/insights/logistics-trends-2025'
  },
  {
    title: 'Sustainable Infrastructure Development',
    date: 'December 15, 2024',
    image: 'https://images.unsplash.com/photo-1581091870621-9dfc6a3db5d3?auto=format&fit=crop&q=80',
    link: '/insights/sustainable-infrastructure'
  }
];

export default function LogisticsInfrastructure() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091870621-9dfc6a3db5d3?auto=format&fit=crop&q=80"
            alt="Logistics & Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light text-white mb-4"
          >
            Logistics & Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Enabling businesses with optimized logistics and sustainable infrastructure development.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="inline-flex items-center text-secondary group-hover:text-primary transition-colors"
              >
                <span>Learn More</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h2 className="text-2xl font-light">Get in touch</h2>
          <a
            href="/contact"
            className="bg-secondary hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-light text-primary mb-12">CASE STUDIES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <a
                href={study.link}
                className="inline-block px-6 py-2 bg-secondary text-white rounded-full hover:bg-primary transition-colors"
              >
                Read Case Study
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-light text-primary mb-12">PARTNERS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 mx-auto mb-4"
                />
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Insights */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-light text-primary mb-12">FEATURED INSIGHTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight) => (
            <motion.div
              key={insight.title}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm text-gray-500 mb-2">{insight.date}</div>
              <h3 className="text-xl font-semibold text-primary mb-4">{insight.title}</h3>
              <a
                href={insight.link}
                className="inline-flex items-center text-secondary group-hover:text-primary transition-colors"
              >
                <span>Read More</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
