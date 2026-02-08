import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="journey-section relative bg-card"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="journey-title mb-6">
            Laten we <span className="text-gradient">kennismaken</span>
          </h2>
          <p className="journey-subtitle mx-auto mb-12">
            Stuur een berichtje, bel even, of app me. Geen verplichtingen, 
            gewoon een goed gesprek over jouw plannen.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/31612345678"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm">
              Meestal binnen een uur antwoord
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:hallo@jouwwebsite.nl"
            className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">E-mail</h3>
            <p className="text-muted-foreground text-sm">
              hallo@jouwwebsite.nl
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+31612345678"
            className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">Bellen</h3>
            <p className="text-muted-foreground text-sm">
              Ma t/m vr, 9:00 - 17:00
            </p>
          </motion.a>
        </motion.div>

        <motion.p
          className="mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Ik reageer meestal binnen 24 uur. Vaak sneller.
        </motion.p>
      </div>
    </section>
  );
};
