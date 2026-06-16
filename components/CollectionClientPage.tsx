"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageLightbox from "./ImageLightbox";

interface CollectionImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

interface CollectionClientPageProps {
  collection: {
    title: string;
    year?: string;
    heroImage?: CollectionImage;
    images: readonly CollectionImage[];
  };
}

export default function CollectionClientPage({ collection }: CollectionClientPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => setSelectedIndex(null);

  const allImages = collection.images; // Lightbox uses the grid images

  return (
    <>
      {/* Hero Banner */}
      {collection.heroImage && (
        <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
          <Image
            src={collection.heroImage.src}
            alt={collection.heroImage.alt}
            fill
            quality={85}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight">
              {collection.title}
            </h1>
            {collection.year && <p className="text-xl mt-2 opacity-80">{collection.year}</p>}
          </div>
        </div>
      )}

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div
          style={{
            columns: "3 280px",
            columnGap: "20px",
          }}
        >
          {collection.images.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              style={{ breakInside: "avoid", marginBottom: "20px" }}
              className="cursor-pointer group relative"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                quality={88}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/8+wHgAFBQIAX8jx0gAAAABJRU5ErkJggg=="
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 0,
                  display: "block",
                }}
                className="group-hover:scale-[1.02] transition-transform duration-500"
              />

              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <p className="text-white text-[13px] font-light">{item.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        isOpen={selectedIndex !== null}
        initialIndex={selectedIndex ?? 0}
        onClose={closeLightbox}
      />
    </>
  );
}