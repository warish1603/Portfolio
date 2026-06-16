import { getCollectionBySlug, getAllCollectionSlugs } from "@/lib/collections";
import CollectionClientPage from "@/components/CollectionClientPage";
import PageTransition from "@/components/PageTransition";

interface CollectionDetailPageProps {
  params: { slug: string };
}

export default function CollectionDetailPage({
  params,
}: CollectionDetailPageProps) {
  const { slug } = params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return (
      <PageTransition>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-muted">Collection not found.</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <CollectionClientPage collection={collection} />
    </PageTransition>
  );
}

export async function generateStaticParams() {
  const slugs = getAllCollectionSlugs();
  return slugs.map((slug) => ({ slug }));
}

