export default function Hero({ count }) {
  return (
    <div className="hero">
      <div className="hero-icon">
        <svg viewBox="0 0 24 24">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      </div>
      <div className="hero-text">
        <h2>Your equipment, tracked.</h2>
        <p>Real-time status on every unit we have in service. No need to call — check here anytime.</p>
      </div>
      <div className="hero-count">
        {count}
        <span>orders</span>
      </div>
    </div>
  )
}
