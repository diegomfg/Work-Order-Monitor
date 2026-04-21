import { useState, useMemo } from 'react'
import { WOs } from '../data/workorders'
import { parseDate } from '../utils/date'

export function useWorkOrders() {
  const [filters, setFilters] = useState({
    search:   '',
    customer: '',
    status:   '',
    type:     '',
    date:     '',
  })

  const customers = useMemo(
    () => [...new Set(WOs.map(w => w.customer))].sort(),
    []
  )

  const dates = useMemo(
    () => [...new Set(WOs.map(w => w.inDate))].sort((a, b) => parseDate(b) - parseDate(a)),
    []
  )

  const filtered = useMemo(() => {
    const q = filters.search.toLowerCase().trim()
    return WOs.filter(w =>
      (!filters.customer || w.customer === filters.customer) &&
      (!filters.status   || w.status   === filters.status)   &&
      (!filters.type     || w.type     === filters.type)      &&
      (!filters.date     || w.inDate   === filters.date)      &&
      (!q ||
        w.customer.toLowerCase().includes(q) ||
        w.id.includes(q) ||
        w.mfr.toLowerCase().includes(q) ||
        w.model.toLowerCase().includes(q) ||
        w.desc.toLowerCase().includes(q) ||
        w.serial.toLowerCase().includes(q)
      )
    )
  }, [filters])

  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach(w => {
      if (!map[w.inDate]) map[w.inDate] = []
      map[w.inDate].push(w)
    })
    return Object.keys(map)
      .sort((a, b) => parseDate(b) - parseDate(a))
      .map(date => ({ date, orders: map[date] }))
  }, [filtered])

  const stats = useMemo(() => {
    const counts = { completed: 0, warranty: 0, nwf: 0, review: 0 }
    filtered.forEach(w => {
      if (w.status in counts) counts[w.status]++
    })
    return counts
  }, [filtered])

  const setFilter = (key, value) =>
    setFilters(prev => ({ ...prev, [key]: value }))

  return {
    total: WOs.length,
    filtered,
    grouped,
    stats,
    customers,
    dates,
    filters,
    setFilter,
  }
}
