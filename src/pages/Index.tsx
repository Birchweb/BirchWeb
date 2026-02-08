import { motion } from "framer-motion";
import { JourneyStep } from "@/components/JourneyStep";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { ContactSection } from "@/components/ContactSection";
import { ReferenceCard } from "@/components/ReferenceCard";
import { FeatureList } from "@/components/FeatureList";
import { Sparkles, Clock, Wrench, Zap, Heart } from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="relative">
      <ProgressIndicator />

      {/* Hero / Probleem */}
      <section id="probleem" className="journey-section relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              Webdesign zonder gedoe
            </span>
            <h1 className="journey-title mb-8">
              Je wilt een website.
              <br />
              <span className="text-gradient">Maar niet de stress.</span>
            </h1>
            <p className="journey-subtitle mb-10">
              Je hebt al genoeg aan je hoofd. Hosting uitzoeken, design beslissingen, 
              technisch gedoe, onderhoud... Liever besteed je die tijd aan waar je goed in bent.
              <br />
              <br />
              <span className="text-foreground font-medium">Herkenbaar?</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => scrollToSection("kennismaking")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 text-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Vertel me meer
              <Sparkles className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/50 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ik ben al overtuigd
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("referenties")}
              className="text-muted-foreground hover:text-foreground text-sm opacity-70 hover:opacity-100 underline-offset-4 hover:underline transition-all"
            >
              Eerst voorbeelden zien
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Kennismaking */}
      <JourneyStep
        id="kennismaking"
        stepNumber={1}
        title={
          <>
            We beginnen met een{" "}
            <span className="text-gradient">goed gesprek</span>
          </>
        }
        subtitle="Geen ingewikkelde vragenlijsten. Gewoon een kop koffie (of videocall) waarin je vertelt wat je nodig hebt. Ik luister, stel vragen, en denk mee."
        primaryLabel="Hoe werkt dat?"
        secondaryLabel="Plan een gesprek"
        alternativeLabel="Wat kost dat dan?"
        onPrimary={() => scrollToSection("aanpak")}
        onSecondary={() => scrollToSection("contact")}
        onAlternative={() => scrollToSection("prijs")}
      >
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { icon: Heart, title: "Persoonlijk", desc: "Geen standaard template, maar jouw verhaal" },
            { icon: Clock, title: "20 minuten", desc: "Meer heb je niet nodig" },
            { icon: Zap, title: "Vrijblijvend", desc: "Geen verplichtingen, gewoon kennismaken" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-card/50 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </JourneyStep>

      {/* Aanpak */}
      <JourneyStep
        id="aanpak"
        stepNumber={2}
        title={
          <>
            Ik regel <span className="text-gradient">alles</span>
          </>
        }
        subtitle="Van het eerste ontwerp tot de laatste pixel. Hosting, techniek, beveiliging — je hoeft nergens over na te denken. Jij krijgt updates, ik doe het werk."
        primaryLabel="En dan?"
        secondaryLabel="Dit wil ik"
        alternativeLabel="Kan ik meekijken?"
        onPrimary={() => scrollToSection("live")}
        onSecondary={() => scrollToSection("contact")}
        onAlternative={() => scrollToSection("referenties")}
        className="bg-card/30"
      >
        <FeatureList
          features={[
            "Professioneel ontwerp op maat",
            "Snelle, veilige hosting inbegrepen",
            "Mobiel-vriendelijk (responsive)",
            "SEO-basis voor vindbaarheid",
            "SSL-certificaat (het slotje)",
            "Regelmatige backups",
          ]}
        />
      </JourneyStep>

      {/* Live */}
      <JourneyStep
        id="live"
        stepNumber={3}
        title={
          <>
            Binnen <span className="text-gradient">2 weken</span> online
          </>
        }
        subtitle="Geen maandenlange trajecten. Na ons gesprek ga ik aan de slag, en voor je het weet staat jouw website live. Snel, zonder haast."
        primaryLabel="En daarna?"
        secondaryLabel="Start mijn project"
        alternativeLabel="Hoe snel precies?"
        onPrimary={() => scrollToSection("onderhoud")}
        onSecondary={() => scrollToSection("contact")}
      >
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/20 mt-8">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold">Gemiddeld 10 werkdagen</p>
              <p className="text-muted-foreground">Van start tot live website</p>
            </div>
          </motion.div>
        </div>
      </JourneyStep>

      {/* Onderhoud */}
      <JourneyStep
        id="onderhoud"
        stepNumber={4}
        title={
          <>
            Altijd <span className="text-gradient">up-to-date</span>
          </>
        }
        subtitle="Nieuwe tekst? Foto's aanpassen? Stuur me een berichtje en ik regel het. Geen ingewikkelde backend waar je zelf in moet werken."
        primaryLabel="Wat kost dit?"
        secondaryLabel="Laten we starten"
        alternativeLabel="Kan ik zelf ook aanpassen?"
        onPrimary={() => scrollToSection("prijs")}
        onSecondary={() => scrollToSection("contact")}
        className="bg-card/30"
      >
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.div
            className="p-6 rounded-xl bg-background border border-border"
            whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
          >
            <Wrench className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-lg mb-2">Updates inbegrepen</h3>
            <p className="text-muted-foreground text-sm">
              Kleine aanpassingen, nieuwe content, seizoensacties — stuur een 
              WhatsApp en het is geregeld.
            </p>
          </motion.div>
          <motion.div
            className="p-6 rounded-xl bg-background border border-border"
            whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
          >
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-lg mb-2">Snel geregeld</h3>
            <p className="text-muted-foreground text-sm">
              De meeste aanpassingen staan binnen 24 uur online. 
              Zonder extra kosten.
            </p>
          </motion.div>
        </div>
      </JourneyStep>

      {/* Prijs */}
      <JourneyStep
        id="prijs"
        stepNumber={5}
        title={
          <>
            En dat allemaal voor{" "}
            <span className="text-gradient">€49 per maand</span>
          </>
        }
        subtitle="Geen verborgen kosten. Geen eenmalige factuur van duizenden euro's. Gewoon een vast bedrag per maand, en je hebt alles."
        primaryLabel="Bekijk voorbeelden"
        secondaryLabel="Start voor €49/maand"
        alternativeLabel="Kan het ook anders?"
        onPrimary={() => scrollToSection("referenties")}
        onSecondary={() => scrollToSection("contact")}
      >
        <motion.div
          className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 border border-primary/30 journey-glow mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <span className="text-6xl md:text-7xl font-display font-bold text-foreground">
              €49
            </span>
            <span className="text-2xl text-muted-foreground font-display">/maand</span>
          </div>
          <p className="text-center text-muted-foreground mt-4 max-w-md mx-auto">
            Website ontwerp & bouw • Hosting & domein • SSL • Updates & onderhoud • 
            Support via WhatsApp
          </p>
          <p className="text-center text-sm text-muted-foreground/70 mt-4">
            Geen opstartkosten. Maandelijks opzegbaar.
          </p>
        </motion.div>
      </JourneyStep>

      {/* Referenties */}
      <section id="referenties" className="journey-section bg-card/30">
        <motion.div
          className="absolute left-6 md:left-12 lg:left-24 top-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-display font-bold">
            6
          </span>
          <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        <div className="max-w-6xl mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="journey-title mb-6">
              Dit maakte ik voor <span className="text-gradient">anderen</span>
            </h2>
            <p className="journey-subtitle mb-12">
              Een selectie van recente projecten. Elke website is uniek, 
              net als de ondernemer erachter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ReferenceCard
              title="Bakkerij De Gouden Korst"
              description="Een warme, uitnodigende website voor een ambachtelijke bakkerij met online bestelmodule."
              category="Horeca"
            />
            <ReferenceCard
              title="Yoga Studio Balans"
              description="Rustig design met lessen-overzicht en eenvoudige aanmeldfunctie voor nieuwe leden."
              category="Wellness"
            />
            <ReferenceCard
              title="Bouwbedrijf Versterk"
              description="Stoere, professionele uitstraling met projectportfolio en offerteaanvraag."
              category="Bouw"
            />
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 text-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ik wil dit ook
              <Sparkles className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("probleem")}
              className="text-muted-foreground hover:text-foreground text-sm opacity-70 hover:opacity-100 underline-offset-4 hover:underline transition-all"
            >
              Terug naar boven
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2024 Jouw Webdesign Studio. Met ❤️ gemaakt in Nederland.</p>
      </footer>
    </div>
  );
};

export default Index;
