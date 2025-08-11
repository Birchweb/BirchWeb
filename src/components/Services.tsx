
import { Code, Smartphone, ShoppingCart, Users, Database, Palette } from 'lucide-react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Moderne, responsieve websites en web applicaties gebouwd met de nieuwste technologieën.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native en cross-platform mobiele applicaties voor iOS en Android.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Complete online winkel oplossingen met betaalsystemen en voorraadbeheer.'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robuuste backend systemen en API\'s voor schaalbaarheid en betrouwbaarheid.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Gebruiksvriendelijke interfaces en optimale gebruikerservaringen.'
    },
    {
      icon: Users,
      title: 'Consultancy',
      description: 'Strategisch advies en technische consultancy voor jouw digitale transformatie.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onze Diensten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van concept tot realisatie: wij bieden complete digitale oplossingen 
            voor elke fase van jouw project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
