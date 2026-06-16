import siteConfig from "@/site.config";
import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/PageTransition";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, typeof Instagram> = {
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div id="main-content" className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left Side */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-light mb-6">
                {siteConfig.contact.heading}
              </h1>
              <p className="text-muted mb-8 font-light">
                {siteConfig.contact.subheading}
              </p>

              {/* Email */}
              <div className="mb-12">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-block text-lg hover:text-accent transition-colors border-b border-accent hover:border-transparent"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {siteConfig.contact.social.map((social) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-light hover:text-accent transition-colors group"
                    >
                      {IconComponent && <IconComponent size={18} />}
                      <span className="group-hover:underline">{social.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <ContactForm formspreeEndpoint={siteConfig.contact.formspreeEndpoint} />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
