import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Modern Building Solutions',
    description: 'Innovative designs and efficient construction techniques for modern buildings.',
    image: 'https://images.unsplash.com/photo-1583786029273-df1a9de0f8b3?auto=format&fit=crop&q=80',
    link: '/services/building-construction/modern-solutions'
  },
  {
    title: 'Sustainable Architecture',
    description: 'Building eco-friendly structures with energy-efficient designs.',
    image: 'https://images.unsplash.com/photo-1557487841-01997a82f9f5?auto=format&fit=crop&q=80',
    link: '/services/building-construction/sustainable'
  },
  {
    title: 'Commercial Construction',
    description: 'Providing expert services in constructing office spaces, retail, and industrial buildings.',
    image: 'https://images.unsplash.com/photo-1569249010-f5b990d84a34?auto=format&fit=crop&q=80',
    link: '/services/building-construction/commercial'
  },
  {
    title: 'Residential Construction',
    description: 'Delivering quality homes with modern designs and reliable construction.',
    image: 'https://images.unsplash.com/photo-1533450142390-121e12cddba9?auto=format&fit=crop&q=80',
    link: '/services/building-construction/residential'
  }
];

const caseStudies = [
  {
    title: 'Green Building Initiative',
    description: 'Developing buildings that focus on sustainability and environmental responsibility.',
    image: 'https://images.unsplash.com/photo-1566794420-89a551a1ba10?auto=format&fit=crop&q=80',
    link: '/case-studies/green-building'
  },
  {
    title: 'Skyscraper Construction',
    description: 'Engineering high-rise buildings that change city skylines and maximize urban space.',
    image: 'https://images.unsplash.com/photo-1579162038132-469bb1737885?auto=format&fit=crop&q=80',
    link: '/case-studies/skyscraper'
  },
  {
    title: 'Building Smart Cities',
    description: 'Using technology to develop urban spaces with smart infrastructure and services.',
    image: 'https://images.unsplash.com/photo-1581304315861-79c25f1696e9?auto=format&fit=crop&q=80',
    link: '/case-studies/smart-cities'
  }
];

const partners = [
  {
    name: 'Global Construction Network',
    logo: '/images/partners/global-construction.svg',
    description: 'Collaborating globally to develop cutting-edge construction technologies.'
  },
  {
    name: 'EcoBuilding Solutions',
    logo: '/images/partners/eco-building.svg',
    description: 'Promoting sustainable construction and building practices worldwide.'
  },
  {
    name: 'Architectural Innovations',
    logo: '/images/partners/architectural-innovations.svg',
    description: 'Pioneering in innovative architecture and design trends.'
  }
];

const insights = [
  {
    title: 'The Future of Smart Buildings',
    date: 'March 25, 2024',
    image: 'https://images.unsplash.com/photo-1575902280126-daf3dbebdc5a?auto=format&fit=crop&q=80',
    link: '/insights/smart-buildings'
  },
  {
    title: 'Trends in Sustainable Construction',
    date: 'March 18, 2024',
    image: 'https://images.unsplash.com/photo-1587394679167-5315be95bda3?auto=format&fit=crop&q=80',
    link: '/insights/sustainable-construction'
  }
];

export default function BuildingConstruction() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1569249010-f5b990d84a34?auto=format&fit=crop&q=80"
            alt="Building Construction"
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
            Building Construction
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Shaping the future of construction with sustainable, modern, and technologically advanced solutions to create lasting structures.
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
          <h2 className="text-2xl font-light text-primary mb-12">COMMUNITY IMPACT</h2>
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
              <h3 className="text-xl font-semibold text-primary mb-2">{insight.title}</h3>
              <p className="text-gray-600 mb-4">{insight.date}</p>
              <a
                href={insight.link}
                className="inline-flex items-center text-secondary group-hover:text-primary transition-colors"
              >
                <span>Read Insight</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

