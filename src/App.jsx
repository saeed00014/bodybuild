import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header/header"
import Footer from "./components/Footer/Footer"
import About from "./pages/AboutPage/about"
import Card from "./pages/CardPage/card"
import Home from "./pages/HomePage/home"
import Notfound from "./pages/NotfoundPage/notfound"
import Plans from "./pages/PlansPage/plans"
import Trainers from "./pages/TrainersPage/trainers"
import Signup from "./pages/SigninPage/signup"


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/plans/*" element={<Plans />}/>
        <Route path="/trainers" element={<Trainers />}/>
        <Route path="/card"  element={<Card />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/*" element={<Notfound />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App