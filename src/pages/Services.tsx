
import { Code, Smartphone, ShoppingCart, Users, Database, Palette, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Moderne, responsieve websites en web applicaties.',
      features: ['React & Vue.js', 'Node.js & Python', 'Progressive Web Apps', 'SEO Optimalisatie'],
      price: 'Vanaf €2.500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native en cross-platform mobiele applicaties.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Publicatie'],
      price: 'Vanaf €5.000'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Complete online winkel oplossingen.',
      features: ['Shopify & WooCommerce', 'Betaalsystemen', 'Voorraadbeheer', 'Analytics'],
      price: 'Vanaf €3.500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robuuste backend systemen en API\'s.',
      features: ['REST & GraphQL APIs', 'Database Design', 'Cloud Deployment', 'Monitoring'],
      price: 'Vanaf €2.000'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Gebruiksvriendelijke interfaces en experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      price: 'Vanaf €1.500'
    },
    {
      icon: Users,
      title: 'Consultancy',
      description: 'Strategisch advies voor digitale transformatie.',
      features: ['Technology Audit', 'Architecture Design', 'Project Management', 'Training'],
      price: 'Vanaf €150/uur'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Onze Diensten
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete digitale oplossingen van concept tot realisatie. 
            Wij helpen jouw bedrijf groeien met moderne technologie.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-equal-height bg-card border border-border rounded-lg p-8 hover-lift hover-glow">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">{service.title}</h3>
                    <p className="text-primary font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Vraag offerte aan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
