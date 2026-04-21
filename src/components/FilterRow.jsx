import { formatDateOption, parseDate } from '../utils/date'

export default function FilterRow({ filters, customers, dates, onChange }) {
  return (
    <div className="filter-row">
      <div className="search-wrap">
        <svg className="search-icon" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search customer, WO #, equipment…"
          value={filters.search}
          onChange={e => onChange('search', e.target.value)}
        />
      </div>

      <select value={filters.customer} onChange={e => onChange('customer', e.target.value)}>
        <option value="">All customers</option>
        {customers.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={filters.status} onChange={e => onChange('status', e.target.value)}>
        <option value="">All statuses</option>
        <option value="completed">Completed</option>
        <option value="warranty">Under warranty</option>
        <option value="nwf">Nothing wrong found</option>
        <option value="review">Needs review</option>
      </select>

      <select value={filters.type} onChange={e => onChange('type', e.target.value)}>
        <option value="">All equipment</option>
        <option value="lawn">Lawn equipment</option>
        <option value="2cycle">2-Cycle / Small</option>
        <option value="other">Other</option>
      </select>

      <select value={filters.date} onChange={e => onChange('date', e.target.value)}>
        <option value="">All dates</option>
        {dates.map(d => (
          <option key={d} value={d}>{formatDateOption(d)}</option>
        ))}
      </select>
    </div>
  )
}
