import { motion } from "framer-motion";
import { GoldLine } from "./HeroSection";
import heroSpread from "@/assets/hero-spread.jpg";
import eggHopper from "@/assets/egg-hopper.jpg";
import toasties from "@/assets/toasties.jpg";
import wellness from "@/assets/wellness-blends.jpg";

const images = [heroSpread, eggHopper, toasties, wellness, heroSpread, eggHopper];

const SocialSection = () => {
  return (
    <section className="py-28 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <GoldLine className="w-12 mx-auto mb-8" />
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">
          Instagram
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Follow Our Journey
        </h2>
        <p className="font-body text-base text-muted-foreground">
          Bringing Sri Lankan flavours to life{" "}
          <a
            href="https://www.instagram.com/cocoloco_geelong/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            @cocoloco_geelong
          </a>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((src, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/cocoloco_geelong/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="aspect-square overflow-hidden group relative"
          >
            <img
              src={src}
              alt={`Coco Loco Instagram post ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
              loading="lazy"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
