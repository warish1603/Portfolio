"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageLightbox from "./ImageLightbox";

interface WorkItem {
  src: string;
  alt: string;
  caption: string;
}

interface WorkGridProps {
  items: WorkItem[];
}

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/8+wHgAFBQIAX8jx0gAAAABJRU5ErkJggg==";

export default function WorkGrid({ items }: WorkGridProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 md:px-8 section-padding">
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative aspect-auto h-64 md:h-80">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>

              {/* Overlay with Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100"
              >
                <p className="text-sm font-light text-white">{item.caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        images={items}
        currentIndex={currentIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
