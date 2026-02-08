import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ReferenceCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

export const ReferenceCard = ({
  title,
  description,
  category,
  imageUrl,
}: ReferenceCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-muted border border-border cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/10 to-muted overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 animate-pulse-glow" />
          </div>
        )}
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-foreground" />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-display font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
