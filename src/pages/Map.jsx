export default function MapPage() {
  return (
    <div className="page page-empty">
      <div className="empty-content">
        <p className="mono" style={{ color: 'var(--red)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>
          03 - Interactive Map
        </p>
        <p style={{ color: 'var(--gray)', fontWeight: 700 }}>
          Compare historic HOLC redlining boundaries with current transit routes on an interactive map, and explore overlaps to see where infrastructure access has lagged over time.
        </p>
      </div>
    </div>
  );
}
