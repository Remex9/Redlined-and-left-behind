import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import TransitGaps from './pages/TransitGaps';
import Map from './pages/Map';
import Solutions from './pages/Solutions';
import References from './pages/References';

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/transit-gaps" element={<TransitGaps />} />
          <Route path="/map" element={<Map />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </Router>
  );
}
