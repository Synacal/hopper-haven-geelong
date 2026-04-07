import { motion } from "framer-motion";
import eggHopper from "@/assets/egg-hopper.jpg";
import toasties from "@/assets/toasties.jpg";
import wellness from "@/assets/wellness-blends.jpg";
import { WavyDivider } from "./HeroSection";

const menuCategories = [
  {
    title: "Hoppers",
    description: "Our signature bowl-shaped pancakes — crispy edges, soft centre. Choose from classic egg, plain, or our creative sweet varieties with chocolate, strawberry, and more.",
    image: eggHopper,
    items: ["Classic Egg Hopper", "Plain Hopper", "Chocolate & Strawberry Hopper", "Hopper Platter with Sambols"],
  },
  {
    title: "Toasties",
    description: "Familiar cafe staples with a Coco Loco twist. Pressed golden and served hot with quality ingredients you can taste.",
    image: toasties,
    items: ["Classic Cheese Toastie", "Sri Lankan Spiced Chicken", "Veggie & Chutney Melt", "Ham, Cheese & Tomato"],
  },
  {
    title: "Wellness Blends",
    description: "Nourish your body with our range of smoothies, cold-pressed juices, and specialty drinks crafted from tropical ingredients.",
    image: wellness,
    items: ["Golden Turmeric Latte", "Tropical Green Smoothie", "Mango Lassi", "Coconut Iced Coffee"],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <WavyDivider className="w-16 mx-auto mb-6" color="hsl(145, 25%, 42%)" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Three pillars of flavour — from authentic Sri Lankan hoppers to wellness-focused drinks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">{cat.description}</p>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="font-body text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
