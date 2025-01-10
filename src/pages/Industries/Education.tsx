import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Early childhood education and K-12',
    description: 'Supporting schools and districts with innovative solutions to improve student outcomes.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    link: '/services/education/early-education'
  },
  {
    title: 'Higher education',
    description: 'Helping institutions navigate change and prepare students for success.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
    link: '/services/education/higher-education'
  },
  {
    title: 'Workforce development',
    description: 'Building capabilities to meet evolving market demands through innovative training.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
    link: '/services/education/workforce'
  },
  {
    title: 'Innovation, productization, and technology',
    description: 'Leveraging technology to transform educational experiences and outcomes.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    link: '/services/education/innovation'
  }
];

const caseStudies = [
  {
    title: 'Developing a ten-year road map for public schools',
    description: 'Supporting a major US school district in strategic planning and implementation.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
    link: '/case-studies/education-roadmap'
  },
  {
    title: 'Equal to good transformation in a leading university',
    description: 'Implementing innovative solutions for improved educational outcomes.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
    link: '/case-studies/university-transformation'
  },
  {
    title: 'Improving and launching learning for US allied healthcare workers',
    description: 'Developing comprehensive training programs for healthcare professionals.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80',
    link: '/case-studies/healthcare-training'
  }
];

const partners = [
  {
    name: 'Bottom Line',
    logo: '/images/partners/bottom-line.svg',
    description: 'Working together to improve educational outcomes for underserved communities.'
  },
  {
    name: 'Braven',
    logo: '/images/partners/braven.svg',
    description: 'Partnering to empower the next generation of leaders.'
  },
  {
    name: 'Opportunity@Work',
    logo: '/images/partners/opportunity-at-work.svg',
    description: 'Collaborating to create pathways to meaningful careers.'
  }
];

const insights = [
  {
    title: 'Sports & Gaming: How all of this world  about learning to teach?',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1511377107391-116a9d5d20b5?auto=format&fit=crop&q=80',
    link: '/insights/sports-gaming-education'
  },
  {
    title: 'K-12 teachers are saying: What would you like to learn today?',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
    link: '/insights/k12-teachers-perspective'
  }
];

export default function Education() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            alt="Education"
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
            Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Working to help educators, institutions, and employers improve education and employment outcomes for all to create a more prosperous society with equal opportunity.
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