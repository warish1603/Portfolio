"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CollectionCardItemProps {
  slug: string;
  title: string;
  year: string;
  coverImage: { src: string; alt: string; width: number; height: number };
  index: number;
}

interface CollectionGridProps {
  items: readonly CollectionCardItemProps[];
}

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/8+wHgAFBQIAX8jx0gAAAABJRU5ErkJggg==";

export default function CollectionCard({ items }: CollectionGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <CollectionCardItem key={item.slug} {...item} index={index} />
      ))}
    </div>
  );
}

function CollectionCardItem({
  slug,
  title,
  year,
  coverImage,
  index,
}: CollectionCardItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Link href={`/collections/${slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface collection-cover">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            width={coverImage.width}
            height={coverImage.height}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            placeholder="blur"
            blurDataURL={blurDataURL}
            quality={82}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-light text-white mb-1">
                  {title}
                </h3>
                <p className="text-sm text-muted">{year}</p>
              </div>
              <ArrowRight size={20} className="text-accent flex-shrink-0" />
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}