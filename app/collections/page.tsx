import siteConfig from "@/site.config";
import CollectionCard from "@/components/CollectionCard";
import PageTransition from "@/components/PageTransition";

export default function CollectionsPage() {
  return (
    <PageTransition>
      <div id="main-content" className="pt-24 md:pt-32">
        {/* Page Title */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-5xl font-light">
            Collections
          </h1>
        </div>

        {/* Collections Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
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
