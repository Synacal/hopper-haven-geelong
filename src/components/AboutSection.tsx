import { motion } from "framer-motion";
import eggHopper from "@/assets/egg-hopper.jpg";
import { WavyDivider } from "./HeroSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={eggHopper}
              alt="A beautiful Sri Lankan egg hopper"
              className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
              loading="lazy"
              width={800}
              height={800}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WavyDivider className="w-16 mb-6" color="hsl(145, 25%, 42%)" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              What is a Hopper?
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
              A hopper (or <em className="text-secondary font-medium">appa</em>) is a crispy, bowl-shaped pancake made from fermented rice flour and coconut milk — a beloved Sri Lankan street food with centuries of tradition.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
              At Coco Loco, we honour those roots while adding our own creative twist. From the classic egg hopper to sweet chocolate and strawberry creations, every bowl is made fresh with love.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Naturally Gluten-Free", "Vegan Options", "Made Fresh Daily"].map((tag) => (
                <span
                  key={tag}
                  className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-body text-sm font-medium"
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
