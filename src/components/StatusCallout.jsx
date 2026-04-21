export default function StatusCallout({ status }) {
  if (status === 'warranty') {
    return (
      <div className="warranty-note">
        ★ This unit was serviced under manufacturer warranty — no charge to customer.
      </div>
    )
  }
  if (status === 'nwf') {
    return (
      <div className="nwf-note">
        ⚠ Nothing wrong was found during inspection (NWF). Unit returned as received.
      </div>
    )
  }
  return null
}
