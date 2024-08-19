import { useParams } from "react-router-dom"

export function Trabajo() {
    const { numero } = useParams()
    console.log(numero)

    return (
        <>
            <h1>Trabajo N° {numero}</h1>
        </>
    )
}