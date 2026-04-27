import { Link } from 'react-router-dom';

export default function History() {
  return (
    <div className="page">
      <p className="mono" style={{ color: 'var(--red)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>01 The History</p>
      <h1 className="page-title">How St. Louis Was Divided</h1>
      <p style={{ color: 'var(--gray)', fontStyle: 'italic', marginBottom: '40px' }}>The 1930s decisions that still shape who gets a bus today.</p>

      <div className="section">
        <h2>What Was Redlining?</h2>
        <p>
          In the 1930s, the federal Home Owners' Loan Corporation (HOLC) sent surveyors into cities 
          across America to grade neighborhoods on a color-coded scale: green for "best," blue for 
          "still desirable," yellow for "declining," and red for "hazardous."<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>1</Link></sup> The grades 
          determined whether residents could access mortgage loans and investment. In practice, 
          "hazardous" almost always meant Black.
        </p>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/O5FBJyqfoLM"
            title="Redlining Explained"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <p style={{ fontSize: '0.8rem', fontFamily: 'IBM Plex Mono', color: 'var(--gray)' }}>
          ↑ Background: How HOLC redlining maps worked across American cities.
        </p>
      </div>

      <div className="section">
        <h2>St. Louis Specifically</h2>
        <p>
          St. Louis is one of the most segregated cities in the United States, and its HOLC maps 
          show exactly why.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>2</Link></sup> Neighborhoods like The Ville, Penrose, and much of North St. Louis 
          were graded "hazardous": not because of building quality, but because of who lived there. 
          Those grades cut off entire communities from the investment that built the American middle class.
        </p>

        <div className="stat-block">
          <div className="number">15%</div>
          <p>Decline in job proximity experienced by St. Louis from 2000–2012, one of the largest among major U.S. cities, as employment shifted further into the suburbs.<sup><Link to="/references" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>3</Link></sup></p>
        </div>

        <p>
          The Washington University report <em>Segregation in St. Louis: Dismantling the Divide</em> 
          documents how redlining, racial covenants, and exclusionary zoning worked together to 
          concentrate poverty in specific ZIP codes that remain disinvested today.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>4</Link></sup> The 
          geography didn't happen by accident. It was engineered.
        </p>
      </div>

      <div className="section">
        <h2>From Housing to Transit</h2>
        <p>
          The connection between housing discrimination and transit access is direct and traceable. 
          When neighborhoods are denied investment, they lose political power. When they lose 
          political power, they lose infrastructure. Prener's demographic study of St. Louis using 
          census data from 1940 to 2018 shows how patterns of racial segregation created by mid-20th 
          century housing policy continue to define the city's spatial geography today.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>5</Link></sup>
        </p>
        <p style={{ marginTop: '20px' }}>
          The result is what researchers call <strong>spatial mismatch</strong>: formerly redlined 
          neighborhoods are physically disconnected from the job centers, hospitals, and schools 
          that opportunity requires. Public transit was supposed to bridge that gap. Instead, it 
          often mirrors it.
        </p>
      </div>

      {/* CTA to Transit Gaps */}
      <Link to="/transit-gaps" style={{ textDecoration: 'none' }}>
        <div style={{
          background: '#111111',
          backgroundImage: "linear-gradient(rgba(17, 17, 17, 0.88), rgba(17, 17, 17, 0.9)), url('/images/metrolink-map.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#F5F0E8',
          padding: '48px',
          marginTop: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          borderLeft: '6px solid #C0392B',
          transition: 'opacity 0.2s',
          cursor: 'pointer',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <div>
            <p style={{ fontFamily: 'IBM Plex Mono', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C0392B', marginBottom: '10px' }}>
              Next: 02 Transit Gaps
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
              So where do the buses not run?
            </h2>
            <p style={{ color: '#9A9A8A', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.7 }}>
              The history set the stage. Now see how it plays out in real commute times, 
              cancelled rail lines, and the neighborhoods still waiting for a bus that runs on time.
            </p>
          </div>
          <div style={{ fontSize: '3rem', color: '#C0392B', flexShrink: 0 }}>→</div>
        </div>
      </Link>

    </div>
  );
}
