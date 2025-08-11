
import { Shield, Zap, Users, Award } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Betrouwbaar',
      description: 'Veilige en stabiele oplossingen waar je op kunt vertrouwen'
    },
    {
      icon: Zap,
      title: 'Snel',
      description: 'Optimale performance en snelle laadtijden voor beste gebruikerservaring'
    },
    {
      icon: Users,
      title: 'Persoonlijk',
      description: 'Directe communicatie en maatwerk oplossingen voor elke klant'
    },
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'Hoogste standaarden in code kwaliteit en projectmanagement'
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Waarom kiezen voor BirchWeb?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Met jaren ervaring in software ontwikkeling helpen wij bedrijven 
                hun digitale doelen te bereiken. Van startups tot enterprise 
                organisaties, wij leveren oplossingen die echt werken.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Jaar Ervaring</div>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Tevreden Klanten</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-1">100+</div>
                    <div className="text-sm text-muted-foreground">Projecten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
