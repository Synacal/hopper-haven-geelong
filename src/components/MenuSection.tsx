import { motion } from "framer-motion";
import eggHopper from "@/assets/egg-hopper.jpg";
import toasties from "@/assets/toasties.jpg";
import wellness from "@/assets/wellness-blends.jpg";
import { GoldLine } from "./HeroSection";

const menuCategories = [
  {
    title: "Hoppers",
    description: "Our signature bowl-shaped pancakes — crispy edges, soft centre. Choose from classic egg, plain, or our creative sweet varieties.",
    image: eggHopper,
    items: ["Classic Egg Hopper", "Plain Hopper", "Chocolate & Strawberry Hopper", "Hopper Platter with Sambols"],
  },
  {
    title: "Toasties",
    description: "Familiar cafe staples with a Coco Loco twist. Pressed golden and served hot with quality ingredients.",
    image: toasties,
    items: ["Classic Cheese Toastie", "Sri Lankan Spiced Chicken", "Veggie & Chutney Melt", "Ham, Cheese & Tomato"],
  },
  {
    title: "Wellness Blends",
    description: "Nourish your body with smoothies, cold-pressed juices, and specialty drinks crafted from tropical ingredients.",
    image: wellness,
    items: ["Golden Turmeric Latte", "Tropical Green Smoothie", "Mango Lassi", "Coconut Iced Coffee"],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-28 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <GoldLine className="w-12 mx-auto mb-8" />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">
            What We Serve
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
            Three pillars of flavour — from authentic Sri Lankan hoppers to wellness-focused drinks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background border border-border overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[15%]"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="font-body text-muted-foreground text-sm mb-5 leading-relaxed">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="font-body text-sm text-foreground/80 flex items-center gap-3">
                      <span className="w-1 h-1 bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
