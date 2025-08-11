
import { Users, Award, Clock, Heart } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Tevreden Klanten', value: '50+' },
    { icon: Award, label: 'Afgeronde Projecten', value: '100+' },
    { icon: Clock, label: 'Jaar Ervaring', value: '5+' },
    { icon: Heart, label: 'Koffie per Dag', value: '∞' },
  ]

  const team = [
    {
      name: 'Alex van der Berg',
      role: 'Lead Developer',
      description: 'Full-stack developer met passie voor moderne technologieën',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sophie Janssen',
      role: 'UI/UX Designer',
      description: 'Creatieve designer die gebruikerservaringen tot leven brengt',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Mike de Vries',
      role: 'Project Manager',
      description: 'Zorgt ervoor dat elk project op tijd en binnen budget wordt opgeleverd',
      image: '/api/placeholder/300/300'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Over BirchWeb
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wij zijn een team van gepassioneerde developers en designers die 
            bedrijven helpen groeien met innovatieve digitale oplossingen.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Onze Missie
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bij BirchWeb geloven we dat technologie de kracht heeft om bedrijven 
              te transformeren. Onze missie is om innovatieve, gebruiksvriendelijke 
              en schaalbare digitale oplossingen te creëren die echte waarde toevoegen 
              aan jouw bedrijf en je klanten.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We werken nauw samen met onze klanten om hun visie om te zetten in 
              realiteit, met aandacht voor detail en een focus op kwaliteit in 
              alles wat we doen.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ons Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Maak kennis met de mensen achter BirchWeb
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-equal-height bg-card border border-border rounded-lg p-6 text-center hover-lift hover-glow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
