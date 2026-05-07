import { Link } from 'react-router-dom';

const conditions = [
  { label: 'Shelter', value: 'Most stops lack shelters or benches', icon: '🚏' },
  { label: 'Safety', value: 'Users report feeling unsafe at night; security presence is far lower than at MetroLink stations', icon: '🔦' },
  { label: 'Frequency', value: 'Service runs on hourly schedules, especially evenings and weekends', icon: '🕐' },
  { label: 'Infrastructure', value: 'Sidewalk and road conditions around stops reflect decades of disinvestment', icon: '🛤️' },
];

export default function TransitGaps() {
  return (
    <div className="page">
      <p className="mono" style={{ color: 'var(--red)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
        02 Transit Gaps
      </p>
      <h1 className="page-title">Where the Buses Don&apos;t Run</h1>
      <p style={{ color: 'var(--gray)', fontStyle: 'italic', marginBottom: '40px' }}>
        The present-day consequences of a century of disinvestment.
      </p>

      <div className="section">
        <h2>Longer Waits, Longer Commutes</h2>
        <p>
          The City of St. Louis equity indicators show stark racial disparities in commuting burden.
          Black workers in St. Louis have a 22% longer mean commute time than white workers, with 
          a disparity ratio of 1.22 - meaning for every minute a white worker spends commuting, 
          a Black worker spends 1.22 minutes.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>2</Link></sup> These are not random gaps. They map directly 
          onto the same neighborhoods graded &quot;hazardous&quot; in the 1930s and left without reliable 
          transit investment ever since.
        </p>

        {/* Bus stop conditions grid */}
        <div style={{ margin: '36px 0' }}>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '16px' }}>
            Conditions at North St. Louis Bus Stops
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: '#111' }}>
            {conditions.map((c, i) => (
              <div key={i} style={{
                background: 'var(--cream)',
                padding: '24px',
                borderTop: '3px solid #111',
              }}>
                <p style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{c.icon}</p>
                <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--red)', marginBottom: '6px' }}>{c.label}</p>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--dark)' }}>{c.value}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: 'var(--gray)', marginTop: '8px' }}>
            Source: Trailnet, Connecting St. Louis Streets Recommendations; Metro Transit STL rider reports.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>9</Link></sup>
          </p>
        </div>

      </div>

      {/* Economic Barriers Section */}
      <div className="section">
        <h2>A Barrier to Economic Mobility</h2>
        <p>
          Transit inequity is not just an inconvenience - it is an economic barrier. Residents of 
          North St. Louis are disproportionately transit-dependent, meaning they rely on buses as 
          their primary or only way to get to work. When that service is infrequent, unreliable, 
          or simply absent, holding a stable job becomes significantly harder.
        </p>
        <p style={{ marginTop: '20px' }}>
          This problem is made worse by where jobs have gone. The Brookings Institution found that 
          St. Louis experienced a 15% decline in job proximity between 2000 and 2012, one of the 
          largest drops among major American cities, as employment shifted further into the 
          suburbs.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>7</Link></sup> Jobs moved outward, but transit did not follow. The result is what 
          researchers call spatial mismatch - formerly redlined neighborhoods are now physically 
          disconnected from the economic opportunities that could help residents build the wealth 
          that redlining originally denied them.
        </p>

        {/* Callout block */}
        <div style={{
          background: '#111',
          color: '#F5F0E8',
          padding: '32px',
          margin: '36px 0',
          borderLeft: '6px solid #F4A836',
        }}>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F4A836', marginBottom: '12px' }}>
            The Compounding Effect
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#E8E3DA' }}>
            Redlining denied generational wealth. Poor transit denies the ability to build it. 
            These are not separate problems - they are the same problem, ninety years apart.
          </p>
        </div>
      </div>

      <div className="section" style={{ marginTop: 0 }}>
        <div className="stat-block" style={{ marginTop: '0' }}>
          <div className="number">$1.1B</div>
          <p>
            Estimated cost of the MetroLink Green Line before cancellation in 2025, despite the line&apos;s
            potential to connect underserved North and South Side communities.<sup><Link to="/references" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>8</Link></sup>
          </p>
        </div>

      </div>

      <div className="section">
        <h2>The MetroLink Green Line Cancellation</h2>
        <p>
          In October 2025, the planned MetroLink Green Line was cancelled. The cancellation continued
          a long pattern where high-need corridors wait while service alternatives are delayed,
          reduced, or reframed as lower-cost substitutes.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>8</Link></sup>
          This is exactly how historical inequality gets reproduced through modern planning choices.
        </p>

        <div style={{ margin: '36px 0', paddingLeft: '8px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '18px', top: 0, bottom: 0, width: '2px', background: '#E8E3DA' }} />
          {[
            { year: '2021', text: 'Regional transit reporting highlights expansion ambitions even as bus service pressures continue.', color: '#2E7D5E', ref: 6 },
            { year: '2025', text: 'Green Line cancelled; bus-based alternatives discussed in place of rail buildout.', color: '#C0392B', ref: 8 },
          ].map((item) => (
            <div key={item.year} style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: item.color,
                  flexShrink: 0,
                  border: '3px solid var(--cream)',
                  boxShadow: `0 0 0 2px ${item.color}`,
                  marginTop: '2px',
                }}
              />
              <div>
                <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.8rem', color: item.color, fontWeight: 500, marginBottom: '4px' }}>
                  {item.year}
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {item.text}
                  <sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>{item.ref}</Link></sup>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Rail vs. Bus: Who Gets Served?</h2>
        <p>
          The East-West Gateway equity assessment documents uneven access across the St. Louis region,
          including areas with weaker service frequency and reduced job access by transit.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>3</Link></sup>
          Those patterns overlap with neighborhoods shaped by redlining-era disinvestment.
        </p>
        <p style={{ marginTop: '20px' }}>
          The result is a compounded disadvantage: communities that were denied investment in housing
          and infrastructure are also more likely to experience lower-quality transit access today.
          Repair requires explicit equity criteria in funding, service design, and project delivery.
        </p>

        <div
          style={{
            borderLeft: '4px solid #C0392B',
            paddingLeft: '28px',
            margin: '40px 0',
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            lineHeight: 1.7,
          }}
        >
          &quot;The challenge of achieving transit equity is the challenge of addressing the racism embedded in present-day planning processes.&quot;
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem', fontStyle: 'normal', color: 'var(--gray)', marginTop: '10px' }}>
            Christof Spieler, Urban Edge, Kinder Institute, 2018
          </p>
        </div>
      </div>

      <Link to="/map" style={{ textDecoration: 'none' }}>
        <div style={{
          background: '#1A3A5C', color: '#F5F0E8', padding: '48px', marginTop: '60px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '24px', borderLeft: '6px solid #F4A836', cursor: 'pointer', transition: 'opacity 0.2s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          <div>
            <p style={{ fontFamily: 'IBM Plex Mono', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F4A836', marginBottom: '10px' }}>
              Next: 03 Interactive Map
            </p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '12px' }}>
              See it for yourself.
            </h2>
            <p style={{ color: '#9A9A8A', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.7 }}>
              Compare historical redlining with present-day transit patterns and explore where access
              remains most unequal.
            </p>
          </div>
          <div style={{ fontSize: '3rem', color: '#F4A836', flexShrink: 0 }}>→</div>
        </div>
      </Link>
    </div>
  );
}
