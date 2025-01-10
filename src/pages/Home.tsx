import Hero from '../components/Hero';
import FeaturedInsights from '../components/FeaturedInsights';
import TrendingSection from '../components/TrendingSection';
import IndustryExpertise from '../components/IndustryExpertise';
import FocusAreas from '../components/FocusAreas';
import ContactCollaboration from '../components/ContactCollaboration';


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedInsights />
       <TrendingSection />
        <IndustryExpertise />
       <ContactCollaboration />
      <FocusAreas />
     
    </div>
  );
}