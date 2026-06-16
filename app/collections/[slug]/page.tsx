"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { getCollectionBySlug, getAllCollectionSlugs } from "@/lib/collections";
import HeroSection from "@/components/HeroSection";
import ImageLightbox from "@/components/ImageLightbox";
import PageTransition from "@/components/PageTransition";

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/8+wHgAFBQIAX8jx0gAAAABJRU5ErkJggg==";

interface CollectionDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function CollectionDetailPage({ params }: CollectionDetailPageProps) {
  const { slug } = React.use(params);
  const collection = getCollectionBySlug(slug);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!collection) {
    return (
      <PageTransition>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-muted">Collection not found.</p>
        </div>
      </PageTransition>
    );
  }

  const allImages = collection.images;

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <PageTransition>
      <div id="main-content">
        {/* Top Navigation Bar */}
        <div className="fixed top-16 md:top-[76px] left-0 right-0 z-30 bg-surface/50 backdrop-blur-md border-b border-subtle">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
            <Link
              href="/collections"
              className="flex items-center gap-2 text-sm font-light hover:text-accent transition-colors"
            >
              <ChevronLeft size={18} />
              Back
            </Link>
            <h2 className="font-serif text-lg font-light">{collection.title}</h2>
            <span className="text-sm text-muted">{collection.year}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-screen mt-16 md:mt-[76px] flex items-center justify-start cursor-pointer"
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={allImages[0].src}
            alt={allImages[0].alt}
            fill
            className="object-cover hover:opacity-90 transition-opacity"
            priority
            placeholder="blur"
            blurDataURL={blurDataURL}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 bottom-16 left-6 md:left-12 max-w-2xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-4">
              {collection.title}
            </h1>
            <p className="font-sans text-base md:text-lg font-light text-muted max-w-xl">
              {collection.description}
            </p>
          </motion.div>
        </div>

        {/* Image Grid */}
        {allImages.length > 1 && (
          <div className="max-w-7xl mx-auto px-6 md:px-8 section-padding">
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {allImages.slice(1).map((image, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                  onClick={() => handleImageClick(index + 1)}
                >
                  <div className="relative aspect-auto h-64 md:h-80">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Description Block */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-serif text-lg font-light text-muted leading-relaxed">
              {collection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        images={allImages}
        currentIndex={currentIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </PageTransition>
  );
}

export async function generateStaticParams() {
  const slugs = getAllCollectionSlugs();
  return slugs.map((slug) => ({ slug }));
}

// React needs to be imported for React.use
import React from "react";
