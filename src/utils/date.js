const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export function parseDate(str) {
  const [m, d, y] = str.split('/').map(Number)
  return new Date(y, m - 1, d)
}

export function dateBadge(str) {
  const d = parseDate(str)
  return { month: MONTHS[d.getMonth()], day: d.getDate() }
}

export function formatDateLabel(str) {
  const d = parseDate(str)
  return `${MONTHS[d.getMonth()].toUpperCase()} ${d.getDate()}, ${d.getFullYear()}`
}

export function formatDateOption(str) {
  const d = parseDate(str)
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}
