import { motion } from "framer-motion";
import heroImage from "@/assets/hero-spread.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Beautiful spread of Sri Lankan hoppers"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <WavyDivider className="mx-auto mb-6 w-24 opacity-80" color="#f5f0e8" />
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-[hsl(40,33%,96%)] mb-4 tracking-tight">
            Coco Loco
          </h1>
          <p className="font-heading text-xl md:text-2xl text-[hsl(40,30%,88%)] mb-2 italic">
            Geelong's 1st Hopper Bar
          </p>
          <p className="font-body text-lg text-[hsl(40,30%,82%)] mb-8">
            Hoppers · Toasties · Wellness Blends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              View Menu
            </a>
            <a
              href="#visit"
              className="inline-block border-2 border-[hsl(40,33%,96%)] text-[hsl(40,33%,96%)] px-8 py-3.5 rounded-full font-body font-semibold text-lg hover:bg-[hsl(40,33%,96%)]/10 transition-colors"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(40,33%,96%)" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

const WavyDivider = ({ className = "", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 120 20" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10 Q15 2 30 10 Q45 18 60 10 Q75 2 90 10 Q105 18 120 10" stroke={color} fill="none" strokeWidth="2.5" />
  </svg>
);

export default HeroSection;
export { WavyDivider };
