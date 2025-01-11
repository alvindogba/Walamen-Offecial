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
import HealthCare from './pages/Industries/HealthCare';
import EngineeringBuildingConstruction from './pages/Industries/Engineering-Building-Construction';
import FinancialServices from './pages/Industries/FinancialServices';
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
            <Route path="/industries/healthcare" element={<HealthCare />} />
            <Route path="/industries/engineering-building-construction" element={<EngineeringBuildingConstruction />} />
            <Route path="/industries/financial" element={<FinancialServices />} />
            <Route path="industries/agriculture" element={<Agriculture />} />
            <Route path="/industries/social-sector" element={<SocialSector />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/logistics-infrastructure" element={<LogisticInfrastructure />} />
            <Route path="/industries/technology" element={<Technology />} /> 
            <Route path='/industries/*' element={<h1>Not Found</h1>} />
            {/* Industries Routes Ends here */}

            {/* Insights Routes */}
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/insights/economic-trends" element={<EconomicTrends />} />
            <Route path="/insights/leadership-innovation" element={<LeadershipInnovation />} />
            <Route path="/insights/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;