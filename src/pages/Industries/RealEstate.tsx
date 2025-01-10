import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Residential Development',
    description: 'Creating modern, sustainable housing solutions for urban and rural communities.',
    image: 'https://images.unsplash.com/photo-1590490360181-d7008720d7f2?auto=format&fit=crop&q=80',
    link: '/services/real-estate/residential-development'
  },
  {
    title: 'Commercial Spaces',
    description: 'Designing and building high-performing commercial and office spaces.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80',
    link: '/services/real-estate/commercial-spaces'
  },
  {
    title: 'Property Management',
    description: 'Efficient property management solutions for landlords and investors.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161e7c944?auto=format&fit=crop&q=80',
    link: '/services/real-estate/property-management'
  },
  {
    title: 'Smart Buildings',
    description: 'Integrating IoT and smart technologies for intelligent building management.',
    image: 'https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&q=80',
    link: '/services/real-estate/smart-buildings'
  }
];

const caseStudies = [
  {
    title: 'Urban Housing Transformation',
    description: 'Developing affordable housing solutions for metropolitan areas.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    link: '/case-studies/urban-housing'
  },
  {
    title: 'Commercial Complex Modernization',
    description: 'Revitalizing outdated commercial spaces for improved functionality.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80',
    link: '/case-studies/commercial-modernization'
  },
  {
    title: 'Sustainable Residential Communities',
    description: 'Implementing green technologies in residential developments.',
    image: 'https://images.unsplash.com/photo-1595541951790-a0c19d97c1a6?auto=format&fit=crop&q=80',
    link: '/case-studies/sustainable-residential'
  }
];

const partners = [
  {
    name: 'Global Real Estate Network',
    logo: '/images/partners/real-estate-network.svg',
    description: 'Partnering to shape the future of real estate development.'
  },
  {
    name: 'Sustainable Building Alliance',
    logo: '/images/partners/sustainable-building.svg',
    description: 'Promoting eco-friendly building practices and designs.'
  },
  {
    name: 'Smart Property Consortium',
    logo: '/images/partners/smart-property.svg',
    description: 'Advancing IoT-based solutions in the real estate industry.'
  }
];

const insights = [
  {
    title: 'Trends in Sustainable Real Estate',
    date: 'December 12, 2024',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80',
    link: '/insights/sustainable-real-estate'
  },
  {
    title: 'Smart Building Technologies for the Future',
    date: 'November 22, 2024',
    image: 'https://images.unsplash.com/photo-1595427996481-d556b4978dc3?auto=format&fit=crop&q=80',
    link: '/insights/smart-buildings'
  }
];

export default function RealEstate() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590490360181-d7008720d7f2?auto=format&fit=crop&q=80"
            alt="Real Estate"
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
            Real Estate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Redefining real estate with innovative, sustainable, and smart solutions for communities and businesses.
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
