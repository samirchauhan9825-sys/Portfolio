import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Header from "./Common/Header"
import Footer from "./Common/Footer"
import "./App.css";


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
