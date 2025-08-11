
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Klaar om jouw project
            <span className="block text-blue-200">te realiseren?</span>
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed">
            Laten we samen jouw visie omzetten in een krachtige digitale oplossing. 
            Neem contact met ons op voor een vrijblijvend gesprek over jouw project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start een gesprek
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
      </div>
    </section>
  )
}

export default CTA
