import { motion } from "framer-motion";
import { JourneyButton } from "./JourneyButton";
import { cn } from "@/lib/utils";

interface JourneyStepProps {
  id: string;
  stepNumber: number;
  title: React.ReactNode;
  subtitle: string;
  content?: React.ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  alternativeLabel: string;
  onPrimary: () => void;
  onSecondary: () => void;
  onAlternative?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const JourneyStep = ({
  id,
  stepNumber,
  title,
  subtitle,
  content,
  primaryLabel,
  secondaryLabel,
  alternativeLabel,
  onPrimary,
  onSecondary,
  onAlternative,
  className,
  children,
}: JourneyStepProps) => {
  return (
    <section
      id={id}
      className={cn("journey-section relative", className)}
    >
      {/* Step indicator */}
      <motion.div
        className="absolute left-6 md:left-12 lg:left-24 top-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-display font-bold">
          {stepNumber}
        </span>
        <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent" />
      </motion.div>

      <div className="max-w-4xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="journey-title mb-6">{title}</h2>
          <p className="journey-subtitle mb-8">{subtitle}</p>
        </motion.div>

        {content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            {content}
          </motion.div>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            {children}
          </motion.div>
        )}

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <JourneyButton variant="primary" onClick={onPrimary}>
            {primaryLabel}
          </JourneyButton>
          <JourneyButton variant="secondary" onClick={onSecondary}>
            {secondaryLabel}
          </JourneyButton>
          {onAlternative && (
            <JourneyButton variant="alternative" onClick={onAlternative}>
              {alternativeLabel}
            </JourneyButton>
          )}
        </motion.div>
      </div>
    </section>
  );
};
