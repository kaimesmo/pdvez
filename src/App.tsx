import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Provadores from "./pages/Provadores";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="pedido-de-provadores" element={<Provadores />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
