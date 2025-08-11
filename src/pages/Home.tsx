
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/PortfolioSection'
import About from '../components/AboutSection'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <CTA />
    </div>
  )
}

export default Home
