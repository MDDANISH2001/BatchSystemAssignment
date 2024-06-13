import './App.css'
import { Navbar } from './components/Navbar'
import { Advantages } from './pages/Advantages'
import { Customize } from './pages/Customize'
import { FAQs } from './pages/FAQ'
import { Features } from './pages/Features'
import { Footer } from './pages/Footer'
import { FooterImg } from './pages/FooterImg'
import { Home } from './pages/Home'
import { Testimonials } from './pages/Testimonials'

function App() {
  return (
    <div className='font-[ClashDisplay-Regular]'>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="advantages">
        <Advantages />
      </div>
      <div id="customize">
        <Customize />
      </div>
      <div id="about">
        <Testimonials />
      </div>
      <div id="pricing">
        <FAQs />
      </div>
      <div id="footerimg">
        <FooterImg />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
