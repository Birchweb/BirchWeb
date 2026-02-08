import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";

interface JourneyButtonProps {
  variant: "primary" | "secondary" | "alternative";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const JourneyButton = ({
  variant,
  children,
  onClick,
  className,
}: JourneyButtonProps) => {
  const baseStyles =
    "inline-flex items-center gap-2 font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary: cn(
      baseStyles,
      "px-8 py-4 rounded-full bg-primary text-primary-foreground",
      "hover:bg-accent hover:scale-105 shadow-lg shadow-primary/20",
      "text-lg font-semibold"
    ),
    secondary: cn(
      baseStyles,
      "px-6 py-3 rounded-full border-2 border-primary/50 text-primary",
      "hover:border-primary hover:bg-primary/10",
      "text-base"
    ),
    alternative: cn(
      baseStyles,
      "text-muted-foreground hover:text-foreground underline-offset-4",
      "hover:underline text-sm opacity-70 hover:opacity-100"
    ),
  };

  const icons = {
    primary: <ArrowRight className="w-5 h-5" />,
    secondary: <Check className="w-4 h-4" />,
    alternative: <ArrowUpRight className="w-4 h-4" />,
  };

  return (
    <motion.button
      className={cn(variants[variant], className)}
      onClick={onClick}
      whileHover={{ scale: variant === "alternative" ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {icons[variant]}
    </motion.button>
  );
};
