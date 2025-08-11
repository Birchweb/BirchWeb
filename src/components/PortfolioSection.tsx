
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PortfolioItem from './PortfolioItem'

const PortfolioSection = () => {
  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Complete online winkel met betaalsysteem en voorraadbeheer',
      image: '/api/placeholder/600/400',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Mobile Banking App',
      description: 'Veilige mobiele banking applicatie met biometrische authenticatie',
      image: '/api/placeholder/600/400',
      category: 'Mobile App',
      technologies: ['React Native', 'Firebase', 'Face ID']
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard voor data visualisatie en rapportage',
      image: '/api/placeholder/600/400',
      category: 'Web App',
      technologies: ['Vue.js', 'D3.js', 'Python']
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Werk
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Een selectie van onze meest recente projecten die laten zien 
            wat wij kunnen betekenen voor jouw bedrijf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Bekijk alle projecten
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
