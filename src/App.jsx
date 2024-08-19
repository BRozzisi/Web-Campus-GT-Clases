import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PaginaPrincipal } from "./PaginaPrincipal"
import { About } from "./About"
import { Calendario } from "./Calendario"
import { Error404 } from "./eRROR404"
import { Trabajo } from "./Trabajo"

function App() {
  return (
    <>
      <BrowserRouter>
        <p>Barra de Navegacion</p>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}></Route>
          <Route path="/about/" element={<About />}></Route>
          <Route path="/calendario/" element={<Calendario />}></Route>
          <Route path="/trabajo/:numero/" element={<Trabajo />}></Route>
          <Route path="*" element={<Error404 />}>ERROR 404.</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
