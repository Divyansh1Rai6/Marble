'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { galleryItems, galleryFilters } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const items =
    filter === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="section-py bg-secondary/30">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Project Gallery
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            Surfaces in the wild.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A look at VitrixStone surfaces as they live in homes, hotels,
            showrooms, and public spaces around the world.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {galleryFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                filter === f
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card text-primary/70 hover:border-accent/40 hover:text-primary'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4">
          {items.map((item, i) => (
            <figure
              key={`${item.src}-${i}`}
              className={cn(
                'group relative overflow-hidden rounded-xl',
                item.span && 'row-span-2'
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[0.625rem] uppercase tracking-[0.2em] text-accent">
                  {item.category}
                </span>
                <p className="mt-1 text-sm font-medium text-background">{item.alt}</p>
              </figcaption>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
                <Plus className="h-4 w-4" />
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
