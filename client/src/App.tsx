import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Importing the ScrollToTop functionality so that when the browser sense changes between routes it can scroll to the top of the page
import ScrollToTop from './scroToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

// Industries
import Education from './pages/Industries/Education';
import EngineeringBuildingConstruction from './pages/Industries/Engineering-Building-Construction';
import Agriculture from './pages/Industries/Agriculture';
import SocialSector from './pages/Industries/SocialSector';
import RealEstate from './pages/Industries/RealEstate';
import LogisticInfrastructure from './pages/Industries/Logistic-Infrastructure';
import Technology from './pages/Industries/Technology';
import Building from './pages/Industries/Building';

// Insights
import DigitalTransformation from './pages/Insight/Digital-Transformation';
import EconomicTrends from './pages/Insight/Economic-trends';
import LeadershipInnovation from './pages/Insight/Leadership-Innovation';
import Sustainability from './pages/Insight/Sustainability';
import DataAnalytics from './pages/Insight/Data-Analytics';

// About
import OurFirm from './pages/About/firm';
import OurMission from './pages/About/mission';
import OurValues from './pages/About/values';
import OurHistory from './pages/About/history';

// Careers
import LifeAtWalamen from './pages/Careers/LifeAtWalamen';
import Experienced from './pages/Careers/experience';
import Students from './pages/Careers/students';
import SearchJobs from './pages/Careers/SearchJobs';


// Articles 
import {Edu, Tech, Engin, NewInsight, Analytics, TrandingNow1, TrandingNow2, TrandingNow3} from './pages/Articles/HomepageArticles/article1';
// Capabilities 
import { Implementation, Digital, GrowthMarketing, SustainabilityCapability, RealEstateCapabilities, RiskResilience} from './pages/Capabilities/capabilities';
// Fallback

const NotFound = () => <h1>Page Not Found</h1>;
import AdminDashboard from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Scroll to the Top between each routes */}
          <ScrollToTop/>
          <Routes>
            
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path='superadmin' element={<AdminDashboard />} />


            {/* About Routes */}
            <Route path="/about" element={<About />}>
              <Route path="ourfirm" element={<OurFirm />} />
              <Route path="ourvalues" element={<OurValues />} />
              <Route path="ourmission" element={<OurMission />} />
              <Route path="ourhistory" element={<OurHistory />} />
            </Route>

            {/* Industries Routes */}
            <Route path="/industries">
              <Route path="education" element={<Education />} />
              <Route path="engineering-building-construction" element={<EngineeringBuildingConstruction />} />
              <Route path="building-construction" element={<Building />} />
              <Route path="agriculture" element={<Agriculture />} />
              <Route path="social-sector" element={<SocialSector />} />
              <Route path="real-estate" element={<RealEstate />} />
              <Route path="logistics-infrastructure" element={<LogisticInfrastructure />} />
              <Route path="technology" element={<Technology />} />
            </Route>

            {/* Insights Routes */}
            <Route path="/insights" element={<Insights />}>
              <Route path="digital-transformation" element={<DigitalTransformation />} />
              <Route path="economic-trends" element={<EconomicTrends />} />
              <Route path="leadership-innovation" element={<LeadershipInnovation />} />
              <Route path="sustainability" element={<Sustainability />} />
              <Route path="data-analytics" element={<DataAnalytics />} />
            </Route>

            {/* Careers Routes */}
            <Route path="/careers">
              <Route path="life-at-walamen" element={<LifeAtWalamen />} />
              <Route path="experienced" element={<Experienced />} />
              <Route path="students" element={<Students />} />
              <Route path="searchjobs" element={<SearchJobs />} />
            </Route>

            {/* Articles */}
            <Route path="/articles">
            {/* Landing Page Articles  */}
              <Route path="insight/edu" element={<Edu />}/>
              <Route path="insight/tech" element={<Tech />}/>
              <Route path="insight/engin" element={<Engin/>}/>
            {/* The News and Insight section on the home page  */}
              <Route path="news/insight" element={<NewInsight />}/>
              {/* The Treanding Now section ong the Home page */}
              <Route path="trending/now1" element={<TrandingNow1 />}/>
              <Route path="trending/now2" element={<TrandingNow2 />}/>
              <Route path="trending/now3" element={<TrandingNow3 />}/>
              {/* The Data Analytics section on the home page */}
              <Route path="data/analytics" element={<Analytics />}/>
            </Route>
            {/* The Extral Aboutus, Careers, and  route  */}
            <Route path="/more-about-us" element={<About />}/>
            <Route path="/explore-careers" element={<SearchJobs />}/>
            <Route path="/contact-us" element={<Contact />}/>

            {/* Capabilities Routes */}
            <Route path="/capabilities">
              <Route path="implementation" element={<Implementation />} />
              <Route path="digital" element={<Digital />} />
              <Route path="growth-marketing" element={<GrowthMarketing />} />
              <Route path="sustainability" element={<SustainabilityCapability />} />
              <Route path="real-estate" element={<RealEstateCapabilities />} />
              <Route path="risk-resilience" element={<RiskResilience />} />
            </Route>


            {/* Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
