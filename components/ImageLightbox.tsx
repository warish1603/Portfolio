"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageLightboxProps {
  images: readonly ImageItem[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  isOpen,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white hover:text-gray-300 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 transition-colors p-3"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white hover:text-gray-300 transition-colors p-3"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </>
      )}

      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          quality={92}
          sizes="92vw"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "92vw",
            maxHeight: "92vh",
            objectFit: "contain",
          }}
          className="select-none"
          priority
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}