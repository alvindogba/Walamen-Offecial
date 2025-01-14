import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import LifeAtWalamen from './pages/Careers/LiftAtWalamen';
import Experienced from './pages/Careers/experience';
import Students from './pages/Careers/students';
import SearchJobs from './pages/Careers/SearchJobs';

// Articles 
import {Edu, Tech, Engin} from './pages/Articles/HomepageArticles/article1';
import NewInsight from './pages/Articles/HomepageArticles/newInsight';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
      <Header />
      <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/*Industries Routes */}
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/engineering-building-construction" element={<EngineeringBuildingConstruction />} />
            <Route path="industries/agriculture" element={<Agriculture />} />
            <Route path="/industries/social-sector" element={<SocialSector />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/logistics-infrastructure" element={<LogisticInfrastructure />} />
            <Route path="/industries/technology" element={<Technology />} /> 
            {/* Industries Routes Ends here */}

            {/* Insights Routes */}
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/insights/economic-trends" element={<EconomicTrends />} />
            <Route path="/insights/leadership-innovation" element={<LeadershipInnovation />} />
            <Route path="/insights/sustainability" element={<Sustainability />} />
            <Route path="/insights/data-analytics" element={<DataAnalytics />} />

            {/* About Routes */}
            <Route path="/about" element={<About />} />
            <Route path='/about/ourfirm' element={<OurFirm />} />
            <Route path='/about/ourvalues' element={<OurValues />} />
            <Route path='/about/ourmission' element={<OurMission />} />
            <Route path='/about/ourhistory' element={<OurHistory />} />

            {/* Careers Routes */}
            <Route path='/careers/searchjobs' element={<SearchJobs />} />
            <Route path='/careers/students' element={<Students />} />
            <Route path='/careers/experienced' element={<Experienced />} />
            <Route path='/careers/life_at_walamen' element={<LifeAtWalamen />} />

            <Route path='/articles/insight/edu' element={<Edu />}/>
            <Route path='/articles/insight/tech' element={<Tech />}/>
            <Route path='/articles/insight/engin' element={<Engin  />} /> 
            <Route path='/articles/news/insight' element={<NewInsight/>}/>
            {/* Contact Routes  */}
            <Route path="/contact" element={<Contact />} />
            <Route path='/industries/*' element={<h1>Not Found</h1>} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;