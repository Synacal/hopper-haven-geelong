import { motion } from "framer-motion";
import { WavyDivider } from "./HeroSection";
import heroSpread from "@/assets/hero-spread.jpg";
import eggHopper from "@/assets/egg-hopper.jpg";
import toasties from "@/assets/toasties.jpg";
import wellness from "@/assets/wellness-blends.jpg";

const images = [heroSpread, eggHopper, toasties, wellness, heroSpread, eggHopper];

const SocialSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <WavyDivider className="w-16 mx-auto mb-6" color="hsl(145, 25%, 42%)" />
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Follow Our Journey
        </h2>
        <p className="font-body text-lg text-muted-foreground">
          Bringing Sri Lankan flavours to life{" "}
          <a
            href="https://www.instagram.com/cocoloco_geelong/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-semibold hover:underline"
          >
            @cocoloco_geelong
          </a>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/cocoloco_geelong/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="aspect-square overflow-hidden rounded-xl group"
          >
            <img
              src={src}
              alt={`Coco Loco Instagram post ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              width={400}
              height={400}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
