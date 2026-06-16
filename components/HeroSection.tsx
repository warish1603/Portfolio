"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/8+wHgAFBQIAX8jx0gAAAABJRU5ErkJggg==";

interface HeroSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  bio: string;
}

export default function HeroSection({
  image,
  imageAlt,
  title,
  subtitle,
  bio
}: HeroSectionProps) {
  return (
    <div className="relative w-full h-screen flex items-center justify-start">
      {/* Background Image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
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
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="font-sans text-lg md:text-xl font-light text-beige drop-shadow-md">
          {subtitle}
        </p>
        <p className="font-sans text-xs md:text-sm italic font-light text-beige drop-shadow-md">
          {bio}
        </p>
      </motion.div>
    </div>
  );
}
