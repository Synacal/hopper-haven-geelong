import { WavyDivider } from "./HeroSection";
import { MapPin, Clock, Mail, Phone, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="visit" className="bg-foreground text-primary-foreground">
      <div className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <WavyDivider className="w-16 mx-auto mb-6" color="hsl(145, 25%, 42%)" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Visit Us
            </h2>
            <p className="font-body text-lg opacity-70">
              We can't wait to share the flavours of Sri Lanka with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body font-semibold mb-1">Location</p>
                  <p className="font-body opacity-70">Geelong, VIC<br />Australia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body font-semibold mb-1">Opening Hours</p>
                  <p className="font-body opacity-70">
                    Coming Soon — Est. 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body font-semibold mb-1">Email</p>
                  <p className="font-body opacity-70">hello@cocoloco.com.au</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body font-semibold mb-1">Phone</p>
                  <p className="font-body opacity-70">Coming soon</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body font-semibold mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/cocoloco_geelong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body opacity-70 hover:opacity-100 transition-opacity"
                  >
                    @cocoloco_geelong
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="font-body font-semibold mb-3">Stay Updated</p>
              <p className="font-body text-sm opacity-70 mb-4">
                Get updates on our grand opening and special events.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-5 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-xl font-bold">Coco Loco</p>
          <p className="font-body text-sm opacity-50">
            © 2026 Coco Loco Geelong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
