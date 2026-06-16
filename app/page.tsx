import siteConfig from "@/site.config";
import HeroSection from "@/components/HeroSection";
import WorkGrid from "@/components/WorkGrid";
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
        />
        <WorkGrid items={siteConfig.landing.work} />
      </div>
    </PageTransition>
  );
}
