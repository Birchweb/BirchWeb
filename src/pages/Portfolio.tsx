
import PortfolioItem from '../components/PortfolioItem'

const PortfolioPage = () => {
  const projects = [
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
      technologies: ['React Native', 'Firebase', 'Face ID', 'Push Notifications']
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard voor data visualisatie en rapportage',
      image: '/api/placeholder/600/400',
      category: 'Web App',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL']
    },
    {
      title: 'Restaurant Website',
      description: 'Responsieve website met online reserveringssysteem',
      image: '/api/placeholder/600/400',
      category: 'Website',
      technologies: ['WordPress', 'PHP', 'MySQL', 'OpenTable API']
    },
    {
      title: 'Fitness Tracker App',
      description: 'Cross-platform app voor workout tracking en voortgang',
      image: '/api/placeholder/600/400',
      category: 'Mobile App',
      technologies: ['Flutter', 'Dart', 'Firebase', 'HealthKit']
    },
    {
      title: 'CRM Systeem',
      description: 'Customer relationship management platform voor sales teams',
      image: '/api/placeholder/600/400',
      category: 'Web App',
      technologies: ['Angular', 'Express.js', 'MongoDB', 'Socket.io']
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ons Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Een selectie van onze meest recente projecten. Van simpele websites 
            tot complexe enterprise applicaties.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioItem key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
