import { formatDateLabel } from '../utils/date'
import WOCard from './WOCard'

export default function DateGroup({ date, orders }) {
  const label = formatDateLabel(date)

  return (
    <div className="date-group">
      <div className="date-heading">
        <div className="date-pill">{label}</div>
        <div className="date-line" />
        <div className="date-count">{orders.length} order{orders.length !== 1 ? 's' : ''}</div>
      </div>
      {orders.map(wo => (
        <WOCard key={wo.id} wo={wo} />
      ))}
    </div>
  )
}
