import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PaginaPrincipal } from "./sections/PaginaPrincipal"
import { About } from "./sections/About"
import { Calendario } from "./sections/Calendario"
import { Error404 } from "./sections/Error404"
import { Trabajo } from "./sections/Trabajo"
import { NavBar } from "./NavBar/NavBar"
import './sections/Error404.css'
import './fonts.css'
import { Event } from "./sections/Event"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}></Route>
          <Route path="/about/" element={<About />}></Route>
          <Route path="/calendario/" element={<Calendario />}></Route>
          <Route path="/trabajo/:numero/" element={<Trabajo />}></Route>
          <Route path="/event/:id/" element={<Event />}></Route>
          <Route path="*" element={<Error404 />}>ERROR 404.</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
