import './home.css'

import Programs from "./Programs"
import Values from "./Values"
import Shop from "./Shop"
import About from "../AboutComponent/about"
import FAQ from "./FAQ"
import Testimonial from "./Testimonial"
import Header from './Header'

const HomeComponent = () => {
  return (
    <section className="home">
      <div className="home-container">
        <Header />
        <Programs />
        <Values />
        <Shop />
        <FAQ />
        <Testimonial />
      </div>
    </section>
  )
}

export default HomeComponent