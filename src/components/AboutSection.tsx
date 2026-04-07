import { motion } from "framer-motion";
import eggHopper from "@/assets/egg-hopper.jpg";
import { GoldLine } from "./HeroSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-primary/20 pointer-events-none" />
            <img
              src={eggHopper}
              alt="A beautiful Sri Lankan egg hopper"
              className="w-full aspect-square object-cover grayscale-[20%]"
              loading="lazy"
              width={800}
              height={800}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <GoldLine className="w-12 mb-8" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              The Story
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              What is a Hopper?
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              A hopper (or <em className="text-primary font-medium">appa</em>) is a crispy, bowl-shaped pancake made from fermented rice flour and coconut milk — a beloved Sri Lankan street food with centuries of tradition.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              At Coco Loco, we honour those roots while adding our own creative twist. From the classic egg hopper to sweet chocolate and strawberry creations, every bowl is made fresh with love.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Naturally Gluten-Free", "Vegan Options", "Made Fresh Daily"].map((tag) => (
                <span
                  key={tag}
                  className="border border-primary/30 text-primary px-5 py-2 font-body text-xs uppercase tracking-wider font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
