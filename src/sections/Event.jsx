import { useParams, useSearchParams } from "react-router-dom"

export function Event() {
    const params = useParams()
    const [searchParams, setSeatchParams] = useSearchParams()

    const title = searchParams.get("title")
    const date = searchParams.get("date")
    const startingHour = searchParams.get("startingHour")
    const endingHour = searchParams.get("endingHour")
    const creator = searchParams.get("creator")

    return (
        <>
            <ul>
                <li>id: {params.id}</li>
                <li>title: {title}</li>
                <li>date: {date}</li>
                <li>hora de inicio: {startingHour}</li>
                <li>termina a las: {endingHour}</li>
                <li>creado por: {creator}</li>
            </ul>
        </>
    )
}