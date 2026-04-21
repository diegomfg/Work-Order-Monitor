export default function StatRow({ stats }) {
  return (
    <div className="stat-row">
      <div className="stat-pill">
        <div className="dot dot-green" />
        <strong>{stats.completed}</strong> Completed
      </div>
      <div className="stat-pill">
        <div className="dot dot-purple" />
        <strong>{stats.warranty}</strong> Warranty
      </div>
      <div className="stat-pill">
        <div className="dot dot-amber" />
        <strong>{stats.nwf}</strong> NWF
      </div>
      {stats.review > 0 && (
        <div className="stat-pill">
          <div className="dot dot-red" />
          <strong>{stats.review}</strong> Needs Review
        </div>
      )}
    </div>
  )
}
