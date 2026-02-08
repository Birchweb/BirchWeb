import { motion, useScroll, useSpring } from "framer-motion";

const steps = [
  { id: "probleem", label: "Probleem" },
  { id: "kennismaking", label: "Kennismaking" },
  { id: "aanpak", label: "Aanpak" },
  { id: "live", label: "Live" },
  { id: "onderhoud", label: "Onderhoud" },
  { id: "prijs", label: "Investering" },
  { id: "referenties", label: "Voorbeelden" },
  { id: "contact", label: "Contact" },
];

export const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1">
      {/* Progress line background */}
      <div className="absolute inset-0 w-0.5 left-1/2 -translate-x-1/2 bg-border rounded-full" />
      
      {/* Animated progress line */}
      <motion.div
        className="absolute top-0 w-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary rounded-full origin-top"
        style={{ scaleY, height: "100%" }}
      />

      {/* Step dots */}
      {steps.map((step, index) => (
        <motion.button
          key={step.id}
          onClick={() => scrollToSection(step.id)}
          className="relative z-10 group flex items-center gap-3 py-3"
          whileHover={{ x: 5 }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-muted border border-border group-hover:bg-primary group-hover:border-primary transition-colors" />
          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
            {step.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};
