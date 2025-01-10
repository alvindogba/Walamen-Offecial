import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Digital Banking Solutions',
    description: 'Transforming traditional banking with innovative digital platforms and services.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    link: '/services/financial/digital-banking'
  },
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth management solutions for individuals and institutions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    link: '/services/financial/wealth-management'
  },
  {
    title: 'Risk & Compliance',
    description: 'Advanced risk management and regulatory compliance solutions.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    link: '/services/financial/risk-compliance'
  },
  {
    title: 'Fintech Innovation',
    description: 'Cutting-edge financial technology solutions for the modern economy.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80',
    link: '/services/financial/fintech'
  }
];

const caseStudies = [
  {
    title: 'Digital Transformation of a Global Bank',
    description: 'Implementing comprehensive digital solutions to enhance customer experience and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80',
    link: '/case-studies/bank-transformation'
  },
  {
    title: 'Next-Gen Payment Platform Development',
    description: 'Building a secure and scalable payment platform for the digital age.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
    link: '/case-studies/payment-platform'
  },
  {
    title: 'Wealth Management Platform Modernization',
    description: 'Revolutionizing wealth management through digital innovation.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80',
    link: '/case-studies/wealth-platform'
  }
];

const partners = [
  {
    name: 'Global FinTech Alliance',
    logo: '/images/partners/fintech-alliance.svg',
    description: 'Collaborating to drive innovation in financial services.'
  },
  {
    name: 'Digital Banking Forum',
    logo: '/images/partners/banking-forum.svg',
    description: 'Shaping the future of digital banking together.'
  },
  {
    name: 'Financial Innovation Lab',
    logo: '/images/partners/innovation-lab.svg',
    description: 'Partnering to develop next-generation financial solutions.'
  }
];

const insights = [
  {
    title: 'The Future of Digital Banking',
    date: 'March 22, 2024',
    image: 'https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80',
    link: '/insights/digital-banking-future'
  },
  {
    title: 'Blockchain in Financial Services',
    date: 'March 18, 2024',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80',
    link: '/insights/blockchain-finance'
  }
];

export default function FinancialServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Financial Services"
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
            Financial Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Transforming financial services through digital innovation, delivering cutting-edge solutions that drive growth and efficiency in the modern economy.
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