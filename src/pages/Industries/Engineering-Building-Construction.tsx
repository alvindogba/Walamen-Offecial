import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Infrastructure Development',
    description: 'Planning and executing large-scale infrastructure projects with sustainable practices.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
    link: '/services/engineering/infrastructure'
  },
  {
    title: 'Building Construction',
    description: 'Delivering innovative building solutions with a focus on quality and sustainability.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    link: '/services/engineering/construction'
  },
  {
    title: 'Smart Cities',
    description: 'Integrating technology and sustainable practices to create cities of the future.',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80',
    link: '/services/engineering/smart-cities'
  },
  {
    title: 'Sustainable Design',
    description: 'Creating eco-friendly solutions that minimize environmental impact.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
    link: '/services/engineering/sustainable-design'
  }
];

const caseStudies = [
  {
    title: 'Smart City Development in Southeast Asia',
    description: 'Implementing comprehensive smart city solutions for sustainable urban development.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80',
    link: '/case-studies/smart-city-development'
  },
  {
    title: 'Sustainable Airport Terminal Construction',
    description: 'Building a LEED-certified airport terminal with innovative green technologies.',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80',
    link: '/case-studies/airport-terminal'
  },
  {
    title: 'Urban Transportation Infrastructure',
    description: 'Developing efficient and sustainable transportation solutions for growing cities.',
    image: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?auto=format&fit=crop&q=80',
    link: '/case-studies/urban-transportation'
  }
];

const partners = [
  {
    name: 'Green Building Council',
    logo: '/images/partners/green-building.svg',
    description: 'Collaborating to promote sustainable building practices worldwide.'
  },
  {
    name: 'Smart Cities Alliance',
    logo: '/images/partners/smart-cities.svg',
    description: 'Working together to create intelligent and sustainable urban environments.'
  },
  {
    name: 'Infrastructure Innovation Network',
    logo: '/images/partners/infrastructure.svg',
    description: 'Partnering to advance infrastructure development technologies.'
  }
];

const insights = [
  {
    title: 'The Future of Sustainable Construction',
    date: 'March 18, 2024',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80',
    link: '/insights/sustainable-construction'
  },
  {
    title: 'Smart Cities: Building for Tomorrow',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
    link: '/insights/smart-cities-future'
  }
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '50+', label: 'Countries Served' },
  { value: '1000+', label: 'Engineers Worldwide' },
  { value: '25+', label: 'Years Experience' }
];

export default function EngineeringBuildingConstruction() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
            alt="Engineering & Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light text-white mb-4"
          >
            Engineering & Construction
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Building sustainable infrastructure and smart cities through innovative engineering solutions and cutting-edge construction practices.
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive engineering and construction solutions tailored to meet the evolving needs of our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 mx-auto mb-4"
                />
                <p className="text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Insights */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-light text-primary mb-12">FEATURED INSIGHTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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

      {/* Final CTA */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Transform Your Vision into Reality?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can help bring your project to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <span>Start Your Project</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}