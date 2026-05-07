import { useMemo, useState } from 'react';
import { CircleMarker, GeoJSON, MapContainer, Pane, TileLayer, Tooltip } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

const stLouisCenter = [38.627, -90.199];
const stLouisBounds = [
  [38.50163, -90.40904],
  [38.7679, -90.13236],
];
const holcUrl = 'https://s3.amazonaws.com/holc/tiles/MO/StLouis/1937/{z}/{x}/{y}.png';

const transitGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { route: 'Existing MetroLink corridor', mode: 'rail' },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-90.29, 38.64],
          [-90.255, 38.635],
          [-90.23, 38.63],
          [-90.205, 38.625],
          [-90.18, 38.62],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { route: 'Former Green Line / possible BRT corridor', mode: 'bus' },
      geometry: {
        type: 'LineString',
        coordinates: [
          [-90.235, 38.67],
          [-90.232, 38.655],
          [-90.229, 38.64],
          [-90.225, 38.62],
          [-90.222, 38.6],
        ],
      },
    },
  ],
};

const dataPoints = [
  {
    id: 1,
    name: 'North St. Louis',
    position: [38.665, -90.224],
    color: '#C94C4C',
    shortLabel: 'High transit dependence',
    metric: '3x / 4x',
    metricLabel: 'vehicle access + transit-use gap',
    citation: 16,
    description:
      'City equity data reports that workers in majority-Black census tracts are three times more likely than workers in majority-white tracts to live in households without a vehicle, and four times more likely to commute by public transit. This is why North St. Louis cannot be judged only by whether a bus route exists nearby.',
    whyItMatters:
      'The equity issue is not only route coverage. A neighborhood with more transit-dependent residents needs frequent, reliable service because long waits and transfers create a larger burden for people who have fewer alternatives.',
  },
  {
    id: 2,
    name: 'Majority-Black Census Tracts',
    position: [38.642, -90.222],
    color: '#9B2D2D',
    shortLabel: 'Frequency equity gap',
    metric: '+5,045',
    metricLabel: 'additional annual trips per tract',
    citation: 16,
    description:
      'The City of St. Louis Equity Indicators page says that if transit frequency were equitable, majority-Black census tracts would receive 5,045 more transit service trips per tract per year. This gives the map a measurable transit-frequency claim instead of only a visual comparison.',
    whyItMatters:
      'This supports the project argument that transit inequality is connected to service quality. Even when total service appears similar by race, equitable service should account for who relies on transit most.',
  },
  {
    id: 3,
    name: 'Citywide Fixed-Route Service',
    position: [38.612, -90.21],
    color: '#F4A836',
    shortLabel: 'Average wait burden',
    metric: '34 min',
    metricLabel: 'average wait between trips',
    citation: 16,
    description:
      'The City of St. Louis reports that weekday fixed-route stops receive about 35 trips per day citywide, which equals an average wait time of about 34 minutes between trips during operating hours.',
    whyItMatters:
      'A 34-minute average wait helps explain why simply drawing bus lines on a map can be misleading. A line may exist, but if the wait is long, the service may still fail residents who need dependable daily transportation.',
  },
  {
    id: 4,
    name: 'Metro Bus Frequency Pattern',
    position: [38.586, -90.246],
    color: '#1A3A5C',
    shortLabel: 'Bus quality matters',
    metric: '>50%',
    metricLabel: 'routes at 30+ minute frequency',
    citation: 18,
    description:
      'A Missouri first-last mile transportation report states that St. Louis Metro bus route frequencies vary across the service area, with just over half of routes operating every 30 minutes or more and the remaining routes operating every 15 to 30 minutes.',
    whyItMatters:
      'This is the kind of data that makes the map more informative. It shifts the viewer from "where are the lines?" to "how useful is the service?" Frequency determines wait time, missed connections, and whether transit can realistically connect residents to jobs and services.',
  },
];

function transitStyle(feature) {
  return {
    color: feature?.properties?.mode === 'rail' ? '#1A3A5C' : '#F4A836',
    weight: feature?.properties?.mode === 'rail' ? 5 : 4,
    opacity: 0.9,
    dashArray: feature?.properties?.mode === 'bus' ? '8 6' : undefined,
  };
}

