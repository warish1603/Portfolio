import siteConfig from "@/site.config";

/**
 * Get all collections
 */
export function getCollections() {
  return siteConfig.collections;
}

/**
 * Get a single collection by slug
 */
export function getCollectionBySlug(slug: string) {
  return siteConfig.collections.find((collection) => collection.slug === slug);
}

/**
 * Get all collection slugs for static generation
 */
export function getAllCollectionSlugs() {
  return siteConfig.collections.map((collection) => collection.slug);
}
