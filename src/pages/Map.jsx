import { useState } from 'react';

export default function MapPage() {
  const [layer, setLayer] = useState('both');

  return (
    <div className="page">
      <p className="mono" style={{ color: 'var(--red)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
        03 Interactive Map
      </p>
      <h1 className="page-title">See the Connection</h1>
      <p style={{ color: 'var(--gray)', fontStyle: 'italic', marginBottom: '32px' }}>
        Toggle between 1930s HOLC redlining and current transit context.
        Final map overlay is in progress.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {[
          { id: 'redlining', label: '1930s Redlining' },
          { id: 'transit', label: 'Current Transit' },
          { id: 'both', label: 'Show Both' },
        ].map((btn) => (
          <button
            key={btn.id}
            type="button"
            onClick={() => setLayer(btn.id)}
            style={{
              padding: '10px 20px',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.8rem',
              border: '2px solid var(--dark)',
              background: layer === btn.id ? 'var(--dark)' : 'transparent',
              color: layer === btn.id ? 'var(--cream)' : 'var(--dark)',
              cursor: 'pointer',
              letterSpacing: '0.05em',
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div
        className="map-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1A3A5C',
          color: '#F5F0E8',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <p className="mono" style={{ fontSize: '0.85rem', opacity: 0.7 }}>
          Map overlay coming soon
        </p>
        <p style={{ fontSize: '0.75rem', opacity: 0.5, fontFamily: 'IBM Plex Mono' }}>
          Placeholder only - Current layer: {layer}
        </p>
      </div>

      <div className="section">
        <h2>How to Read This Map</h2>
        <p>
          The HOLC color grades - <span style={{ color: 'var(--green)', fontWeight: 'bold' }}>green (A)</span>,
          {' '}<span style={{ color: 'var(--blue)', fontWeight: 'bold' }}>blue (B)</span>,
          {' '}<span style={{ color: 'var(--yellow)', fontWeight: 'bold' }}>yellow (C)</span>, and
          {' '}<span style={{ color: 'var(--red)', fontWeight: 'bold' }}>red (D)</span> - were assigned
          in the 1930s based on racialized risk assumptions as much as physical conditions.<sup>1</sup>
          This map window is a placeholder while the final St. Louis overlay is finalized.
        </p>
      </div>

      <div className="footnotes">
        <p>[1] Mapping Inequality: Redlining in New Deal America. See Works Cited [4].</p>
      </div>
    </div>
  );
}
