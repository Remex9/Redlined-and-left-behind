import { Link } from 'react-router-dom';

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
          The City of St. Louis equity indicators show major differences in commuting burden across
          neighborhoods.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>2</Link></sup>
          Residents in North St. Louis and other historically disinvested areas often face longer
          trips and weaker access to regional opportunity than residents in wealthier corridors.
        </p>

        <div className="stat-block" style={{ marginTop: '32px' }}>
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
        <div
          style={{
            background: '#1A3A5C',
            color: '#F5F0E8',
            padding: '48px',
            marginTop: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            borderLeft: '6px solid #F4A836',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
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
