
import { ExternalLink } from 'lucide-react'

interface PortfolioItemProps {
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
}

const PortfolioItem = ({ title, description, image, category, technologies }: PortfolioItemProps) => {
  return (
    <div className="card-equal-height bg-card border border-border rounded-lg overflow-hidden hover-lift hover-glow group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ExternalLink className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
