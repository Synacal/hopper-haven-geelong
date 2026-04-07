import { GoldLine } from "./HeroSection";
import { MapPin, Clock, Mail, Phone, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="visit" className="bg-card border-t border-border">
      <div className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GoldLine className="w-12 mx-auto mb-8" />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              Find Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <p className="font-body text-base text-muted-foreground">
              We can't wait to share the flavours of Sri Lanka with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Location</p>
                  <p className="font-body text-sm text-muted-foreground">Geelong, VIC<br />Australia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Opening Hours</p>
                  <p className="font-body text-sm text-muted-foreground">Coming Soon — Est. 2026</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Email</p>
                  <p className="font-body text-sm text-muted-foreground">hello@cocoloco.com.au</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Phone</p>
                  <p className="font-body text-sm text-muted-foreground">Coming soon</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/cocoloco_geelong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @cocoloco_geelong
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Stay Updated</p>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Get updates on our grand opening and special events.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-muted border border-border px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 font-body font-semibold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-xl font-bold text-foreground">Coco Loco</p>
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © 2026 Coco Loco Geelong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
