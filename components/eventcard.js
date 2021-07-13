import cardStyle from '../styles/events.module.css'

export default function EventCard({ eventData }) {
    
    return (
        <div className={cardStyle.eventCard}>
            <h2>Titulo {eventData.title}</h2>
            <p>data</p>
            <p>Local</p>
            <hr/>
            <p>content</p>
            <hr />
            <p>RSVP and buttons</p>
        </div>
    )
}