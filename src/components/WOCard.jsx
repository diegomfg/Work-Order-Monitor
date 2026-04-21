import { useState } from 'react'
import { dateBadge } from '../utils/date'
import { STATUS_DOT, STATUS_BADGE, STATUS_LABEL, TYPE_TAG_CLASS, TYPE_LABEL } from '../utils/status'
import StatusCallout from './StatusCallout'

export default function WOCard({ wo }) {
  const [open, setOpen] = useState(false)
  const badge = dateBadge(wo.inDate)

  return (
    <div className={`wo-card${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="wo-summary">
        <div className={`wo-status-dot ${STATUS_DOT[wo.status] || 's-completed'}`} />

        <div className="wo-main">
          <div className="wo-top-row">
            <span className="wo-number">WO #{wo.id}</span>
            <span className="wo-customer">{wo.customer}</span>
          </div>
          <div className="wo-bottom-row">
            <span className="wo-equip">{wo.mfr} · {wo.desc}</span>
            <span className={`type-tag ${TYPE_TAG_CLASS[wo.type] || 'tag-other'}`}>
              {TYPE_LABEL[wo.type] || 'OTHER'}
            </span>
          </div>
        </div>

        <div className="wo-right">
          <div className="wo-date-badge">
            <div className="date-month">{badge.month}</div>
            <div className="date-day">{badge.day}</div>
          </div>
          <div className={`status-badge ${STATUS_BADGE[wo.status] || 'sb-completed'}`}>
            {STATUS_LABEL[wo.status] || wo.status}
          </div>
        </div>

        <div className="wo-chevron">▼</div>
      </div>

      {open && (
        <div className="wo-detail">
          <div className="detail-grid">
            <div>
              <div className="detail-label">Equipment</div>
              <div className="detail-value">{wo.mfr} {wo.model}</div>
            </div>
            <div>
              <div className="detail-label">Description</div>
              <div className="detail-value">{wo.desc}</div>
            </div>
            <div>
              <div className="detail-label">Serial / VIN</div>
              <div className="detail-value">{wo.serial}</div>
            </div>
            <div>
              <div className="detail-label">Tag #</div>
              <div className="detail-value">{wo.tag}</div>
            </div>
            <div>
              <div className="detail-label">Date In</div>
              <div className="detail-value">{wo.inDate}</div>
            </div>
            <div>
              <div className="detail-label">Completed</div>
              <div className="detail-value">{wo.complDate}</div>
            </div>
            <div>
              <div className="detail-label">Technician</div>
              <div className="detail-value">
                <div className="tech-chip">
                  <div className="tech-avatar">{wo.tech}</div>
                  {wo.tech}
                </div>
              </div>
            </div>
          </div>

          <StatusCallout status={wo.status} />

          <div className="comments-block">
            <strong>Technician Notes</strong>
            {wo.comments}
          </div>
        </div>
      )}
    </div>
  )
}
