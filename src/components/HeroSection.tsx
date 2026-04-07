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
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <GoldLine className="mx-auto mb-8 w-20" />
          <p className="font-body text-xs md:text-sm uppercase tracking-[0.35em] text-primary mb-4 font-medium">
            Geelong's 1st Hopper Bar
          </p>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight leading-none">
            Coco Loco
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground mb-10 tracking-wide">
            Hoppers · Toasties · Wellness Blends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 font-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              View Menu
            </a>
            <a
              href="#order"
              className="inline-block border border-primary text-primary px-10 py-4 font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/10 transition-colors"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(38,60%,55%)" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

const GoldLine = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <div className="h-px bg-primary w-full" />
  </div>
);

export default HeroSection;
export { GoldLine };
