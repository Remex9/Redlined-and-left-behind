import './References.css';

const refs = [
  {
    perspective: 'Perspective 1 - Redlining as Root Cause',
    sources: [
      {
        id: 1,
        citation: 'Alexander, Amerie. "Redlining and Its Modern Impact on St. Louis." Missouri Independent, 7 Feb. 2026. missouriindependent.com/2026/02/07/redlining-and-its-modern-impact-on-st-louis.',
      },
      {
        id: 2,
        citation: 'City of St. Louis. Commuting Time - Equity Indicators. City of St. Louis, 2016. www.stlouis-mo.gov/archives/resilience/equity/opportunity/neighborhoods/commuting-time.cfm',
      },
      {
        id: 3,
        citation: 'East-West Gateway Council of Governments. Transportation Equity Assessment Report for the St. Louis Region. East-West Gateway, Dec. 2022. www.ewgateway.org/wp-content/uploads/2023/02/Connected2050-EA-ExecSum-December-2022.pdf',
      },
      {
        id: 4,
        citation: '"Mapping Inequality: Redlining in New Deal America." Digital Scholarship Lab, University of Richmond. https://dsl.richmond.edu/panorama/redlining/',
      },
      {
        id: 5,
        citation: 'Prener, Christopher G. "Demographic Change, Segregation, and the Emergence of Peripheral Spaces in St. Louis, Missouri." Applied Geography, vol. 133, Aug. 2021. https://doi-org.ezp.slu.edu/10.1016/j.apgeog.2021.102472.',
      },
    ],
  },
  {
    perspective: 'Perspective 2 - Modern Planning Decisions',
    sources: [
      {
        id: 6,
        citation: 'Fenske, Sarah. "St. Louis Eyes MetroLink Expansion Even as Bus Service Contracts." St. Louis on the Air, St. Louis Public Radio, 1 Dec. 2021. www.stlpr.org/show/st-louis-on-the-air/2021-12-01/st-louis-eyes-metrolink-expansion-even-as-bus-service-contracts.',
      },
      {
        id: 7,
        citation: 'Kneebone, Elizabeth, and Natalie Holmes. "The Growing Distance between People and Jobs in Metropolitan America." Brookings Institution, Mar. 2015. www.brookings.edu/research/the-growing-distance-between-people-and-jobs-in-metropolitan-america/',
      },
      {
        id: 8,
        citation: 'Rosenbaum, Jason. "Bi-State Head Sees Bus Opportunity after Demise of MetroLink Green Line in St. Louis." St. Louis on the Air, St. Louis Public Radio, 6 Oct. 2025. www.stlpr.org/show/st-louis-on-the-air/2025-10-06/bi-state-taulby-roach-bus-rapid-transit-metrolink-green-line-st-louis.',
      },
    ],
  },
  {
    perspective: 'Perspective 3 - Equity-Focused Policy Interventions',
    sources: [
      {
        id: 9,
        citation: 'Cambria, Nicole, et al. Segregation in St. Louis: Dismantling the Divide. Washington University in St. Louis, 2018.',
      },
      {
        id: 10,
        citation: 'East-West Gateway Council of Governments. Connected 2050: Long-Range Transportation Plan. East-West Gateway Council of Governments. www.ewgateway.org/transportation-planning/long-range-transportation-plan/',
      },
      {
        id: 11,
        citation: 'McFarlane, Audrey G. "Black Transit: When Public Transportation Decision-Making Leads to Negative Economic Development." Iowa Law Review, vol. 106, no. 3, 2021, pp. 961-1020.',
      },
      {
        id: 12,
        citation: 'Urban Institute. Access to Opportunity through Equitable Transportation. Urban Institute, 2020. www.urban.org/research/publication/access-opportunity-through-equitable-transportation.',
      },
    ],
  },
];

export default function References() {
  return (
    <div className="page">
      <p className="mono" style={{ color: 'var(--red)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Works Cited</p>
      <h1 className="page-title">References</h1>
      <p style={{ color: 'var(--gray)', fontStyle: 'italic', marginBottom: '40px' }}>
        12 sources across three perspectives, organized by argument.
      </p>

      {refs.map((group, i) => (
        <div key={i} className="section">
          <h2>{group.perspective}</h2>
          <div className="ref-list">
            {group.sources.map((src) => (
              <div key={src.id} className="ref-item">
                <span className="ref-num mono">[{src.id}]</span>
                <p>{src.citation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
