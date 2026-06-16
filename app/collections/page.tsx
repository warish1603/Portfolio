import siteConfig from "@/site.config";
import Image from "next/image";
import CollectionCard from "@/components/CollectionCard";
import PageTransition from "@/components/PageTransition";

export default function CollectionsPage() {
  return (
    <PageTransition>
      <div id="main-content">
        {/* Hero Banner */}
        <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={siteConfig.collectionsHero.heroImage}
            alt={siteConfig.collectionsHero.heroAlt}
            fill
            quality={85}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight">
              Collections
            </h1>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <CollectionCard
            items={siteConfig.collections.map((collection, index) => ({
              slug: collection.slug,
              title: collection.title,
              year: collection.year,
              coverImage: collection.coverImage,
              index,
            }))}
          />
        </div>
      </div>
    </PageTransition>
  );
}
