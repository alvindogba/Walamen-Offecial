import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import bootcamp from '../assets/images/bootcamp.jpg';
import skill_demand from '../assets/images/skill-demand.jpg';
import entrepreneur from '../assets/images/entrepreneur.jpg';

export default function FeaturedInsights() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with orange accent */}
        <div className="mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-0.5 bg-secondary"></div>
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider">NEWS & INSIGHTS</h2>
          </div>
        </div>

        {/* Main Feature */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl h-full">
              <img
                src={bootcamp}
                alt="Bootcamp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">
            A New Era of Learning: Bootcamps for the Future
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
            Our consultancy is committed to providing cutting-edge educational opportunities, and we’re excited about the rise of bootcamps. These intensive, 6-9 month programs offer a flexible, fast way to gain industry-specific skills. They’ve become a valuable alternative to traditional education, delivering practical skills that are immediately applicable to the workforce.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
            We support practical education models like bootcamps and invite you to join this learning revolution. The skills you gain today shape your future—don’t miss out. Take the leap, invest in yourself, and let us guide you on this exciting journey.
            </p>
            <Link
              to="/insights/education"
              className="inline-flex items-center space-x-3 border border-secondary rounded-full px-6 py-2.5 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 w-fit group"
            >
              <span className="font-medium">Read More</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Secondary Features */}
        <div className="flex flex-col md:flex-row gap-8">
          {[
            {
              image: entrepreneur,
                title: "Unlock Insightful Learning Now",
              type: "Insight",
              link: "/insights/education"
            },
            {
              image: skill_demand,
              title: "Practical skills you need to succeed in your career.",
              type: "On-demand",
              link: "/insights/post-election"
            },
            {
              image: bootcamp,
              title: " Explore  the skills that will elevate your career.",
              type: "Webinar",
              link: "/insights/audit-standards"
            }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group flex-1 align-center"
            >
              <div className="flex flex-col md:flex-row p-4 md:h-[16vh] gap-2 align-center rounded-lg bg-gray-100 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100%] md:w-[25%] h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* the content  */}
                <div className="flex flex-col justify-between">
                  <h4>{item.title}</h4>
                  <div className="flex w-full justify-between mt-4 md:mt-0">
                    {item.type}
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
           
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}