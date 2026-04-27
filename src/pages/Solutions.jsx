import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Greenlining Funds',
    desc: 'Direct public investment into formerly redlined corridors to reverse decades of deliberate disinvestment and improve access to jobs, services, and housing stability.',
    color: 'var(--green)',
  },
  {
    title: 'Equity Transit Corridors',
    desc: 'Prioritize high-frequency routes through neighborhoods with long commute times and weak regional access, instead of only reinforcing already well-served corridors.',
    color: 'var(--blue)',
  },
  {
    title: 'Community-Centered Planning',
    desc: 'Move residents from consultation to decision-making power in route design, service priorities, and investment sequencing so policy reflects lived mobility needs.',
    color: 'var(--red)',
  },
];

export default function Solutions() {
  return (
    <div className="page">
      <p className="mono" style={{ color: 'var(--red)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
        04 Solutions
      </p>
      <h1 className="page-title">A Path Forward</h1>
      <p style={{ color: 'var(--gray)', fontStyle: 'italic', marginBottom: '40px' }}>
        Acknowledging history is necessary, but policy design is what changes outcomes.
      </p>

      <div className="section">
        <h2>Why Recognition Is Not Enough</h2>
        <p>
          The Urban Institute&apos;s transportation equity research argues that acknowledging structural
          barriers is only the first step; outcomes improve when agencies adopt explicit equity goals
          in funding and service decisions<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>12</Link></sup>.
          Legal scholarship on transit decision-making also shows that ostensibly neutral choices can
          still produce racially unequal economic effects<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>11</Link></sup>.
        </p>
      </div>

      <div className="section">
        <h2>Three Interventions That Could Work</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '28px' }}>
          {solutions.map((item) => (
            <div
              key={item.title}
              style={{
                borderLeft: `6px solid ${item.color}`,
                paddingLeft: '24px',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>What Is Already Planned</h2>
        <p>
          Regional planning documents already include an equity framing and corridor-level priorities,
          including in Connected 2050<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>10</Link></sup>.
          The central challenge is implementation: translating policy language into reliable, funded,
          and frequent service in neighborhoods historically left behind.
        </p>

        <div className="stat-block" style={{ marginTop: '32px' }}>
          <p style={{ fontFamily: 'IBM Plex Mono', fontSize: '0.8rem', opacity: 0.6, marginBottom: '8px' }}>
            The core argument
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.6 }}>
            St. Louis transit inequity is not accidental. It is the long-term result of policy choices,
            and it will take equally deliberate policy to repair.
          </p>
        </div>
      </div>
    </div>
  );
}
