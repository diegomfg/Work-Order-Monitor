import { useWorkOrders } from './hooks/useWorkOrders'
import Header from './components/Header'
import Hero from './components/Hero'
import StatRow from './components/StatRow'
import FilterRow from './components/FilterRow'
import DateGroup from './components/DateGroup'

export default function App() {
  const { total, filtered, grouped, stats, customers, dates, filters, setFilter } = useWorkOrders()

  return (
    <>
      <Header />

      <div className="page">
        <Hero count={filtered.length} />
        <StatRow stats={stats} />
        <FilterRow
          filters={filters}
          customers={customers}
          dates={dates}
          onChange={setFilter}
        />

        <div className="section-label">
          {filtered.length !== total
            ? `WORK ORDERS — ${filtered.length} of ${total}`
            : 'WORK ORDERS'}
        </div>

        <div>
          {grouped.length === 0 ? (
            <div className="empty">
              <svg viewBox="0 0 24 24" width="40" height="40" stroke="#555" fill="none" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <p>No work orders match your filters.</p>
            </div>
          ) : (
            grouped.map(({ date, orders }) => (
              <DateGroup key={date} date={date} orders={orders} />
            ))
          )}
        </div>
      </div>

      <footer>
        All Dade Lawnmowers &nbsp;·&nbsp; Service Portal &nbsp;·&nbsp; For service inquiries call us directly
      </footer>
    </>
  )
}
