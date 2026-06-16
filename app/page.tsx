import siteConfig from "@/site.config";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div id="main-content">
        <HeroSection
          image={siteConfig.landing.heroImage}
          imageAlt={siteConfig.landing.heroAlt}
          title={siteConfig.name}
          subtitle={siteConfig.tagline}
          bio={siteConfig.bio}
        />
        <PortfolioGrid items={siteConfig.landing.portfolio} />
      </div>
    </PageTransition>
  );
}