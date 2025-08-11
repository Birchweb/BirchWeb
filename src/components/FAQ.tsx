
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    {
      question: 'Hoe lang duurt een typisch project?',
      answer: 'De duur van een project hangt af van de complexiteit en omvang. Een eenvoudige website kan binnen 2-4 weken worden opgeleverd, terwijl complexe web applicaties 3-6 maanden kunnen duren. Wij geven altijd een duidelijke planning vooraf.'
    },
    {
      question: 'Welke technologieën gebruiken jullie?',
      answer: 'Wij werken met moderne technologieën zoals React, Vue.js, Node.js, Python, en React Native. Wij kiezen altijd de beste technologie voor jouw specifieke project en behoeften.'
    },
    {
      question: 'Bieden jullie onderhoud na oplevering?',
      answer: 'Ja, wij bieden verschillende onderhoudscontracten aan. Van basis updates tot uitgebreide support en hosting. Wij zorgen ervoor dat jouw applicatie altijd up-to-date en veilig blijft.'
    },
    {
      question: 'Kunnen jullie bestaande projecten overnemen?',
      answer: 'Absoluut! Wij hebben ervaring met het overnemen en verbeteren van bestaande projecten. Wij doen eerst een grondige analyse en geven je een plan voor verdere ontwikkeling.'
    },
    {
      question: 'Hoe zit het met de kosten?',
      answer: 'Onze prijzen zijn transparant en afhankelijk van de projectomvang. Wij geven altijd een gedetailleerde offerte vooraf. Voor kleinere projecten hanteren wij vaste prijzen, voor grotere projecten werken wij op uurbasis.'
    }
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-muted-foreground">
            Antwoorden op de meest gestelde vragen over onze services
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              value={`item-${index}`}
              className="card-equal-height bg-card border border-border rounded-lg overflow-hidden"
            >
              <Accordion.Trigger className="w-full px-6 py-4 text-left font-semibold text-card-foreground hover:bg-muted/50 transition-colors flex items-center justify-between group">
                {faq.question}
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}

export default FAQ
