import { useState } from "react";
import { motion } from "framer-motion";
import { GoldLine } from "./HeroSection";
import { Minus, Plus, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OrderItem {
  name: string;
  category: string;
  price: number;
}

const orderMenu: OrderItem[] = [
  { name: "Classic Egg Hopper", category: "Hoppers", price: 8.5 },
  { name: "Plain Hopper", category: "Hoppers", price: 6.0 },
  { name: "Chocolate & Strawberry Hopper", category: "Hoppers", price: 10.0 },
  { name: "Hopper Platter with Sambols", category: "Hoppers", price: 18.0 },
  { name: "Classic Cheese Toastie", category: "Toasties", price: 9.0 },
  { name: "Sri Lankan Spiced Chicken", category: "Toasties", price: 12.0 },
  { name: "Veggie & Chutney Melt", category: "Toasties", price: 11.0 },
  { name: "Ham, Cheese & Tomato", category: "Toasties", price: 10.5 },
  { name: "Golden Turmeric Latte", category: "Wellness Blends", price: 7.0 },
  { name: "Tropical Green Smoothie", category: "Wellness Blends", price: 9.5 },
  { name: "Mango Lassi", category: "Wellness Blends", price: 8.0 },
  { name: "Coconut Iced Coffee", category: "Wellness Blends", price: 7.5 },
];

const categories = ["Hoppers", "Toasties", "Wellness Blends"];

const OrderSection = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const updateQty = (itemName: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[itemName] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [itemName]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemName]: next };
    });
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = orderMenu.reduce((sum, item) => {
    return sum + (quantities[item.name] || 0) * item.price;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalItems === 0) {
      toast({ title: "Please add items to your order", variant: "destructive" });
      return;
    }
    if (!name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    // Simulate order submission
    setTimeout(() => {
      toast({ title: "Order placed!", description: "We'll have it ready for you soon." });
      setQuantities({});
      setName("");
      setPhone("");
      setNotes("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="order" className="py-28 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <GoldLine className="w-12 mx-auto mb-8" />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">
            Pickup & Takeaway
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Place an Order
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto">
            Select your items below and we'll have them ready for you.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-10 mb-12">
            {categories.map((cat) => (
              <div key={cat}>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{cat}</h3>
                <div className="space-y-1">
                  {orderMenu
                    .filter((item) => item.category === cat)
                    .map((item) => {
                      const qty = quantities[item.name] || 0;
                      return (
                        <motion.div
                          key={item.name}
                          className={`flex items-center justify-between py-4 px-4 border-b border-border/50 transition-colors ${qty > 0 ? "bg-accent/30" : ""}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-1 mr-4">
                            <p className="font-body text-sm text-foreground font-medium">{item.name}</p>
                            <p className="font-body text-xs text-primary">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => updateQty(item.name, -1)}
                              className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-body text-sm text-foreground w-6 text-center tabular-nums">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.name, 1)}
                              className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                              aria-label={`Add ${item.name}`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

          {totalItems > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-primary/30 bg-accent/20 p-6 mb-8"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-body text-sm text-muted-foreground">{totalItems} item{totalItems > 1 ? "s" : ""}</span>
                <span className="font-heading text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </motion.div>
          )}

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-muted border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-muted border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your phone number"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Special Requests
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full bg-muted border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              placeholder="Any dietary requirements or special notes..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || totalItems === 0}
            className="w-full bg-primary text-primary-foreground py-4 font-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
