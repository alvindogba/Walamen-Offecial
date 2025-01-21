import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
interface CapabilitiesTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  sections: Array<{
    title: string;
    description: string;
    caseStudies: Array<{
      title: string;
      description: string;
      image: string;
      link: string;
    }>;
    learnMoreLink?: string;
  }>;
  cta: {
    headline: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  footerText: string;
}

export default function CapabilitiesTemplate({
  title,
  subtitle,
  heroImage,
  sections,
  cta,
  footerText,
}: CapabilitiesTemplateProps) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
        </div>
      
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-16">
          
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
  {/* The how we help section  */}
  <div className="w-full h-[60vh] bg-primary">
          <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center ">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="  font-medium text-white "
              >
                We help clients unlock the power of AI at scale, modernize technology delivery, and build new businesses to fuel growth.
              </motion.h2>
            <motion.button
            className='text-white bg-secondary px-8 py-3 rounded-full mt-8'
            ><Link to={"/contact"}>Get in touch</Link></motion.button>
            </div>
          </div>
        </div>
      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="max-w-7xl mx-auto px-4 py-16">
          
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg text-gray-700">{section.description}</p>
          </div>
          {/* How we help our Client  */}
          <div className="w-full py-5 mb-5 text-center">
        <h1>How we help our client</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {section.caseStudies.map((caseStudy, idx) => (
              <div
                key={idx}
                className="block group border border-gray-200 border-b-secondary border-b-8 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-[45%] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{caseStudy.description}</p>
                </div>
              </div>
            ))}
          </div>
   
        </div>
      ))}

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{cta.headline}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{cta.description}</p>
          <div className="flex justify-center space-x-4">
            <a
              href={cta.buttonLink}
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              <span>{cta.buttonText}</span>
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-bold">{footerText}</p>
        </div>
      </footer>
    </div>
  );
}
