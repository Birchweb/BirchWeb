import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureListProps {
  features: string[];
}

export const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-primary" />
          </div>
          <span className="text-foreground/90">{feature}</span>
        </motion.li>
      ))}
    </ul>
  );
};