const controlButtonStyle = (active) => ({
  border: '2px solid var(--dark)',
  background: active ? 'var(--dark)' : 'rgba(255,255,255,0.75)',
  color: active ? 'white' : 'var(--dark)',
  padding: '10px 12px',
  fontFamily: 'monospace',
  fontSize: '0.78rem',
  cursor: 'pointer',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
});

export default function MapPage() {
  const [showRedlining, setShowRedlining] = useState(true);
  const [showTransit, setShowTransit] = useState(true);
  const [showDataPoints, setShowDataPoints] = useState(true);
  const [redliningOpacity, setRedliningOpacity] = useState(58);
  const [activePointId, setActivePointId] = useState(1);

  const activePoint = useMemo(
    () => dataPoints.find((point) => point.id === activePointId) || dataPoints[0],
    [activePointId]
  );

  return (
    <div className="page">
      <p className="mono" style={{ color: 'var(--red)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
        03 Interactive Map
      </p>
      <h1 className="page-title">Redlining and the Transit Gap</h1>
      <p style={{ color: 'var(--gray)', fontStyle: 'italic', marginBottom: '24px' }}>
        Compare the 1937 HOLC map with today&apos;s transit system and see how historic disinvestment still shapes access.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(260px, 0.8fr) minmax(320px, 1.5fr)',
        gap: '22px',
        alignItems: 'stretch',
      }}>
        <aside style={{
          border: '2px solid var(--dark)',
          padding: '18px',
          background: 'rgba(255,255,255,0.6)',
        }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.45rem', marginBottom: '10px' }}>
            How to Read This Map
          </h2>
          <p style={{ color: 'var(--gray)', marginBottom: '18px' }}>
            Toggle layers to compare redlining with today&apos;s transit. The circles mark sourced transit-equity statistics, not exact neighborhood borders.
          </p>

          <div style={{ display: 'grid', gap: '10px', marginBottom: '18px' }}>
            <button type="button" style={controlButtonStyle(showRedlining)} onClick={() => setShowRedlining(!showRedlining)}>
              {showRedlining ? 'Hide' : 'Show'} Redlining Layer
            </button>
            <button type="button" style={controlButtonStyle(showTransit)} onClick={() => setShowTransit(!showTransit)}>
              {showTransit ? 'Hide' : 'Show'} Transit Corridors
            </button>
            <button type="button" style={controlButtonStyle(showDataPoints)} onClick={() => setShowDataPoints(!showDataPoints)}>
              {showDataPoints ? 'Hide' : 'Show'} Transit Data Markers
            </button>
          </div>

          <label className="mono" style={{ display: 'grid', gap: '8px', fontSize: '0.78rem', marginBottom: '22px' }}>
            Redlining Opacity: {redliningOpacity}%
            <input
              type="range"
              min="20"
              max="85"
              value={redliningOpacity}
              onChange={(event) => setRedliningOpacity(Number(event.target.value))}
            />
          </label>

          <div style={{ borderTop: '2px solid var(--dark)', paddingTop: '16px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '10px' }}>Map Key</h3>
            <p style={{ marginBottom: '8px' }}>
              <span style={{ color: '#C94C4C', fontWeight: 'bold' }}>HOLC colors</span> = green for
              &nbsp;&quot;best,&quot; blue for &quot;still desirable,&quot; yellow for &quot;declining,&quot; and red for
              &nbsp;&quot;hazardous.&quot;
            </p>
            <p style={{ marginBottom: '8px' }}><span style={{ color: '#1A3A5C', fontWeight: 'bold' }}>Blue line</span> = existing MetroLink rail corridor.</p>
            <p style={{ marginBottom: '8px' }}><span style={{ color: '#F4A836', fontWeight: 'bold' }}>Dashed yellow line</span> = proposed Green Line (now cancelled) possible metro corridor.</p>
            <p><span style={{ color: '#C94C4C', fontWeight: 'bold' }}>Numbered circles</span> = sourced transit-service data markers.</p>
          </div>
        </aside>

        <div style={{ position: 'relative' }}>
          <MapContainer center={stLouisCenter} zoom={12} className="map-container" scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution="&copy; OpenStreetMap contributors &copy; CARTO"
            />

            {showRedlining && (
              <Pane name="redlining" style={{ zIndex: 420 }}>
                <TileLayer
                  url={holcUrl}
                  bounds={stLouisBounds}
                  opacity={redliningOpacity / 100}
                  minZoom={7}
                  maxNativeZoom={15}
                  noWrap
                />
              </Pane>
            )}

            {showTransit && (
              <Pane name="transit" style={{ zIndex: 430 }}>
                <GeoJSON data={transitGeoJSON} style={transitStyle} />
              </Pane>
            )}

            {showDataPoints && (
              <Pane name="data-points" style={{ zIndex: 440 }}>
                {dataPoints.map((point) => {
                  const isActive = point.id === activePointId;
                  return (
                    <CircleMarker
                      key={point.id}
                      center={point.position}
                      radius={isActive ? 26 : 19}
                      eventHandlers={{ click: () => setActivePointId(point.id) }}
                      pathOptions={{
                        color: point.color,
                        fillColor: point.color,
                        fillOpacity: isActive ? 0.36 : 0.2,
                        weight: isActive ? 4 : 3,
                      }}
                    >
                      <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                        <strong>{point.name}</strong><br />
                        {point.metric} - {point.shortLabel}
                      </Tooltip>
                    </CircleMarker>
                  );
                })}
              </Pane>
            )}
          </MapContainer>
          <div style={{
            position: 'absolute',
            left: '18px',
            bottom: '18px',
            zIndex: 500,
            maxWidth: '340px',
            background: 'rgba(255,255,255,0.94)',
            border: '2px solid var(--dark)',
            padding: '14px',
            boxShadow: '6px 6px 0 rgba(0,0,0,0.12)',
          }}>
            <p className="mono" style={{ color: activePoint.color, fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '6px' }}>
              Selected Data Marker
            </p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '6px' }}>{activePoint.name}</h3>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px' }}>{activePoint.metric}</p>
            <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>{activePoint.metricLabel}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>What the Circles Are</h2>
        <p>
          Each circle pairs an approximate location with one sourced statistic about transit dependence, service frequency, or wait times.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px', marginTop: '20px' }}>
          {dataPoints.map((point) => (
            <button
              type="button"
              key={point.id}
              onClick={() => setActivePointId(point.id)}
              style={{
                textAlign: 'left',
                border: point.id === activePointId ? `3px solid ${point.color}` : '2px solid var(--dark)',
                background: point.id === activePointId ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.45)',
                padding: '16px',
                cursor: 'pointer',
              }}
            >
              <p className="mono" style={{ color: point.color, fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                {point.shortLabel}
              </p>
              <h3 style={{ marginBottom: '8px', fontFamily: 'Playfair Display, serif' }}>{point.name}</h3>
              <p style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '6px' }}>{point.metric}</p>
              <p style={{ color: 'var(--gray)' }}>{point.metricLabel}<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>{point.citation}</Link></sup></p>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>What This Marker Shows</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginTop: '20px',
        }}>
          <div style={{ border: '2px solid var(--dark)', padding: '18px', background: 'rgba(255,255,255,0.55)' }}>
            <p className="mono" style={{ color: activePoint.color, fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '8px' }}>
              Why it matters
            </p>
            <p style={{ color: 'var(--gray)' }}>{activePoint.whyItMatters}</p>
          </div>
          <div style={{ border: '2px solid var(--dark)', padding: '18px', background: 'rgba(255,255,255,0.55)' }}>
            <p className="mono" style={{ color: 'var(--red)', fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '8px' }}>
              Core takeaway
            </p>
            <p style={{ color: 'var(--gray)' }}>
              This map argues that transit inequity is about service quality, not just whether a line appears on the map.
            </p>
          </div>
          <div style={{ border: '2px solid var(--dark)', padding: '18px', background: 'rgba(255,255,255,0.55)' }}>
            <p className="mono" style={{ color: 'var(--blue)', fontSize: '0.72rem', textTransform: 'uppercase', marginBottom: '8px' }}>
              Next improvement
            </p>
            <p style={{ color: 'var(--gray)' }}>
              A future version could shade neighborhoods by measured transit access using AllTransit-style scores.<sup><Link to="/references" style={{ color: 'var(--red)', textDecoration: 'none' }}>17</Link></sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
