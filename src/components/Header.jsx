export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo-mark">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C7 3 3 8 3 12c4.5-.8 7.5-3.5 9-7.5C13.5 8.5 16.5 11.2 21 12c0-4-4-9-9-9z" />
            <ellipse cx="12" cy="17" rx="5" ry="3" opacity="0.6" />
          </svg>
        </div>
        <div className="logo-text">ALL DADE <span>LAWNMOWERS</span></div>
        <div className="header-right">
          Service Portal<br />
          <span className="live-dot">●</span> Live
        </div>
      </div>
    </header>
  )
}
