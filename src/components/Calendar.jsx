import './Calendar.css'
import { Link } from 'react-router-dom'

function Event({ id, title, date, starting_hour, ending_hour, color = "lightgray", creator, display }) {
    
    
    return (
        <>
            <Link className="link" to={`/event/${id}?title=${title}&date=${date}&startingHour=${starting_hour}&endingHour=${ending_hour}&creator=${creator}`}>
                <div className={"event-" + display} style={{ backgroundColor: color }}>
                    {title.slice(0, 10) + (title.length > 10 ? "..." : "")}
                </div>
            </Link>
        </>
    )
}

export function Calendar() {
    return (
        <>
            <table className="calendar-table">
                <tr>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sabado</th>
                    <th>Domingo</th>
                </tr>
                <tr>
                    <td> 
                    <Event 
                    id="1"
                    title="Clase con Lucio" 
                    date="26/08/2024" 
                    starting_hour="14:00"
                    ending_hour="17:00"
                    color="yellow"
                    creator="Bruno"
                    display="month" />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </>
    )
}