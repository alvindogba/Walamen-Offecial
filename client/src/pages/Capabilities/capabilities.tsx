import CapabilitiesTemplate from "./CapabilityTemplate";
// implemantation page
import implemantationBg from "../../assets/images/implemantation-bg.jpg";
import execution from "../../assets/images/execution.jpeg";
import prepareness from "../../assets/images/prepareness.jpeg";
import transition from "../../assets/images/transition.jpeg";

// Digital Page 
import digital from "../../assets/images/Technology-image.jpg";
import digita from "../../assets/images/digital-1.jpeg";
import digital2 from "../../assets/images/crafting.jpeg";
import digital3 from "../../assets/images/entrepreneur.jpg"
// Growth and Marketing 
import growthBg from "../../assets/images/growthBG.jpg";
import growth1 from "../../assets/images/growth-marketing.jpeg";
import growth2 from "../../assets/images/growth2.jpg";
import growth3 from "../../assets/images/growth3.jpg";
// Sustainability page 
import sustainabilitybg from "../../assets/images/sustainabilitybg.jpg";
import sustainability1 from "../../assets/images/sustainability1.jpg";
import sustainability2 from "../../assets/images/sustainability2.jpg";
import sustainability3 from "../../assets/images/sustainability3.jpg";

// Real Estate page 
import realEstatebg from "../../assets/images/real-homes.jpg";
import realEstate1 from "../../assets/images/realEstate1.jpg";
import realEstate2 from "../../assets/images/realEstate2.jpg";
import realEstate3 from "../../assets/images/realEstate3.jpg";

// Risk and Resilience Page 
import riskResilienceBg from "../../assets/images/risk-resilienceBg.jpg";
import risk1 from "../../assets/images/risk1.jpg";
import risk2 from "../../assets/images/risk2.jpg";
import risk3 from "../../assets/images/risk3.jpg";




