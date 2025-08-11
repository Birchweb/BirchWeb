
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Moderne Software
              <span className="block text-blue-200">Oplossingen</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Wij bouwen krachtige web applicaties, mobiele apps en e-commerce oplossingen 
              die jouw bedrijf naar het volgende niveau tillen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors group"
              >
                Start jouw project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Bekijk ons werk
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift hover-glow">
                  <Code className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Web Development</h3>
                  <p className="text-blue-100 text-sm">Moderne websites en web applicaties</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift hover-glow">
                  <Smartphone className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-blue-100 text-sm">iOS en Android applicaties</p>
                </div>
              </div>
              <div className="pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift hover-glow">
                  <Globe className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">E-commerce</h3>
                  <p className="text-blue-100 text-sm">Complete online shop oplossingen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
