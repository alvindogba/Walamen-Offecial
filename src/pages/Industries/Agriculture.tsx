import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Smart Farming Solutions',
    description: 'Implementing IoT and data analytics for precision agriculture and improved yields.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
    link: '/services/agriculture/smart-farming'
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Streamlining agricultural supply chains for efficiency and sustainability.',
    image: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&q=80',
    link: '/services/agriculture/supply-chain'
  },
  {
    title: 'Sustainable Agriculture',
    description: 'Developing eco-friendly farming practices for long-term sustainability.',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80',
    link: '/services/agriculture/sustainable'
  },
  {
    title: 'AgriTech Innovation',
    description: 'Leveraging cutting-edge technology to revolutionize farming practices.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80',
    link: '/services/agriculture/agritech'
  }
];

const caseStudies = [
  {
    title: 'Smart Irrigation System Implementation',
    description: 'Deploying IoT-based irrigation solutions for water conservation and improved crop yields.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80',
    link: '/case-studies/smart-irrigation'
  },
  {
    title: 'Sustainable Farming Transformation',
    description: 'Helping traditional farms transition to sustainable agricultural practices.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80',
    link: '/case-studies/sustainable-farming'
  },
  {
    title: 'Agricultural Supply Chain Digitization',
    description: 'Implementing blockchain and digital solutions for supply chain transparency.',
    image: 'https://images.unsplash.com/photo-1595508064774-5ff825ff0f81?auto=format&fit=crop&q=80',
    link: '/case-studies/supply-chain-digital'
  }
];

const partners = [
  {
    name: 'Global Sustainable Agriculture Initiative',
    logo: '/images/partners/sustainable-agriculture.svg',
    description: 'Collaborating to promote sustainable farming practices worldwide.'
  },
  {
    name: 'AgriTech Innovation Network',
    logo: '/images/partners/agritech-network.svg',
    description: 'Advancing technological solutions in agriculture.'
  },
  {
    name: 'Farmers Cooperative Alliance',
    logo: '/images/partners/farmers-alliance.svg',
    description: 'Supporting local farming communities and sustainable practices.'
  }
];

const insights = [
  {
    title: 'The Future of Smart Farming',
    date: 'March 21, 2024',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80',
    link: '/insights/smart-farming-future'
  },
  {
    title: 'Sustainable Agriculture Practices',
    date: 'March 16, 2024',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80',
    link: '/insights/sustainable-agriculture'
  }
];

export default function Agriculture() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
            alt="Agriculture"
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
            Agriculture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Transforming agriculture through innovative technology and sustainable practices to ensure food security and environmental stewardship for future generations.
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