import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import studygroupafricanpeople from "../../assets/images/study-group-african-people.jpg";

const services = [
  {
    title: 'Zongeatech School: A Flagship of Innovation',
    description: 'Walamen’s own Zongeatech School serves as a hub for STEM excellence, offering students hands-on learning experiences to prepare them for the industries of tomorrow.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    link: 'https://zongeatech.com'
  },
  {
    title: 'Higher education',
    description: 'We work with schools and districts to implement innovative tools and strategies that improve student outcomes and close the equity gap.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
    link: '/services/education/higher-education'
  },
  {
    title: 'Workforce development',
    description: 'Upskilling learners and professionals with programs that align education with evolving industry demands.',
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyKnPzfrmiACCjQYWMPPnXDhmxrpmL0Wq_TPeZr1EEBZWj7W-cFFVS6VyhlhYXUtrcyg&usqp=CAU",
    description: 'Working together to improve educational outcomes for underserved communities.'
  },
  {
    name: 'Braven',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJCQ39UV9KvvNo7wqL8oIaanHQ2bK7QKsrA&s',
    description: 'Partnering to empower the next generation of leaders.'
  },
  {
    name: 'Opportunity@Work',
    logo: 'https://cdn-icons-png.flaticon.com/512/115/115902.png',
    description: 'Collaborating to create pathways to meaningful careers.'
  }
];

const insights = [
  {
    title: 'Partner with Us to Drive Educational Excellence',
    description: 'Walamen believes in the power of collaboration to create transformative learning experiences. We partner with schools, universities, and institutions worldwide to bring innovative programs, technology integration, and impactful training to classrooms. Whether it’s a public school district, a private institution, or a community initiative, we work together to achieve meaningful outcomes.',
    image: 'https://images.unsplash.com/photo-1511377107391-116a9d5d20b5?auto=format&fit=crop&q=80',
  },
  {
    title: 'Zongeatech: A Model for STEM and Innovation',
    description: 'Zongeatech School is a testament to the power of innovation in education. As a flagship of excellence in STEM learning, Zongeatech offers students a unique opportunity to explore, experiment, and create in a supportive environment. Through hands-on projects, real-world challenges, and industry partnerships, Zongeatech prepares students for the future of work.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
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
            Inspiring Education Through Innovation and Collaboration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
Walamen is transforming education by empowering schools, educators, and learners with innovative solutions. Together with Zongeatech School and our partners, we’re building a brighter future for education.          </motion.p>
        </div>
      </div>


<section className='bg-white mb-8  min-h-[125vh] md:min-h-[80vh] '>


      <div className='w-full h-screen p-4 pt-[5%] flex flex-col md:flex-row gap-4  md:justify-between  bg-white'>
         {/* image here */}
  <div className="md:w-[45%] h-[100%]">
     <img 
     src={studygroupafricanpeople} 
     alt="image"
     className="w-full h-full object-cover rounded-[4%]"
     />
   </div>  
 
 {/* content here */}
 <div className='md:w-[50%] flex flex-col gap-4 '>
   <h1 className='text-4xl font-bold'>Revolutionizing Education for a Digital World</h1>
   <p className='text-lg text-gray-600'>
   "At Walamen, we are dedicated to advancing education through partnerships and innovation. From running our own Zongeatech School to collaborating with schools and institutions globally, we focus on bridging the gap between traditional learning and future-ready education. Whether it’s technology integration, workforce training, or STEM innovation, our solutions are designed to create impactful learning experiences for all."

     </p>
   <button className='bg-primary text-white px-4 py-2 rounded-full md:w-[40%] mt-4'>Contact Us</button>
 </div>
 
 </div>
 </section>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-light text-primary mb-12">OUR AREAS IN EDUCATION</h2>
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
        <h2 className="text-2xl font-light text-primary mb-12">IN COLLABERATION</h2>
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
              <h3 className="text-xl font-semibold text-primary mb-4">{insight.title}</h3>
              <p className="text-gray-600 mb-4">{insight.description}</p>
              <a
                href={`{insight.title}`}
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