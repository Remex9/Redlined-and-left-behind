import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">

      {/* Hero */}
      <div className="hero">
        <div className="hero-label mono">The legacy of redlining on transit in St. Louis</div>
        <h1 className="hero-title">
          Redlined<br />& Left <span className="accent">Behind</span>
        </h1>
      </div>

      {/* Project Mission */}
      <div className="mission">
        <p className="mono mission-label">Project Mission</p>
        <p className="mission-text">
          In the 1930s, federal surveyors colored St. Louis neighborhoods red - marking 
          them as "hazardous" for investment. Nearly a century later, those same neighborhoods 
          have the worst bus coverage, the longest commutes, and the least access to jobs in 
          the entire region. This project argues that the connection is not coincidental - it 
          is direct, traceable, and ongoing. Using historical maps, transit data, and 
          equity research, this project makes the case that St. Louis's 
          transportation gaps cannot be understood without understanding the discriminatory 
          policies that created them.
        </p>
      </div>

      {/* Page Grid */}
      <div className="home-grid">
        <Link to="/history" className="grid-card red">
          <span className="card-num mono">01</span>
          <h2>The History</h2>
          <p>How HOLC redlining maps carved St. Louis into opportunity zones - and sacrifice zones. Explore the 1930s policies that set the city's geography of inequality in motion.</p>
        </Link>
        <Link to="/maps" className="grid-card dark">
          <span className="card-num mono">02</span>
          <h2>Interactive Map</h2>
          <p>See the 1930s redlining boundaries overlaid on today&apos;s Metro transit routes. Toggle between layers and see the gap for yourself.</p>
        </Link>
        <Link to="/transit-gaps" className="grid-card yellow">
          <span className="card-num mono">03</span>
          <h2>Transit Gaps</h2>
          <p>Where the buses don&apos;t run, and who gets left waiting. A look at present-day commute data, the MetroLink Green Line cancellation, and who bears the cost.</p>
        </Link>
        <Link to="/solutions" className="grid-card green">
          <span className="card-num mono">04</span>
          <h2>Solutions</h2>
          <p>What greenlining funds, equity transit corridors, and community-centered planning could look like - and why acknowledging history alone is not enough.</p>
        </Link>
      </div>

      {/* About / Context Section */}
      <div className="about-section">
        <div className="about-left">
          <p className="mono mission-label">What is Redlining?</p>
          <h2>A Policy. A Map. A Lasting Wound.</h2>
        </div>
        <div className="about-right">
          <p>
            Redlining was a 1930s federal policy that graded neighborhoods from "best" to
            "hazardous." Those grades controlled access to loans and investment, and Black
            neighborhoods were consistently marked as high risk.
          </p>
          <p style={{ marginTop: '16px' }}>
            In St. Louis, those choices still shape segregation, disinvestment, and transit
            access. This project traces that impact from the 1930s to today.
          </p>
          <Link to="/history" className="cta-btn" style={{ marginTop: '28px', display: 'inline-block' }}>
            Read the History →
          </Link>
        </div>
      </div>

    </div>
  );
}
