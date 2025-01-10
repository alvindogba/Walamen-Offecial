import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your unique business needs.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
    link: '/services/technology/software-development'
  },
  {
    title: 'Cloud Solutions',
    description: 'Empowering businesses with scalable, secure cloud technologies.',
    image: 'https://images.unsplash.com/photo-1526470498-65b3a4226b60?auto=format&fit=crop&q=80',
    link: '/services/technology/cloud-solutions'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Harness the power of AI to automate and optimize operations.',
    image: 'https://images.unsplash.com/photo-1508898578281-774ac4893f21?auto=format&fit=crop&q=80',
    link: '/services/technology/ai-ml'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business with advanced cybersecurity solutions.',
    image: 'https://images.unsplash.com/photo-1612277797886-3a281d6206a0?auto=format&fit=crop&q=80',
    link: '/services/technology/cybersecurity'
  }
];

const caseStudies = [
  {
    title: 'Digital Transformation in Retail',
    description: 'Revolutionizing customer experience through technology.',
    image: 'https://images.unsplash.com/photo-1515169067864-d4d6bfa9b79c?auto=format&fit=crop&q=80',
    link: '/case-studies/digital-transformation'
  },
  {
    title: 'AI-Driven Data Analysis for Healthcare',
    description: 'Improving patient outcomes with intelligent data solutions.',
    image: 'https://images.unsplash.com/photo-1573164574395-df5b00bdc1ef?auto=format&fit=crop&q=80',
    link: '/case-studies/ai-healthcare'
  },
  {
    title: 'Cloud Migration for Enterprises',
    description: 'Seamlessly transitioning to a cloud-first strategy.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    link: '/case-studies/cloud-migration'
  }
];

const partners = [
  {
    name: 'Tech Innovators Alliance',
    logo: '/images/partners/tech-innovators.svg',
    description: 'Collaborating on the latest advancements in technology.'
  },
  {
    name: 'Global Cloud Consortium',
    logo: '/images/partners/cloud-consortium.svg',
    description: 'Driving the adoption of cloud-first strategies worldwide.'
  },
  {
    name: 'AI Future Network',
    logo: '/images/partners/ai-future.svg',
    description: 'Shaping the future of AI and machine learning technologies.'
  }
];

const insights = [
  {
    title: 'The Future of AI in Business',
    date: 'December 20, 2024',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de81cfe?auto=format&fit=crop&q=80',
    link: '/insights/ai-in-business'
  },
  {
    title: 'Top Cybersecurity Trends for 2025',
    date: 'January 5, 2025',
    image: 'https://images.unsplash.com/photo-1579120264825-f3caa5d2b4d4?auto=format&fit=crop&q=80',
    link: '/insights/cybersecurity-trends'
  }
];

export default function Technology() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526470498-65b3a4226b60?auto=format&fit=crop&q=80"
            alt="Technology"
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
            Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Empowering businesses through innovation, automation, and digital transformation.
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
