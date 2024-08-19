import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Error404.css"

export function Error404() {
    const params = useParams()
    console.log(params["*"])

    return(
        <>
            <h1>ERROR 404.</h1>
            <h2>Page not found.</h2>
            <h3>La pagina {params["*"]} no existe</h3>
            <Link className="tagA" to="/">Volver a la pagina principal</Link>
        </>
    )
}