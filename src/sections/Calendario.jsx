import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import { Calendar } from "../components/Calendar";

export function Calendario () {
    const { search } = useLocation()
    const params = Object.fromEntries(new URLSearchParams(search));
    console.log(params)

    const [estado1, setEstado1] = useState(0)

    useEffect(() => {
        console.log("se actualizo el estado 1")
    }, [estado1])

    return (
        <>
            <button onClick={() => { setEstado1(estado1+10) }}>{estado1}</button>
            <h2>Este es un calendario</h2>
            <Calendar />
        </>
    )
}