// Implementation Page
export const Implementation = () => (
  <CapabilitiesTemplate
    title="Implementation"
    subtitle="Turning strategies into actionable outcomes."
    heroImage={implemantationBg}
    sections={[
      {
        title: "Efficient Strategy Execution",
        description: "Efficient strategy execution is not just about having a good plan—it’s about ensuring every part of your organization is working towards the same goals with speed and precision. By focusing on collaboration, decision-making, resource management, and real-time monitoring, we helped [Client Name] transform their approach to strategy execution, leading to better outcomes across the board. At Walamen, we are committed to helping organizations achieve their strategic goals efficiently, and we look forward to helping you implement similar success strategies.",
        caseStudies: [
          {
            title: "Evaluate execution preparedness",
            description: "We assist organizations in evaluating their preparedness to implement systematic execution and manage change during transformations using our exclusive benchmarking tool. Our assessment covers ten key elements that are crucial for maintaining lasting impact in transformation efforts, referred to as the Impact Essentials. This process helps pinpoint gaps in execution capabilities, and we collaborate with organizations to create a customized roadmap for managing change and ensuring sustained impact.",
            image: execution,
            link: "/case-studies/strategy-to-execution",
          },
          {
            title: "Enhance execution capabilities",
            description: "Our implementation specialists bring extensive industry expertise and a proven history of driving change within complex organizations. Equipped with a world-class implementation toolkit, they utilize the Impact Essentials framework alongside McKinsey's top tools and resources. These outstanding change leaders work closely with clients by providing coaching, conducting virtual and on-site assessments, deploying performance management tools, and developing skills that drive significant performance improvements.",
            image: prepareness,
            link: "/case-studies/strategy-to-execution",
          },
          {
            title: "Guide transition and recovery",
            description: "We assist clients in safely scaling up operations through our Safe Transition and Recovery Teams (START) offering. By combining hands-on and remote support from our implementation consultants, we help clients navigate challenges during the pandemic, ensuring a secure transition and a clear pathway to recovery.",
            image: transition,
            link: "/case-studies/strategy-to-execution",
          },
        ],
        learnMoreLink: "/capabilities/implementation",
      },
    ]}
    cta={{
      headline: "Ready to turn strategy into action?",
      description: "Contact us to see how we can make your vision a reality.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    }}
    footerText="Let’s bring your strategy to life."
  />
);

// Digital Page
export const Digital = () => (
  <CapabilitiesTemplate
    title="Digital"
    subtitle="Embracing technology to redefine your business."
    heroImage={digital}
    sections={[
      {
        title: "Digital Transformation",
        description: "Reimagine your business with cutting-edge digital solutions.",
        caseStudies: [
          {
            title: "Revolutionizing the entire process lifecycle",
            description: "We help organizations transform their end-to-end processes, optimizing the value chain to drive efficiency, innovation, and lasting impact. By identifying inefficiencies and leveraging advanced analytics and tailored strategies, we implement solutions aligned with each client’s goals. Our experts ensure seamless execution and continuous support, enabling streamlined operations, reduced costs, enhanced agility, and measurable results.",
            image: digita,
            link: "/case-studies/digital-innovation",
          },
          {
            title: "Driving Organizational Agility",
            description: "We enable organizations to adapt and thrive in dynamic environments by building agility into their core operations. Our approach focuses on fostering a culture of flexibility, innovation, and rapid decision-making to respond effectively to changing market demands. Leveraging proven frameworks and advanced tools, we help clients streamline workflows, break down silos, and enhance cross-functional collaboration. Through tailored strategies and hands-on guidance, we empower teams to quickly pivot, optimize resources, and seize new opportunities. The result is a more resilient organization, ready to navigate uncertainty and achieve sustained growth.",
            image: digital2,
            link: "/case-studies/digital-innovation",
          },
          {
            title: "Unlocking Digital Potential",
            description: " We help organizations harness the power of digital technologies to transform operations, improve customer experiences, and drive growth. By assessing current capabilities and identifying opportunities, we develop tailored digital strategies that align with organizational goals. Our experts implement cutting-edge tools and technologies, optimize processes, and build digital skills within teams to enable seamless integration. With a focus on innovation and scalability, we empower organizations to unlock new levels of efficiency, agility, and competitiveness in today’s digital-first world.",
            image: digital3,
            link: "/case-studies/digital-innovation",
          },
        ],
        learnMoreLink: "/capabilities/digital",
      },
    ]}
    cta={{
      headline: "Transform your business with digital.",
      description: "Let’s help you embrace the future with confidence.",
      buttonText: "Explore Digital",
      buttonLink: "/digital",
    }}
    footerText="Discover what digital can do for you."
  />
);

// Growth & Marketing Page
export const GrowthMarketing = () => (
  <CapabilitiesTemplate
    title="Growth & Marketing"
    subtitle="Strategies to fuel growth and success."
    heroImage={growthBg}
    sections={[
      {
        title: "Marketing Strategy",
        description: "Develop campaigns that drive measurable results.",
        caseStudies: [
          {
            title: "Crafting Data-Driven Marketing Strategies",
            description: "We empower organizations to leverage data and analytics to create targeted, impactful marketing strategies that drive growth. By combining advanced market research with insights from customer behavior, we design campaigns that resonate with key audiences. Our team ensures these strategies are actionable, scalable, and aligned with your business goals. From identifying new market opportunities to optimizing existing efforts, we help organizations achieve measurable results and maximize return on investment.",
            image: growth1,
            link: "/case-studies/marketing-success",
          },

          {
            title: "Building Brand Equity",
            description: "We work with organizations to develop strong, recognizable brands that inspire trust and loyalty. By focusing on consistent messaging, compelling storytelling, and strategic positioning, we help clients stand out in competitive markets. Our holistic approach ensures every touchpoint reinforces the brand’s value and promise. With a clear vision and a well-executed strategy, organizations can build lasting relationships with their customers and achieve sustainable growth.",
            image: growth2,
            link: "/case-studies/marketing-success",
          },
          {
            title: "Driving Customer-Centric Growth",
            description: "We help organizations place their customers at the heart of their growth strategies, creating personalized experiences that foster loyalty and retention. Through in-depth customer journey mapping and segmentation, we identify key moments that matter most to your audience. By optimizing touchpoints and introducing innovative engagement methods, we enhance customer satisfaction while driving revenue. This approach ensures long-term growth fueled by strong, lasting customer relationships.",
            image: growth3,
            link: "/case-studies/marketing-success",
          },
        ],
        learnMoreLink: "/capabilities/growth-marketing",
      },
    ]}
    cta={{
      headline: "Let’s grow your business.",
      description: "Partner with us to achieve your growth goals.",
      buttonText: "Start Growing",
      buttonLink: "/growth-marketing",
    }}
    footerText="Fuel your growth with proven strategies."
  />
);

// Sustainability Page
export const SustainabilityCapability = () => (
  <CapabilitiesTemplate
    title="Sustainability"
    subtitle="Building a greener, more responsible future."
    heroImage= {sustainabilitybg}
    sections={[
      {
        title: "Sustainable Practices",
        description: "Implement eco-friendly strategies to drive long-term value.",
        caseStudies: [
          {
            title: "Engaging Stakeholders for Impact",
            description: "We support organizations in building strong partnerships with stakeholders to achieve shared sustainability goals. By fostering collaboration with employees, customers, suppliers, and communities, we help clients create transparent, impactful initiatives that resonate with their audiences. Through clear communication and inclusive strategies, organizations can inspire trust, build brand equity, and drive meaningful, collective action toward a sustainable future.",
            image: sustainability1,
            link: "/case-studies/sustainability",
          },
          {
            title: "Driving Sustainable Operations",
            description: "We support organizations  to transform their operations, embedding sustainable practices across the value chain. From supply chain optimization to energy efficiency initiatives, we help clients reduce waste, cut emissions, and enhance resilience. Using advanced analytics and innovative technologies, we identify areas for improvement and implement solutions that balance profitability with environmental responsibility, ensuring lasting operational impact.",
            image: sustainability2,
            link: "/case-studies/sustainability",
          },
          {
            title: "Embedding Sustainability into Strategy",
            description: "We help organizations integrate sustainability into their core strategies, aligning business goals with environmental and social impact. By identifying opportunities for reducing carbon footprints, improving resource efficiency, and fostering community engagement, we design actionable plans that deliver measurable results. Our tailored approach ensures that sustainability initiatives are not only impactful but also scalable, driving long-term value for both the organization and society.",
            image: sustainability3,
            link: "/case-studies/sustainability",
          },
        ],
        learnMoreLink: "/capabilities/sustainability",
      },
    ]}
    cta={{
      headline: "Make sustainability your advantage.",
      description: "Work with us to create sustainable business solutions.",
      buttonText: "Learn More",
      buttonLink: "insights/sustainability",
    }}
    footerText="Let’s create a sustainable future together."
  />
);

// Real Estate Page
export const RealEstateCapabilities = () => (
  <CapabilitiesTemplate
    title="Real Estate"
    subtitle="Navigating the complexities of real estate with expertise."
    heroImage={realEstatebg}

    sections={[
      {
        title: "Property Development",
        description: "From concept to completion, we guide your real estate ventures.",
        caseStudies: [
          {
            title: "Transforming Real Estate Operations",
            description: "We work with real estate organizations to streamline operations, increase efficiency, and enhance tenant satisfaction. Through process optimization, digital transformation, and technology integration, we help clients modernize their operations to meet evolving market demands. Our team focuses on enhancing property management, improving leasing strategies, and leveraging data analytics to drive better decision-making. This results in reduced costs, improved occupancy rates, and a more agile, customer-focused real estate operation.",
            image: realEstate1,
            link: "/case-studies/real-estate",
          },
          {
            title: "Enhancing Property Development",
            description: "We guide clients through every stage of property development, from initial concept to final execution. By leveraging market insights, architectural expertise, and regulatory knowledge, we help organizations create projects that meet current demands while anticipating future trends. Our team provides end-to-end support, ensuring optimal land use, cost efficiency, and value creation. With a focus on sustainability and innovation, we help organizations develop properties that deliver long-term impact and profitability.",
            image: realEstate2,
            link: "/case-studies/real-estate",
          },
          {
            title: "Optimizing Real Estate Portfolios",
            description: "We assist organizations in maximizing the value of their real estate portfolios by developing data-driven strategies for acquisition, management, and disposal. By assessing market trends, property performance, and long-term growth potential, we help clients make informed decisions that align with their strategic objectives. Our team identifies opportunities for cost savings, revenue generation, and risk mitigation, ensuring a balanced, high-performing portfolio that supports sustainable growth and profitability.",
            image: realEstate3,
            link: "/link",
          },
        ],
        learnMoreLink: "/industries/real-estate",
      },
    ]}
    cta={{
      headline: "Achieve your real estate goals.",
      description: "Partner with us for your next real estate project.",
      buttonText: "Contact Us",
      buttonLink: "industries/real-estate",
    }}
    footerText="Shape the future of real estate with us."
  />
);

// Risk & Resilience Page
export const RiskResilience = () => (
  <CapabilitiesTemplate
    title="Risk & Resilience"
    subtitle="Building resilient organizations in uncertain times."
    heroImage={riskResilienceBg}
    sections={[
      {
        title: "Risk Management",
        description: "Identify, assess, and mitigate risks effectively.",
        caseStudies: [
          {
            title: "Strengthening Risk Management",
            description: "We help organizations proactively identify and manage risks by developing comprehensive risk management frameworks. Through a combination of data analysis, industry insights, and best practices, we assist in assessing potential threats and vulnerabilities across all areas of the business. Our team works closely with clients to implement strategies that mitigate risks, protect assets, and ensure business continuity. With a focus on prevention and early detection, we help organizations navigate uncertainty and stay resilient in the face of change.",
            image: risk1,
            link: "/case-studies/risk-management",
          },
          {
            title: "Building Organizational Resilience",
            description: "We support organizations in building resilience to thrive in an ever-changing business landscape. By assessing current capabilities and identifying areas for improvement, we develop strategies that enhance adaptability, agility, and long-term stability. Our team works with clients to integrate resilience into their culture, operations, and decision-making processes. This ensures that organizations can quickly respond to disruptions, recover from setbacks, and maintain growth even",
            image: risk2,
            link: "/case-studies/risk-management",
          },
          {
            title: "Preparing for Crisis and Recovery",
            description: "We help organizations prepare for and recover from crises by developing effective crisis management and recovery plans. Through scenario planning, risk assessments, and response protocols, we ensure that clients are ready to manage unexpected events with minimal impact. Our team provides guidance on communication strategies, resource allocation, and operational adjustments, helping organizations navigate crises smoothly and recover quickly. By focusing on preparedness and agility, we enable clients to emerge stronger and more resilient in the aftermath of a crisis..",
            image: risk3,
            link: "/case-studies/risk-management",
          },
        ],
        learnMoreLink: "/capabilities/risk-resilience",
      },
    ]}
    cta={{
      headline: "Stay resilient in the face of challenges.",
      description: "Let us help you prepare for an uncertain future.",
      buttonText: "Learn More",
      buttonLink: "/risk-resilience",
    }}
    footerText="Be ready for what’s next."
  />
);
